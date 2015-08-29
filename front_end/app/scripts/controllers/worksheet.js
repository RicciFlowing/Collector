'use strict';

/**
 * @ngdoc function
 * @name collectorApp.controller:WorksheetCtrl
 * @description
 * # WorksheetCtrl
 * Controller of the collectorApp
 */
angular.module('collectorApp')
  .controller('WorksheetCtrl', function ($scope, Worksheet) {
    $scope.worksheets = Worksheet.query();
  });
