import React from 'react';
import { Link } from 'react-router-dom';

import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../DrawerToggle/DrawerToggle';
import Logo from '../../Logo/Logo';

import classes from './Toolbar.css';

const toolbar = (props) => {
  const { drawerClicked, sideDrawerOpen } = props;
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={drawerClicked} sideDrawerOpen={sideDrawerOpen} />
      <div className={classes.Logo}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
