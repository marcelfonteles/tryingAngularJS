var app = angular.module('app03');

app.directive('firstDirective', function() {
  return {
    template: "<div><div class='jumbotron'><p>This is generated by a Custom Directive</p><p>Tyring out</p></div><hr></div>",
    replace: true
  }
})
  .directive('searchResult', function() {
    return {
      templateUrl: '../directives_templates/searchResult.html',
      replace: true,
      scope: {
        userName: '@'
      }
    }
  })

  /*
  * 1. Directive Scope - the directive has a variable and that variable is named userName
  * 2. Calling the directive (normalize) - <search-result user-name="{{ usuario.nome }}"></search-result>
  * 3. usuaro.nome - This variable is defined in ContactsCtrl
  */
