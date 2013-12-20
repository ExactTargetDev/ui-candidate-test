     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
        var backwards = _.toArray(str).reverse();
        return _.reduce(backwards, function(memo, character) { return memo + character; }, "");
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
        return _.min(values);
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
        return _.uniq(values);
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         var logArray = _.map(_.range(1, 100), function(number) {
            var fizzBuzz = ( ( number % 3 == 0 ) ? "Fizz" : "" ) + ( (number % 5 == 0) ? "Buzz" : "" );
            return fizzBuzz.length > 0 ? fizzBuzz : number;
         });

         _.each(logArray, function(logItem) { console.log(logItem); });
         return logArray;
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
        return _.difference(fruits, fruitsToRemove);
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
        var arr =  _.clone(array);
        if ( _.isArray(toPush) ) {
            _.each(toPush, function(item) { arr.push(item); });
        } else {
            arr.push(toPush);
        }
        
        return arr;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
        return _.isEmpty(sourceStr) ? [] : _.clone(sourceStr).split(",");
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
        return _.reduce(arguments, function(memo, item) { return memo + item; });
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
        return new RegExp(/^\s+$/).test(sourceStr);
     }

     // write an example of a javascript closure
     // pretty much every 2nd parameter to an underscore function above :)
     // in _.each([1,2,3], function(x) { console.log(x); }) the function argument is a closure and will execute in its own scope.

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
    var jsonPeople = [
        {
            firstName:  "Brett",
            lastName:   "Timperman",
            address: {
                city:   "Cincinnati",
                state:  "OH",
                zip:    45140
            },
            phoneNumbers: {
                mobile: 5135156738,
                work:   5139846700,
                home:   5135551212 
            }
        },
        {
            firstName:  "John",
            lastName:   "Doe",
            address: {
                city:   "Indianapolis",
                state:  "IN",
                zip:    46210
            },
            phoneNumbers: {
                mobile: 8123454567,
                work:   8123452223,
                home:   8120009999 
            }
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
