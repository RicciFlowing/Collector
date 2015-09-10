angular.module('collectorApp').directive('worksheet', function(){
  return {
    restrict: "E",
    scope: {
      worksheet: '=',
      delete: '&delete'
    },
    templateUrl: 'views/worksheets/worksheet.html',
    link: function(scope, element){
        element.find('a').tooltip({placement: 'top'});

        element.find( "#toggle1" ).click(function() {
          element.find("#widget-body1").slideToggle( "slow" );

          element.find('#toggle1').toggleClass(function() {
            if ($(this).is('.fa fa-chevron-down')) {
              return '.fa fa-chevron-up';
            } else {
              return '.fa fa-chevron-down';
            }
          })
        });
    },
  };
});
