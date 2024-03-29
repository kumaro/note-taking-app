'use strict';

/**
 * @ngdoc function
 * @name noteTakingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the noteTakingApp
 */
angular.module('noteTakingApp')
  .controller('MainCtrl', ['$scope', 'Post', '$location', function ($scope, Post, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Assign posts to 'all' from factory
    $scope.posts = Post.all;

    // Submit Post function
    $scope.submitPost = function() {
      Post.create($scope.post).then($location.path('/'));
    };
    
    // Delete post function
    $scope.deletePost = function(post) {
      Post.delete(post);
    };

    // Add about section
    $scope.addAbout = function() {
      $scope.aboutShow = true;
      angular.element('ul').css('width', '182px');
    };

    // Remove about section
    $scope.deleteAbout = function() {
      $scope.aboutShow = false;
      angular.element('ul').css('width', '155px');
    };

    // List Tween animation
    $scope.slide = function() {

      var list = $('.list'),
          //function for Tween Animation
          slideTween = function() {

            this.className = 'list';
            TweenMax.to(this, 0.2, {left: '-140px'});

            if (this.style.left === '-140px') {
              TweenMax.to(list, 0.2, {left: '0'});
            }
          };
      
      // Loop through all elements and Tween active
      for (var i = 0; i < list.length; i++) {
        list[i].onclick = slideTween;
      }
    };

  }]);
