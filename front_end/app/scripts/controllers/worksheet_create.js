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
    $scope.subjects = ["Math", "Science"]
    $scope.categories = [{name: "Algebra",subject: "Math" }, {name: "Mechanics",subject: "Science"} ];
    $scope.worksheets = [  ];

    $scope.delete_file = function(file){
      var index = $scope.files.indexOf(file);
      if(index>=0){
        $scope.files.splice(index,1);
      }
      return file;
    };

    $scope.upload = function (files) {
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
      var worksheet = {
                        file: $scope.files,
                        category: $scope.category,
                        description: $scope.description,
                        grade: $scope.grade
                        };
      //$scope.upload();
      console.log(worksheet);
      $location.path('/worksheets');

    }
  });
