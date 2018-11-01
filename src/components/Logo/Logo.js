import React from 'react';

import cloudLogo from '../../assets/images/clouds-logo.png';
import classes from './Logo.css';

const logo = () => (
  <div className={classes.Logo}>
    <img src={cloudLogo} alt="CloudLogo" />
  </div>
);

export default logo;
