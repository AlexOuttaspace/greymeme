import React from 'react';

import LikeButton from '../../../UI/LikeButton/LikeButton';

import classes from './Comment.css';

const profilePicUrl = 'https://accounts-cdn.9gag.com/media/default-avatar/1_16_100_v0.jpg'

const comment = props => {
  return (
    <section className={classes.Comment}>
      <img src={profilePicUrl} alt={props.user.username}/>
      <div className={classes.Content}>
        <header>
          <span>
            <h4>{props.user.username} </h4>
            <span className={classes.since}>24 minutes ago</span>
          </span>
          
          <span className={classes.Like}>
            <span>{props.likes}</span>
            <LikeButton clicked={props.clicked} liked={props.liked}/>
          </span>
        </header>
        <p className={classes.text}>{props.text}</p>
        
        
      </div>
      
    </section>
    
  )
}
 
export default comment;