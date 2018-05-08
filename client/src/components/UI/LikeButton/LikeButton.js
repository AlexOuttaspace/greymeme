import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import classes from './LikeButton.css'

const likeButton = props => {
  const iconClasses = [
    classes.Icon,
    props.liked ? classes.liked : null
  ];

  return (
    <FontAwesomeIcon
      onClick={props.clicked}
      className={iconClasses.join(' ')}
      icon='heart'
    />
  );
}
 
export default likeButton;