angular.module('collectorApp').directive('worksheetForm', function(){
  return {
    restrict: "E",
    templateUrl: 'views/worksheets/form.html',
    controller: function($scope){
      $scope.subjects = ["Math", "Science"]
      $scope.categories = [{name: "Algebra",subject: "Math" }, {name: "Mechanics",subject: "Science"} ];

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
