'use strict';

// Main Controller for App
app.controller('MainCtrl', function($scope, Post, $location) {

  // Assign posts to 'all' from factory
  $scope.posts = Post.all;

  // Submit Post function. Add to server, then relocate to index
  $scope.submitPost = function() {
    Post.create($scope.post).then($location.path('/'));
  };
 
  // Delete post function
  $scope.deletePost = function(post) {
    Post.delete(post);
  };

  // List Tween animation
  $scope.slide = function() {
    var list = document.querySelectorAll('.list'),
      slideTween = function() {

        // Select individual list item
        this.className = 'list';
        TweenMax.to(this, 0.2, {left: '-140px'});

        // Animate back to original position
        if(this.style.left === '-140px') {
          TweenMax.to(this, 0.2, {left: '0px'});
        }
      };

    // Loop through list and call animation function on click
    for (var i = 0; i < list.length; i++) {
      list[i].onclick = slideTween;
    }
  };

});