'use strict';
angular.module('collectorApp')
  .factory('Worksheet', function WorksheetFactory($resource) {
    return $resource('http://localhost:3000/worksheets/:id',{},{});
    //Custom Fixtures going to be replaced by rails backend

    /*var worksheets = [
      {
        id: 1,
        topic: "A important topic",
        file: {url: "example.com"},
        grade: 7,
        description: "A nice description",
        category: {name:"Arihtmetic", subject:"Math" },
        tags: [{name: "Worksheet"}]
      },
      {
        id: 2,
        topic: "Another very important topic",
        file: {url: "example.com"},
        grade: 8,
        description: "A nice description",
        category: {name:"Geometry", subject:"Math" },
        tags: [{name: "Test"}]
      },
      {
        id: 3,
        topic: "Very important science topic",
        file: {url: "example.com"},
        grade: 11,
        description: "A nice description",
        category: {name:"Light", subject:"Science" },
        tags: [{name: "Test with solution"}]
      },
      {
        id: 4,
        topic: "Next science topic",
        file: {url: "example.com"},
        grade: 5,
        description: "A nice description",
        category: {name:"Mechanics", subject:"Science" },
        tags: [{name: "Worksheet"}]
      },
    ];

    return {
      query: function(){
        return worksheets;
      },
    }*/
  });
