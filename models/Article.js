var mongoose = require('mongoose');
var articleSchema = require('./article.js');

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
