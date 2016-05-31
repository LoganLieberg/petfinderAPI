
myApp.controller('PigController', ['$scope', '$http', function($scope, $http) {
  var key = '4ab716efd563ffcbe232408375fb1c5b';
  var baseURL = 'http://api.petfinder.com/';
getRandomPig();

  function getRandomPig()  {
    console.log('going');
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=pig';
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
}]);
