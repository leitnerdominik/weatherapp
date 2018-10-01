import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import WeatherItem from './WeatherItem/WeatherItem';

/* eslint react/forbid-prop-types: 0 */

const styles = () => ({
  root: {
    flexGrow: 1,
    // width: '90%',
    margin: '40px auto',
  },
});

const weatherItems = (props) => {
  const { classes, items } = props;
  return (
    <div>
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={16}>
            {items.map(item => (
              <WeatherItem
                minTemp={item.main.temp_min}
                maxTemp={item.main.temp_max}
                weatherTitle={item.weather[0].main}
              />))}
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
