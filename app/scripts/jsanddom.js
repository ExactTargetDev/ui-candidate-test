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
       return Math.min.apply(null, values);
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
       var seen = {};
       return values.filter(function(item) {
         return seen.hasOwnProperty(item) ? false : (seen[item] = true);
       });
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
       var results = {
         fizzbuzz: [],
         buzz:     [],
         fizz:     [],
         other:    []
       };
       for (var n = 1, total = 100; n <= 100; n++) {
         if (((n % 3) === 0) && ((n % 5) === 0)) {
           results.fizzbuzz.push(n);
           console.log('FizzBuzz');
         } else if ((n % 5) === 0) {
           results.buzz.push(n);
           console.log('Buzz');
         } else if ((n % 3) === 0) {
           results.fizz.push(n);
           console.log('Fizz');
         } else {
           results.other.push(n);
           console.log(n);
         }
       }

       return results;

     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
       fruitsToRemove.forEach(function (removeFruit) {
         fruits = fruits.filter(function (fruit) {
           return fruit !== removeFruit;
         });
       });

       return fruits;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
       if (Array.isArray(toPush)) {
         return array.concat(toPush);
       } else {
         array.push(toPush);
         return array;
       }
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and
     // producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
       if (sourceStr) {
         return sourceStr.split(',');
       } else {
         return [];
       }
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
       var amount = 0;

       for (var i = 0, total = arguments.length; i < total; i++) {
         amount = amount + arguments[i];
       }

       return amount;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
       return sourceStr.trim() === '';
     }

     // write an example of a javascript closure
     var counter =(function (window) {
       var privateCounter = 0;

       function changeBy(val) {
         privateCounter += val;
       }

       return {
         increment: function() {
           changeBy(1);
         },
         decrement: function() {
           changeBy(-1);
         },
         value: function() {
           return privateCounter;
         }
       };
     })(window);

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     var people = {
       'collection': [
         {
           'id': 0,
           'first_name': 'Scott',
           'last_name': 'Daniels',
           'city': 'Ypsilanti',
           'state': 'MI',
           'zip': '48198', // is a string becuase zip codes can be formatted like 48198 or 48198-1236
           'phone_number': [
             { 'type': 'home', 'value': '517-263-7644' },
             { 'type': 'work', 'value': '' },
             { 'type': 'mobile', 'value': '734-678-1339' }
           ]
         },
         {
           'id': 1,
           'first_name': 'Joe',
           'last_name': 'Smith',
           'city': 'Ann Arbor',
           'state': 'MI',
           'zip': '48104-1232', // is a string becuase zip codes can be formatted like 48198 or 48198-1236
           'phone_number': [
             { 'type': 'home', 'value': '517-264-5511' },
             { 'type': 'work', 'value': '' },
             { 'type': 'mobile', 'value': '734-678-6000' }
           ]
         }
       ]
     };

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
     var DataTable = function () {
       var columns = [];
       var rows = [];

       this.addRow = function () {
         var totalRows = arguments.length;
         var totalColumns = columns.length;
         var diff = totalRows < totalColumns ? totalColumns - totalRows : 0;

         for (var i = 0; i < totalRows; i++) {
           // can't add more row cells then there are columns
           if (i < totalColumns) {
             rows.push(arguments[i]);
           }
         }

         // if total rows less then total columns, add placeholder values to row values
         if (diff) {
           while (diff) {
             rows.push('blank');
           }
         }
       };

       this.addColumns = function () {
         for (var i = 0, total = arguments.length; i < total; i++) {
           columns.push(arguments[i]);
         }
       };

       this.getData = function () {
         var data = {};
         var numberOfRows = rows.length / columns.length;
         var arrayOfRows = [];
         var start = 0;
         var end = columns.length;

         // break the rows data into separate row sections (i.e. row 1, row 2)
         for (var i = 0; i < numberOfRows; i++) {
           arrayOfRows.push(rows.slice(start, end));
           start = end;
           end = end + columns.length;
         }
         // create the hash map of table data
         columns.forEach(function (column, cIndex) {
           data[column] = {};

           arrayOfRows.forEach(function (row) {
             data[column][column + '-' + row[cIndex]] = row[cIndex];
           });

         });

         return data;
       };
     };

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
     $('#foo a');
     $('#fizz > a');
     $('a.link');
     $('.buzz > a');
     $('.bar a');

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
