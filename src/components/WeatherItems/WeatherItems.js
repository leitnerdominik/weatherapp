import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import WeatherItem from './WeatherItem/WeatherItem';

/* eslint react/forbid-prop-types: 0 */

const styles = () => ({
  root: {
    flexGrow: 1,
    width: '80%',
    margin: '40px auto',
  },
});

const testArray = [1, 2, 3, 4, 5];

const weatherItems = (props) => {
  const { classes } = props;
  return (
    <div>
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={16}>
            {testArray.map(value => <WeatherItem value={value} key={value} />)}
          </Grid>
        </Grid>
      </Grid>
    </div>

  );
};

weatherItems.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(weatherItems);
