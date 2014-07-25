// Example unit test function
function divide (a, b) {
    // To see the test pass, uncomment the following line
    return a / b;
}

// Write a function that takes a single argument (a string) and returns the string reversed.
function reverseString (str) {
    var len = str.length - 1, result = '';
    while (len >= 0) {
        result += str[len--]
    }
    return result;
}

// Write a function that takes an array of numbers and returns the minimum value
function findMinValue (values) {
    //You may use any JavaScript and/or CSS library you wish, or none at all.
    return _.min(values);
}

// Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
function findDistinctValues (values) {
    return _.uniq(values);
}

// Write a function that logs the numbers from 1 to 100 to the console.
// For multiples of three print "Fizz" instead of the number.
// For multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
function doFizzBuzz () {
    console.group('doFizzBuzz() Test');
    var ct = 1, output;
    while (ct <= 100) {
        output = ct.toString() + ' ';

        if (ct % 3 === 0) {
            output += 'Fizz';
        }

        if (ct % 5 === 0) {
            output += 'Buzz';
        }
        console.log(output);

        ct++;
    }

    console.groupEnd();
}

// You have a master array of strings, where each element is a fruit name.
// You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
// For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
// Write the function that will remove the values contained in fruitsToRemove from the array fruits.
function removeFruits (fruits, fruitsToRemove) {
    return _.filter(fruits, function(fruit) {
        return fruitsToRemove.indexOf(fruit) === -1;
    });
}

// Write a function to push either a simple value or an array of values onto a specified array.
// For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
// If toPush is a simple value, it should be pushed onto array as an element.
// If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
function pushOntoArray (array, toPush) {
    if (_.isArray(toPush)) {
        array = array.concat(toPush);
    } else {
        array.push(toPush);
    }
    return array;
}

// Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
function splitListStrUsingComma (sourceStr) {
    var result = sourceStr.split(',');
    if (result.length === 1 && result[0] === '') {
        result = [];
    }
    return result;
}

// Write a function that will take any number of arguments and return their sum
function sum () {
    return _.reduce(arguments, function(memo, num) {
        return memo + num;
    }, 0);
}

// Write a function that will return true if a specified string consists of only whitespace.
function isOnlyWhitespace (sourceStr) {
    var result = _.filter(sourceStr, function(letter) {
        return letter !== ' '
    });

    return (result.length === 0)
}

// write an example of a javascript closure
function doubleNumberClosure(num) {
    function double() {
        return num * num;
    }
    return double();
}

// define a json object that represents a collection of people.
// each person should have the following properties
// - first name
// - last name
// - city
// - state
// - zip
// - a collection of phone numbers (home, work, mobile)
var PersonObj = function() {
    return {
        firstName: undefined,
        lastName: undefined,
        city: undefined,
        state: undefined,
        zip: undefined,
        phoneNumbers: {
            home: undefined,
            work: undefined,
            mobile: undefined
        },

        /**
         * Sets values on the PersonObj
         *
         * @param {Object|String} prop Can pass in a single property string to set or can pass in a whole object
         * @param {String} [data] Optional if passing in a whole Object for `prop`
         */
        set: function(prop, data) {
            if(_.isObject(prop)) {
                _.each(prop, function(val, key) {
                    this._set(key, val);
                }, this)
            } else {
                this._set(prop, data);
            }
        },

        /**
         * Actually sets a specific property of the Object with the given value
         *
         * @param {String} prop The property to set
         * @param {*} data The value to set
         * @param {String} [nestedKey] For recursion, if trying to set complex objects, nestedKey will hold
         *                             the value normally found on `prop` and `prop` will hold the property
         *                             inside that inner object.
         * @private
         */
        _set: function(prop, data, nestedKey) {
            // Check if the property exists on this Object
            var propExists = false;
            if(nestedKey) {
                propExists = _.has(this[nestedKey], prop);
            } else {
                propExists = _.has(this, prop);
            }

            if(propExists) {
                // Check to see if we're trying to set an Object of data
                if(_.isObject(data)) {
                    // handle our "phoneNumbers" Object
                    _.each(data, function(val, key) {
                        this._set(key, val, prop);
                    }, this)
                } else {
                    if(nestedKey) {
                        this[nestedKey][prop] = data;
                    } else {
                        this[prop] = data;
                    }
                }
            } else {
                console.error('PersonObj::_set: trying to set non-existant property ' + prop);
            }
        }
    }
};

