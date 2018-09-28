import React from 'react';
import classes from './App.css';

const App = () => (
  <div className={classes.App}>
    <header className={classes.AppHeader}>
      <h1 className={classes.AppTitle}>Welcome to React</h1>
    </header>
    <p className={classes.AppIntro}>
      To get started, edit
      <code>src/App.js</code>
      and save to reload.
    </p>
  </div>
);

export default App;
