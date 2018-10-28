import React from 'react';

import classes from './DrawerToggle.css';

const drawerToggle = (props) => {
  const { clicked } = props;
  return (
    <div onClick={clicked} className={classes.DrawerToggle}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default drawerToggle;