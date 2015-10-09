'use strict';
angular.module('collectorApp')
  .factory('Attachment', function AttachmentFactory($resource) {
    return $resource('http://localhost:3000/attachment/:id',{},{});
  });
