import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Aux from './hoc/Auxiliary/Auxiliary';
import Weather from './containers/Weather/Weather';

const App = () => (
  <BrowserRouter>
    <Aux>
      <Weather />
    </Aux>
  </BrowserRouter>
);

export default App;
