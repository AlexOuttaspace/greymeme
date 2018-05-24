import * as actionTypes from './actionTypes';

export const postUploadStart = (post) => ({
  type: actionTypes.POST_UPLOAD_START,
  post
});

export const postLike = (_id) => ({
  type: actionTypes.POST_LIKE,
  _id
});

export const postLikeComment = (post_id, comment_id) => ({
  type: actionTypes.POST_LIKE_COMMENT,
  post_id,
  comment_id
});

export const postAddComment = (post_id, comment) => ({
  type: actionTypes.POST_ADD_COMMENT,
  post_id,
  comment
});