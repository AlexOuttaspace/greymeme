const mongoose = require('mongoose'),
			bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true
	},
	profileImageUrl: {
		type: String
	},
	likedPosts: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Post'
	}],
	likedComments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment'
	}]
});

userSchema.pre('save', async function(next){
	try {
		if(this.isModified('password')){
			this.password = await bcrypt.hash(this.password, +process.env.SALTROUNDS);
		} 
		return next();
	} catch (err) {
		return next(err);
	}
});

userSchema.methods.comparePassword = async function(candidatePassword, next) {
	try {
		const isMatch = await bcrypt.compare(candidatePassword, this.password);
		return isMatch;
	} catch (err) {
		return next(err);
	}
}

userSchema.methods.checkIfPostLiked = async function checkIfPostLiked(data_id){
	Post = mongoose.model('Post')
	const wasLiked = await Post.findOne({ 
		$and: [
			{_id: data_id},
			{_id: {$in: this.likedPosts}}
		]
	}).count();

	return !!wasLiked;
}

userSchema.methods.checkIfCommentLiked = async function checkIfCommentLiked(data_id){
	Comment = mongoose.model('Comment')
	const wasLiked = await Comment.findOne({ 
		$and: [
			{_id: data_id},
			{_id: {$in: this.likedComments}}
		]
	}).count();

	return !!wasLiked;
}

module.exports = mongoose.model('User', userSchema);