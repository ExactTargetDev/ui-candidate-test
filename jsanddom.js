    // Example unit test function
    function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
    }

    // Write a function that takes a single argument (a string) and returns the string reversed.
    function reverseString(str) {
        // Split to array, reverse array, join back to string
        return str.split('').reverse().join('');
    }

    // Write a function that takes an array of numbers and returns the minimum value
    function findMinValue(values) {
        // Apply array of numbers as arguments to Math.min, which only accepts parameters
        // Could have also have iterated through array and tracked minimum
        // Could have also used the ES6 spread operator, but I've elected not to use Babel here
        return Math.min.apply(null, values);
    }

    // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
    function findDistinctValues(values) {
        // Since indexOf returns the first position of an element in an array, filter the array by those elements whose index matches indexOf
        return values.filter(function(value, index) {
            return values.indexOf(value) === index;
        });
    }

    // Write a function that logs the numbers from 1 to 100 to the console.
    // For multiples of three print "Fizz" instead of the number.
    // For multiples of five print "Buzz".
    // For numbers which are multiples of both three and five print "FizzBuzz".
    function doFizzBuzz(consoleInterface) {
        // Note that this function has been modified to accept a parameter as the console interface
        // This would be easily replaceable with the console object

        var i;
        var buffer;

        for (i = 1; i <= 100; i++) {
            buffer = '';

            if (i % 3 === 0) {
                buffer += 'Fizz';
            }

            if (i % 5 === 0) {
                buffer += 'Buzz';
            }

            if (buffer !== '') {
                consoleInterface.log(i + ': ' + buffer);
            }
        }
    }

    // You have a master array of strings, where each element is a fruit name.
    // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
    // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
    // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
    function removeFruits(fruits, fruitsToRemove) {
        // Use Arrray.filter to filter only those fruits that do not have an index in fruitsToRemove
        return fruits.filter(function(fruit) {
           return fruitsToRemove.indexOf(fruit) < 0;
        });
    }

    // Write a function to push either a simple value or an array of values onto a specified array.
    // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
    // If toPush is a simple value, it should be pushed onto array as an element.
    // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
    function pushOntoArray(array, toPush) {
        // Were we using ES6, we could just use the lovely spread operator
        // E.g.: return [...array, ...toPush];
        // Nevertheless, I'll just implement a simple implementation here

        // toPush is an array
        if (Array.isArray(toPush)) {
            toPush.forEach(function(value) {
               array.push(value);
            });
        } else {
            array.push(toPush);
        }

        return array;
    }

    // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
    function splitListStrUsingComma(sourceStr) {
        if (sourceStr === '') {
            return [];
        }

        return sourceStr.split(',');
    }

    // Write a function that will take any number of arguments and return their sum
    function sum() {
        // Simply convert arguments into an array and then do a summation using Array.reduce
        // As a side note, I generally do not like having variable arguments, and would usually opt for an array as an argument

       return [].slice.call(arguments).reduce(function(left, right) {
           return left + right;
       });
    }

    // Write a function that will return true if a specified string consists of only whitespace.
    function isOnlyWhitespace(sourceStr) {
        // Use a regular expression to test if the sourceStr is only whitespace characters
        // This will return true in the event that the string is empty too
        return /^\s*$/.test(sourceStr);
    }

    // write an example of a javascript closure

    // Closures are nothing more than functions that remember the environment in which they were created
    // For example, in the below code, the closure is created using the 'name' argument of its parent
    function getHelloFunc(name) {
        function hello() {
            return 'Hello, ' + name;
        }

        return hello;
    }

    var sayHelloToMalfurion = getHelloFunc('Malfurion');
    sayHelloToMalfurion();  // Returns 'Hello, Malfurion'

    // define a json object that represents a collection of people.
    // each person should have the following properties
    // - first name
    // - last name
    // - city
    // - state
    // - zip
    // - a collection of phone numbers (home, work, mobile)

    // JavaScript objects are a bit more flexible than the JSON spec
    // The following example below, in order to be JSON-compliant, would actually use double quotes and have the keys also quoted
    // We can always take a JavaScript object and convert to JSON using JSON.stringify

    var people = [{
        firstName: 'Jim',
        lastName: 'Raynor',
        city: 'Badlands',
        state: 'Mar Sara',
        zip: 46123,
        phoneNumbers: [{
            type: 'home',
            number: '317-555-5555',
        }, {
            type: 'work',
            number: '317-444-4444',
        }],
    }, {
        firstName: 'Sarah',
        lastName: 'Kerrigan',
        city: 'New Gettysburg',
        state: 'Tarsonis',
        zip: 46122,
        phoneNumbers: [{
            type: 'work',
            number: '111-111-1111',
        }, {
            type: 'mobile',
            number: '111-111-1112',
        }],
    }];

    JSON.stringify(people);  // If we really wanted proper JavaScript Object Notation

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

    // It should be noted that in real code, I would no longer use the pre-ES6 version of creating class-like objects
    // However, ES6 classes do not support private properties or methods (although there are proposals for them)
    // See unit tests for examples

    function DataTable() {
        // Local variables are effectively "private"
        // Anything added to "this" is public

        var columns = [];
        var rows = [];

        this.addRow = function() {
            var cells = [].slice.call(arguments);

            if (rows.length <= columns.length) {
                rows.push(cells);
            } else {
                throw new Error('Item contains more values than the columns in the DataTable');
            }
        };

        this.addColumns = function() {
            var newColumns = [].slice.call(arguments);

            newColumns.forEach(function (column) {
                columns.push(column);
            });
        };

        this.getData = function() {
            // Map each row into a hash of the column names and values
            return rows.map(function(rowValues) {
                var row = {};

                // Each row will be a hash map of key: value
                columns.forEach(function (column, index) {
                    row[column] = rowValues[index];
                });

                return row;
            });
        };
    }

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
