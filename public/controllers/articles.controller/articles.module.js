angular.module('articles', ['articleModule'])
	.controller('ArticlesCtrl', function ($scope, $http) {
		console.log("IM {articles} HERE");
		$scope.ar = "areara";	

		$http.get('/articles/').then(function (result) {
			$scope.articles = result.data;
		}, function (err) {console.log(err);});		

		$scope.$on('updateArticles', function () {
			console.log("UPDATE ARTICLES");
			$http.get('/articles/').then(function (result) {
				$scope.articles = result.data;
				console.log($scope.articles);
			}, function (err) {console.log(err);});					
		}) 		
	})
	.component('articlesList', {
	  templateUrl: '/controllers/articles.controller/articles.template.html',
	  controller: ['$scope', '$http', function ArticlesListController($scope, $http) {
	  		console.log("ArticlesListController ")
			// $scope.articles = $ctrl.articles;

			// $http.get('/articles/').then(function (result) {
			// 	$scope.articles = result.data;
			// }, function (err) {console.log(err);});		

			// $scope.$on('updateArticles', function () {
			// 	$http.get('/articles/').then(function (result) {
			// 		$scope.articles = result.data;
			// 	}, function (err) {console.log(err);});					
			// })  		
	    }],
	  bindings: {
	     articles: '=' // or key: '<' it depends on what binding you need
	  }
	});