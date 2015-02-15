'use strict';

angular.module('otbApp', [
  'ngResource',
  'ui.router',
  'beachService',
  'beachModule'
])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  }]);