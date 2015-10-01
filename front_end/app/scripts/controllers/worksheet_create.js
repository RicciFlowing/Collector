'use strict';

/**
 * @ngdoc function
 * @name collectorApp.controller:WorksheetCtrl
 * @description
 * # WorksheetCtrl
 * Controller of the collectorApp
 */
angular.module('collectorApp')
  .controller('WorksheetCreateCtrl', function ($scope,$location, Worksheet, Upload) {
    $scope.worksheet = new Worksheet();
    $scope.files = [];
    var upload = function (files) {
            var file = $scope.files;
            return Upload.upload({
                url: 'http://localhost:3000/worksheets/',
                method: 'POST',
                fields: { 'worksheet[topic]': $scope.worksheet.topic,
                          'worksheet[grade]': $scope.worksheet.grade,
                          'worksheet[category_id]': $scope.worksheet.category_id,
                        },
                file: file,
                fileFormDataName: 'worksheet[files]'
            });
        };


    $scope.submit = function(form){
      if(form.$invalid){
        return false;
      }
      upload($scope.files);
      $location.path('/worksheets');
    };
  });
