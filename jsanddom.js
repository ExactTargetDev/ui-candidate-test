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

     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         var fizz,
             buzz;

         for (var i = 1; i <= 100; i++){
             fizz = i % 3 ? '' : 'Fizz';
             buzz = i % 5 ? '' : 'Buzz';

             if (!fizz.length && !buzz.length){
                 console.log(i);
             } else {
                 console.log(fizz + buzz)
             }
         }
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         for( var i = fruits.length - 1; i >= 0; i--){
             for( var j = 0; j < fruitsToRemove.length; j++){
                 if(fruits[i] === fruitsToRemove[j]){
                     fruits.splice(i, 1);
                 }
             }
         }

         return fruits;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         if (typeof toPush === 'object') {
             array.push.apply(array, toPush);
         } else {
             array.push(toPush);
         }

         return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         if (!sourceStr.length) {
             return [];
         }

         return sourceStr.split(',');
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
        var sum = 0;

        for (var i = 0; i < arguments.length; i++){
            sum += arguments[i];
        }

        return sum;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         // FILL THIS IN
     }

     // write an example of a javascript closure
     var count = function () {
         var counter = 0;

         return function () {
            return ++counter;
         }
     };

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)

     var peopleCollection = {
         0: {
             "first_name": "Sheldon",
             "last_name": "Cooper",
             "city": "New York",
             "state": "New York",
             "zip": 10019,
             "phones": {
                 "home": "518-485-5082",
                 "work": "518-475-6677",
                 "mobile": "718-908-2904"
             }
         },
         1: {
             "first_name": "Leonard",
             "last_name": "Hofstadter",
             "city": "New York",
             "state": "New York",
             "zip": 10019,
             "phones": {
                 "home": "518-444-5082",
                 "work": "666-475-6677",
                 "mobile": "718-908-777"
             }
         },
         2: {
             "first_name": "Amy",
             "last_name": " Farrah Fowler",
             "city": "New York",
             "state": "New York",
             "zip": 10019,
             "phones": {
                 "home": "518-485-5082",
                 "work": "518-475-6677",
                 "mobile": "718-908-2904"
             }
         }
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

     function DataTable() {
         var columns = [],
             rows = [];

         return {
             addColumns: function(){
                 pushOntoArray(columns, arguments);
             },
             addRow: function(){
                 var array = {};

                 for (var i = 0; i < columns.length; i++) {
                     if (arguments[i]) {
                         array[columns[i]] = arguments[i];
                     }
                 }

                 rows.push(array);
             },
             getData: function(){
                 var array = {};

                 for (var i = 0; i < rows.length; i++) {
                     array[i] = rows[i];
                 }

                 return array;
             }
         }
     }

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.

     function createSelectElement() {
         var divElement = $('#div1'),
             selectElement,
             person;

         divElement.html('<select></select>');

         for (var key in peopleCollection) {
             selectElement = divElement.find('select');
             person = peopleCollection[key];
             selectElement.append('<option name="' + person.last_name + '">' + person.phones.mobile + '</option>');
         }

         divElement.append('<button id="get-name">Get person name!</button>');
         divElement.append('<p></p>');

         $('#get-name').on('click', function () {
             divElement.find('p').html(selectElement.find('option:selected').attr('name'));
         });
     }

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.

     function differentWayToGetElement() {
         console.log('By Class name - ', $('.link'));
         console.log('By Tag name - ', $('a'));
         console.log('By index - ', $('a:eq(0)'));
         console.log('By Attribute value - ', $('a[href="#"]'));
         console.log('As first element with tag name a - ', $('a:first'));
     }



     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
     function addGeneratedItemsToList () {
         var array = [],
             template = '';

         for (var i = 1; i <= 5; i++) {
             array.push('Element#' + i);
         }

         array.forEach(function (value) {
             template += '<li>' + value + '</li>';
         });

         $('#list1').html(template);
     }


     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)

     function addCheckboxes() {
         var footBar = $('#footbar'),
             checkboxes;

         for (var key in peopleCollection) {
             footBar.append('<input type="checkbox" id="' + key + '"/>' +
                 '<label for="' + key + '">' + peopleCollection[key].last_name + '</label>')
         }

         footBar.append('<p><a href="#" id="enable-all">Enable All</a></p>')
         footBar.append('<p><a href="#" id="disable-all">Disable All</a></p>')

         $('#enable-all').on('click', function () {
            enableDisable(true);
         });

         $('#disable-all').on('click', function () {
            enableDisable(false);
         });

         function enableDisable(value){
             checkboxes = $('input[type="checkbox"]');
             for (var i = 0, n = checkboxes.length; i < n; i++) {
                 checkboxes[i].checked = value;
             }
         }
     }