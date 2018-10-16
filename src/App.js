import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Weather from './containers/Weather/Weather';
import DetailedWeather from './components/DetailedWeather/DetailedWeather';

const App = () => (
  <Switch>
    <Route path="/" exact component={Weather} />
    <Route path="/:id" exact component={DetailedWeather} />
  </Switch>
);

export default App;
