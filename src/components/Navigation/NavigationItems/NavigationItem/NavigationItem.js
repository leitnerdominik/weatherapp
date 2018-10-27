import React from 'react';

import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

const navigationItem = (props) => {
  const {
    link, exact, active, children,
  } = props;
  return (
    <li className={classes.NavigationItem}>
      <NavLink
        to={link}
        exact={exact}
        activeClassName={active}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
