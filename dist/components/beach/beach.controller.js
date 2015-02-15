'use strict';

var beachModule = angular.module('beachModule', ['ngResource']);

angular.module('beachModule')
  .controller('BeachCtrl', ['$scope', 'Beach', '$filter',
      function ($scope, Beach, $filter) {
          var beaches,
            orderBy;

          beaches = Beach.query();
          orderBy = $filter('orderBy');

          /**
           * Sets scope items when promise
           * has been resolved
           */
          beaches.$promise.then(function () {
              $scope.beaches = beaches;
              $scope.order('-price', false);
              $scope.choice = 'price';
          });
          
          /**
           * Orders the beaches array 
           * and sets the choice which is used
           * to set the active class on the button
           * @param {String} choice 
           * @param {String} reverse
           */
          $scope.order = function (choice, reverse) {
              $scope.beaches = orderBy($scope.beaches, choice, reverse);
              $scope.choice = choice;
          };
          
          /**
           * Formats a number adds 2 decimal places
           * eg becomes 100.0 becomes 100.00
           * eg 10000.0 becomes 10,000.00
           * @param {Number} price 
           * @return {String} amount
           */
          $scope.formatPrice = function (price) {
              var amount = price.toFixed(2);
              amount = numberWithCommas(amount);
              return(amount);
          };
          
          /**
           * Puts commas into numbers 
           * (Thanks to the web)
           * eg 1000 becomes 1,000
           * @param {Number} x 
           * @return {String} parts
           */
          function numberWithCommas(x) {
              var parts = x.toString().split(".");
              parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              return parts.join(".");
          };
          
          /**
           * Toggles selected class 
           * used on the description
           * @param {Object} desiredItem 
           * @param {Array} list 
           */
          $scope.select = function (desiredItem, list) {
              (desiredItem.selected === true) ? desiredItem.selected = false : desiredItem.selected = true;
              angular.forEach(list, function (item) {
                  if (item !== desiredItem) {
                      item.selected = false;
                  }
              });
          };
      }]);