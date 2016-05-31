var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/dogs', {
      templateUrl: '/views/dogs.html',
      controller: "DogController"
    })
    .when('/pigs', {
      templateUrl: '/views/pigs.html',
      controller: "PigController"
    })
    .when('/cats', {
      templateUrl: '/views/cats.html',
      controller: "CatController"
    })
    .otherwise({
      redirectTo: 'dogs'
    })
}]);
