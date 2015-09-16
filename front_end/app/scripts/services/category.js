'use strict';
angular.module('collectorApp')
  .factory('Category', function WorksheetFactory($resource) {
    return $resource('http://localhost:3000/categories',{},{});
  });
