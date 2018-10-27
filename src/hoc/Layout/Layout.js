import React, { Component } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Aux from '../Auxiliary/Auxiliary';

import classes from './Layout.css';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideDrawer: false,
    };

    this.sideDrawerClosedHandler = this.sideDrawerClosedHandler.bind(this);
    this.sideDrawerToggleHandler = this.sideDrawerToggleHandler.bind(this);
  }

  sideDrawerClosedHandler() {
    this.setState({ showSideDrawer: false });
  }

  sideDrawerToggleHandler() {
    this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }));
  }


  render() {
    const { showSideDrawer } = this.state;
    const { children } = this.props;

    return (
      <Aux>
        <Toolbar drawerClicked={this.sideDrawerToggleHandler} />
        <SideDrawer open={showSideDrawer} closed={this.sideDrawerClosedHandler} />
        <main className={classes.Content}>
          {children}
        </main>
      </Aux>
    );
  }
}

export default Layout;
