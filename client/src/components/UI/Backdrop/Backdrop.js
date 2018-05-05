import React from 'react';

import classes from './Backdrop.css'

const backDrop = props => {
  const backDrop = props.show
  ? (
    <div 
      className={classes.BackDrop}
      onClick={props.clicked}  
    >
    </div>
  ) : null
    
  return backDrop;
}
 
export default backDrop;