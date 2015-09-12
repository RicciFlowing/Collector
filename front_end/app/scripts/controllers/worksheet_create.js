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
      console.log($scope.worksheet);
      $location.path('/worksheets');

    };
  });
