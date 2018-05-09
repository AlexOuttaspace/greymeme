import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Feed from './containers/Feed/Feed';
import FullPost from './containers/FullPost/FullPost';
import Forms from './components/Forms/Forms';

// FONT AWESOME SETUP
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
fontawesome.library.add(solid);

class App extends Component {

  
  render() {
    return (
      <Layout>
        <Forms />
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

export default App;
