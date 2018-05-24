import React, { Component } from 'react';
import {Route, Redirect, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Layout from './components/Layout/Layout';
import Feed from './containers/Feed/Feed';
import FullPost from './containers/FullPost/FullPost';
import Forms from './components/Forms/Forms';

import Spinner from './components/UI/Spinner/Spinner';

// FONT AWESOME SETUP
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
fontawesome.library.add(solid);



class App extends Component {
  render() {
    return (
      <Layout>
        <Forms />
        {this.props.loading && <Spinner fullscreen/>}
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

const mapStateToProps = state => ({
  loading: state.general.loading
});

export default withRouter(connect(mapStateToProps)(App));
