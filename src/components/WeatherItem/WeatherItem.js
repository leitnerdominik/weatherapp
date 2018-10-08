import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';


import classes from './WeatherItem.css';

/* eslint react/forbid-prop-types: 0 */


const weatherItem = (props) => {
  const {
    id, minTemp, maxTemp, weatherDate, iconClass, weatherLabel, clicked,
  } = props;
  return (
    <Grid item>
      <Paper className={classes.Paper} onClick={() => clicked(id)}>
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
  id: PropTypes.number.isRequired,
  minTemp: PropTypes.string.isRequired,
  maxTemp: PropTypes.string.isRequired,
  weatherDate: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  weatherLabel: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default weatherItem;
