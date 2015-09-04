'use strict';

/**
 * @ngdoc function
 * @name collectorApp.controller:WorksheetCtrl
 * @description
 * # WorksheetCtrl
 * Controller of the collectorApp
 */
angular.module('collectorApp')
  .controller('WorksheetIndexCtrl', function ($scope, Worksheet) {
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
                          category: {name:"Geometry", subject:"Math" }
                        }
                        ];
   $scope.categories = [{name:"Arihtmetic", subject:"Math" }, {name:"Geometry", subject:"Math" } ,{name:"Light", subject:"Science" }];
   $scope.subjects = ["Math", "Science"];

   $scope.filter_criteria = {categories: []};
   $scope.filtered_worksheets = [];



  });
