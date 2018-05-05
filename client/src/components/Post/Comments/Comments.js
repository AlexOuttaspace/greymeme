import React, {Fragment} from 'react';

import Comment from './Comment/Comment';

const comments = props => {
  const comments = props.comments.map(c => 
    <Comment key={c._id} clicked={() => props.commentLike(c._id)} {...c}/>
  )

  return (
    <Fragment>
      {comments}
    </Fragment>
  )
}
 
export default comments;