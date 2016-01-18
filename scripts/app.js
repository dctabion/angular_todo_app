angular.module("todoListApp", [])
.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log("Hello there! This is the helloWorld controller function, in the mainCtrl");
  };

$scope.todos = [
  {"name": "clean the house"},
  {"name": "eat some sushi"},
  {"name": "clean the bathtub"},
  {"name": "throw computer out the window"},
  {"name": "sleep a lot"}
]


});
