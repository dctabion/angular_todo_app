'use strict';

angular.module('todoListApp')
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
  $scope.deleteTodo = function(todo, index) {
    dataService.deleteTodo(todo);
    $scope.todos.splice(index, 1);
  };
  $scope.saveTodo = function(todo) {
    dataService.saveTodo(todo);
  };

  $scope.addTodo = function() {
    var todo = { name: "This is a new TODO" };
    $scope.todos.push(todo);
    // dataService.addTodo(todo);
  };
})
