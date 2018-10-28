import React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';

const errorHandler = (props) => {
  const { errorCode, errorMessage, close } = props;
  return (
    <Aux>
      <Modal
        show={errorCode}
        modalClosed={close}
      >
        {errorCode ? `${errorCode} ${errorMessage}` : null}
      </Modal>
    </Aux>
  );
};

export default errorHandler;
