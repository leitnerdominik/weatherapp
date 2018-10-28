import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.css';

class Modal extends Component {
  shouldComponentUpdate(nextProps) {
    const { show, children } = this.props;
    return nextProps.show !== show || nextProps.children !== children;
  }

  render() {
    const { show, modalClosed, children } = this.props;
    return (
      <Aux>
        <Backdrop show={show} clicked={modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: show ? 'translateX(0)' : 'translateX(-100vh)',
            opacity: show ? '1' : 0,
          }}
        >
          {children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
