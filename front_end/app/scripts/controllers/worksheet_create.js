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
    $scope.worksheet = new Worksheet();

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
      $scope.worksheet.$save();
      console.log($scope.worksheet);
      $location.path('/worksheets');

    };
  });
