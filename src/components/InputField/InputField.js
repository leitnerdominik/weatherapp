import React from 'react';
import { TextField } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import PropTypes from 'prop-types';

import classes from './InputField.css';

const inputField = (props) => {
  const { value, change, submit } = props;
  return (
    <div className={classes.InputFieldContainer}>
      <form onSubmit={submit}>
        <TextField
          id="inputField"
          className={classes.Input}
          label="Search city"
          value={value}
          onChange={change}
        />
        <button type="submit" onClick={submit} className={classes.SearchButton}>
          <Search />
        </button>
      </form>
    </div>
  );
};

inputField.propTypes = {
  change: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default inputField;
