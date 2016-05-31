// var myApp = angular.module('myApp', []);

myApp.controller('DogController', ['$scope', '$http', function($scope, $http) {
  console.log('dog');
  var key = '4ab716efd563ffcbe232408375fb1c5b';
  var baseURL = 'http://api.petfinder.com/';
  getRandomDog();

 function getRandomDog () {
   console.log('going');
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=dog';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log(response.data);
        $scope.animal = response.data.petfinder.pet;
        $scope.breed = $scope.animal.animal.$t;
      }
    )
  }

  $scope.getBreeds = function() {
    var query = 'breed.list';
    query += '?key=' + key;
    query += '&animal=' + $scope.breed.toLowerCase();
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log('breeds: ', response.data);
        $scope.breeds = response.data.petfinder.breeds.breed;
      }
    )
  }

}]);
