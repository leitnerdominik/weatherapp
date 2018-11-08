import React from 'react';

const title = (props) => {
  const { children } = props;
  return (
    <h1 style={{
      textAlign: 'center',
      marginTop: '30px',
      marginBottom: '0',
      color: 'white',
    }}
    >
      {children}
    </h1>
  );
};

export default title;
