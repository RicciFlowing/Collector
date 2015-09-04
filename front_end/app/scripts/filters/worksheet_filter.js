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

   return function(worksheets, criteria){
     var out = [];
     worksheets.forEach(function(worksheet){
       if (right_category(worksheet, criteria.categories) && right_subject(worksheet, criteria.subject))
        {
        out.push(worksheet);
      }
     });
     return out;
   };

 });
