var app = angular.module('app03');

app.controller('ContactsCtrl', ["$scope", "$http", "$log", "$routeParams", function($scope, $http, $log, $routeParams) {
  $scope.app = 'Welcome to Contacts Index';
  $scope.usuario = {
        nome: 'Marcel Vieira'
  }
  $scope.clickedContactButton = false;
  $scope.contacts = [
                    {name: "Contact 1", phone: "+55 85 9 9999-9999", address: "Street 21, 60125"},
                    {name: "Contact 2", phone: "+55 85 9 9999-9999", address: "Street 21, 60125"},
                    {name: "Contact 3", phone: "+55 85 9 9999-9999", address: "Street 21, 60125"},
                    {name: "Contact 4", phone: "+55 85 9 9999-9999", address: "Street 21, 60125"},
                    {name: "Contact 5", phone: "+55 85 9 9999-9999", address: "Street 21, 60125"}
                    ];

  $scope.deleteContacts = function(contacts){
    $scope.contacts = contacts.filter(function(contacts_i) {
      return contacts_i.selected !== true
    })
    alert("Contact(s) erased with success!")
  }

  $scope.addContactBehave = function() {
    if ($scope.clickedContactButton) {
      $scope.clickedContactButton = false;
      delete $scope.contact;
    } else {
      $scope.clickedContactButton = true;
    }
  }
  $scope.submit = function(contact) {
    $scope.contacts.push(angular.copy(contact));
    delete $scope.contact;
    $scope.clickedContactButton = false
  }
}]);