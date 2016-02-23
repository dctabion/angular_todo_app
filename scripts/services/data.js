'use strict';

angular.module('todoListApp')
.service('dataService', function($http){

  this.helloConsole = function() {
    console.log('This is hello console service!');
  };

  this.getTodos = function(callback){
    $http.get('mock/todos.json').then(callback);
  };

  this.deleteTodo = function(todo, index) {
    console.log("The " + todo.name + " has been deleted");

    // other logic here to delete in the rest API
  };

  this.saveTodos = function(todos) {
    console.log(todos.length + " todos have been saved");

    // other logic here to contact server / rest API
  };

});

// Testing push
