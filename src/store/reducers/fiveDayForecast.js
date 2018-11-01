import * as actionTypes from '../actions/actionTypes';
import { formatDate, getMostFrequentItem } from '../../shared/util';

const initalState = {
  city: '',
  country: '',
  dailyAvarageWeather: [],
  fiveDayForecast: [],
  currentDate: null,
  hourlyWeather: [],
  dayTempChart: [],
  loading: false,
  startedSearch: false, // to not show the spinner at the beginning
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
    const minTemp = Math.min(...temperaturArr);
    const maxTemp = Math.max(...temperaturArr);

    const dailyAvarageWeatherData = {
      // weatherType: mostFrequentWeather.weatherType,
      iconId: mostFrequentWeather.iconId,
      id: mostFrequentWeather.id,

      // extract only date - '2018-10-21 21:00:00' => 2018-10-21
      date: mostFrequentWeather.date.slice(0, 10),
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
    case actionTypes.FETCH_FIVEDAYFORECAST_START:
      return {
        ...state,
        errorMessage: null,
        errorCode: null,
        loading: true,
        startedSearch: true,
      };
    case actionTypes.FETCH_FIVEDAYFORECAST_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        errorCode: null,
        city: action.city,
        country: action.country,
        fiveDayForecast: action.fiveDayForecast,
        loading: false,
      };
    case actionTypes.FETCH_FIVEDAYFORECAST_FAILED:
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
    case actionTypes.SET_DETAILED_WEATHER_DATA: {
      const { fiveDayForecast } = state;
      const getDayWeather = fiveDayForecast.filter(item => (
        item.dt_txt.includes(action.currentDate)
      ));

      const date = formatDate(getDayWeather[0].dt_txt.slice(0, 10));


      const tempObj = {};
      const hourlyWeatherTypeArr = [];
      getDayWeather.forEach((item) => {
        const currentHour = item.dt_txt.slice(11, 16);
        tempObj[currentHour] = item.main.temp;
        const weatherTypeObj = {
          key: item.dt,
          iconId: item.weather[0].id,
          hour: currentHour,
          humidity: item.main.humidity,
          windSpeed: item.wind.speed,
        };
        hourlyWeatherTypeArr.push(weatherTypeObj);
      });
      const tempChartArr = [
        {
          name: 'Temperature',
          data: {
            ...tempObj,
          },
        },
      ];
      return {
        ...state,
        dayTempChart: tempChartArr,
        hourlyWeather: hourlyWeatherTypeArr,
        currentDate: date,
      };
    }
    case actionTypes.RESET_ERRORS:
      return {
        ...state,
        errorCode: null,
        errorMessage: null,
        loading: false,
        startedSearch: false,
      };
    default:
      return state;
  }
};

export default reducer;
