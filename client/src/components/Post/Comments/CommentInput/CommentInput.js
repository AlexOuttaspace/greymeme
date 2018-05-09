import React, { Component } from 'react';

import classes from './CommentInput.css';

const profilePicUrl = 'https://accounts-cdn.9gag.com/media/default-avatar/1_16_100_v0.jpg';

class CommentInput extends Component {
  state = {
    comment: {
      _id: 'adfsg',
      text: '',
      user: {
        username: 'Rick Astley'
      },
      likes: 0,
      liked: false
    }
  }

  newCommentSubmitHandler = e => {
    e.preventDefault();
    this.props.commentAdded(this.state.comment);
    this.setState(prevState => ({
      comment: {
        ...prevState.comment,
        text: '',
        _id: prevState._id + '1'
      }
    }));
  }

  commentInputHandler = e => {
    const {name, value} = e.target;
    this.setState(prevState => {
      const changedInput = {...prevState[name]}
      return {
        ...prevState, 
        [name]:{
          ...changedInput, 
          text: value
        }
      }
    });
  }

  render() { 
    return ( 
      <div className={classes.CommentInput}>
        <img src={profilePicUrl} alt=""/>
        <form 
          className={classes.Wrapper}
          onSubmit={this.newCommentSubmitHandler}
        >
          <textarea 
            value={this.state.comment.text}
            name='comment'
            placeholder='Type your comment...'
            onChange={this.commentInputHandler}
          />
          <button type='submit'>Post</button>
        </form>
      </div>
      
     )
  }
}
 
export default CommentInput;