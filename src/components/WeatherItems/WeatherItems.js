import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import WeatherItem from './WeatherItem/WeatherItem';
import weatherIcons from '../../icons.json';

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

const weatherItems = (props) => {
  const { classes, items } = props;
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
                  weatherDate={item.weatherDate}
                  minTemp={item.minTemp}
                  maxTemp={item.maxTemp}
                  iconClass={weatherType.iconClass}
                  weatherLabel={weatherType.weatherLabel}
                />);
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

weatherItems.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
};

export default withStyles(styles)(weatherItems);
