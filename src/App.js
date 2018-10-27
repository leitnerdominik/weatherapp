import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Weather from './containers/Weather/Weather';
import DetailedWeather from './components/DetailedWeather/DetailedWeather';
import Layout from './hoc/Layout/Layout';

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Weather} />
      <Route path="/:date" exact component={DetailedWeather} />
    </Switch>
  </Layout>
);

export default App;
