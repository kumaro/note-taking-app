'use strict';
 
app.controller('PostViewCtrl', function ($scope, $routeParams, Post, $location) {
 
	// Find the post by parsing the url for the ID
	$scope.post = Post.find($routeParams.postId);

	// Save function
	$scope.savePost = function(post) {
		Post.save(post).then($location.path('/'));
		//console.log('yes');
	};
 
});