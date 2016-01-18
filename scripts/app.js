angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService) {
  $scope.helloConsole = dataService.helloConsole;

  $scope.helloWorld = function() {
    console.log("Hello there! This is the helloWorld controller function, in the mainCtrl");
  };
  $scope.learningNgChange = function() {
    console.log("An input changed!! Inside learningNgChange()");
  };


})

.service('dataService', function(){
  this.helloConsole = function() {
    console.log('This is hello console service!');
  }
});
