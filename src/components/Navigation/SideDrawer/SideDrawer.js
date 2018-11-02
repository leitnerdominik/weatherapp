import React from 'react';
import { Link } from 'react-router-dom';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';

import classes from './SideDrawer.css';

const sideDrawer = (props) => {
  const { open, closed } = props;

  let attachedClasses = [classes.SideDrawer, classes.Close];

  if (open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }


  return (
    <Aux>
      <Backdrop show={open} clicked={closed} />
      /* eslint ignore line
      <div className={attachedClasses.join(' ')} onClick={closed} role="main">
        <div className={classes.Logo}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
