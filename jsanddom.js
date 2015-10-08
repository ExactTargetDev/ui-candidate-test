     // Example unit test function
     function divide(a, b) {
         // To see the test pass, uncomment the following line
         return a / b;
     }


     // |=====================================================================================|


     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         var str = 'example';
         return str.split('').reverse().join('');
     }


     // |=====================================================================================|


     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         return Math.min.apply(Math, [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
     };


     // |=====================================================================================|


     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         var x,
         len = values.length,
             out = [],
             obj = {};

         for (x = 0; x < len; x++) {
             obj[values[x]] = 0;
         }
         for (x in obj) {
             out.push(x);
         }
         return out;
     }


     // |=====================================================================================|


     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         for (var i = 1; i <= 100; i++) {
             var multiplesOfThree = i % 3 === 0;
             var multiplesOfFive = i % 5 === 0;

             if (multiplesOfThree && multiplesOfFive) {
                 console.log('FizzBuzz');
             } else if (multiplesOfThree) {
                 console.log('Fizz');
             } else if (multiplesOfFive) {
                 console.log('Buzz');
             } else {
                 console.log(i);
             }
         }
     }


     // |=====================================================================================|


     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         for (var i = fruits.length - 1; i >= 0; i--) {
             for (var f = 0; f < fruitsToRemove.length; f++) {
                 if (fruits[i] === fruitsToRemove[f]) {
                     fruits.splice(i, 1);
                 }
             }
         }

         return fruits;
     }


     // |=====================================================================================|


     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         if (Array.isArray(toPush)) {
             for (var i = 0; i < toPush.length; i++) {
                 array.push(toPush[i]);
             }
         } else {
             array.push(toPush);
         }
     }


     // |=====================================================================================|


     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         if (!sourceStr.length) {
             return [];
         }

         return sourceStr.split(',');
     }


     // |=====================================================================================|


     // Write a function that will take any number of arguments and return their sum
     function sum() {
         var sum = 0;

         for (var i = 0; i < arguments.length; i++) {
             sum += arguments[i];
         }

         return sum;
     }


     // |=====================================================================================|


     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         var str = /\S/g;
         return str.test(sourceStr);
     }


     // |=====================================================================================|


     // write an example of a javascript closure
     function nflTeam(nflTeamName, nflTeamLoc) {
         var nflPreGame = "My favorite NFL football team is ";

         function nflAllTogetherNow() {
             return nflPreGame + "the" + nflTeamName + ", located in lovely " + nflTeamLoc;
         }

         return nflAllTogetherNow();
     }


     // |=====================================================================================|


     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     var FamilyGuy = {
         "Drunk": {
             "first_name": "Peter",
                 "last_name": "Griffin",
                 "city": "Quahog",
                 "state": "Rhode Island",
                 "zip": 00093,
                 "phones": {
                 "home": "000-000-0000",
                     "work": "111-111-1111",
                     "mobile": "222-222-2222"
             }
         },
             "Dog": {
             "first_name": "Brian",
                 "last_name": "Griffin",
                 "city": "Quahog",
                 "state": "Rhode Island",
                 "zip": 00093,
                 "phones": {
                 "home": "333-333-3333",
                     "work": "444-444-4444",
                     "mobile": "555-555-5555"
             }
         },
             "Pilot": {
             "first_name": "Glenn",
                 "last_name": "Quagmire",
                 "city": "Quahog",
                 "state": "Rhode Island",
                 "zip": 00093,
                 "phones": {
                 "home": "666-666-6666",
                     "work": "777-777-7777",
                     "mobile": "888-888-8888"
             }
         }
     };


     // |=====================================================================================|


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
     function DataTable() {
         var columns = [],
             rows = [];

         this.addRows = function (row) {
             rows.push(row);
         };

         this.addColumns = function (column) {
             columns.push(column);
         };

         this.getData = function () {
             var dataTable = {
                 columns: columns,
                 rows: rows
             };
             return dataTable;
         }
     }


     // |=====================================================================================|


     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
     function griffinFamily() {
         var op = $('option:selected');
         console.log(op.text() + " ::::: " + op.val());
     }


     // |=====================================================================================|


     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
     $('a');
     $('a:eq(0)');
     $('a:first-child');
     $('a[href="#"]');
     $('a.link');


     // |=====================================================================================|


     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
     function addGeneratedItemsToList() {
         var array = [],
             mold = '';

         for (var i = 1; i <= 5; i++) {
             array.push('Num: ' + i);
         }

         array.forEach(function (val) {
             mold += '<li>' + val + '</li>';
         });

         $('#list1').html('<ul>' + mold + '</ul>');
     }


     // |=====================================================================================|


     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
     function checkBox() {
         var foobar = $('#foobar'),
             checkbox;

         for (var key in FamilyGuy) {
             foobar.append('<input type="checkbox" id="' + key + '"/>' +
                 '<label for="' + key + '">' + FamilyGuy[key].last_name + '</label>')
         }

         foobar.append('<p><a href="#" id="enable">Enable All</a></div><br /><div><a href="#" id="disable">Disable All</a></p>');

         $('#enable').on('click', function () {
             en_dis_able(true);
         });

         $('#disable').on('click', function () {
             en_dis_able(false);
         });

         function en_dis_able(value) {
             checkbox = $('input[type="checkbox"]');
             for (var i = 0, s = checkbox.length; i < s; i++) {
                 checkbox[i].checked = value;
             }
         }
     }