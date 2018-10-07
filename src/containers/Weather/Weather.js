import React, { Component } from 'react';
import axios from '../../axios-weather';

import InputField from '../../components/InputField/InputField';
import WeatherItems from '../../components/WeatherItems/WeatherItems';
import Title from '../../components/Title/Title';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import { formatDate, kelvinToCelsius, getMostFrequentItem } from '../../shared/util';
import API_KEY from '../../api_key';


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

const getAvarageData = (weatherDaysArr) => {
  const tmpArr = [];
  weatherDaysArr.forEach((weatherDay) => {
    const tempArr = [];
    const weatherTypeArr = [];
    weatherDay.forEach((weatherItem) => {
      const currentTemp = weatherItem.main.temp;
      // const currentMaxTemp = weatherItem.main.temp_max;
      const currentWeatherType = weatherItem.weather[0].description;
      const iconId = weatherItem.weather[0].id;
      const currentDate = weatherItem.dt_txt;
      const currentId = weatherItem.dt;

      tempArr.push(currentTemp);
      weatherTypeArr.push({
        weatherType: currentWeatherType,
        iconId,
        date: currentDate,
        id: currentId,
      });
    });

    const mostFrequentWeather = getMostFrequentItem(weatherTypeArr, 'weatherType');
    const minTemp = kelvinToCelsius(Math.min(...tempArr));
    const maxTemp = kelvinToCelsius(Math.max(...tempArr));

    const tempObj = {
      // weatherType: mostFrequentWeather.weatherType,
      iconId: mostFrequentWeather.iconId,
      id: mostFrequentWeather.id,
      weatherDate: formatDate(mostFrequentWeather.date),
      minTemp,
      maxTemp,
    };

    tmpArr.push(tempObj);
  });

  return tmpArr;
};


class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      searchTerm: '',
      city: '',
      country: '',
      weatherItems: [],
    };

    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.getWeatherData = this.getWeatherData.bind(this);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    const { term } = this.state;
    this.setState({ searchTerm: term, term: '' }, this.getWeatherData);
  }

  getWeatherData() {
    const { searchTerm } = this.state;
    axios.get(`data/2.5/forecast?q=${searchTerm}&appid=${API_KEY}`)
      .then((response) => {
        console.log(response);
        const { name, country } = response.data.city;
        const weatherDates = getWeatherDays(response.data.list);
        let avarageDailyWeatherData = getAvarageData(weatherDates);

        // output the first 5 days
        avarageDailyWeatherData = avarageDailyWeatherData.slice(0, 5);

        this.setState({ weatherItems: avarageDailyWeatherData, city: name, country });
      })
      .catch(error => console.log(error));
  }

  inputChangeHandler(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    const {
      term, weatherItems, city, country,
    } = this.state;

    return (
      <div>
        <InputField change={this.inputChangeHandler} submit={this.onSubmitHandler} value={term} />
        {weatherItems.length > 0 ? (
          <Aux>
            <Title titleCity={city} titleCountry={country} />
            <WeatherItems items={weatherItems} />
          </Aux>) : null}
      </div>
    );
  }
}

export default Weather;
