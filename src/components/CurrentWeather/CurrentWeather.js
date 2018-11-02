import React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';

import InputField from '../../containers/InputField/InputField';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Spinner from '../UI/Spinner/Spinner';
import { mapToWeatherJson } from '../../shared/util';
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler';

import * as actions from '../../store/actions/index';
import classes from './CurrentWeather.css';

const currentWeather = (props) => {
  const {
    onFetchWeather,
    onErrorReset,
    city,
    searched,
    loading,
    weatherData,
    errorCode,
    errorMessage,
  } = props;

  let todayForecast = null;

  if (searched) {
    todayForecast = <Spinner />;
  }

  if (!loading && weatherData) {
    const iconId = weatherData[0].id;
    const {
      temp, humidity,
    } = weatherData;

    const minTemp = weatherData.temp_min;
    const maxTemp = weatherData.temp_max;
    const windSpeed = weatherData.speed;

    const descriptionObj = mapToWeatherJson(iconId);
    todayForecast = (
      <div className={classes.Container}>
        <Paper className={classes.Paper}>
          <p className={classes.City}>{city}</p>
          <div className={classes.IconContainer}>
            <i className={descriptionObj.iconClass} />
            <p>{descriptionObj.weatherLabel}</p>
          </div>
          <div className={classes.InfoContainer}>
            <b>Current temperatur: </b>
            {`${temp} °C`}
            <b>min. temperature: </b>
            {`${minTemp} °C`}
            <b>max. temperature: </b>
            {`${maxTemp} °C`}
            <b>Humidity: </b>
            {`${humidity}%`}
            <b>Wind speed</b>
            {`${windSpeed} meter/sec`}
          </div>
        </Paper>
      </div>
    );
  }

  return (
    <Aux>
      <InputField submit={onFetchWeather} />
      <ErrorHandler
        errorCode={errorCode}
        errorMessage={errorMessage}
        close={onErrorReset}
      />
      {todayForecast}
    </Aux>
  );
};

const mapStateToProps = state => (
  {
    city: state.today.city,
    searched: state.today.startedSearch,
    loading: state.today.loading,
    weatherData: state.today.weatherDataObj,
    errorCode: state.today.errorCode,
    errorMessage: state.today.errorMessage,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onFetchWeather: searchTerm => dispatch(actions.fetchTodayForecastWeather(searchTerm)),
    onErrorReset: () => dispatch(actions.resetTodayErrors()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(currentWeather);
