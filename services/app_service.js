var app = angular.module('app03');

app.config(["$routeProvider", function($routeProvider) {

  $routeProvider
    .when('/', {
     templateUrl: '/tryingAngularJS/shared_index.html'
    })
    .when('/first', {
      templateUrl: '/tryingAngularJS/first.html'
    })
    .when('/second', {
      templateUrl: '/tryingAngularJS/second.html'
    })
    .when('/welcome', {
      templateUrl: '/tryingAngularJS/welcome.html'
    })
    .when('/params/:id', {
      templateUrl: '/tryingAngularJS/params.html',
      controller: 'ParamsCtrl'
    })
    .when('/contacts/index', {
      templateUrl: '/tryingAngularJS/contacts_index.html',
      controller: 'ContactsCtrl'
    })
    .when('/teste', {
      templateUrl: '/tryingAngularJS/teste.html'
    })
    .otherwise({
      templateUrl: '/tryingAngularJS/404.html'
    })
}])