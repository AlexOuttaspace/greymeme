import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Feed from './containers/Feed/Feed';
import FullPost from './containers/FullPost/FullPost';
import Dropdown from './components/UI/Dropdown/Dropdown';
import withForms from './hoc/withForms/withForms';


// FONT AWESOME SETUP
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
fontawesome.library.add(solid);

class App extends Component {
  state = {
    showDropdown: false
  }
  
  render() {
    return (
      <Layout>
        <Dropdown 
          show={this.state.showDropdown}
          toggleDropdown={this.toggleDropdownHandler}
        >
          <div>
            yohoho!
          </div>
        </Dropdown>
        <Switch>
          <Route exact path='/posts/:_id' component={FullPost}/>
          <Route path='/posts' component={Feed}/>
          <Route path='/test' render={props => <h1>It's working</h1>}/>
          <Redirect from='/' to='/posts'/>
        </Switch>
      </Layout>
    );
  }
}

export default withForms(App);
