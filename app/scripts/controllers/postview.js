'use strict';
/**
 * @ngdoc overview
 * @name noteTakingApp
 * @description
 * # noteTakingApp
 *
 * Post controller of the application.
 */

app.controller('PostViewCtrl', ['$scope', '$routeParams', '$window', 'Post', 
	function ($scope, $routeParams, $window, Post) {
 
	// Find the post by parsing the url for the ID
	$scope.post = Post.find($routeParams.postId);

	$scope.previewMode = true;

	// Show edit mode
	$scope.switchToEdit = function() {
		$scope.previewMode = false;
	};

	// Show preview mode
	$scope.switchToPreview = function(post) {
		$scope.previewMode = true;
	};

 
}]);