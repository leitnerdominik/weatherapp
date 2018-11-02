import * as actionTypes from './actionTypes';
import axios from '../../axios-weather';

import API_KEY from '../../api_key';

export const fetchFiveDayForecastStart = () => (
  {
    type: actionTypes.FETCH_FIVEDAYFORECAST_START,
  }
);

export const fetchFiveDayForecastSuccess = (city, country, fiveDayForecast) => (
  {
    type: actionTypes.FETCH_FIVEDAYFORECAST_SUCCESS,
    city,
    country,
    fiveDayForecast,
  }
);

export const fetchFiveDayForecastFailed = (errorCode, errorMessage) => (
  {
    type: actionTypes.FETCH_FIVEDAYFORECAST_FAILED,
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

export const fetchFiveDayForecastWeather = searchTerm => (
  (dispatch) => {
    dispatch(fetchFiveDayForecastStart());
    axios.get(`data/2.5/forecast?q=${searchTerm}&appid=${API_KEY}&units=metric`)
      .then((response) => {
        const { name, country } = response.data.city;
        const fiveDayForecast = response.data.list;
        dispatch(fetchFiveDayForecastSuccess(name, country, fiveDayForecast));
        dispatch(setAvarageWeatherData(fiveDayForecast));
      })
      .catch((error) => {
        const { cod, message } = error.response.data;
        dispatch(fetchFiveDayForecastFailed(cod, message));
      });
  }
);

export const setDetailedWeatherData = date => (
  {
    type: actionTypes.SET_DETAILED_WEATHER_DATA,
    currentDate: date,
  }
);

export const resetFivedayErrors = () => (
  {
    type: actionTypes.RESET_FIVEDAYFORECAST_ERRORS,
  }
);
