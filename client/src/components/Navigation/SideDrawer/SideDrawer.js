import React from 'react';

import classes from './SideDrawer.css'

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = props => {
  const assignedClasses = [
    classes.SideDrawer,
    props.show ? classes.Open : classes.Close
  ];

  return (
    <div>
      <Backdrop show={props.show} clicked={props.closed}/>
      <nav className={assignedClasses.join(' ')}>
        <NavigationItems sideDrawerClosed={props.closed}/>
      </nav>
    </div>
  )
}
 
export default sideDrawer;