angular.module('collectorApp').directive('filterBox', function(Category){
  return {
    restrict: "E",
    scope: {
      criteria: '=',
      search: '='
    },
    templateUrl: 'views/filterBox.html',
    controller: function($scope){
      $scope.categories = Category.query();
      $scope.subjects = ["All","Math", "Science"];
      $scope.grades = [5,6,7,8,9,10,11,12];
      $scope.tags = [{name: "Test"},{name:"Worksheet"}, {name: "Test with solution"}];

      $scope.options = {
            from: 5,
            to: 12,
            step: 1,
            scale: [5,6,7,8,9,10,11,12],
            vertical: false
          };
    }
  };
});
