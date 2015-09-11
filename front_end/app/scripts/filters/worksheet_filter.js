'use strict';

angular.module('collectorApp')
 .filter('worksheetFilter', function($filter){
   function compare_with_category(worksheet, category){
     return worksheet.category.name === category.name;
   }

   function right_category(worksheet, categories){
     if(categories.length==0)
     {
      return true;
     }
     var temp = false
     categories.forEach(function(category){
       if(compare_with_category(worksheet, category)){ temp=true;}
     });
      return temp;
   };

   function right_subject(worksheet, subject){
    if(!subject || (worksheet.category.subject === subject) || (subject=="All")){
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

   function compare_with_tag(worksheet, tag){
     var result = false;
     worksheet.tags.forEach(function(worksheet_tag){
       if(worksheet_tag.name === tag.name){
         result = true;
       }
     });
     return result;
   }

   function right_tags(worksheet, tags){
     if(tags.length == 0){
       return true;
       }

     var result = false;
     tags.forEach(function(tag){
       if(compare_with_tag(worksheet, tag)){
         result = true ;
        }
     });
     return result;
   }

   return function(worksheets, criteria){
     var out = [];
     var bounds = [];
     bounds = split_grade_bounds(criteria.grades);
     worksheets.forEach(function(worksheet){
       if (right_category(worksheet, criteria.categories)
       && right_subject(worksheet, criteria.subject)
       && right_grade(worksheet,bounds[0],bounds[1])
       && right_tags(worksheet,criteria.tags))
        {
        out.push(worksheet);
      }
     });
     return out;
   };

 });
