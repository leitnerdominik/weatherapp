import React from 'react';
import { connect } from 'react-redux';

import InputField from '../InputField/InputField';
import WeatherItems from '../WeatherItems/WeatherItems';
import Title from '../../components/Title/Title';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Spinner from '../../components/UI/Spinner/Spinner';
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler';
import * as actions from '../../store/actions/index';



const weather = (props) => {
  const {
    city, country, weatherItems, loading, searched, errorCode, errorMessage, onFetchWeather, onErrorReset,
  } = props;

  let weatherItemsContent = null;
  if (searched) {
    weatherItemsContent = <Spinner />;
  }

  if (!loading && weatherItems.length > 0) {
    weatherItemsContent = (
      <Aux>
        <Title titleCity={city} titleCountry={country} />
        <WeatherItems items={weatherItems} />
      </Aux>
    );
  }

  return (
    <div>
      <InputField submit={onFetchWeather} />
      <ErrorHandler
        errorCode={errorCode}
        errorMessage={errorMessage}
        close={onErrorReset}
      />
      {weatherItemsContent}
    </div>
  );
};

const mapStateToProps = state => (
  {
    city: state.city,
    country: state.country,
    weatherItems: state.dailyAvarageWeather,
    loading: state.loading,
    searched: state.startedSearch,
    errorCode: state.errorCode,
    errorMessage: state.errorMessage,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onFetchWeather: searchTerm => dispatch(actions.fetchWeather(searchTerm)),
    onErrorReset: () => dispatch(actions.resetErrors()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(weather);
