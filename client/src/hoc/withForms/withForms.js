import React, { Component, Fragment } from 'react';
import {withRouter} from 'react-router-dom';
import Dropdown from '../../components/UI/Dropdown/Dropdown';

const withForms = WrappedComponent => {
  return withRouter (
    class extends Component {

      closeFormHandler = () => {
        this.props.history.push(
          this.props.location.pathname
        )
      }

      render() { 
        const queryString = this.props.location.search;
        const formType = parseQuery(queryString).form
        
        let form = null;

        switch (formType) {
          case 'uploadPost':
            form = (
              <div>Hello im a new post form</div>
            )
            break;
          default:
            break;
        }

        return  (
          <Fragment>
            <Dropdown show={!!form} closeDropdown={this.closeFormHandler} >
              <button onClick={this.closeFormHandler}>X</button>
              {form}
            </Dropdown>

            <WrappedComponent {...this.props} />
          </Fragment>
        )
      }
    }
  )
}
 
export default withForms;

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