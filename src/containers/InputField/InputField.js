import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Search from '@material-ui/icons/Search';

import cssClasses from './InputField.css';

const styles = ({
  shrink: {
    color: '#1E52F6 !important',
  },
});

class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };

    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    const { submit } = this.props;
    const { term } = this.state;
    submit(term);

    this.setState({ term: '' });
  }

  inputChangeHandler(event) {
    const { target: { value } } = event;
    this.setState({ term: value });
  }

  render() {
    const { classes } = this.props;
    const { term } = this.state;
    return (
      <div className={cssClasses.InputFieldContainer}>
        <form onSubmit={this.onSubmitHandler}>
          <TextField
            id="inputField"
            className={cssClasses.TextField}
            InputLabelProps={{
              classes: {
                shrink: classes.shrink,
              },
            }}
            label="Search city"
            value={term}
            onChange={this.inputChangeHandler}
          />
          <button type="submit" onClick={this.onSubmitHandler} className={cssClasses.SearchButton}>
            <Search />
          </button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(InputField);
