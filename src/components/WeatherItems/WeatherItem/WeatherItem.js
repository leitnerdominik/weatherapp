<<<<<<< HEAD
<<<<<<< Updated upstream
=======
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
=======
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import { withStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';
>>>>>>> WeatherItems

import classes from './WeatherItem.css';

/* eslint react/forbid-prop-types: 0 */


const weatherItem = (props) => {
<<<<<<< HEAD
  const {
    minTemp, maxTemp, weatherTitle, weatherDate,
  } = props;
  return (
    <Grid item>
      <Paper className={classes.Paper}>
        <p>{weatherDate}</p>
        <p>{weatherTitle}</p>
        <p>{minTemp}</p>
        <p>{maxTemp}</p>
=======
  const { value } = props;
  return (
    <Grid item>
      <Paper className={classes.Paper}>
        {value}
>>>>>>> WeatherItems
      </Paper>
    </Grid>
  );
};

export default weatherItem;
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> WeatherItems
