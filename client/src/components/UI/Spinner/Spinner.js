import React from 'react';

import classes from './Spinner.css';

const spinner = props => {
  const spinnerClasses = [
    classes.Spinner,
    props.fullscreen ? classes.Fullscreen : null
  ];
  
  return <div className={spinnerClasses.join(' ')}></div>
}

export default spinner;