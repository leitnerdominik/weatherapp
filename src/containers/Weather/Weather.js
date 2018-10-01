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
      weatherItems: [],
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
      .then((response) => {
        const dailyWeatherData = response.data.list.filter((weatherObj) => {
          const res = weatherObj.dt_txt.match(/\d{4}-\d{2}-\d{2}\s12:00:00/);
          return res;
        });
        this.setState({ weatherItems: dailyWeatherData });
      })
      .catch(error => console.log(error));
  }

  inputChangeHandler(event) {
    this.setState({ term: event.target.value });
  }


  render() {
    const { term, weatherItems } = this.state;

    return (
      <div>
        <InputField change={this.inputChangeHandler} submit={this.onSubmitHandler} value={term} />
        {weatherItems.length > 0 ? <WeatherItems items={weatherItems} /> : null}
      </div>

    );
  }
}

export default Weather;
