import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactChartkick, { AreaChart } from 'react-chartkick';
import Chart from 'chart.js';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router-dom';

import WeatherType from './WeatherType/WeatherType';
import { mapToWeatherJson } from '../../shared/util';
import * as actions from '../../store/actions/index';

import classes from './DetailedWeather.css';

class DetailedWeather extends Component {
  componentDidMount() {
    const { onFetchDayWeather, city } = this.props;
    const { match: { params: { date } } } = this.props;

    // if a city is in redux, i got the Data to fetch
    // else the user gets an error, if her reloads the page on this component
    if (city) {
      onFetchDayWeather(date);
    }

    console.log(this.props);

    ReactChartkick.addAdapter(Chart);
  }

  render() {
    const {
      dayTempChart, city, country, hourlyWeather, date,
    } = this.props;

    // if there's no data, redirect the user to the root path
    const redirect = !city ? <Redirect to="/" /> : null;

    return (
      <div className={classes.Container}>
        {redirect}
        <div className={classes.Title}>
          <h1>
            {city}
            { ' - ' }
            {country}
          </h1>
          <h1 className={classes.CurrentDate}>{date}</h1>
        </div>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Grid container spacing={8} justify="center">
              {hourlyWeather.map((item) => {
                const descriptionObj = mapToWeatherJson(item.iconId);
                return (
                  <WeatherType
                    key={item.key}
                    hour={item.hour}
                    description={descriptionObj}
                    humidity={item.humidity}
                    windSpeed={item.windSpeed}
                  />
                );
              })}
            </Grid>
          </Grid>
        </Grid>
        <div>
          <AreaChart
            messages={{ empty: 'No data' }}
            ytitle="Temperature"
            data={dayTempChart}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    city: state.fiveday.city,
    country: state.fiveday.country,
    dayTempChart: state.fiveday.dayTempChart,
    hourlyWeather: state.fiveday.hourlyWeather,
    date: state.fiveday.currentDate,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onFetchDayWeather: selectedDate => dispatch(actions.setDetailedWeatherData(selectedDate)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(DetailedWeather);
