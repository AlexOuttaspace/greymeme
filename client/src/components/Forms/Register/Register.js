import React, {Component} from 'react';

import classes from '../Forms.css';

import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';

import {validate} from '../../../shared/utility';

class Login extends Component {
  state = {
    inputs: {
      email: {
        inputType: 'input',
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        config: {
          type: 'email',
          name: 'email',
          placeholder: 'email',
        },
        validationMessage: '',
        valid: false,
        touched: false
      },
      username: {
        inputType: 'input',
        value: '',
        validation: {
          required: true,
          minLength: 2,
          maxLength: 16
        },
        config: {
          type: 'username',
          name: 'username',
          placeholder: 'username',
        },
        validationMessage: '',
        valid: false,
        touched: false
      },
      password: {
        inputType: 'input',
        value: '',
        validation: {
          required: true,
          minLength: 8
        },
        config: {
          type: 'password',
          name: 'password',
          placeholder: 'password',
        },
        validationMessage: '',
        valid: false,
        touched: false
      },
      confirmPassword: {
        inputType: 'input',
        value: '',
        validation: {
          required: true,
          minLength: 8
        },
        config: {
          type: 'password',
          name: 'confirmPassword',
          placeholder: 'confirm password',
        },
        validationMessage: '',
        valid: false,
        touched: false
      }
    },
    formIstValid: false
  }

  inputHandler = e => {
    const {name, value} = e.target;

    this.setState(prevState => {

      const updatedInputs = {...prevState.inputs};
      updatedInputs[name].value = value;
      updatedInputs[name].touched = true;

      const inputValidation = validate(
        updatedInputs[name].value, 
        updatedInputs[name].validation
      )

      if (typeof inputValidation === 'string') {
        updatedInputs[name].valid = false;
        updatedInputs[name].validationMessage = inputValidation;
      } else {
        updatedInputs[name].valid = inputValidation;
        updatedInputs[name].validationMessage = '';
      }
      return { inputs: updatedInputs };
    }, () => this.setState(this.checkFormValidation()));
  }

  checkFormValidation () {
    this.setState(prev => {
      for (let key in this.state.inputs) {
        console.log(this.state.inputs[key].valid)
        if (!this.state.inputs[key].valid){
          return {formIstValid: false};
        }
      }
      return {formIstValid: true};
    });
  }

  render(){
    console.log(this.state.formIstValid)
    const formElementsArray = [];
    for (let key in this.state.inputs) {
      formElementsArray.push({
        id: key,
        input: this.state.inputs[key]
      });
    }
    const inputs = formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        type={formElement.input.inputType}
        config={formElement.input.config}
        valid={formElement.input.valid}
        changed={this.inputHandler}
        validationMessage={formElement.input.validationMessage}
      />
    ));

    return (
      <form className={classes.Form}>
        <h2>Authentication</h2>
        {inputs}
        <div className={classes.Buttons}>
          <Button type='success'>Register</Button>
        </div>
        <span>{this.state.formIstValid && 'form is valid'}</span>
      </form>
    );
  }
}


export default Login;