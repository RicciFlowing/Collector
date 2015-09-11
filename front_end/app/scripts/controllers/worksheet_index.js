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

  $scope.filter_criteria = {categories: [], tags:[], grades: "5;12"};

  $scope.delete = function(worksheet){
    var index = $scope.worksheets.indexOf(worksheet);
    if(index >=0){
      $scope.worksheets.splice(index, 1);
    }
  }

  $scope.full_content_search = function(){
    //Make a call to /worksheets/search
    console.log("Searching the server");
    //overwrite $scope.worksheets with results if any
  }
});
