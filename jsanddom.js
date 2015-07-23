     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        //return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         // FILL THIS IN
         return (if(str) str = '', str.split('').reverse().join(''));
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         // FILL THIS IN
         return values.min();
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         // FILL THIS IN
         return values.unique();
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         // FILL THIS IN
         var d=101, f = ((window.console) ? true : false );  
         while(--d){ ((d%5==0 && d%3==0) ? (f?console.log('FizzBuzz',d):''):''),
                    ((d%3==0) ? (f?console.log('Fizz',d):''):''),
                    ((d%5==0) ? (f?console.log('Buzz',d):''):''); }
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         // FILL THIS IN
        var a = [];
        for(var idx = 0; idx < fruits.length; idx++){
                if(fruitsToRemove.contains(fruits[idx])){
                    removedIndexes.push(idx)
            }
          }
         for(var j = 0; j < a.length; j++){
             fruits.splice(a[j], 1);
         }
        return fruits;         
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         // FILL THIS IN
          if(toPush instanceof Array){
               for(var i = 0; i < toPush.length; i++){
                    array.push(toPush[i]);
               }
          }else{
               array.push(toPush);
          }        
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         // FILL THIS IN
         if(sourceStr) return [];
         return sourceStr.split(',');
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         // FILL THIS IN
          return Array.prototype.reduce.call(arguments,function(x,y){return x+y;},0);
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         // FILL THIS IN
         return sourceStr.match(/^\s+$/) !== null ;
     }

     // write an example of a javascript closure

     

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)



     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
