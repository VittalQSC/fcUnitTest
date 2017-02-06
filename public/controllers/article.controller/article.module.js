angular.module('articleModule', [])
	.component('article', {
	  templateUrl: '/controllers/article.controller/article.template.html',
	  controller: ['$rootScope', '$scope', '$http', ArticleController],
      bindings: {
    	    article: '<' // or key: '<' it depends on what binding you need
      }
	});


function ArticleController($rootScope, $scope, $http) {
	$scope.remove = function (article) {
		$http.get('/articles/remove/' + article._id)
			.then(function () {console.log('suc');}, function () {console.log('err');})
		$rootScope.$broadcast('updateArticles');
	};
}
