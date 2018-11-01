import React from 'react';

import classes from './DrawerToggle.css';

const drawerToggle = (props) => {
  const { clicked, sideDrawerOpen } = props;

  let hamburgerMenu = classes.DrawerToggle;
  if (sideDrawerOpen) {
    hamburgerMenu = classes.ShowClose;
  }
  return (
    // <div onClick={clicked} className={classes.DrawerToggle}>
    //   <div />
    //   <div />
    //   <div />
    // </div>
    <div className={classes.DrawerToggleContainer}>
      <button type="submit" onClick={clicked} className={hamburgerMenu}>
        <div />
        <div />
        <div />
      </button>
    </div>
  );
};

export default drawerToggle;
