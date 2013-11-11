/* - - - - - - - - - - - - - - - - - - - - - - - -
	CONSOLE WRAPPER 
- - - - - - - - - - - - - - - - - - - - - - - - */
// Avoid 'console' errors in browsers that lack a console.
if (!(window.console && window.console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}


/* - - - - - - - - - - - - - - - - - - - - - - - -
	Actual UI Candidate Test
- - - - - - - - - - - - - - - - - - - - - - - - */

// Example unit test function
function divide( a, b ) {
// To see the test pass, uncomment the following line
return a / b;
}

// Write a function that takes a single argument (a string) and returns the string reversed.
function reverseString(str) {
str = str.split('').reverse().join('');
return str;
}

// Write a function that takes an array of numbers and returns the minimum value
function findMinValue(values) {
if(values.length >= 0) {
	values.sort(function(a,b){ return a-b; });
	return values[0];
}
else {
	return undefined;
}
}

// Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
function findDistinctValues(values) {
	// requires jQuery. Thought about using native .filter, but it's JavaScript 1.6 / ECMAScript 5th Edition
	// but didn't want to mess with a polyfill. lodash or underscore's uniq is faster than inArray 
	// (especially if pre-sorted), but didn't want to include a library for just this one function.

	return $.grep(values, function(el, index) {
		return index == $.inArray(el, values);
	});
}

// Write a function that logs the numbers from 1 to 100 to the console.
// For multiples of three print "Fizz" instead of the number.
// For multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
function doFizzBuzz() {
	var string = '',
		allOutput = '';	// Store all values for testing

	for (var i = 1; i <=100; i++ ) {
		string = '';
		if (i % 3 === 0) {
			string = string + 'Fizz';
		}
		if (i % 5 === 0) {
			string = string + 'Buzz';
		}
		if (string === '') {
			string = i;
		}
		console.log(string);
		allOutput = allOutput + string;
	}

	return allOutput;
}

// You have a master array of strings, where each element is a fruit name.
// You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
// For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
// Write the function that will remove the values contained in fruitsToRemove from the array fruits.
function removeFruits(fruits, fruitsToRemove) {
	// would probably want to ignore capitalization when used in production

	for(var i = 0; i < fruitsToRemove.length; i++) {
		for(var j = 0; j < fruits.length; j++) {
			if (fruitsToRemove[i] === fruits[j]) {
				fruits.splice([j], 1);

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
	// This technically returns a new array, but within function scope the array is changed by reference. 
	// The array will need to be passed in via a parent object reference to truly edit the variable by reference,
	// since parameters are passed by value and not reference unless within an object.
	if (typeof toPush === 'number') {
		array.push(toPush);
	}
	// Thought about using native .isArray, but it's JavaScript 1.8.5 / ECMAScript 5th Edition
	else if (Object.prototype.toString.call( toPush ) === '[object Array]' && toPush.length < 65537 ) {
		// Hard limit for using apply with an array. See https://bugs.webkit.org/show_bug.cgi?id=80797
		array.push.apply(array, toPush);
	}

	return array;
}

// Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
function splitListStrUsingComma(sourceStr) {
	if (sourceStr.length === 0) {
		return [];
	}
	// spaces at the start of array items should probably be trimmed--depending on the application
	return sourceStr.split(',');
}

// Write a function that will take any number of arguments and return their sum
function sum() {
	var sumOfArguements = 0;
	for (var i = 0, j = arguments.length; i < j; i++){
        sumOfArguements = sumOfArguements + arguments[i];
    }
    return sumOfArguements;
}

// Write a function that will return true if a specified string consists of only whitespace.
function isOnlyWhitespace(sourceStr) {
	// Thought about using native .trim, but it's JavaScript 1.8.1 / ECMAScript 5th Edition.
	// The following line replaces empty spaces with '', and then if its an empty string,
	// sourceStr will be falsey.
	if (!sourceStr.replace(/^\s+|\s+$/g, '')) {
		return true;
	}
	else {
		return false;
	}
}

// write an example of a javascript closure

/**
 * whoIsAlex
 *
 * Has get and set methods for private variable _identity which is not public due to a function's 
 * closure, but can be set via the public methods exposed in return. _identity is within the scope
 * of the get and set methods, but not within the scope of window. 
 */

var whoIsAlex = (function() {
	// private variable
	var _identity = 'A man';

	return {
		setIdentity: function(newIdentity) {
			_identity = newIdentity;
		},
		getIdentity: function() {
			return _identity;
		}
	};
})();

// define a json object that represents a collection of people.
// each person should have the following properties
// - first name
// - last name
// - city
// - state
// - zip
// - a collection of phone numbers (home, work, mobile)


// We could do a direct hash with (home, work, mobile), but I implied collection 
// to be an array for extensibility. Who knows, maybe people will have Google glass
// phone numbers in the future?

var people = [
	{
		"firstName": "Alex",
		"lastName": " Vernacchia",
		"city": "Indianapolis",
		"state": "IN",
		"zip": "00000",
		"phoneNumbers": [
							{
								"type": "home",
								"number": "555-555-5555"
							},
							{
								"type": "work",
								"number": "555-555-5556"
							},
							{
								"type": "mobile",
								"number": "555-555-5557"
							}
		]
	},
	{
		"firstName": "Jeff",
		"lastName": " Stickel",
		"city": "Indianapolis",
		"state": "IN",
		"zip": "00000",
		"phoneNumbers": [
							{
								"type": "home",
								"number": "555-555-5558"
							},
							{
								"type": "work",
								"number": "555-555-55569"
							},
							{
								"type": "mobile",
								"number": "555-555-5550"
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


// no IE7 support
// does not define empty cells
// does not support duplicate column names
// I'm not sure that a 'string array' is the best way to store a row that's going 
// to output to JSON. It seems like a hash with column names would be best for _rows.

function DataTable() {
	// private variable
	var _columns = [],
		_rows = [];

	return {
		addRow: function() {
			args = Array.prototype.slice.call(arguments, 0);
			_rows.push(args.join(','));
		},
		addColumns: function() {
			_columns.push.apply(_columns, arguments);
		},
		getData: function() {
			rows = [];
			aHashedRow = {};
			
			for (var i = 0; i < _rows.length; i++) {
				aHashedRow = {};	//reset
				rowSplitIntoColumns = _rows[i].split(',');

				for (var j = 0; j < _columns.length; j++) {
					aHashedRow[_columns[j]] = rowSplitIntoColumns[j];
				}

				rows.push(aHashedRow);

			}

			return JSON.stringify(rows);
		},
		getColumns: function() {
			return _columns;
		}
	};
}

var dataTable = new DataTable();

// within div1, programatically create a
// SELECT element (with multiple items) and a button.
// when the button is clicked write out the name and value of the selected item to the console.
// 

function getSelect() {
	var container = $('#div1');
	// a for loop into an hash would be best, if this is supposed to input dynamic values, 
	// but the prompt doesn't say it has to be generated from a hash
	$(container).append('<select><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="mercedes">Mercedes</option><option value="audi">Audi</option></select><button>Select</button>');

	container.find('button').on("click", function() {
		var select = $(container).find('select');
		console.log( $(select).find(':selected').text() + ': ' + select.val() );
	});

}

$(function(){
	getSelect();
});


// Write 5 different jQuery selectors to retrieve the
// sample anchor in the markup below.
// 
// 
// 

console.log( $('#fizz .link') );
console.log( $('#fizz a') );
console.log( $('.buzz .link') );
console.log( $('#fizz.buzz .link') );
console.log( $('#fizz.buzz a') );

// Programatically create an array with 5 items.  Create a list item for each item in the array
// and add the list items to the unordered list with an id of "list1".
// 

function createList(array) {
	var oldList = $('#baz #list1'), // <ul> tag
		newlist = $('<ul id="#list1">');

	for (var i=0; i < array.length; i++) {
		newlist.append('<li>' + array[i] + '</li>');
	}

	$(oldList).replaceWith(newlist);
}

$(function(){
	createList([1, 2 , 3 , 4 , 5]);
});

// Use javascript to add a list of checkboxes and 2 links
// to the div with an id of "foobar"
// When the first link is clicked, all the checkboxes should be checked (i.e. check all)
// When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)

