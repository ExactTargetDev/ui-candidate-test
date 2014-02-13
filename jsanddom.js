/*jshint unused:false, devel:true */
/*global $ */
'use strict';

// Example unit test function
function divide( a, b ) {
	// To see the test pass, uncomment the following line
	return a / b;
}

// Write a function that takes a single argument (a string) and returns the string reversed.
function reverseString(str) {
	return str.split('').reverse().join('');
}

// Write a function that takes an array of numbers and returns the minimum value
function findMinValue(values) {
	var min = null;
	var i;

	 for (i = 0; i < values.length; i++) {
		if ( min === null || values[i] < min ) {
			min = values[i];
		}
	}
	return min;
}

// Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
function findDistinctValues(values) {
	var distinct = [];
	var valuesIndex;
	var distinctIndex;
	var foundDistinct;

	// slow search algorithm but works for expected range of inputs
	for (valuesIndex = 0; valuesIndex < values.length; valuesIndex++) {
		foundDistinct = true;
		for (distinctIndex = 0; distinctIndex < distinct.length; distinctIndex++) {
			if( values[valuesIndex] === distinct[distinctIndex] ) {
				foundDistinct = false;
				break;
			}
		}
		if ( foundDistinct === true ) {
			distinct.push( values[valuesIndex] );
		}
	}
	return distinct;
}

// Write a function that logs the numbers from 1 to 100 to the console.
// For multiples of three print "Fizz" instead of the number.
// For multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
function doFizzBuzz() {
	var outputToConsole = [];
	var min = 1;
	var max = 100;
	var i;
	var tmpOutput;

	for (i = min; i < max + 1; i++) {
		tmpOutput = '';
		if ( i % 3 === 0 ) {
			tmpOutput = 'Fizz';
		}
		if ( i % 5 === 0 ) {
			tmpOutput += 'Buzz';
		}
		if ( tmpOutput === '' ) {
			tmpOutput = i;
		}
		outputToConsole.push( tmpOutput );
	}
	console.log( outputToConsole.join( '\n' ) );
}

// You have a master array of strings, where each element is a fruit name.
// You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
// For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
// Write the function that will remove the values contained in fruitsToRemove from the array fruits.

