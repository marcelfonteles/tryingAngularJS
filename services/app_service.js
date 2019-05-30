var app = angular.module('app03');

app.config(["$routeProvider", function($routeProvider) {

  $routeProvider
    .when('/', {
     templateUrl: '/tryingAngularJS/app/templates/shared/index.html'
    })
    .when('/first', {
      templateUrl: '../templates/shared/first.html'
    })
    .when('/second', {
      templateUrl: '../templates/shared/second.html'
    })
    .when('/welcome', {
      templateUrl: '../templates/shared/welcome.html'
    })
    .when('/params/:id', {
      templateUrl: '../templates/shared/params.html',
      controller: 'ParamsCtrl'
    })
    .when('/contacts/index', {
      templateUrl: '../templates/contacts/index.html',
      controller: 'ContactsCtrl'
    })
    .otherwise({
      //templateUrl: '../templates/shared/404.html'
      template: '<h1>Not Found!</h1>'
    })
}])