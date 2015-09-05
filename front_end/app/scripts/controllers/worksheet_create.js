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

    $scope.upload = function (file) {
        $scope.upload = Upload.upload({
            url: 'server/upload/url',
            method: 'POST',
            fields: { 'worksheet[name]': $scope.name },
            file: file,
            fileFormDataName: 'worksheet[file]'
        });
   };

    $scope.submit = function(){
      var worksheet = {
                        file: $scope.file,
                        category: $scope.category,
                        description: $scope.description,
                        grade: $scope.grade
                        };
      //$scope.upload();
      console.log(worksheet);
      $location.path('/worksheets');

    }
  });
