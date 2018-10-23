import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputField from '../../components/InputField/InputField';
import WeatherItems from '../WeatherItems/WeatherItems';
import Title from '../../components/Title/Title';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/weather';


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
    this.setState({ searchTerm: term, term: '' }, this.getWeatherData);
  }

  getWeatherData() {
    const { searchTerm } = this.state;
    const { onFetchWeather } = this.props;

    onFetchWeather(searchTerm);
  }

  inputChangeHandler(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    const { term } = this.state;

    const {
      city, country, weatherItems, loading, searched,
    } = this.props;

    let weatherItemsContent = null;
    if (searched) {
      weatherItemsContent = <Spinner />;
    }

    if (!loading && weatherItems.length > 0) {
      weatherItemsContent = (
        <Aux>
          <Title titleCity={city} titleCountry={country} />
          <WeatherItems items={weatherItems} />
        </Aux>
      );
    }

    return (
      <div>
        <InputField change={this.inputChangeHandler} submit={this.onSubmitHandler} value={term} />
        {weatherItemsContent}
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    city: state.city,
    country: state.country,
    weatherItems: state.dailyAvarageWeather,
    loading: state.loading,
    searched: state.startedSearch,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onFetchWeather: searchTerm => dispatch(actions.fetchWeather(searchTerm)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
