angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService) {
  $scope.helloConsole = dataService.helloConsole;

  dataService.getTodos(function(response){
    console.log(response.data);
    $scope.todos = response.data;
  });

  $scope.helloWorld = function() {
    console.log("Hello there! This is the helloWorld controller function, in the mainCtrl");
  };
  $scope.learningNgChange = function() {
    console.log("An input changed!! Inside learningNgChange()");
  };


})

.service('dataService', function($http){

  this.helloConsole = function() {
    console.log('This is hello console service!');
  };

  this.getTodos = function(callback){
    $http.get('mock/todos.json').then(callback);
  };
});
