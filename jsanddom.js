     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         //if str and it is a string
         if (str && (typeof str === 'string')) {
            //split it, reverse it, join it, and return it
            var strArr = str.split('');
            strArr.reverse();
            return strArr.join('');
         } else {//otherwise...
            //return str (non string value or undefined)
            return str;
         }
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         //if values and it's not a string and it has a length property
         if (values && (typeof values != 'string') &&
             (typeof values.length != 'undefined')) {
            return Math.min.apply(null, values);//applu Math.min to the values
         } else {//otherwise...
            return values;//return values (non-array value or undefined)
         }
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         //if values and it's not a string and it has a length property
         if (values && (typeof values != 'string') &&
             (typeof values.length != 'undefined')) {
            //declare and init vars
            var distinctArray = [],
                i = 0,
                fIndex = -1,
                lIndex = -1;
            //for each element in values
            for (i = 0; i < values.length; i = i + 1) {
              //get the first index
              fIndex = values.indexOf(values[i]);
              //get the last index
              lIndex = values.lastIndexOf(values[i]);
              //if they are the same, no duplicates exist
              if (fIndex === lIndex) {
                //push the element to the distinctArray
                distinctArray.push(values[i]);
              }
            }
            //return the distinct array
            return distinctArray;
         } else {//otherwise...
            //return non-array value or undefined
            return values;
         }
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         //for 100 times
         for (var i = 1; i < 101; i = i + 1) {
            //if divisible by 3 and 5 evenly...
            if ((i % 3) === 0 && (i % 5) === 0) {
               console.log("FizzBuzz");
            //if divisible by 3 evenly
            } else if ((i % 3) === 0) {
               console.log("Fizz");
            //if divisible by 5
            } else if ((i % 5) === 0) {
               console.log("Fizz");
            //otherwise...
            } else {
               console.log(i);
            }
         }
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         //let's make sure they are there and that they are most likely arrays
         if (fruits && fruitsToBeRemoved &&
             (typeof fruits != 'string') &&
             (typeof fruitsToBeRemoved != 'string') &&
             (typeof fruits.length != 'undefined') &&
             (typeof fruitsToBeRemoved.length != 'undefined')) {
            var index = -1;
            //for each fruit in fruitsToRemove
            for (var i = 0; i < fruitsToRemove.length; i = i + 1) {
               //if the fruit is in the fruits array
               index = fruits.indexOf(fruitsToRemove[i]);
               if (index > -1) {
                  //remove it
                  fruits.splice(1,1);
               }
            }
         }
         //return fruits (helps with chaining and graceful error handling)
         return fruits;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         //let's make sure array and toPush are there and then
         //see if array is most likely an array
         if (array && toPush &&
             (typeof array != 'string') &&
             (typeof array.length != 'undefined')) {
            //if toPush is likely an array...
            if ((typeof toPush === 'object') &&
                (typeof toPush.length != 'undefined')) {
               //loop through and push the elements
               for (var i = 0; i < toPush.length; i = i + 1) {
                  array.push(toPush[i]);
               }
            } else {//otherwise...
               //just push toPush
               array.push(toPush);
            }
         }
         //return array
         return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         //if not undefined and string
         if ((typeof sourceStr != 'undefined') &&
             (typeof sourceStr === 'string')) {
            var rtn = [];
            //if the string is not empty
            if (sourceStr.length > 0) {
               //split with a ',' as the delimeter
               rtn = sourceStr.split(',');
            }
            //return the rtn array
            return rtn;
         } else {//otherwise...
            //return non-string arg or undefined
            return sourceStr;
         }
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         //initialize the return value as undefined
         var s = undefined;
         for (var i = 0; i < arguments.length; i = i + 1) {
            //for the purposes of this exercise, ignore anything
            //that is not a number that can be added
            if ((typeof arguments[i] === 'number') &&
                arguments[i] != Infinity &&
                !isNaN(arguments[i])) {
               //if s is still undefined set it to zero
               if (typeof s === 'undefined') {
                  s = 0;
               }
               //add the arg to s
               s += arguments[i];
            }
         }
         //return the sum or undefined
         return s;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         //return a test regexp test on sourceStr
         return /^(\s)+$/.test(sourceStr);
     }

     // write an example of a javascript closure
     var closureExample = function(name) {
        //a little error handling
        if (typeof name != 'string') throw new Error("Invalid argument. " +
            "Expected string, but got " + typeof name + ".");
        //return an object that has a function that can return the name
        return {
           'get_name': function() {
              return name;
           }
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
     var jsonObj = [
        {
           'first_name': 'John',
           'last_name': 'Doe',
           'city': 'Indianapolis',
           'state': 'Indiana',
           'zip': '46203',
           'phone_numbers': [
              {
                 'type': 'home',
                 'country_code': 1,
                 'area_code': 317,
                 'exchange': 555,
                 'line': 1234
              },
              {
                 'type': 'work',
                 'country_code': 1,
                 'area_code': 317,
                 'exchange': 555,
                 'line': 4321
              },
              {
                 'type': 'mobile',
                 'country_code': 1,
                 'area_code': 317,
                 'exchange': 555,
                 'line': 9876
              }
           ]
        }
     ];

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
     
     // NOTE: the instructions had a little ambiguity in respect to the rows
     // so I made a command decision and used the following
     
     /**
      * @name DataTable
      * @constructor
      *
      * @classdesc The DataTable class allows the user to create and organize
      *            table data
      * @returns {object} DataTable
      */
     function DataTable() {
        //store this in that for context maintenance
        var that = this,
            /**
             * @name DataTable._columns
             * @private
             * @type string Array
             * @desc Array that stores the column data
             */
            _columns = [],
            /**
             * @name DataTable._rows
             * @private
             * @type string Array Array
             * @desc Array that arrays of row data
             */
            _rows = [];
        /**
         * @name DataTable.addRows
         * @public
         * @type function
         * @desc A function that adds rows to the object
         * @param {string} Any number of strings that are the row data
         * @returns {object DataTable} this instance of DataTable
         */
        that.addRow = function() {
          //row data array
          var r = [];
          for (var i = 0; i < arguments.length; i = i + 1) {
            if (typeof arguments[i] != 'string') {
               throw new Error("Invalid Argument. Arguments must be " +
                               "string(s).");
            }
            //push all the args to the row data array
            r.push(arguments[i]);
          }
          //push the row data array as a row to _rows
          _rows.push(r);
          return that;
        };
        /**
         * @name DataTable.addColumns
         * @public
         * @type Function
         * @desc A function that adds columns to the object
         * @param {string} Any number of strings that are the column headings
         * @returns {object DataTable} this instance of DataTable
         */
        that.addColumns = function() {
          for (var i = 0; i < arguments.length; i = i + 1) {
            if (typeof arguments[i] != 'string') {
               throw new Error("Invalid Argument. Arguments must be " +
                               "string(s).");
            }
            //push all column args to _columns
            _columns.push(arguments[i]);
          }
          return that;
        },
        /**
         * @name DataTable.getData
         * @public
         * @type Function
         * @desc A function that returns an object representation of this
         * @returns {object Object} an object with the column and row data
         */
        that.getData = function() {
          //return an object containing the data
          return {
             'columns': _columns,
             'rows': _rows
          }
        };
     }

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
     
     // NOTE: Went ahead and used jQuery here since it is required for
     // the next task
     //let's keep all of this out of the global name space
     (function() {
        //create select element
        var $testSelect = $('<select id="select" name="select"></select>');
        //append four options
        $testSelect.append('<option value="1" selected="selected">' +
                           'First Value</option>');
        $testSelect.append('<option value="2">Second Value</option>');
        $testSelect.append('<option value="3">Third Value</option>');
        $testSelect.append('<option value="four">Fourth Value</option>');
        //create button
        var $displayValBtn = $('<button type="button">Write Selected Item' +
           'To Console</button>');
        //add click event handler
        $displayValBtn.on('click', function(e) {
           //find the select element
           var $selectEl = $('#select'),
               //get its name
               name = $selectEl.attr('name'),
               //and the select elements value
               val = $selectEl.find(':selected').val();
           //log message to console
           window.console.log('Name "' + name + '" and Value "' + val +
                              '" are currently selected');
        });
        //append the select element...
        $('#div1').append($testSelect);
        //and the button to div1
        $('#div1').append($displayValBtn);
     })();
     
     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
     $('a');
     $('.link');
     $('a.link');
     $('#fizz > a');
     $('#foo a.link');

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
     
     (function() {
        //array of values
        var arr = ['One', 2, 'Three', false, undefined];
        //loop through the values and add a li to list1
        for (var i = 0; i < arr.length; i = i + 1) {
           $('#list1').append('<li>' + arr[i] + '</li>');
        }
     })();

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
     