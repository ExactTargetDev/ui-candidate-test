     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         if (typeof str !== 'string') {
            return undefined;
         }

         return str.split('').reverse().join('');
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         //assume values is array, skip if array check in this test
         if (values.length === 0) {
             return undefined;
         }

         var i;
         var min = values[0];
         
         for(i = 1; i < values.length; i++) {
             min = Math.min(min, values[i]);

         }

         return min;
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         var r = [];
         var i;

         //the reason to do this function is that IE8 does not support Array indexOf
         function contains(array, v) {
             var ii;
             for(ii = 0; ii < array.length; ii++) {
                if(array[ii] === v) {
                    return true;
                }
             }

             return false;
         }

         for (i = 0; i < values.length; i++) {
             if (!contains(r, values[i])) {
                 r.push(values[i]);
             }
         }

         return r;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         var i;

         for (i = 1; i <= 100; i++) {
             if (i % 15 === 0) { //multiples of 3 and 5
                console.log('FizzBuzz');
             } else {
                 if (i % 3 === 0) { //multiples of 3
                    console.log('Fizz');
                 } else if (i % 5 === 0) { //multiples of 5
                    console.log('Buzz');
                 } else {
                     console.log(i);
                 }

             }

         }
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         var i;
         var j;

         for(i = 0; i < fruitsToRemove.length; i++) {
             for(j = 0; j < fruits.length; j++) {
                 if (fruits[j] === fruitsToRemove[i]) {
                     fruits.splice(j, 1);//remove the found item from the orgin array
                     break;
                 }

             }
         }
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         var i;

         //check if toPush is array
         if (Object.prototype.toString.call(toPush) !== '[object Array]') {
             array.push(toPush);
             
             return;
         }

         for(i = 0; i < toPush.length; i++) {
             array.push(toPush[i]);
         }

     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         if (typeof sourceStr !== 'string') {
             return undefined;
         }
         
         var array = sourceStr.split(',');
    
         for(var i = 0; i < array.length; i++) {
             //trim white spaces to support IE8
             array[i] = array[i].replace(/^\s+|\s+$/g, '');
         }

         return array;
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         var i;

         if (arguments.length === 0) {
             return undefined;
         }

         var sum = arguments[0];

         for (i = 1; i < arguments.length; i++) {
             sum = sum + arguments[i];
         }

         return sum;

     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         return typeof sourceStr === 'string' && !sourceStr.match(/\S/);
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


    (function (global) {

        //simple function to insert html into dialog and display and display
        function displayDialog (data) {
            $('#dialog').html(data).show();
            $('#overlay').show();
        }

        var HELP_JSON = {
        "help": [
            {
                "title": "What is JSON?",
                "URL": "http://en.wikipedia.org/wiki/JSON"
            },
            {
                "title": "What is ExactTarget?",
                "URL": "http://en.wikipedia.org/wiki/ExactTarget"
            },
            {
                "title": "More info about ExactTarget REST APIs",
                "URL": "http://code.exacttarget.com/question/rest-api-authentication"
            }
        ]};

        $(document).ready(function() {

            var $prevOpenMedium = null;

            $('.pulse-item .content.small').click(function () {
                //hide other medium panel first
                if ($prevOpenMedium) {
                    $prevOpenMedium.hide();
                    $prevOpenMedium.siblings('.small').show();

                }

                $prevOpenMedium = $(this).siblings('.medium');
                $(this).hide();
                $prevOpenMedium.show();
            });

            $('.pulse-item .content.medium').click(function () {
                $prevOpenMedium = null;

                $(this).hide();
                $(this).siblings('.small').show();
            });


            //click and hover handlers for each item under market hub
            $('#main-content').on('click', '.item', function (event) {
                console.log('click event: ', event.target);
            });

            $('#main-content').on('mouseenter', '.item', function (event) {
                console.log('mouse enter: ', event.target);
            });

            $('#main-content').on('mouseleave', '.item', function (event) {
                console.log('mouse left: ', event.target);
            });


            //click event for Help link
            $('#tool-bar .nav .help').click(function() {
                var i;
                var helps = HELP_JSON['help'];
                var html = '<div class="help-links">';

                //construct html for help links
                for (i = 0; i < helps.length; i ++) {
                    html += '<a href=' + helps[i].URL + '>' + helps[i].title + '</a>';

                }

                html += '</div>';

                displayDialog(html);
            });

        });

    })(window);
