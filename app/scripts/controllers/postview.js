'use strict';
/**
 * @ngdoc overview
 * @name noteTakingApp
 * @description
 * # noteTakingApp
 *
 * Post controller of the application.
 */

app.controller('PostViewCtrl', function ($scope, $routeParams, $window, Post) {

	var converter = new $window.Showdown.converter();
 
	// Find the post by parsing the url for the ID
	$scope.post = Post.find($routeParams.postId);

	$scope.previewMode = true;

	$scope.switchToEdit = function() {
		$scope.previewMode = false;
	};

	$scope.switchToPreview = function() {
		$scope.previewMode = true;
	};
 
});

// ALTERNATE DIRECTIVE FOR MARKDOWN CONVERSION
//app.directive('bgzMarkdown', function($window) {
//    var converter = new $window.Showdown.converter();
//
//    return {
//      restrict: 'EA',
//      link: function(scope, element, attrs) {
//        var htmlText = converter.makeHtml(element.text());
//        element.html(htmlText);
//      }
//    };
//});