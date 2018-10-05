import React, { Component } from 'react';
import axios from '../../axios-weather';

import InputField from '../../components/InputField/InputField';
import WeatherItems from '../../components/WeatherItems/WeatherItems';
import Title from '../../components/Title/Title';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import { formatDate, kelvinToCelsius } from '../../shared/util';
import API_KEY from '../../api_key';

const prepData = (weatherArr) => {
  const weatherData = weatherArr.map(item => ({
    id: item.dt,
    temp: kelvinToCelsius(item.main.temp),
    weatherDate: formatDate(item.dt_txt),
    iconId: item.weather[0].id,
  }));

  return weatherData;
};

const getAvarageData = (weatherArr, searchArr) => {
  const tmpArr = [];
  searchArr.forEach((date) => {
    const data = weatherArr.filter(item => item.dt_txt.includes(date));
    tmpArr.push(data);
  });

  console.log(tmpArr);
  return tmpArr;
};

const getWeatherDates = (weatherArr) => {
  const data = weatherArr.map((item) => {
    const weatherDate = item.dt_txt;
    return weatherDate.slice(0, 9 + 1);
  });
  return data;
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
        const dailyWeatherData = response.data.list.filter((weatherObj) => {
          const res = weatherObj.dt_txt.match(/\d{4}-\d{2}-\d{2}\s12:00:00/);
          return res;
        });

        const fiveDayForecast = prepData(dailyWeatherData);
        const weatherDates = getWeatherDates(dailyWeatherData);
        const avarageData = getAvarageData(response.data.list, weatherDates);
        console.log(avarageData);

        this.setState({ weatherItems: fiveDayForecast, city: name, country });
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
