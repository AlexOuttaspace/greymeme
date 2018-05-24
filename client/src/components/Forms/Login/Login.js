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
          type: 'text',
          name: 'email',
          placeholder: 'email',
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
      }
    },
    failedToSubmit: false
  }

  inputHandler = e => {
    const {name, value} = e.target;

    this.setState(async (prevState) => {

      const updatedInputs = {...prevState.inputs};
      updatedInputs[name].value = value;
      updatedInputs[name].touched = true;

      return { inputs: updatedInputs };
    }, async () => {
      if (this.state.failedToSubmit) {
        await this.checkInput(name);
      }
    });
  }

  checkAllInputs = async () => {
    let lastValidationSucceed = false;
    let formIsValid = true;
    for (let name in this.state.inputs) {
      lastValidationSucceed = await this.checkInput(name);
      if (!lastValidationSucceed) {
        formIsValid = false;
      }
    }
    return formIsValid;
  }

  checkInput = name => {
    return new Promise((resolve, reject) => {
      this.setState(prev => {
        const validatedInput = {...prev.inputs[name]};
        const inputValidation = validate(
          validatedInput.value, 
          validatedInput.validation
        )
        if (typeof inputValidation === 'string') {
          validatedInput.valid = false;
          validatedInput.validationMessage = inputValidation;
        } else {
          validatedInput.valid = inputValidation;
          validatedInput.validationMessage = '';
        }

        return {
          ...prev,
          inputs: {
            ...prev.inputs,
            [name]: validatedInput
          }
        }
      }, () => resolve(this.state.inputs[name].valid));
    });
  }

  formSubmitHandler = async e => {
    e.preventDefault();
    const validated = await this.checkAllInputs();

    if (validated) {
      this.props.submited();
      console.log('sending request! (not really)')
    } else {
      this.setState({failedToSubmit: true})
    }
  }

  render(){
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
        valid={formElement.input.valid || !this.state.failedToSubmit}
        changed={this.inputHandler}
        validationMessage={formElement.input.validationMessage}
      />
    ));

    return (
      <form noValidate className={classes.Form} onSubmit={this.formSubmitHandler}>
        <h2>Authentication</h2>
        {inputs}
        <div className={classes.Buttons}>
          <Button type='success'>Login</Button>
        </div>
        <span>{this.state.formIsValid && 'form is valid'}</span>
      </form>
    );
  }
}

export default Login;