// IE8 compatibility https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Compatibility
if (!Array.prototype.indexOf)
{
  Array.prototype.indexOf = function(elt /*, from*/)
  {
    var len = this.length >>> 0;

    var from = Number(arguments[1]) || 0;
    from = (from < 0) ? Math.ceil(from) : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
}


function removeFruits(fruits, fruitsToRemove) {
	var removalIndex;

	for (var i = 0; i < fruitsToRemove.length; i++) {
		removalIndex = fruits.indexOf( fruitsToRemove[i] );
		if ( removalIndex !== -1 ) {
			fruits.splice( removalIndex, 1 );
		}
	}
}

// Write a function to push either a simple value or an array of values onto a specified array.
// For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
// If toPush is a simple value, it should be pushed onto array as an element.
// If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
function pushOntoArray(array, toPush) {
	var i;

	if ( typeof toPush === 'object' ) {
		for ( i = 0; i < toPush.length; i++ ) {
			pushOntoArray( array, toPush[i] );
		}
	} else {
		array.push( toPush );
	}
}

// Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
function splitListStrUsingComma(sourceStr) {
	var splitString;

	if ( sourceStr === '' ) {
		splitString = [];
	} else {
		splitString = sourceStr.split( ',' );
	}

	return splitString;
}

// Write a function that will take any number of arguments and return their sum
function sum() {
	var total = 0;
	var i;

	for (i = 0; i < arguments.length; i++) {
		total += arguments[i];
	}

	return total;
}

// Write a function that will return true if a specified string consists of only whitespace.
// todo: fails in IE8
function isOnlyWhitespace(sourceStr) {
	if ( sourceStr === '' ) {
		return false;
	}

	return !/\S/.test(sourceStr);
}

// write an example of a javascript closure
function cryMeAClosure(msg) {
	var yourMessage = 'Your Message Delivered: ' + msg;
	function crying() {
		console.log( yourMessage );
	}
	setTimeout( crying, 1000);
}

// define a json object that represents a collection of people.
// each person should have the following properties
// - first name
// - last name
// - city
// - state
// - zip
// - a collection of phone numbers (home, work, mobile)
var peopleWeCallJson = {
	people: [
		{
			firstName: 'Jason',
			lastName: 'Son',
			city: 'Puyallup',
			state: 'WA',
			zip: 98375,
			phoneNumbers: [
				{
					type: 'home',
					number: '1234567890'
				},
				{
					type: 'work',
					number: '5129020000'
				},
				{
					type: 'mobile',
					number: '2538003000'
				}
			]
		},
		{
			firstName: 'Jasons',
			lastName: 'Deli',
			city: 'Tampa',
			state: 'FL',
			zip: 33618,
			phoneNumbers: [
				{
					type: 'fax',
					number: '8133413364'
				},
				{
					type: 'work',
					number: '8133413354'
				}
			]
		}
	]
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
// .addRows('value1A', 'value1B', 'value1C');
// .addRows('value2A', 'value2B', 'value2C');
function DataTable() {
	var columns = [];
	var rows = [];

	this.addColumns = function() {
		var i;

		for (i = 0; i < arguments.length; i++) {
			columns.push( arguments[i] );
		}
	};

	this.addRows = function() {
		var i;
		var cellData;

		for (i = 0; i < arguments.length; i++) {
			cellData = {
				columnName: columns[i],
				value: arguments[i]
			};
			rows.push( cellData );
		}
	};

	this.getData = function() {
		return {
			columns: columns,
			rows: rows
		};
	};
}

// within div1, programatically create a
// SELECT element (with multiple items) and a button.
// when the button is clicked write out the name and value of the selected item to the console.
$(function() {
	var options = [];
	var i;
	var optionVal;
	var optionText;
	var $selected;

	for ( i = 0; i < 11; i++ ) {
		options.push('<option value="' + Math.pow( 2, i ) + '">2 ^ ' + i + '</option>');
	}

	$('#div1').append('<select>' + options.join('') + '</select><button>A</button>');
	$('#div1 button').on('click', function() {
		$selected = $('#div1 option:selected');
		optionText = $selected.text();
		optionVal = $selected.val();
		console.log(optionText + ' == ' + optionVal);
	});

});

// Write 5 different jQuery selectors to retrieve the
// sample anchor in the markup below.
var selectorTests = function() {
	$('a');
	$('a.link');
	$('#fizz .link');
	$('#foo #fizz a');
	$('#fizz > a');
};

// Programatically create an array with 5 items.  Create a list item for each item in the array
// and add the list items to the unordered list with an id of "list1".
var listTest = function() {
	var pArray = [];
	var alpha = ['a', 'b', 'c', 'd', 'e'];
	var ulHtml = [];
	var i, ii;
	for ( i = 0; i < 5; i++ ) {
		pArray.push( alpha[i] );
	}

	$('#list1').append( '<li>' + pArray.join('</li><li>') + '</li>');

};

listTest();

// Use javascript to add a list of checkboxes and 2 links
// to the div with an id of "foobar"
// When the first link is clicked, all the checkboxes should be checked (i.e. check all)
// When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
var checkIt = function() {
	var listOfCheckbox = '<ul><li><input type="checkbox"></li><li><input type="checkbox"></li><li><input type="checkbox"></li>';
	var linksList = '<a href="#" class="check">Check All</a><br/><a href="#" class="uncheck">Uncheck All</a>';
	var $foobar = $('#foobar');
	$foobar.append(listOfCheckbox + linksList);
	$foobar.on( 'click', '.check', function() {
		$foobar.find(':checkbox').prop('checked', 'checked');
		return false;
	});
	$foobar.on( 'click', '.uncheck', function() {
		$foobar.find(':checkbox').prop('checked', '');
		return false;
	});
};

checkIt();
