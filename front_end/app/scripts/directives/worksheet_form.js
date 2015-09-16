angular.module('collectorApp').directive('worksheetForm', function(){
  return {
    restrict: "E",
    templateUrl: 'views/worksheets/form.html',
    controller: function($scope){
      $scope.subjects = ["Math", "Science"]
      $scope.categories = [{id: 1, name: "Algebra",subject: "Math" }, {id: 2, name: "Mechanics",subject: "Science"} ];

      $scope.delete_file = function(file){
        var index = $scope.files.indexOf(file);
        if(index>=0){
          $scope.files.splice(index,1);
        }
        return file;
      };
    }
  };
});
