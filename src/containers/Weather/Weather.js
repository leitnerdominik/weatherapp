import React, { Component } from 'react';
import axios from '../../axios-weather';

import InputField from '../../components/InputField/InputField';
import WeatherItems from '../../components/WeatherItems/WeatherItems';
import API_KEY from '../../api_key';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      searchTerm: '',
    };

    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.getWeatherData = this.getWeatherData.bind(this);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    const { term } = this.state;
    this.setState({ searchTerm: term }, this.getWeatherData);
  }

  getWeatherData() {
    const { searchTerm } = this.state;
    axios.get(`data/2.5/forecast?q=${searchTerm}&appid=${API_KEY}`)
      .then(respsonse => console.log(respsonse))
      .catch(error => console.log(error));
  }

  inputChangeHandler(event) {
    this.setState({ term: event.target.value });
  }


  render() {
    const { term } = this.state;

    return (
      <div>
        <InputField change={this.inputChangeHandler} submit={this.onSubmitHandler} value={term} />
        <WeatherItems />
      </div>

    );
  }
}

export default Weather;
