var app = angular.module('app03');

app.controller('ParamsCtrl', ["$scope", "$log", "routeParams", function($scope, $log, $routeParams) {
  $scope.params = $routeParams.id;
}])