// Example unit test function
function divide(a, b) {
    return a / b;
}

// Write a function that takes a single argument (a string) and returns the string reversed.
function reverseString(str) {
    var length = str.length;
    var reversed = new Array(length);

    var i = length;
    while (i--) {
        reversed[length - i] = str.charAt(i);
    }
    return reversed.join('');
}

// Write a function that takes an array of numbers and returns the minimum value
function findMinValue(values) {
    // TODO Why not use Math.min() which can take more than 2 arguments?

    if (!values.length) {
        return;
    }

    var min = values[0];
    for (var i = 1, length = values.length; i < length; i++) {
        min = Math.min(min, values[i]);
    }
    return min;
}

// Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
function findDistinctValues(values) {
    var result = [];
    for (var i = 0, length = values.length; i < length; i++) {
        if (result.indexOf(values[i]) == -1) {
            result.push(values[i]);
        }
    }

    return result;
}

// Write a function that logs the numbers from 1 to 100 to the console.
// For multiples of three print "Fizz" instead of the number.
// For multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
function doFizzBuzz() {
    console.log(getFizzBuzz().join(' '));
}

function getFizzBuzzSequence() {
    var array = [];

    for (var i = 1; i <= 100; i++) {
        if (!(i % 3)) {
            array.push(i % 5 ? 'Fizz' : 'FizzBuzz');
        } else if (!(i % 5)) {
            array.push('Buzz');
        } else {
            array.push(i);
        }
    }
    return array;
}

// You have a master array of strings, where each element is a fruit name.
// You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
// For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
// Write the function that will remove the values contained in fruitsToRemove from the array fruits.
function removeFruits(fruits, fruitsToRemove) {
    var index = fruits.length;
    while (--index >= 0) {
        if (fruitsToRemove.indexOf(fruits[index]) > -1) {
            fruits.splice(index, 1);
        }
    }
    return fruits;
}

// Write a function to push either a simple value or an array of values onto a specified array.
// For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
// If toPush is a simple value, it should be pushed onto array as an element.
// If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
function pushOntoArray(array, toPush) {
    Array.prototype.push.apply(array, toPush instanceof Array ? toPush : [toPush]);

    return array;
}

// Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
function splitListStrUsingComma(sourceStr) {
    // TODO should remove spaces??
    return sourceStr.length ? sourceStr.split(',') : [];
}

// Write a function that will take any number of arguments and return their sum
function sum() {
    var sum = 0;

    for (var i = 0, length = arguments.length; i < length; i++) {
        sum += arguments[i];
    }
    return sum;
}

// Write a function that will return true if a specified string consists of only whitespace.
function isOnlyWhitespace(sourceStr) {
    return sourceStr.trim().length;
}

// write an example of a javascript closure
var counter = function() {
    var _count = 0;

    return {
        increment : function() {
            _count++;
        },
        get : function() {
            return _count;
        }
    }
}();

// define a json object that represents a collection of people.
// each person should have the following properties
// - first name
// - last name
// - city
// - state
// - zip
// - a collection of phone numbers (home, work, mobile)
var contacts = [
    {
        firstName : 'Arthur',
        lastName : 'Gurov',
        city : 'Kharkov',
        state : 'Ukraine',
        zip : 61100,
        phoneNumbers : [
            {phoneNumber : '+380677023906', type : 'MOBILE'},
            {phoneNumber : '+380572984917', type : 'HOME'}
        ]
    }, {
        firstName : 'Victoria',
        lastName : 'Gurova',
        city : 'Kharkov',
        state : 'Ukraine',
        zip : 61100,
        phoneNumbers : [
            {phoneNumber : '+380671234567', type : 'MOBILE'}
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

(function() {
    function DataTable() {
        this.columns = [];
        this.rows = [];
    }

    DataTable.prototype.addColumns = function() {
        var oldLength = this.columns.length;
        Array.prototype.push.apply(this.columns, arguments);

        // Fill new columns by 'undefined' values if already exists some rows
        if (this.rows.length) {
            var newLength = this.columns.length;

            if (newLength != oldLength) {
                for (var i = oldLength, length = Math.ceil(this.rows.length / oldLength) * newLength; i <= length; i += newLength) {
                    for (var j = 0; j < newLength - oldLength; j++) {
                        this.rows.splice(i + j, 0, undefined);
                    }
                }
            }
        }

        return this;
    };
    DataTable.prototype.addRow = function() {
        if (!this.columns.length) {
            throw 'Please add some columns to the table';
        }

        Array.prototype.push.apply(this.rows, arguments);

        return this;
    };
    DataTable.prototype.getData = function() {
        var data = [];

        for (var i = 0, columns = this.columns.length, rows = this.rows.length; i < rows; i += columns) {
            var obj = {};
            for (var j = 0; j < columns; j++) {
                obj[this.columns[j]] = this.rows[i + j];
            }
            data.push(obj);
        }

        return data;
    };
    window.DataTable = DataTable;
})();

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
