const mongoose = require('mongoose');

postSchema = mongoose.Schema({
		title: {
			type: String, required: true
		},
		imageURL: {
			type: String, 
			required: true
		},
		user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User'
		},
		comments: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Comment'
		}],
		likes: {
			type: Number,
			default: 0
		},
		tags: [{
			type: String,
			min: 2
		}]
	}, {
		timestamps: true
});


module.exports = mongoose.model('Post', postSchema);