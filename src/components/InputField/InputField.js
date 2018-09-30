import React from 'react';
import { TextField } from '@material-ui/core';
import Search from '@material-ui/icons/Search';

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
export default inputField;
