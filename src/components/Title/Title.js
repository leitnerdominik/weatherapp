import React from 'react';
import PropTypes from 'prop-types';

const title = (props) => {
  const { titleCity, titleCountry } = props;
  return (
    <h1 style={{
      textAlign: 'center',
      marginTop: '30px',
      marginBottom: '0',
    }}
    >
      { titleCity }
      { ', ' }
      { titleCountry }
    </h1>
  );
};

title.propTypes = {
  titleCity: PropTypes.string.isRequired,
  titleCountry: PropTypes.string.isRequired,
};

export default title;
