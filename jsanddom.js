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
         var min = undefined;;
         for(var i = 0; i < values.length; i++){
             if(min === undefined){
                 min = values[i];
             }else{
                 if(min > values[i]){
                     min = values[i];
                 }
             }
         }
         return min;
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         var array = [];

         for(var i = 0; i < values.length; i++){
             if(array === undefined){
                 array = values[i];
             }else{
                 (function(){
                    var exist = false;
                    for(var x = 0; x < array.length; x++){
                        if(values[i] === array[x]){
                            exist = true;
                            break;
                        }
                    }
                    if(exist === false){
                        array.push(values[i]);
                    }
                }());
             }
         }
         return array;
     }


     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {

         var array = []; // used for testing....it's easier to test an array
         for(var i = 1; i < 101; i++){

             if(i % 3 === 0 && i % 5 === 0){
                 array.push('FizzBuzz');
                 console.log('FizzBuzz');
             }else if(i % 3 === 0){
                 array.push('Fizz');
                 console.log('Fizz');
             }
             if(i % 5 === 0){
                 array.push('Buzz');
                 console.log('Buzz');
             }
             else{
                 array.push(i);
                 console.log(i);
             }
         }
         return array; // I will remove this if I find a way to test the console but running short on time
     }
     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         var remove = (function(element){
             for(var x = 0; x < fruits.length; x++){
                 if(element === fruits[x]){
                     return x;
                 }
             }
                return 0;
         });
         for(var i = 0; i < fruitsToRemove.length; i++){
           if(remove(fruitsToRemove[i]) !== 0){
               fruits.splice(remove(fruitsToRemove[i]), 1);
           }
        }
         return fruits;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
        for(var i = 0; i < toPush.length; i++){
            if(Array.isArray(toPush[i])){
                for(var x = 0; x < toPush[i].length; x++){
                    array.push(toPush[i][x]);
                }
            }else{
                array.push(toPush[i]);
            }

        }
         return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
        var array = [];
         if(!sourceStr){
            return array;
        }else{
             for(var i = 0; i < sourceStr.length; i++){
                 array.push(sourceStr[i]);
             }
         }
         return array.join(',');
     }


     // Write a function that will take any number of arguments and return their sum
     function sum() {
        var results = 0;
         for(var i = 0; i < arguments.length; i++){
            results += arguments[i];
        }
         return results;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
        var results = 0;
         for(var i = 0; i < sourceStr.length; i++){
             if(sourceStr[i] ===  String.fromCharCode(32)){
                 results += 1;
             }
         }
         if(results === sourceStr.length){
             return true;
         }else{
             return false;
         }
     }

     // write an example of a javascript closure

    var add = (function(){
        var counter = 0;
        return function(){return counter +=1; }
    })();
     add();
     add();
     add(); // counter is 3



     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     var people = [{
         firstName: 'Cindy',
         lastName: 'Star',
         city: 'Woodstock',
         state: 'IL',
         zip: '46072',
         phone: {
             home: '555-789-5464',
             work: '555-789-5464',
             mobile: '555-789-5464'

         }
     },{
         firstName: 'Bill',
         lastName: 'Star',
         city: 'Storm',
         state: 'IL',
         zip: '46072',
         phone: {
             home: '555-789-5464',
             work: '555-789-5464',
             mobile: '555-789-5464'

         }
     },
         {
             firstName: 'JD',
             lastName: 'Windstorm',
             city: 'Lilly',
             state: 'IL',
             zip: '46072',
             phone: {
                 home: '555-789-5464',
                 work: '555-789-5464',
                 mobile: '555-789-5464'

             }
         },
         {
             firstName: 'Lucy',
             lastName: 'Liu',
             city: 'Carmel',
             state: 'IN',
             zip: '46062',
             phone: {
                 home: '555-789-5464',
                 work: '555-789-5464',
                 mobile: '555-789-5464'

             }
         }];



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


     function DataTables() {
        var columns = [];
        var rows = [];

        this.addRow = function(rowName){
             rows.push(rowName);
         };
         this.addColumns = function(columnName){
             columns.push(columnName);
         };
     }

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.





     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.

     $('a.link');
     $('a').filter(function(){
         return !$(this).attr('href');
     });
     $("a[href$='#']");




     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".

    (function(){
        var array = [];
         for(var i = 1; i <= 5; i++){
             array.push("<li id='" + i + "'></li>");
         }

        return "<ul>" + array + "</ul>";
     }());

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
