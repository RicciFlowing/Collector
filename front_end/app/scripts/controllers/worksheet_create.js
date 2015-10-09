'use strict';

/**
 * @ngdoc function
 * @name collectorApp.controller:WorksheetCtrl
 * @description
 * # WorksheetCtrl
 * Controller of the collectorApp
 */
angular.module('collectorApp')
  .controller('WorksheetCreateCtrl', function ($scope,$location, Worksheet, Upload) {
    $scope.worksheet = new Worksheet();
    $scope.files = [];
    var upload = function (files, worksheet_id) {
            var file = $scope.files;
            return Upload.upload({
                url: 'http://localhost:3000/attachments/',
                method: 'POST',
                fields: { 'attachment[worksheet_id]': worksheet_id},
                file: file,
                fileFormDataName: 'attachment[file]'
            });
        };


    $scope.submit = function(form){
      if(form.$invalid){
        return false;
      }
      $scope.worksheet.$save()
        .then(function(res)  {
          alert(res.worksheet.id);
          upload($scope.files, res.worksheet.id);
          $location.path('/worksheets');
        })
        .catch(function(req) { alert("error saving obj"); });


    };
  });
