'use strict';
/* global app: true */

/**
 * @ngdoc overview
 * @name noteTakingApp
 * @description
 * # noteTakingApp
 *
 * Main module of the application.
 */

// Main module of the application.
var app = angular.module('noteTakingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ]);

// Route for app
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/note', {
        templateUrl: 'views/note.html',
        controller: 'MainCtrl'
      })
      .when('/view/:postId', {
        templateUrl: 'views/soloPost.html',
        controller: 'PostViewCtrl'
      })
      .when('/about/:postId', {
        templateUrl: 'views/about.html',
        controller: 'PostViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  // Constant for referencing URL throughout app
app.constant('FIREBASE_URL', 'https://blazing-fire-9744.firebaseio.com/');