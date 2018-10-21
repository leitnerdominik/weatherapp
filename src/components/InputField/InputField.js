import React from 'react';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Search from '@material-ui/icons/Search';
import PropTypes from 'prop-types';

import cssClasses from './InputField.css';

const styles = ({
  shrink: {
    color: '#1EE6F6 !important',
  },
});

const inputField = (props) => {
  const {
    value, change, submit, classes,
  } = props;
  return (
    <div className={cssClasses.InputFieldContainer}>
      <form onSubmit={submit}>
        <TextField
          id="inputField"
          className={cssClasses.TextField}
          InputLabelProps={{
            classes: {
              shrink: classes.shrink,
            },
          }}
          label="Search city"
          value={value}
          onChange={change}
        />
        <button type="submit" onClick={submit} className={cssClasses.SearchButton}>
          <Search />
        </button>
      </form>
    </div>
  );
};

inputField.propTypes = {
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default withStyles(styles)(inputField);
