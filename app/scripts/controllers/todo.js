'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:todoCtrl
 * @description
 * # todoCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')

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

  .controller('todoCtrl', ['$scope', 'Todos',  'SweetAlert', 'toastr',
    function($scope, Todos, SweetAlert, toastr)  {

    Todos.get().then(function(response) {
      // console.log(response)
      $scope.todos = response.data;
    });

    $scope.add = function() {
        Todos.post($scope.addToDo).then(function(response) {
          // console.log(response)
          toastr.success("Todo added successfully")
        })
      };

      $scope.deleteToDo = function(id, $index) {

        SweetAlert.swal({
          title: "Are you sure?",
          text: "You want to delete the todo?",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel it!",
          closeOnConfirm: false,
          closeOnCancel: false }, 
       function(isConfirm){ 
          if (isConfirm) {
            Todos.delete(id).then(function(response) {
              // console.log(response)
          $scope.todos.splice($index, 1)
          SweetAlert.swal("Deleted!", "Your todo has been deleted.", "success");
            }
          )
             
          } else {
             SweetAlert.swal("Cancelled", "You cancelled", "error");
          }
       });
    };

      $scope.complete = function (id, name, note, completed) {
        Todos.update(id, name, note, completed).then(function (response) {
        })
}

  }]);


  