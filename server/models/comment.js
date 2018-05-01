const mongoose = require('mongoose');

commentSchema = mongoose.Schema({
		text: {
			type: String, 
			required: true
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true
		},
		post: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Post',
			required: true
		},
		likes: {
			type: Number,
			default: 0
		}
	}, {
		timestamps: true
});

// add comment to post
commentSchema.post('save', async function(){
	const Post = mongoose.model('Post');
	await Post.update(
		{_id: this.post},
		{$push: {comments:this._id}}
	)
})


module.exports = mongoose.model('Comment', commentSchema);