'use strict';

angular.module('otbApp')
  .config(['$stateProvider', 
    function($stateProvider) {
    $stateProvider
      .state('holidays', {
        url: '/',
        templateUrl: 'holidays/holidays.html',
        controller: 'HolidaysCtrl'
      });
  }]);