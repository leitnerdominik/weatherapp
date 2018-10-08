import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import WeatherItem from '../../components/WeatherItem/WeatherItem';
import weatherIcons from '../../icons.json';
import DetailedWeather from '../../components/DetailedWeather/DetailedWeather';

/* eslint react/forbid-prop-types: 0 */

const styles = () => ({
  root: {
    flexGrow: 1,
    // width: '90%',
    margin: '10px auto',
  },
});

const mapToWeatherJson = (iconId) => {
  const prefix = 'wi wi-';
  const { label } = weatherIcons[iconId];
  let { icon } = weatherIcons[iconId];

  // If we are not in the ranges mentioned above, add a day/night prefix.
  if (!(iconId > 699 && iconId < 800) && !(iconId > 899 && iconId < 1000)) {
    icon = `day-${icon}`;
  }

  // Finally tack on the prefix.
  return {
    iconClass: prefix + icon,
    weatherLabel: label,
  };
};

class WeatherItems extends Component {

  constructor(props) {
    super(props);

    this.weatherSelectedHandler = this.weatherSelectedHandler.bind(this);
  }

  componentDidMount() {
    console.log('scheiss eslint');
    console.log(this.props);
  }

  weatherSelectedHandler(id) {
    const pathName = `/${id}`;
    // <Route path={pathName} exact component={DetailedWeather} />
  }

  render() {
    const { classes, items } = this.props;
    return (
      <div>
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={16}>
              {items.map((item) => {
                const weatherType = mapToWeatherJson(item.iconId);
                return (
                  <WeatherItem
                    key={item.id}
                    id={item.id}
                    weatherDate={item.weatherDate}
                    minTemp={item.minTemp}
                    maxTemp={item.maxTemp}
                    iconClass={weatherType.iconClass}
                    weatherLabel={weatherType.weatherLabel}
                    clicked={this.weatherSelectedHandler}
                  />);
              })}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

WeatherItems.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
};

export default withStyles(styles)(WeatherItems);