var PeopleCollection = function() {
    return {
        people: [],
        /**
         * Adds a PersonObj to the collection
         *
         * @param {PersonObj} personObj A single PersonObj to add to the collection
         */
        add: function(personObj) {
            this.people.push(personObj);
        },

        /**
         * Removes a PersonObj from the collection
         *
         * @param {PersonObj} personObj
         */
        remove: function(personObj) {
            var index = this.people.indexOf(personObj);
            if(index !== -1) {
                this.people.splice(index, 1);
                console.log(personObj.firstName + ' was removed');
            }
        },

        /**
         * Returns the length of the people Array
         *
         * @returns {int} The length of the people Array
         */
        length: function() {
            return this.people.length;
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
var DataTable = function() {
    return {
        _columns: [],
        _rows: [],
        _columnIds: [],

        /**
         * Adds args passed in as a single row's data
         */
        addRows: function() {
            var colLen = this._columns.length;
            if(colLen === 0) {
                console.error("DataTable::addRows: No Columns specified. Please use addColumns() "
                + "first to add columns before adding row data")
                return;
            }

            if(colLen < arguments.length) {
                console.error("DataTable::addRows: Sent more row data than there are columns");
                return;
            }

            var index = 0,
                colId,
                data = [];

            _.each(arguments, function(rowData) {
                colId = this._columnIds[index++];
                data.push(colId + '_' + rowData);

            }, this);

            this._rows.push(data);
        },

        /**
         * Adds args passed in as columns
         */
        addColumns: function() {
            var id;
            _.each(arguments, function(colName) {
                if(!this.columnExists(colName)) {
                    id = this.colNameToId(colName);
                    this._columns.push(colName);
                    this._columnIds.push(id);
                } else {
                    console.warn('DataTable::addColumns: Trying to add a column that already exists: ' + col);
                }
            }, this);
        },

        /**
         * Returns all table rows and columns as a JSON object
         *
         * @returns {{columns: *, rows: *}}
         */
        getData: function() {
            return {
                columns: this._columns,
                rows: this.getRowValues()
            };
        },

        /**
         * Splits the value off of a row cell's data and returns just the values
         * for that row
         *
         * @returns {Array}
         */
        getRowValues: function() {
            var rows = [],
                rowData,
                tmp;
            _.each(this._rows, function(rowArr) {
                rowData = [];
                _.each(rowArr, function(row) {
                    // split the value off the row data
                    tmp = row.split('_');
                    rowData.push(tmp[1]);
                }, this);
                rows.push(rowData);
            }, this);
            return rows;
        },

        /**
         * Public getter to return the _columns data
         *
         * @returns {*}
         */
        getColumns: function() {
            return this._columns;
        },

        /**
         * Boolean to see if a column name exists already
         *
         * @param {String} colName The name of the column to check
         * @returns {boolean} True if the column already exists
         */
        columnExists: function(colName) {
            return (this._columns.indexOf(colName) !== -1)
        },

        /**
         * Turns a column name into a camelCased ID
         *
         * @param {String} colName The name of the column to turn into an ID
         * @returns {String} The column name as an ID with no spaces/_/etc
         * @private
         */
        colNameToId: function(colName) {
            return S(colName).camelize().s;
        }
    }
}

// within div1, programatically create a
// SELECT element (with multiple items) and a button.
// when the button is clicked write out the name and value of the selected item to the console.
$(function() {
    var dataProvider = [
        'Game Dev',
        'Video Games',
        'Kitties'
    ];

    function addSelectElement() {
        var $el = $('#div1'),
            $selectEl,
            $buttonEl,
            $outputEl;

        if($el) {
            $selectEl = $('<select id="mySelect"></select>');

            _.each(dataProvider, function(item) {
                $selectEl.append('<option>' + item + '</option>');
            }, this);

            // add event listener to select
            $selectEl.on('change', onSelectChanged);

            // add a button and click event listener
            $buttonEl = $('<button id="myButton">Select Value</button>')
                .data('selectedVal', dataProvider[0])
                .on('click', onSelectButtonClicked);

            // add an output span
            $outputEl = $('<span id="myOutput"></span>')

            $el.append($selectEl);
            $el.append($buttonEl);
            $el.append($outputEl);

            updateSelectedVal(dataProvider[0]);
        }
    }

    function onSelectButtonClicked(event) {
        // get the selected value from the button
        updateSelectedVal($(this).data('selectedVal'));
    }

    function onSelectChanged(event) {
        var $btn = $('#myButton');
        if($btn) {
            $btn.data('selectedVal', this.value)
        }
    }

    function updateSelectedVal(val) {
        var $outputEl = $('#myOutput');
        if($outputEl) {
            $outputEl.html("Selected Value: " + val);
        }
    }

    addSelectElement();
});
// Write 5 different jQuery selectors to retrieve the
// sample anchor in the markup below.

// Programatically create an array with 5 items.  Create a list item for each item in the array
// and add the list items to the unordered list with an id of "list1".

// Use javascript to add a list of checkboxes and 2 links
// to the div with an id of "foobar"
// When the first link is clicked, all the checkboxes should be checked (i.e. check all)
// When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
