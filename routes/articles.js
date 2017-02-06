var express = require('express');
var router = express.Router();
var Article = require('./../models/Article.js');

function isAuthenticated (req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler 
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects

    //allow all get request methods
    if (req.isAuthenticated()){
        return next();
    }

    // if the user is not authenticated then redirect him to the login page
    return res.redirect('/');
}

// router.use('/', isAuthenticated);

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  Article.find({}, function (err, articles) {	
 	// console.log(articles)
 	// res.render('articles', {articles})
 	res.json(articles)
  });	
});

/* GET users listing. */
router.get('/updated/:id', function(req, res, next) {
  var id = req.params.id;
  var body = req.query;
  console.log(body);
  var newArticle = {
  	title: body.title,
  	author: body.author,
  	text: body.text
  }

  // res.send(newArticle)
  Article.findByIdAndUpdate(id, newArticle, {new: true}, function (err, article) {
    // res.render('article', {article});
    res.redirect('/articles');
  });	
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;

  Article.findById(id, function (err, article) {
  	if (err) {console.log('ERR');}

  	res.render('article',{article: article});
  });	
});

router.get('/update/:id', function(req, res, next) {
  var id = req.params.id;
  Article.findById(id, function (err, article) {
    if (err) {console.log('ERR');}

    res.render('editArticle', {article:article});
  }); 
});

router.get('/remove/:id', function(req, res, next) {
  var id = req.params.id;
  
  Article.remove({_id: id}, function (err, article) {
    if (err) {console.log('ERR');}

    res.redirect('/articles');
  }); 

});

router.post('/', function (req, res) {
	var body = req.body;
	console.log(body);


	var article = new Article(body);

	article.save(function (err) {
		if (err) {console.log(err);}
	});

	// res.send(req.body);
});

module.exports = router;
