'use strict';

/**
 * @ngdoc function
 * @name collectorApp.controller:WorksheetCtrl
 * @description
 * # WorksheetCtrl
 * Controller of the collectorApp
 */
angular.module('collectorApp')
  .controller('WorksheetCreateCtrl', function ($scope, Worksheet) {
    $scope.subjects = ["Math", "Science"]
    $scope.categories = [{name: "Algebra",subject: "Math" }, {name: "Mechanics",subject: "Science"} ];
    $scope.worksheets = [  ];

    $scope.submit = function(){
      var worksheet = {
                        file: $scope.file,
                        category: $scope.category,
                        description: $scope.description,
                        grade: $scope.grade
                        };
      console.log(worksheet);
    }
  });
