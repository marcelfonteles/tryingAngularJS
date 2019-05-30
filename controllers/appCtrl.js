var app = angular.module('app03');

app.controller('AppCtrl', ['$scope', '$log', 'nameService', function($scope, $log, nameService) {
  $scope.app = "Index Ctrl";
  $scope.imWatchingYou = nameService.name
  $scope.$watch('imWatchingYou', function() {
    nameService.name = $scope.imWatchingYou
  })
}])