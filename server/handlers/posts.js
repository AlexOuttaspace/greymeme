const db = require('../models/');

module.exports.createPost = async function(req, res, next) {
	try {
		let newPost = await db.Post.create({
			title: req.body.title,
			text: req.body.text,
			imageURL: req.body.imageURL,
			user: req.user_id
		})
		
		// populate newly created post with author's username
		newPost = await newPost
			.populate({path: 'user', select: 'username'})
			.execPopulate();

		return res.status(200).json(newPost);
	} catch (err) {
		next(err);
	}
}

module.exports.getPosts = async function(req, res, next) {
	try {
		let posts = await db.Post.find({})
			.populate('user', {username: true});

		if (req.user_id){
			const user = await db.User.findOne({_id: req.user_id})
				.select({likedPosts: true});
				
			posts = posts.map(async p => ({
					...p.toObject(), 
					liked: await user.checkIfPostLiked(p._id)
				 })
			);
			posts = await Promise.all(posts);
		}

		return res.status(200).json(posts);
	} catch (err) {
		next(err);
	}
}


module.exports.getSinglePost = async function(req, res, next){
	try {
		let foundPost = await db.Post.findById(req.params.post_id)
			.populate({
				path: 'comments',
				populate: {path: 'user', select: 'username'}
			});
		// if user is authenticated check whether he liked any posts or comments
		if (req.user_id){ 
			const user = await db.User.findOne({_id: req.user_id})
				.select({likedPosts: true, likedComments: true});
				
			foundPost = {
					...foundPost.toObject(), 
					liked: await user.checkIfPostLiked(foundPost._id)
			};

			comments = await Promise.all(
				foundPost.comments.map(async c => ({
					...c,
					liked: await user.checkIfCommentLiked(c._id)
				}))
			);

			foundPost = {...foundPost, comments}
		}
		console.log(foundPost)
		return res.status(200).json(foundPost);
	} catch (err) {
		next(err);
	}
}

module.exports.handlePostLikes = async function(req, res, next){
	try {
		let likesInc = 1;

		// add post to user's likedPosts array
		const userUpdate = await db.User.update(
			{_id: req.user_id},
			{$addToSet: {'likedPosts': req.params.post_id}}
		);


		// if user already liked that post, pull it's id from user's likedPosts
		if (userUpdate.nModified === 0) {
			await db.User.update(
				{_id: req.user_id},
				{$pull: {'likedPosts': req.params.post_id}}
			);

			likesInc = -1;
		}
		
		// change the number of likes of the post;
		await db.Post.update(
			{_id: req.params.post_id},
			{$inc: {likes: likesInc}}
		);
		
		//TODO return current likes number 
		res.status(200).json({likeResult: likesInc}); 

	} catch (err) {
		next(err);
	}
}

