<<<<<<< HEAD
<<<<<<< Updated upstream
=======
=======
>>>>>>> WeatherItems
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import WeatherItem from './WeatherItem/WeatherItem';

/* eslint react/forbid-prop-types: 0 */

const styles = () => ({
  root: {
    flexGrow: 1,
<<<<<<< HEAD
    // width: '90%',
    margin: '10px auto',
  },
});

const weatherItems = (props) => {
  const { classes, items } = props;
=======
    width: '80%',
    margin: '40px auto',
  },
});

const testArray = [1, 2, 3, 4, 5];

const weatherItems = (props) => {
  const { classes } = props;
>>>>>>> WeatherItems
  return (
    <div>
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={16}>
<<<<<<< HEAD
            {items.map(item => (
              <WeatherItem
                weatherDate={item.weatherDate}
                minTemp={item.minTemp}
                maxTemp={item.maxTemp}
                weatherTitle={item.weatherType}
              />))}
=======
            {testArray.map(value => <WeatherItem value={value} key={value} />)}
>>>>>>> WeatherItems
          </Grid>
        </Grid>
      </Grid>
    </div>
<<<<<<< HEAD
=======

>>>>>>> WeatherItems
  );
};

weatherItems.propTypes = {
  classes: PropTypes.object.isRequired,
<<<<<<< HEAD
  items: PropTypes.array.isRequired,
};

export default withStyles(styles)(weatherItems);
>>>>>>> Stashed changes
=======
};

export default withStyles(styles)(weatherItems);
>>>>>>> WeatherItems
