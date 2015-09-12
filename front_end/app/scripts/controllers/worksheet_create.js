'use strict';

/**
 * @ngdoc function
 * @name collectorApp.controller:WorksheetCtrl
 * @description
 * # WorksheetCtrl
 * Controller of the collectorApp
 */
angular.module('collectorApp')
  .controller('WorksheetCreateCtrl', function ($scope,$location, Worksheet) {

    $scope.submit = function(form){
      if(form.$invalid){
        return false;
      }
      var worksheet = {
                        topic: $scope.topic,
                        file: $scope.files,
                        category: $scope.category,
                        description: $scope.description,
                        grade: $scope.grade
                        };
      //$scope.upload();
      console.log(worksheet);
      $location.path('/worksheets');

    };
  });
