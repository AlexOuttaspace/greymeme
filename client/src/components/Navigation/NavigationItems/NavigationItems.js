import React from 'react';
import {withRouter} from 'react-router-dom';

import classes from './NavigationItems.css';

import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = props => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem 
        to='/posts'
        clicked={props.sideDrawerClosed}
      >
        Main
      </NavigationItem>
      <NavigationItem 
        to={`${props.location.pathname}?form=uploadPost`}
        clicked={props.sideDrawerClosed}
      > 
        Upload
      </NavigationItem>
    </ul>
  )
}
 
export default withRouter(navigationItems);