import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import Dropdown from '../UI/Dropdown/Dropdown';
import NewPost from './NewPost/NewPost';

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
        form = (
          <NewPost />
        )
        break;
      case 's':
        form = (
          <div>Test</div>
        )
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



function parseQuery(queryString) {
  var query = {};
  var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString)
    .split('&');
  for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split('=');
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}