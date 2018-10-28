import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Weather from './containers/Weather/Weather';
import DetailedWeather from './components/DetailedWeather/DetailedWeather';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Weather} />
      <Route path="/currentweather" exact component={CurrentWeather} />
      <Route path="/:date" exact component={DetailedWeather} />
    </Switch>
  </Layout>
);

export default App;
