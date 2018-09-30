import React from 'react';
import Weather from './containers/Weather/Weather';
import Aux from './hoc/Auxiliary/Auxiliary';

const App = () => (
  <Aux>
    <Weather />
  </Aux>
);

export default App;
