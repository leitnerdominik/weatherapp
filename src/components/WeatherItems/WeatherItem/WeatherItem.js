import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import { withStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';

import classes from './WeatherItem.css';

/* eslint react/forbid-prop-types: 0 */


const weatherItem = (props) => {
  const { value } = props;
  return (
    <Grid item>
      <Paper className={classes.Paper}>
        {value}
      </Paper>
    </Grid>
  );
};

export default weatherItem;
