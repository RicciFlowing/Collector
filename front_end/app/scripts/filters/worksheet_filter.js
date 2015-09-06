'use strict';

angular.module('collectorApp')
 .filter('worksheetFilter', function($filter){
   function compare(worksheet, category){
     return worksheet.category.name === category.name;
   }

   function right_category(worksheet, categories){
     if(categories.length==0)
     {
      return true;
     }
     var temp = false
     categories.forEach(function(category){
       if(compare(worksheet, category)){ temp=true;}
     });
      return temp;
   };

   function right_subject(worksheet, subject){
    if(!subject || (worksheet.category.subject === subject)){
      return true;
    }
    else {
      return false;
    }
    };

   function split_grade_bounds(grades){
      var bounds = grades.split(';');
      bounds.map(function(bound){parseInt(bound);});
      return bounds;
   }

   function right_grade(worksheet, lower_bound, upper_bound){
     if((lower_bound <= worksheet.grade)&&(worksheet.grade <= upper_bound )){
       return true;
     } else {
       return false;
     }
   }

   return function(worksheets, criteria){
     var out = [];
     var bounds = [];
     bounds = split_grade_bounds(criteria.grades);
     worksheets.forEach(function(worksheet){
       if (right_category(worksheet, criteria.categories) && right_subject(worksheet, criteria.subject)&& right_grade(worksheet,bounds[0],bounds[1]))
        {
        out.push(worksheet);
      }
     });
     return out;
   };

 });
