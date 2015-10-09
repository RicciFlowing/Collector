angular.module('collectorApp').directive('attachmentForm', function(){
    return {
      restrict: 'E',
      templateUrl: "views/attachment/form.html",
        scope: {
            files: '='
        },
        link: function(scope, el, attrs){
        },
    };
});
