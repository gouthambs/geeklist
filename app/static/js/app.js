// Declare app level module which depends on filters, and services
var gListModule = angular.module('gListApp',['ngRoute']); //['ngResource', 'ngRoute', 'ui.bootstrap', 'ui.date']);
gListModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home/home.html', 
        controller: 'HomeController'})
      .otherwise({redirectTo: '/'});
  }]);
