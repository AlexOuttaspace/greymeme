import React, {Component} from 'react';

import classes from '../Forms.css';

import Button from '../../UI/Button/Button';


class Login extends Component {
  state = {
    inputs: {
      email: {
        value: '',
        validation: {
          message: null,
          required: true
        },
        valid: false
      },
      password: {
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
    console.log(this.state)
    return (
      <form className={classes.Form}>
        <h2>Authentication</h2>
        <input 
          type="text" 
          name='email' 
          placeholder='email' 
          value={this.state.inputs.email.value}
          onChange={this.inputHandler}
        />
        <input 
          type="password" 
          name='password' 
          placeholder='password' 
          value={this.state.inputs.password.value}
          onChange={this.inputHandler}
        />
        <div className={classes.Buttons}>
          <Button type='success'>Login</Button>
        </div>
      </form>
    );
  }
}


export default Login;