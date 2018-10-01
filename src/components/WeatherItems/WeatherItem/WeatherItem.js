import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import classes from './WeatherItem.css';

/* eslint react/forbid-prop-types: 0 */


const weatherItem = (props) => {
  const { minTemp, maxTemp, weatherTitle } = props;
  return (
    <Grid item>
      <Paper className={classes.Paper}>
        <p>{weatherTitle}</p>
        <p>{minTemp}</p>
        <p>{maxTemp}</p>
      </Paper>
    </Grid>
  );
};

export default weatherItem;
