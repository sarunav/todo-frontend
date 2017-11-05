'use strict';

/**
 * @ngdoc overview
 * @name todoApp
 * @description
 * # todoApp
 *
 * Main module of the application.
 */
angular
  .module('todoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'oitozero.ngSweetAlert',
    'toastr'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
      .when('/todos', {
        templateUrl: 'views/todo.html',
        controller: 'todoCtrl',
      })
      .when('/todos/:Id', {
        templateUrl: 'views/todoDetails.html',
        controller: 'todoDetailCtrl',
      })
      .otherwise({
        redirectTo: '/todos'
      });
  })

  .constant({
    'ApiGet' : 'http://localhost:4000/api/todos/',
    'ApiAdd' : 'http://localhost:4000/api/todo/add/',
    'ApiDelete' : 'http://localhost:4000/api/todo/delete/:Id',
    'ApiUpdate' : 'http://localhost:4000/api/todo/edit/:Id',
  })
