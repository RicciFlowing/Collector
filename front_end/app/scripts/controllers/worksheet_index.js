'use strict';

/**
 * @ngdoc function
 * @name collectorApp.controller:WorksheetCtrl
 * @description
 * # WorksheetCtrl
 * Controller of the collectorApp
 */
angular.module('collectorApp')
  .controller('WorksheetIndexCtrl', function ($scope, $filter, Worksheet) {
    $scope.worksheets = [
                        {
                          file: {url: "example.com"},
                          klass: 7,
                          description: "A nice description",
                          category: {name:"Arihtmetic", subject:"Math" }
                        },
                        {
                          file: {url: "example.com"},
                          klass: 8,
                          description: "A nice description",
                          category: {name:"Arihtmetic", subject:"Math" }
                        }
                        ];
   $scope.subjects = ["Math", "Science"];

   $scope.filtered_worksheets = function(){
     return $filter('filter')($scope.worksheets, {category:{subject: $scope.filter_subject}});
   };
  });
