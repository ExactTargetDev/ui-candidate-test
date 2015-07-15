     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         // FILL THIS IN
         return str.split('').reverse().join('');
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         // FILL THIS IN
         return Math.min.apply(null, values);
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         // FILL THIS IN
         var prims = {
             "boolean": {}, 
             "string": {}, 
             "number": {}
         }, objs = [], type;

         return values.filter(function (item) {
            type = typeof item;
            
            if(type in prims) {
                return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
            } else {
                return objs.indexOf(item) >= 0 ? false : objs.push(item);
            }
         });
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         // FILL THIS IN
         var i = 0, result = '', forTest = [];

         for (i = 1; i < 101; i += 1) {
            result = '';

            if (i % 3 == 0) {
                // If 'i' is divisble by 3 it will add Fizz to the result
                result += 'Fizz';
            }

            if (i % 5 == 0) {
                // If 'i' is divisble by 5 it will add Buzz to the result
                // If 'i' is divisble by 15 it is divisible by 5 as well as 
                // 3, so FizzBuzz will be the contents of the result string
                result += 'Buzz';
            }

            if (result === '') {
                // If 'i' is not divisbile by 3 or 5 the value of 'i' will
                // be added to the result string
                result = i;
            }

            console.log(result);

            // used to test result
            if (i <= 25) {
                forTest.push(result);
            }
         }

         return forTest;
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         // FILL THIS IN
         return fruits.filter(function(item){
            return fruitsToRemove.indexOf(item) === -1
         });
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         // FILL THIS IN
         // Using jQuery's isArray function
         if ($.isArray(toPush)) {
            [].push.apply(array, toPush);
         } else {
            array.push(toPush)
         }
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         // FILL THIS IN
         if (sourceStr === '') {
            return [];
         }

         return sourceStr.split(',');
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         // FILL THIS IN
         var i = 0,
             sum = 0,
             len = arguments.length;

         for (i = 0; i < len; i += 1) {
            sum += arguments[i]
         }

         return sum;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         // FILL THIS IN
         return /^\s+$/.test(sourceStr);
     }

     // write an example of a javascript closure
     function createCounter (increment) {
        var count = 0;

        return function () {
            count += increment;
            return count;
        }
     }

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     var people = [
        {
            "first_name": "John",
            "last_name": "Doe",
            "city": "Some City",
            "state": "Some State",
            "zip": "12345",
            "phone_numbers": {
                "home": "555-555-5555",
                "work": "555-555-5556",
                "mobile": "555-555-5557"
            }
        },

        {
            "first_name": "Jane",
            "last_name": "Doe",
            "city": "Some City",
            "state": "Some State",
            "zip": "12345",
            "phone_numbers": {
                "home": "555-555-5555",
                "work": "555-555-6665",
                "mobile": "555-555-5558"
            }
        }
     ]

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
     var DataTable = (function () {
        var columns = [],
            rows = [];

            return {
                addRows: function () {
                    [].push.apply(rows, arguments);
                },

                addColumns: function (args) {
                    [].push.apply(columns, arguments);
                },

                getData: function () {

                }
            };
     }());

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
     var items = ['Foo', 'Bar', 'FooBar'],
         div = $("#div1"),
         select = $('<select>'),
         button = $('<button>').text('Log Item');

     items.forEach(function(item, index) {   
         select.append($('<option>', { value : index }).text(item)); 
     });

     div.append(select).append(button);

     div.on('click','button',function(e){
         console.log('Name: ' + $('select option:selected').text() + ', Value: ' + $('select option:selected').val());
     });

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.

     // logging the value of the queries to console in an array
     var anchor = [$('a.link').text(), $('.buzz a').text(), $('#fizz a').text(), $('#foo a').text(), $('.bar a').text()];
     console.log(anchor);

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
     var ul = $("ul#list1");
     ['li 1', 'li 2', 'li 3', 'li 4', 'li 5'].forEach(function(item){
        ul.append($('<li>').text(item));
     });

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
     var counter,
         foobar = $("#foobar"),
         link1 = $('<a id="checkAll" href="">').text("Check All"),
         link2 = $('<a id="uncheckAll" href="">').text("Uncheck All");

     //Create the list of checkboxes.
     for(counter = 0; counter < 3; counter += 1){
        foobar.append($('<input>', {type: 'checkbox'}));
     }

     // Create links
     foobar.append(link1).append('&nbsp;').append(link2);
     
     // Bind events to links
     foobar.on('click','#checkAll', function(e) {
        e.preventDefault();
        var item = $("input[type='checkbox']");
        $('input[type=checkbox]').prop('checked', true);
     }).on('click','#uncheckAll', function(e) {
        e.preventDefault();
        $('input[type=checkbox]').prop('checked', false);
     });
