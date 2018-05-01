const router = require('express').Router({mergeParams: true});

const {
	createPost, 
	getPosts, 
	getSinglePost, 
	handlePostLikes
} = require('../handlers/posts');

const {loginRequired} = require('../middleware/auth');

router.route('')
	.get(getPosts)
	.post(loginRequired, createPost);

router.get('/:post_id', getSinglePost);

router.post('/:post_id/likes', loginRequired, handlePostLikes);

module.exports = router;