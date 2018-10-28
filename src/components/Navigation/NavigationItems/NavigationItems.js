import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>5 Day Forecast</NavigationItem>
    <NavigationItem link="/currentweather">Current weather</NavigationItem>
  </ul>
);

export default navigationItems;
