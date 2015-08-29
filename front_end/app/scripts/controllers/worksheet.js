'use strict';

/**
 * @ngdoc function
 * @name collectorApp.controller:WorksheetCtrl
 * @description
 * # WorksheetCtrl
 * Controller of the collectorApp
 */
angular.module('collectorApp')
  .controller('WorksheetCtrl', function ($scope) {
    $scope.worksheets = [
                    {
                      klass: 7,
                      category: {name: "Geometry", schoolsubject: {name: "Math"}},
                      description: "Some interesting text",
                      file: {url: "example.com"},
                    },
                    {
                      klass: 8,
                      category: {name: "Mechanics", schoolsubject: {name: "Science"}},
                      description: "Another interesting text",
                      file: {url: "example.com"},
                    }
                    ];
  });
