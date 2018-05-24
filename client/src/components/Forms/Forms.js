import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import {parseQuery} from '../../shared/utility';

import Dropdown from '../UI/Dropdown/Dropdown';

import NewPost from './NewPost/NewPost';
import Login from './Login/Login';
import Register from './Register/Register';

class Forms extends Component {
  state = {
    formType: ''
  }

  closeFormHandler = () => {
    this.props.history.push(
      this.props.location.pathname
    );
  }
  

  static getDerivedStateFromProps (nextProps) {
    const queryString = nextProps.location.search;
    const formType = parseQuery(queryString).form;
    if (!!formType) {
      return {
        show: true,
        formType
      };
    } else {
      return {
        show: false
      }
    }
  }

  shouldComponentUpdate (nextProps) {
    return this.props.location.search !== nextProps.location.search
  }

  render() { 
    let form = null;

    switch (this.state.formType) {
      case 'uploadPost':
        form = <NewPost submited={this.closeFormHandler} />
        break;
      case 'login':
        form = <Login submited={this.closeFormHandler} />
        break;
      case 'register':
        form = <Register submited={this.closeFormHandler} />
        break;
      default:
        break;
    }

    return  (
      <Dropdown show={this.state.show} closeDropdown={this.closeFormHandler} >
        {form}
      </Dropdown>
    )
  }
}

export default withRouter(Forms);