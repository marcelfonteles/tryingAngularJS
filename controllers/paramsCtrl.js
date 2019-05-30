var app = angular.module('app03');

app.controller('ParamsCtrl', ["$scope", "$log", "$routeParams", "nameService", function($scope, $log, $routeParams, nameService) {
  $scope.params = $routeParams.id;
  $scope.imWatchingYou = nameService.name;

  $scope.$watch('imWatchingYou', function() {
    nameService.name = $scope.imWatchingYou;
  })
}])