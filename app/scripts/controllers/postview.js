'use strict';

/**
 * @ngdoc function
 * @name noteTakingApp.controller:PostViewCtrl
 * @description
 * # PostViewCtrl
 * Controller of the noteTakingApp
 */

angular.module('noteTakingApp')
  .controller('PostViewCtrl', ['$scope', '$routeParams', '$window', 'Post', function ($scope, $routeParams, $location, Post) {
    
    // Find the post by parsing the url for the ID
    $scope.post = Post.find($routeParams.postId);

    $scope.previewMode = true;

    // Show edit mode
    $scope.switchToEdit = function() {
      $scope.previewMode = false;
    };

    // Show preview mode
    $scope.switchToPreview = function() {
      $scope.previewMode = true;
    };

  }]);
