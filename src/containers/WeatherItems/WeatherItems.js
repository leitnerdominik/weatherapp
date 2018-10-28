import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import WeatherItem from '../../components/WeatherItem/WeatherItem';
import { mapToWeatherJson } from '../../shared/util';

/* eslint react/forbid-prop-types: 0 */

const styles = () => ({
  root: {
    flexGrow: 1,
    margin: '10px auto',
  },
});

class WeatherItems extends Component {
  constructor(props) {
    super(props);

    this.weatherSelectedHandler = this.weatherSelectedHandler.bind(this);
  }

  weatherSelectedHandler(id) {
    const { history } = this.props;
    history.push({ pathname: `/${id}` });
  }

  render() {
    const { classes, items } = this.props;
    return (
      <div>
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={16}>
              {items.map((item) => {
                const weatherType = mapToWeatherJson(item.iconId);
                return (
                  <WeatherItem
                    key={item.id}
                    id={item.id}
                    date={item.date}
                    weatherDate={item.weatherDate}
                    minTemp={item.minTemp}
                    maxTemp={item.maxTemp}
                    iconClass={weatherType.iconClass}
                    weatherLabel={weatherType.weatherLabel}
                    clicked={this.weatherSelectedHandler}
                  />);
              })}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

WeatherItems.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
};

export default withStyles(styles)(withRouter(WeatherItems));
