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
      grade: 7,
      description: "A nice description",
      category: {name:"Arihtmetic", subject:"Math" }
    },
    {
      file: {url: "example.com"},
      grade: 8,
      description: "A nice description",
      category: {name:"Geometry", subject:"Math" }
    }
  ];
  $scope.categories = [{name:"Arihtmetic", subject:"Math" }, {name:"Geometry", subject:"Math" } ,{name:"Light", subject:"Science" }];
  $scope.subjects = ["Math", "Science"];
  $scope.filter_criteria = {categories: []};
  $scope.filter_criteria.grades = "5;12";
  $scope.options = {
        from: 5,
        to: 12,
        step: 1,
        scale: [5,6,7,8,9,10,11,12],
        vertical: false
      };
  $scope.grades = [5,6,7,8,9,10,11,12];



  $scope.full_content_search = function(){
    //Make a call to /worksheets/search
    console.log("Searching the server");
    //Iverwrite $scope.worksheets with results if any
  }
});
