import React from 'react';

import classes from './Spinner.css';

const spinner = () => (
  <div className={classes.SpinnerContainer}>
    <div className={classes.LdsEllipsis}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default spinner;
