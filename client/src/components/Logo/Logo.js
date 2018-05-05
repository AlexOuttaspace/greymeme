import React from 'react';

import classes from './Logo.css';

import pepe from '../../assets/images/logo.png';

const logo = props => {
  return (
    <div className={classes.Logo}>
      <img src={pepe} alt="logo"/>
    </div>
  )
}
 
export default logo;