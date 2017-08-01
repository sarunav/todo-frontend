'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')

  .factory('Todos', ['$http', 'ApiGet', 'ApiAdd', 'ApiDelete', 'ApiUpdate',
    function($http, ApiGet, ApiAdd, ApiDelete, ApiUpdate) {
      return {
        get: function() {
          return $http.get(ApiGet);
        },
        post: function(data){
          return $http.post(ApiAdd, data)
        },
        id: function(idGet){
          return $http.get(ApiGet + idGet)
        },
         delete: function(idDelete) {
        return $http.post(ApiDelete, {
          Id: idDelete
        });
      },
      update: function(id, name, note, completed){
        return $http.post(ApiUpdate, {
          Id: id,
          name: name,
          note: note,
          completed: completed
        })
      }
      }
    }
])

  .controller('todoCtrl', function($scope, Todos)  {

    Todos.get().then(function(response) {
      console.log(response)
      $scope.todos = response.data;
    });

    $scope.add = function() {
        Todos.post($scope.addToDo).then(function(response) {
          console.log(response)
          alert("Added successfully")
        })
      };

      $scope.deleteToDo = function(id, $index) {
          console.log(id)
        Todos.delete(id).then(function(response) {
          console.log(response)
      alert("Deleted successfully")
      $scope.todos.splice($index, 1)
        })
      }

      $scope.complete = function (id, name, note, completed) {
        Todos.update(id, name, note, completed).then(function (response) {
        })
}

  });


  