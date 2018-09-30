import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import Search from '@material-ui/icons/Search';

import classes from './InputField.css';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };

    this.onChangedHandler = this.onChangedHandler.bind(this);
  }

  onChangedHandler(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    const { term } = this.state;

    return (
      <div className={classes.InputFieldContainer}>
        <TextField
          id="inputField"
          className={classes.Input}
          label="Search city"
          value={term}
          onChange={this.onChangedHandler}
        />
        <button type="submit" className={classes.SearchButton}>
          <Search />
        </button>
      </div>
    );
  }
}

export default InputField;
