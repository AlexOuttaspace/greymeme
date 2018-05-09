import React, {Component} from 'react';

import classes from '../Forms.css';

import Button from '../../UI/Button/Button';


class NewPost extends Component {
  state = {
    inputs: {
      title: {
        value: '',
        validation: {
          message: null,
          required: true
        },
        valid: false
      },
      imageURL: {
        value: '',
        validation: {
          message: null,
          required: true
        },
        valid: false
      }
    }
  }

  inputHandler = e => {
    const {name, value} = e.target;

    this.setState(prevState => {
      const updatedInputs = {...prevState.inputs};
      updatedInputs[name].value = value;
      return { inputs: updatedInputs };
    });
  }

  render(){
    return (
      <form className={classes.Form}>
        <h2>Create a new post</h2>
        <input 
          type="text" 
          name='title' 
          placeholder='title' 
          value={this.state.inputs.title.value}
          onChange={this.inputHandler}
        />
        <input 
          type="text" 
          name='imageURL' 
          placeholder='image URL' 
          value={this.state.inputs.imageURL.value}
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