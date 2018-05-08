import React, {Component} from 'react';

import classes from './NewPost.css';

import Button from '../../UI/Button/Button';


class NewPost extends Component {
  state = {
    title: '',
    imageURL: ''
  }

  inputHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    return (
      <form className={classes.Form}>
        <h2>Create a new post</h2>
        <input 
          type="text" 
          name='title' 
          placeholder='title' 
          value={this.state.title}
          onChange={this.inputHandler}
        />
        <input 
          type="text" 
          name='imageURL' 
          placeholder='image URL' 
          value={this.state.imageURL}
          onChange={this.inputHandler}
        />
        <div className={classes.Buttons}>
          <Button type='success'>Post!</Button>
        </div>
      </form>
    );
  }
}


export default NewPost;