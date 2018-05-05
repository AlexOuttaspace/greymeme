import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actions from '../../store/actions/';

import Post from '../../components/Post/Post';
import Card from '../../components/UI/Card/Card';

class Feed extends Component {
  


  toggleLikeHandler = (_id) => {
    this.setState(prev => {
      const posts = prev.posts.map(p =>
        p._id === _id ? {...p, liked: !p.liked} : p
      );
      return {posts};
    });
  }

  render() { 
    const posts = this.props.posts.map(p =>
      <Card key={p._id}>
        <Post {...p} postLiked={()=>this.props.onPostLiked(p._id)}/>
      </Card>
    );

    return (
      <div>
        {posts}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPostLiked: _id => dispatch(actions.postLike(_id))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Feed);