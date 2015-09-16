'use strict';

/**
* @ngdoc function
* @name collectorApp.controller:WorksheetCtrl
* @description
* # WorksheetCtrl
* Controller of the collectorApp
*/
angular.module('collectorApp')
.controller('WorksheetIndexCtrl', function ($scope,$filter, Worksheet) {
  var worksheet_min_count = 2;

  $scope.worksheets = Worksheet.query();
  $scope.filter_criteria = {categories: [], tags:[], grades: "5;12"};


  $scope.delete = function(worksheet){
    var index = $scope.worksheets.indexOf(worksheet);
    if(index >=0){
      $scope.worksheets.splice(index, 1);
    }
  };

  $scope.full_content_search = function(){
    //Make a call to /worksheets/search
    console.log("Searching the server");
    //overwrite $scope.worksheets with results if any
  };

  $scope.$watch('filter_criteria', function(newValue,oldValue){
    $scope.filtered_worksheets =  $filter("worksheetFilter")($scope.worksheets, $scope.filter_criteria);
    if($scope.filtered_worksheets.length < worksheet_min_count){
      console.log("Delay and optionally call server for more worksheets");
    }
  }, true);

  $scope.$watch('worksheets', function(newValue,oldValue){
    $scope.filtered_worksheets =  $filter("worksheetFilter")($scope.worksheets, $scope.filter_criteria);
  }, true);

});
