import React, {Component, Fragment} from 'react';

import classes from './Layout.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerCloseHanler = () => {
    this.setState({showSideDrawer: false})
  }


  sideDrawerToggleHanler = () => {
    this.setState((prev) => ({showSideDrawer: !prev.showSideDrawer}))
  }
  
  render() {
    return (
      <Fragment>
        <Toolbar 
          sideDrawerToggle={this.sideDrawerToggleHanler}
        />
        <SideDrawer 
          closed={this.sideDrawerCloseHanler} 
          show={this.state.showSideDrawer}
        />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Fragment>
    )
  }
}

export default Layout;