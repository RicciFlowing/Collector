'use strict';

/**
 * @ngdoc function
 * @name collectorApp.controller:WorksheetEditCtrl
 * @description
 * # WorksheetEditCtrl
 * Controller of the collectorApp
 */
angular.module('collectorApp')
  .controller('WorksheetEditCtrl', function ($scope, $routeParams,$location, Worksheet) {
    //$scope.worksheet = Worksheet.find(id: $routeParams:id);
    $scope.worksheet = {};

    var upload = function (files) {
      /*
      Upload.upload({
        url: 'server/upload/url',
        method: 'POST',
        fields: { 'worksheet[name]': $scope.name },
        file: files,
        fileFormDataName: 'worksheet[file]'});
        */
   };

    $scope.submit = function(form){
      if(form.$invalid){
        return false;
      }
      //upload();
      //Worksheet.update();
      console.log($scope.worksheet);
      $location.path('/worksheets');

    };
  });
