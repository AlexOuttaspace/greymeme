const router = require('express').Router({mergeParams: true});

const {
	createComment, 
	getComments,
	handleCommentLikes
} = require('../handlers/comments');

const {loginRequired} = require('../middleware/auth');

router.route('/')
	.get(getComments)
	.post(loginRequired, createComment);

router.post('/:comment_id/likes', loginRequired, handleCommentLikes)

module.exports = router;