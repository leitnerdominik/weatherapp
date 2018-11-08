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
    city,
    country,
    weatherItems,
    loading,
    searched,
    errorCode,
    errorMessage,
    onFetchWeather,
    onErrorReset,
  } = props;

  let weatherItemsContent = null;
  if (searched) {
    weatherItemsContent = <Spinner />;
  }

  if (!loading && weatherItems.length > 0) {
    weatherItemsContent = (
      <Aux>
        <Title>{city}, {country}</Title>
        <WeatherItems items={weatherItems} />
      </Aux>
    );
  }

  return (
    <div>
      <Title>5 DAY FORECAST</Title>
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
    city: state.fiveday.city,
    country: state.fiveday.country,
    weatherItems: state.fiveday.dailyAvarageWeather,
    loading: state.fiveday.loading,
    searched: state.fiveday.startedSearch,
    errorCode: state.fiveday.errorCode,
    errorMessage: state.fiveday.errorMessage,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onFetchWeather: searchTerm => dispatch(actions.fetchFiveDayForecastWeather(searchTerm)),
    onErrorReset: () => dispatch(actions.resetFivedayErrors()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(weather);
