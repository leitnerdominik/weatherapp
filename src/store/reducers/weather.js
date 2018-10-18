import * as actionTypes from '../actions/actionTypes';
import { formatDate, kelvinToCelsius, getMostFrequentItem } from '../../shared/util';

const initalState = {
  city: '',
  country: '',
  dailyAvarageWeather: [],
  fiveDayForeCast: [],
  loading: false,
  errorMessage: null,
  errorCode: null,
};

// returns an array of 5 dates
// ["2018-10-06", "2018-10-07", "2018-10-08", "2018-10-09", "2018-10-10"]
const getWeatherDates = (weatherArr) => {
  const data = weatherArr.map((item) => {
    const weatherDate = item.dt_txt;
    return weatherDate.slice(0, 9 + 1);
  });
  return new Set(data);
};

// returns a 2d array of each weatherforecast
const getWeatherDays = (weatherArr) => {
  const searchArr = getWeatherDates(weatherArr);
  const tmpArr = [];
  searchArr.forEach((date) => {
    const data = weatherArr.filter(item => item.dt_txt.includes(date));
    tmpArr.push(data);
  });
  return tmpArr;
};

const calcAvarageData = (forecastArr) => {
  const avarageData = [];
  const weatherDaysArr = getWeatherDays(forecastArr);
  weatherDaysArr.forEach((weatherDay) => {
    const temperaturArr = [];
    const weatherTypeArr = [];
    weatherDay.forEach((weatherItem) => {
      const currentTemp = weatherItem.main.temp;
      const currentWeatherType = weatherItem.weather[0].description;
      const iconId = weatherItem.weather[0].id;
      const currentDate = weatherItem.dt_txt;
      const currentId = weatherItem.dt;

      // add the temperature of each 3 hours to the array
      temperaturArr.push(currentTemp);
      weatherTypeArr.push({
        weatherType: currentWeatherType,
        iconId,
        date: currentDate,
        id: currentId,
      });
    });

    // return the most frequent weather type of the weatherType Object
    const mostFrequentWeather = getMostFrequentItem(weatherTypeArr, 'weatherType');

    // look at the minTemp and maxTemp of the daily weather temperature
    const minTemp = kelvinToCelsius(Math.min(...temperaturArr));
    const maxTemp = kelvinToCelsius(Math.max(...temperaturArr));

    const dailyAvarageWeatherData = {
      // weatherType: mostFrequentWeather.weatherType,
      iconId: mostFrequentWeather.iconId,
      id: mostFrequentWeather.id,
      weatherDate: formatDate(mostFrequentWeather.date),
      minTemp,
      maxTemp,
    };

    avarageData.push(dailyAvarageWeatherData);
  });

  return avarageData;
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WEATHER_START:
      return {
        ...state,
        errorMessage: null,
        loading: true,
      };
    case actionTypes.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        errorCode: null,
        city: action.city,
        country: action.country,
        fiveDayForeCast: action.fiveDayForecast,
        loading: false,
      };
    case actionTypes.FETCH_WEATHER_FAILED:
      return {
        ...state,
        errorMessage: action.errorMessage,
        errorCode: action.errorCode,
      };
    case actionTypes.SET_AVARAGE_WEATHER_DATA: {
      const dailyavgWeather = calcAvarageData(action.fiveDayForecast).slice(0, 5);

      return {
        ...state,
        dailyAvarageWeather: dailyavgWeather,
      };
    }
    default:
      return state;
  }
};

export default reducer;
