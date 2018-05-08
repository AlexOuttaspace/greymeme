import React from 'react';

import classes from './Login.css';

import Button from '../../UI/Button/Button';


const newPost = () => {


  return (
    <form className={classes.Form}>
      <h2>Create a new post</h2>
      <input type="text" name='title' placeholder='title'/>
      <input type="text" name='imageURL' placeholder='image URL'/>
      <div className={classes.Buttons}>
        <Button type='success'>Post!</Button>
      </div>
      
    </form>
  );
}
 
export default newPost;