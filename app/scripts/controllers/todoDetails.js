'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
  .controller('todoDetailCtrl', ['$scope', '$routeParams', 'Todos',
  function ($scope, $routeParams, Todos) {
    
    Todos.id($routeParams.Id).then(function(response) {
        $scope.todo = response.data;
      });

      $scope.updateTodo = function(id, name, note, completed){
        console.log("Working")
        Todos.update(id, name, note, completed).then(function(response){
          alert("Updated successfully")
        })
      }

  }]);
