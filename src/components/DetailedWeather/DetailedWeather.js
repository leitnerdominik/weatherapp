import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/weather';

class DetailedWeather extends Component {
  componentDidMount() {
    const { onFetchDayWeather } = this.props;
    const { match: { params: { date } } } = this.props;
    onFetchDayWeather(date);
  }

  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

const mapDispatchToProps = dispatch => (
  {
    onFetchDayWeather: selectedDate => dispatch(actions.setDetailedWeatherData(selectedDate)),
  }
);

export default connect(null, mapDispatchToProps)(DetailedWeather);
