'use strict';
angular.module('collectorApp')
  .factory('Worksheet', function WorksheetFactory($resource) {
    return $resource('http://localhost:3000/worksheets.json/:id',{},{});
  });
