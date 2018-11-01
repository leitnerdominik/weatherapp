import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import classes from './WeatherType.css';

const weatherType = (props) => {
  const {
    hour, description, humidity, windSpeed,
  } = props;

  return (
    <Grid item>
      <Paper className={classes.Paper}>
        <div className={classes.IconContainer}>
          <i className={description.iconClass} />
        </div>
        <div className={classes.InfoContainer}>
          <b>Humidity: </b>
          {`${humidity}%`}
          <b>Wind speed: </b>
          {`${windSpeed} meter/sec`}
          <b>Time: </b>
          {hour}
        </div>
      </Paper>
    </Grid>
  );
};

export default weatherType;
