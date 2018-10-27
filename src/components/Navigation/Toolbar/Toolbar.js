import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../DrawerToggle/DrawerToggle';

import classes from './Toolbar.css';

const toolbar = (props) => {
  const { drawerClicked } = props;
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={drawerClicked} />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
