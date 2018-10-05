import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';


import classes from './WeatherItem.css';

/* eslint react/forbid-prop-types: 0 */


const weatherItem = (props) => {
  const {
    temp, weatherTitle, weatherDate, iconClass, weatherLabel,
  } = props;
  return (
    <Grid item>
      <Paper className={classes.Paper}>
        <p>{weatherDate}</p>
        <div className={classes.IconContainer}>
          <i className={iconClass} />
          <p>{weatherLabel}</p>
        </div>
        <p>{weatherTitle}</p>
        <p>{temp}</p>
      </Paper>
    </Grid>
  );
};

weatherItem.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherTitle: PropTypes.string.isRequired,
  weatherDate: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  weatherLabel: PropTypes.string.isRequired,
};

export default weatherItem;
