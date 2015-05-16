     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         var stringArray = str.split('');
         var revStringArray = stringArray.reverse();
         return revStringArray.join('');
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         values.sort(function(x,y){
                        return (x - y);
                        });
         return values[0];
     }

     // Write a function that takes an array aand returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         var sortArray = values.sort();            // sort
         for(var i=1; i<sortArray.length; i++) {   
             if(sortArray[i-1] == sortArray[i]) {   // look for duplicates
                sortArray.splice(i-1, 1);           // remove previous duplicate
                i = i - 1;                          // adjust array index
             }      
         }
         return sortArray;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         var i = 1;
         var output = '';
         var outArray = [];
         var printme = '';
         for(i = 1; i <= 100; i++) {
             printme = '';
             if(i % 3 == 0) {
                 printme = 'Fizz';
             }
             if(i % 5 == 0) {
                 printme += 'Buzz';
             }
             if(printme == ''){
                 printme = i;
             }
             output += printme+' ';
             outArray.push(printme);
         }
         console.log(outArray);  //  output array to console
         return outArray;        // return array for Unit test
             
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         if($.isArray(fruits) != true || $.isArray(fruitsToRemove) != true  || ($.isArray(fruits) == true && fruits.length < 1))
            return false;
         var index = 0;
         for(var i = 0; i < fruitsToRemove.length; i++) {
            index = fruits.indexOf(fruitsToRemove[i]);
            if(index >= 0) {
                fruits.splice(index, 1);
            }
         }
         return fruits; // fruits is modified, but return fruits array for unit tests
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         if($.isArray(toPush)) {
            for(var i=0; i<=toPushlength; i++) {
                array.push(toPush[i]);
            }
         }
         else {
             array.push(toPush);
         }
         return array;      // array is modified, but return array for unit tests
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         var split = [];
         if(sourceStr.length > 0) {
             split =  sourceStr.split(',');
         }
         return split;
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         var sum = 0;
         var num = 0;
         
         if(arguments.length > 0) {
             for(var i=0; i<arguments.length; i++) {
                 num = parseFloat(arguments[i]);
                 if(!isNaN(num))  {
                    sum += num;
                 }
             }
         }
         return sum;
                 
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         var whiteLength = str.match(/\s/g).length;   // get number of whitespace characters
         if(whiteLength == str.length)                // is length of whitespace same as total string length
             return true;
         else
             return false;
     }

     // write an example of a javascript closure
     var myFunc = function() {
         var var1 = 'one';      // defined in function so will be available in functions defined inside this function 
         this.var1 = 'one';     // defined elsewhere so will not be available in functions defined inside this function
         $.get('undefined.php', function() { // callback function
             console.log(this.var1);   // should be undefined
             console.log(var1);        // should be defined
         }).fail(function() {
             console.log(this.var1);   // should be undefined
             console.log(var1);        // should be defined
             
         });
     }

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     var peopleObject = function() {
           [{"firstName":"Donald",
                        "lastName":"Duck",
                        "city":"LA",
                        "state":"CA",
                        "zip":"09844",
                        "phones":[{"number":"993 999-9999","type":"home"},
                                   {"number":"888 999-3333","type":"work"},
                                   {"number":"333 898-2344","type":"mobile"}
                                  ]
                       },
                       {"firstName":"Mickey",
                        "lastName":"Mouse",
                        "city":"LA",
                        "state":"CA",
                        "zip":"09833",
                        "phones":[{"number":"993 999-9999","type":"home"},
                                  {"number":"888 999-3333","type":"work"},
                                  {"number":"333 898-2344","type":"mobile"}
                                 ]
                       }
           ]

     }

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
     
     var DataTable = (function() {
         var columns = [];
         var rows = [];
         
         return {
             addRows: function(item) {
                 rows.push(item);
             },
             addColumns: function(item) {
                 columns.push(item);
             },
             getData: function() {
                 return colums;      // not sure how you are intending to combine columns and rows
             }
         }
     });

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
     var selectFunc = function() {
         var options = ['red', 'yellow', 'blue', 'green'];
         $('#div1').append('<select id="my-select"></select>');
         var mySelect = $('#my-select');
         for(var i=0; i<options.length; i++) {
             mySelect.append('<option value='+options[i]+'>'+options[i]+'</option>');
         }
         // add button
         $('#div1').append('<button id="div1-button" type="button">Show Selected</button>');
         
         $('#div1-button').click(function(ev) {
            var opt = $('#my-select').val();
            var text = $('#my-select option:selected').text()
            console.log('value: '+opt+', text: '+text);
         });
     }
     

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
