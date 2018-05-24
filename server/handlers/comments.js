const db = require('../models/');

module.exports.createComment = async function(req, res, next) {
	try {
    // create new comment
		let newComment = await db.Comment.create({
			text: req.body.text,
      user: req.user_id,
      post: req.params.post_id
    });

    // populate created comment with user's username
    newComment = await newComment
      .populate({
        path: 'user', 
        select: 'username'
      }).execPopulate();

    // return create comment
		return res.status(200).json(newComment);
	} catch (err) {
		return next(err);
	}
}

module.exports.getComments = async function(req, res, next) {
	try {
    // find post and populate it by comments
    const foundPost = await db.Post.findById(req.params.post_id)
      .populate({
        path: 'comments',
        populate: {path: 'user', select: 'username'}
      });

    // get comments array
    const comments = [...foundPost.comments];
    console.log(comments)
    // return comments
		return res.status(200).json(comments);
	} catch (err) {
		next(err);
	}
}

module.exports.handleCommentLikes = async function(req, res, next) {
  try {
    let likesInc = 1;

		// add post to user's likedPosts array
		const userUpdate = await db.User.update(
			{_id: req.user_id},
			{$addToSet: {'likedComments': req.params.comment_id}}
		);


		// if user already liked that post, pull it's id from user's likedPosts
		if (userUpdate.nModified === 0) {
			await db.User.update(
				{_id: req.user_id},
				{$pull: {'likedComments': req.params.comment_id}}
			);
			likesInc = -1;
		}
		
		// change the number of likes of the post;
		await db.Comment.update(
			{_id: req.params.comment_id},
			{$inc: {likes: likesInc}}
		);

		res.status(200).json({likeResult: likesInc});
  } catch(err){
    next(err);
  }
}
