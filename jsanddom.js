    function expectedResultText(expected, actual) {
        return sprintf('Expected \'%s\' as the result, the result was: \'%s\'', expected, actual);
    }
    
     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     // TODO: does not support all unicode characters. Look into later
     function reverseString(str) {
        if (!str && typeof str !== 'string') { return undefined; }
        return str.split('').reverse().join('');
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
        if (!values || !_.isArray(values)) { return undefined; }
        return _.min(values);
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     // Note: Not implemented because it isn't in the directions, but it seems like this type of function would benefit from initially stripping
     // out 'null' and 'undefined' values
     function findDistinctValues(values) {
        if (!values || !_.isArray(values)) {return undefined; }
        // Use _.isEqual as comparator for deep compare of values
        return _.uniqWith(values, _.isEqual);
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
        for (var x = 1; x <= 100; x++) {
            var output = null;
            if (x % 3 === 0) {
                output = 'Fizz';
            }
            if (x % 5 === 0) {
                output = output ? output + 'Buzz' : 'Buzz'
            }
            console.log(output || x);
        }
        return true;
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     // Doc: fruits is required, but not passing in 'fruitsToRemove' makes this a noop that returns 'fruits'
     function removeFruits(fruits, fruitsToRemove) {
        if (!fruits || !_.isArray(fruits)) { return undefined; }
        if (!fruitsToRemove || !_.isArray(fruitsToRemove)) { return fruits; }
        return _.pullAllWith(fruits, fruitsToRemove, _.isEqual);
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
        if (!array || !_.isArray(array)) { return undefined; }
        // I was originally going to add this null check, but decided it isn't technically in the spec
        // So insteda I'll just push 'null' and 'undefined' onto the array like any other simple value
        // if (_.isNil(toPush)) { return array; }
        if (!_.isArray(toPush)) { toPush = [toPush]; }
        Array.prototype.push.apply(array, toPush);
        return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
        if (!sourceStr || !_.isString(sourceStr) || sourceStr.length === 0) { return []; }
        return sourceStr.split(',');
     }

     // Write a function that will take any number of arguments and return their sum
     // Doc: It was not defined how this would handle decimal precision. I will sound to 5 digits
     function sum() {
        var toSum = Array.prototype.slice.call(arguments);
        toSum = _.filter(toSum, _.isNumber);
        return _.round(_.sum(toSum), 5);
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     // Doc: Null, undefined, and non-strings return false, empty strings return true
     function isOnlyWhitespace(sourceStr) {
        if (_.isNil(sourceStr) || !_.isString(sourceStr)) { return false; }
        if (sourceStr.length === 0) { return true; }
        var wsReg = /^\s*$/
        return !!wsReg.exec(sourceStr);
     }

     // write an example of a javascript closure
     // Doc: Simple closure that counts the number of times the wrapped function is called
     function closed() {
        var callCount = 0;
        return function() {
            return ++callCount;
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

     function Person(firstName, lastName, city, state, zip, phoneNumbers) {
        this.firstName = firstName;
        this.lastName = lastName;
        this. city = city;
        this.state = state;
        this.zipCode = zip;
        this.phoneNumbers = phoneNumbers;
     }

     var people = {
        'Mike': new Person('Mike', 'Wazowski', 'Emeryville', 'CA', '94608', {cellPhone: '555-555-5555', homePhone: '555-555-5554'}),
        'Anya': new Person('Anastasia', 'Nikolaevna', 'St. Petersburg', 'FL', '33701', {cellPhone: '555-444-2233', homePhone: '+7 840 555-4444'}),
        'Tip': new Person('Gratuity', 'Tucci', 'New York', 'NY', '10001', {cellPhone: '555-887-9573'})
     };

     // Create a javascript object (DataTable) with the following:
     // A private columns property (string array)
     // A private rows property (string array)
// Note: This line is inconsisten with the .addRow examples below. Given how the data is represented, I went with 'addRow'
     // A public method addRows that adds an item to the rows array
     // A public method addColumns that adds an item to the columns array
     // A public method getData that returns the a json object representation of the DataTable
     // Note: the row object should be a hash of the column name and row item value
     // Example:
     // .addColumns('column1', 'column2', 'column3');
     // .addRow('value1A', 'value1B', 'value1C');
     // .addRow('value2A', 'value2B', 'value2C');

     // Doc: There is a tradeoff here between store speed and retrieval speed.
     //      If it is expected that you will call 'addRow' much less than 'getData', then you should
     //      perform data normalization in the 'addRow' function.
     function DataTable() {
        var columns = [];
        var rows = [];

        Object.defineProperties(DataTable.prototype, {
            addColumns: {value: function() {
                pushOntoArray(columns, Array.prototype.slice.call(arguments));
            }},
            addRow: {value: function() {
                var rowArray = Array.prototype.slice.call(arguments);
                rows.push(rowArray);
            }},
            getData: {value: function() {
                var data = {};
                var curRow = 1;
                _.each(rows, function(row) {
                    var rowData = {}
                    for(var colIdx = 0; colIdx < columns.length; colIdx++) {
                        if (colIdx < row.length) {
                            rowData[columns[colIdx]] = row[colIdx];
                        } else {
                            rowData[columns[colIdx]] = undefined;
                        }
                    }
                    data['row'+curRow++] = rowData;
                });
                return data;
            }}
        });
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
