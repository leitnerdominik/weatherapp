import * as actionTypes from './actionTypes';
import axios from '../../axios-weather';
import API_KEY from '../../api_key';

export const fetchTodayForecastStart = () => (
  {
    type: actionTypes.FETCH_TODAYDAYFORECAST_START,
  }
);

export const fetchTodayForecastSuccess = (city, tempDataObj, weatherDataObj, windDataObj) => (
  {
    type: actionTypes.FETCH_TODAYDAYFORECAST_SUCCESS,
    city,
    tempDataObj,
    weatherDataObj,
    windDataObj,
  }
);

export const fetchTodayForecastFailed = (errorCode, errorMessage) => (
  {
    type: actionTypes.FETCH_TODAYDAYFORECAST_FAILED,
    errorCode,
    errorMessage,
  }
);

export const fetchTodayForecastWeather = searchTerm => (
  (dispatch) => {
    dispatch(fetchTodayForecastStart());
    axios.get(`data/2.5/weather?q=${searchTerm}&appid=${API_KEY}&units=metric`)
      .then((response) => {
        console.log(response);
        const city = response.data.name;
        const tempDataObj = response.data.main;
        const weatherDataObj = response.data.weather;
        const windDataObj = response.data.wind;

        dispatch(fetchTodayForecastSuccess(city, tempDataObj, weatherDataObj, windDataObj));
      })
      .catch((error) => {
        const { cod, message } = error.response.data;
        dispatch(fetchTodayForecastFailed(cod, message));
      });
  }
);
