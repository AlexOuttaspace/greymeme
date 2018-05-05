import React from 'react';
import {Link} from 'react-router-dom';

import LikeButton from '../UI/LikeButton/LikeButton';

import classes from './Post.css';


const post = props => {
  const tags = props.tags.map(t => 
    <Link key={t} to={`/posts?tag=${t}`}>{t}</Link>
  )

  return (
    <article className={classes.Post}>
      <header>
        <h2> <Link to={`/posts/${props._id}`}>{props.title}</Link> </h2> 
        <p>
          {props.likes} 
          <LikeButton liked={props.liked} clicked={props.postLiked}/>
        </p>
      </header>
      
      <p className={classes.author}>
        Posted By <a href="/">{props.user.username}</a> 4 hours ago
      </p>
      <img src={props.imageURL} alt="meme"/>
      <footer className={classes.footer}>
        <p>
          <a href="">{props.comments.length} comments</a>
        </p>
        <p className={classes.tags}> 
          {tags}
        </p>
      </footer>
    </article>
  )
}
 
export default post;