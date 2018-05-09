import React, {Fragment} from 'react';

import classes from './Input.css';

const input = props => {
  let input = null;

  switch (props.type) {
    case 'input':
      const assignedClasses = [
        classes.Input, 
        props.valid ? null : classes.invalid
      ];
      input = <input 
        {...props.config} 
        value={props.value}
        className={assignedClasses.join(' ')}
        onChange={props.changed}
      />;
      break;
    default:
      break;
  }
  return (
    <Fragment>
      {input}
      <span>{props.validationMessage}</span>
    </Fragment>
  )
}
 
export default input;