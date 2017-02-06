var express = require('express');
var router = express.Router();
var Article = require('./../models/Article.js');


var article1 = new Article({
	title: "Title2",
	author: "Author2",
	text: "Text2",
	createDate: new Date()
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  Article.find({}, function (err, articles) {	
 	 res.send(articles);
  });	
});


module.exports = router;
