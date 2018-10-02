import React, { Component } from 'react';
<<<<<<< Updated upstream
import InputField from '../InputField/InputField';
=======
import axios from '../../axios-weather';

import InputField from '../../components/InputField/InputField';
import WeatherItems from '../../components/WeatherItems/WeatherItems';
import Title from '../../components/Title/Title';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import { formatDate, kelvinToCelsius } from '../../shared/util';
import API_KEY from '../../api_key';
>>>>>>> Stashed changes


const prepData = (weatherArr) => {
  const weatherData = weatherArr.map(item => ({
    minTemp: kelvinToCelsius(item.main.temp.min),
    maxTemp: kelvinToCelsius(item.main.temp.max),
    weatherType: item.weather[0].main,
    weatherDate: formatDate(item.dt_txt),
  }));

  return weatherData;
};

class Weather extends Component {
  constructor(props) {
    super(props);

<<<<<<< Updated upstream
    this.state = {};
  }

  render() {
    return (
      <div>
        <InputField />
=======
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
>>>>>>> Stashed changes
      </div>

    );
  }
}

export default Weather;
