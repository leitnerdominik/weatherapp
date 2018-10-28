import * as actionTypes from './actionTypes';
import axios from '../../axios-weather';

import API_KEY from '../../api_key';

export const fetchWeatherStart = () => (
  {
    type: actionTypes.FETCH_WEATHER_START,
  }
);

export const fetchWeatherSuccess = (city, country, fiveDayForecast) => (
  {
    type: actionTypes.FETCH_WEATHER_SUCCESS,
    city,
    country,
    fiveDayForecast,
  }
);

export const fetchWeatherFailed = (errorCode, errorMessage) => (
  {
    type: actionTypes.FETCH_WEATHER_FAILED,
    errorCode,
    errorMessage,
  }
);

export const setAvarageWeatherData = fiveDayForecast => (
  {
    type: actionTypes.SET_AVARAGE_WEATHER_DATA,
    fiveDayForecast,
  }
);

export const fetchWeather = searchTerm => (
  (dispatch) => {
    dispatch(fetchWeatherStart());
    axios.get(`data/2.5/forecast?q=${searchTerm}&appid=${API_KEY}&units=metric`)
      .then((response) => {
        console.log(response);
        const { name, country } = response.data.city;
        const fiveDayForecast = response.data.list;
        dispatch(fetchWeatherSuccess(name, country, fiveDayForecast));
        dispatch(setAvarageWeatherData(fiveDayForecast));
      })
      .catch((error) => {
        const { cod, message } = error.response.data;
        dispatch(fetchWeatherFailed(cod, message));
      });
  }
);

export const setDetailedWeatherData = date => (
  {
    type: actionTypes.SET_DETAILED_WEATHER_DATA,
    currentDate: date,
  }
);

export const resetErrors = () => (
  {
    type: actionTypes.RESET_ERRORS,
  }
);
