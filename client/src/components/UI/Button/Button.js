import React from 'react';

import classes from './Button.css';

const button = props => {
  let btnClasses = [
    classes.Button
  ];

  switch (props.type) {
    case 'success':
      btnClasses.push(classes.Success)
      break;
    case 'danger':
      btnClasses.push(classes.Danger)
      break;
    default:
      break;
  }


  return (
    <button
      style={props.style}
      className={btnClasses.join(' ')}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  )
}
 
export default button;