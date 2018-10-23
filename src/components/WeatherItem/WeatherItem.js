import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';


import classes from './WeatherItem.css';

/* eslint react/forbid-prop-types: 0 */


const weatherItem = (props) => {
  const {
    minTemp, maxTemp, weatherDate, iconClass, weatherLabel, clicked, date,
  } = props;
  return (
    <Grid item>
      <Paper className={classes.Paper} onClick={() => clicked(date)}>
        <p>{weatherDate}</p>
        <div className={classes.IconContainer}>
          <i className={iconClass} />
          <p>{weatherLabel}</p>
        </div>
        <p>
          {`${minTemp}° C`}
          { ' / ' }
          {`${maxTemp}° C`}
        </p>
      </Paper>
    </Grid>
  );
};

weatherItem.propTypes = {
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  weatherDate: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  weatherLabel: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default weatherItem;
