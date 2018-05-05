import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Post from '../../components/Post/Post';
import Comments from '../../components/Post/Comments/Comments';
import CommentInput from '../../components/Post/Comments/CommentInput/CommentInput';
import Card from '../../components/UI/Card/Card';

import * as actions from '../../store/actions/'

class FullPost extends Component {
  render() { 
    return (
      <Fragment>
        <Card>
          <Post 
            {...this.props.post} 
            postLiked={()=>this.props.onPostLiked(this.props.post._id)}
          />
        </Card>

        <Card>
          <CommentInput
            commentAdded={this.props.onCommentAdded.bind(null, this.props.post._id)}
          />
        </Card>

        <Card>
          <Comments
            commentLike={this.props.onCommentLiked.bind(null, this.props.post._id)} 
            comments={this.props.post.comments}
          />
        </Card>
      </Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts.find(p => p._id === ownProps.match.params._id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPostLiked: _id => dispatch(actions.postLike(_id)),
    onCommentAdded: (post_id, comment) => dispatch(actions.postAddComment(post_id, comment)),
    onCommentLiked: (post_id, comment_id) => dispatch(actions.postLikeComment(post_id, comment_id))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(FullPost);