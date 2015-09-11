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
  $scope.worksheets = Worksheet.query();
  $scope.categories = [{name:"Arihtmetic", subject:"Math" }, {name:"Geometry", subject:"Math" } ,{name:"Light", subject:"Science" }, {name:"Mechanics", subject:"Science" }];
  $scope.subjects = ["Math", "Science"];
  $scope.grades = [5,6,7,8,9,10,11,12];
  $scope.tags = [{name: "Test"},{name:"Worksheet"}, {name: "Test with solution"}];


  $scope.filter_criteria = {categories: [], tags:[]};
  $scope.filter_criteria.grades = "5;12";
  $scope.options = {
        from: 5,
        to: 12,
        step: 1,
        scale: [5,6,7,8,9,10,11,12],
        vertical: false
      };

  $scope.delete = function(worksheet){
    var index = $scope.worksheets.indexOf(worksheet);
    if(index >=0){
      $scope.worksheets.splice(index, 1);
    }
  }


  $scope.full_content_search = function(){
    //Make a call to /worksheets/search
    console.log("Searching the server");
    //Iverwrite $scope.worksheets with results if any
  }
});
