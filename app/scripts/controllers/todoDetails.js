'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:todoDetailCtrl
 * @description
 * # todoDetailCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('todoDetailCtrl', ['$scope', '$routeParams', 'Todos', 'toastr',
  function ($scope, $routeParams, Todos, toastr) {
    
    Todos.id($routeParams.Id).then(function(response) {
        $scope.todo = response.data;
      });

      $scope.updateTodo = function(id, name, note, completed){
        Todos.update(id, name, note, completed).then(function(response){
          toastr.success("Updated successfully")
        })
      }

  }]);
