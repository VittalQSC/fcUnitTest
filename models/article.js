var mongoose = require('mongoose');
module.exports = article = mongoose.Schema({
	title: {type: String, default: "title"},
	author: {type: String, default: "author"},
	text: {type: String, default: "text"},
	// createDate: {type: Date, default: Date.now}
})