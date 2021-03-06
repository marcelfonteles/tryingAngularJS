var app = angular.module('app03');

app.config(["$routeProvider", function($routeProvider) {

  $routeProvider
    .when('/', {
     templateUrl: '../templates/shared/index.html',
     controller: 'AppCtrl'
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
      templateUrl: '../templates/shared/404.html'
    })
}])