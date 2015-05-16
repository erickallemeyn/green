var gs = angular.module('gs', ['ngResource', 'ngRoute', 'ngCookies', 'gs.services']);


gs.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/stories', {
        templateUrl: 'stories.html',
        controller: 'storiesController'
      }).
      when('/story', {
        templateUrl: 'story.html',
        controller: 'storyController'
      }).
      when('/comments', {
        templateUrl: 'comments.html',
        controller: 'commentController'
      }).
      otherwise({
        redirectTo: '/stories'
      });
  }]);
  
