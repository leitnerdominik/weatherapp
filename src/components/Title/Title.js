import React from 'react';

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

export default title;
