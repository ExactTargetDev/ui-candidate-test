     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
          return str.split('').reverse().join('');
     }


     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
          return Math.min.apply( Math, values );
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
          return values.filter(function(elem, pos) {
               values.indexOf(elem) == pos;
          });
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
          var fizzBuzzString = "",
              multiple3,
              multiple5,
              i;

          for (i = 1; i <= 100; i++){

               multiple3 = i%3 ==0;
               multiple5 = i%5 ==0;

               if(multiple3){
                    fizzBuzzString += "Fizz"
               }
               if (multiple5){
                    fizzBuzzString += "Buzz"
               }
               if (!(multiple3||multiple5)){
                    fizzBuzzString += i;
               }
               fizzBuzzString+="\n"
          }

          return fizzBuzzString
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
          fruits = fruits.filter( function( el ) {
               return fruitsToRemove.indexOf( el ) < 0;
          });

          return fruits
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
          if(Array.isArray(toPush) == false){
               array.push(toPush)
          }

          if(Array.isArray(toPush) == true){
               for(var i = 0; i < toPush.length; ++i){
                    array.push(toPush[i])
               }
          }
          return array
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
          if(sourceStr == ''){
               return []
          } else {
               var result = sourceStr.split(',');
               return result[1];
          }
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
          var sumTotal = {};

          for (var i=0; i < arguments.length; i++) {
               sumTotal = sumTotal + arguments[i];
          }

          return sumTotal;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         // FILL THIS IN
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


     // Create a javascript object (DataTable) with the following:
     // A private columns property (string array)
     // A private rows property (string array)
     // A public method addRows that adds an item to the rows array
     // A public method addColumns that adds an item to the columns array
     // A public method getData that returns the a json object representation of the DataTable
     // Note: the row object should be a hash of the column name and row item value
     // Example:
     // .addColumns('column1', 'column2', 'column3');
     // .addRow('value1A', 'value1B', 'value1C');
     // .addRow('value2A', 'value2B', 'value2C');

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
