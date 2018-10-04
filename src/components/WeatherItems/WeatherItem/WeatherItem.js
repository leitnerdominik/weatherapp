import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import classes from './WeatherItem.css';

/* eslint react/forbid-prop-types: 0 */


const weatherItem = (props) => {
  const {
    temp, weatherTitle, weatherDate,
  } = props;
  return (
    <Grid item>
      <Paper className={classes.Paper}>
        <p>{weatherDate}</p>
        <p>{weatherTitle}</p>
        <p>{temp}</p>
        <p></p>
      </Paper>
    </Grid>
  );
};

export default weatherItem;
