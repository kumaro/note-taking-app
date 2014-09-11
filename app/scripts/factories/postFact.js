'use strict';
/**
 * @ngdoc overview
 * @name noteTakingApp
 * @description
 * # noteTakingApp
 *
 * Factory of the application.
 */

app.factory('Post', ['$firebase', '$window', 'FIREBASE_URL', function($firebase, $window, FIREBASE_URL) {

	var ref = new $window.Firebase(FIREBASE_URL + 'lists');
	var posts = $firebase(ref).$asArray();

	var Post = {
	  all: posts,
	  create: function(post) {
	    return posts.$add(post);
	  },
	  find: function(postId) {
	    return $firebase(ref.child(postId)).$asObject();
	  },
	  delete: function(post) {
	    return posts.$remove(post);
	  }
	};
 
	return Post;
}]);