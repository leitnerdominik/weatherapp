import React, { Component } from 'react';
import InputField from '../InputField/InputField';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <InputField />
      </div>

    );
  }
}

export default Weather;
