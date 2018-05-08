import React, { Component, Fragment } from 'react';
import {withRouter} from 'react-router-dom';
import Dropdown from '../../components/UI/Dropdown/Dropdown';
import NewPost from '../../components/Forms/NewPost/NewPost';


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
          <Fragment>
            <Dropdown show={!!form} closeDropdown={this.closeFormHandler} >
              
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