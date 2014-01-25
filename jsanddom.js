// Example unit test function
function divide(a, b) {
	// To see the test pass, uncomment the following line
	return a / b;
}

// Write a function that takes a single argument (a string) and returns the
// string reversed.
function reverseString(str) {
	return str.reverse();
}

// Write a function that takes an array of numbers and returns the minimum value
function findMinValue(values) {
	return values.min();
}

// Write a function that takes an array and returns the distinct values only
// (i.e. removes duplicates)
/**
 * Note: I believe distinct means === comparator, otherwise, it's a simple change
 * to Array.pushUnique to use '=='. If this is supposed to be non-type-conversion,
 * leave as ===.
 */
function findDistinctValues(values) {
	var ret = [], 
		i, 
		len;

	for (i = 0, len = values.length; i < len; i++) {
		ret.pushUnique(values[i]);
	}
	return ret;
}

// Write a function that logs the numbers from 1 to 100 to the console.
// For multiples of three print "Fizz" instead of the number.
// For multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
function doFizzBuzz(times) {
	var i = 1, 
		len = times
		str = '';
	for(i = 1; i < len; i++) {
		str += (i % 3 === 0 ? 'Fizz' : 
				i % 5 === 0 ? 'Buzz' : 
				(i % 3 === 0) && (i % 5 === 0) ? 'FizzBuzz' : i);
	}
	console.log(str);
	return str;
}

// You have a master array of strings, where each element is a fruit name.
// You have a second array of fruit name strings, that is a list of fruits that
// should be removed from the fruits specified in the master array.
// For the purpose of the exercise, we will call the master array fruits and the
// second array fruitsToRemove.
// Write the function that will remove the values contained in fruitsToRemove
// from the array fruits.
function removeFruits(fruits, fruitsToRemove) {
	return fruits.filter(function(context, ele, i) {
		if(fruitsToRemove.indexOf(ele) === -1) {
			return ele;
		}
	});
}

// Write a function to push either a simple value or an array of values onto a
// specified array.
// For the purpose of the exercise, we will call the target array simply array
// and the stuff to push onto it (either a simple value or array) simply toPush.
// If toPush is a simple value, it should be pushed onto array as an element.
// If toPush is an array, all of its elements should be pushed onto array. Your
// solution should modify array (ie. not return a new array).
function pushOntoArray(array, toPush) {
	return Array.prototype.push.call(array, toPush);
}

// Given a string, sourceStr, write some code that will split this string using
// comma as your delimiter, and producing an empty array if the string is empty.
function splitListStrUsingComma(sourceStr) {
	return (sourceStr === '') ? [] : sourceStr.split(',');
}

// Write a function that will take any number of arguments and return their sum
function sum() {
	return Array.prototype.slice.call(arguments, 0).sum();
}

// Write a function that will return true if a specified string consists of only
// whitespace.
function isOnlyWhitespace(sourceStr) {
	return sourceStr.isWhiteSpace();
}

// write an example of a javascript closure
var AClosureInside = function() {
	function imAClosure() {
		alert('this is a closure');
	};
	imAClosure();
};

// define a json object that represents a collection of people.
// each person should have the following properties
// - first name
// - last name
// - city
// - state
// - zip
// - a collection of phone numbers (home, work, mobile)
var jsonObj = {
	'people' : [ {
		'firstName' : 'Bruce',
		'lastName' : 'Wayne',
		'address' : {
			'city' : 'Gotham City',
			'state' : 'New York',
			'zip' : '19404'
		},
		'phones' : [ {
			'type' : 'home',
			'num' : '426-228-6260'
		}, {
		// etc
		} ]
	}, {
	// etc
	} ]
};

// Create a javascript object (DataTable) with the following:
// A private columns property (string array)
// A private rows property (string array)
// A public method addRows that adds an item to the rows array
// A public method addColumns that adds an item to the columns array
// A public method getData that returns the a json object representation of the
// DataTable
// Note: the row object should be a hash of the column name and row item value
// Example:
// .addColumns('column1', 'column2', 'column3');
// .addRow('value1A', 'value1B', 'value1C');
// .addRow('value2A', 'value2B', 'value2C');
var dataTable = (function() {
	var columns = [],
		rows = [];
	
	addRow = function() {
		var args = Array.prototype.slice.call(arguments, 0);
		rows.push(args);
	};
	
	addColumns = function() {
		var args = Array.prototype.slice.call(arguments, 0);
		Array.prototype.push.apply(columns, args);
	};
	
	getData = function() {
		var i,
			len,
			rowObj = [];
		for(i = 0, len = rows.length; i < len; i++) {
			var j,
				leng;
			for(j = 0, leng = rows[i].length; j < leng; j++) {
				rowObj.push({
					'column' : columns[j],
					'row' : rows[i][j],
				});
			}
		}
		var ret = {
			'rowData' : rowObj,
			'columnData' : columns
		};
		return ret;
	};
	
	return {
		addRow : addRow,
		addColumns : addColumns,
		getData : getData
	};
})();
(function() {
	dataTable.addColumns('column1', 'column2', 'column3');
	dataTable.addRow('value1A', 'value1B', 'value1C');
	dataTable.addRow('value2A', 'value2B', 'value2C');
	dataTable.addRow('value3A', 'value3B', 'value3C');
})();

// within div1, programatically create a
// SELECT element (with multiple items) and a button.
// when the button is clicked write out the name and value of the selected item
// to the console.
$('#div1').append(
	$('<select>').append(
		('<option value="foo">foo</option>'),
		('<option value="bar">bar</option>'),
		('<option value="fizz">fizz</option>'),
		('<option value="buzz">buzz</option>')
	),
	$('<button>').text('Button')
);
var selection = null;
$('#div1').find('select').on('change', function() {
	selection = $('select :selected');
})
$('#div1').find('button').on('click', function() {
	if(selection == null) {
		selection = $('select :selected');
	}
	var val = selection.val(),
		text = selection.text();
	console.log('Value: ' + val + '\nText: ' + text);
});

// Write 5 different jQuery selectors to retrieve the
// sample anchor in the markup below.
var x = [
         $('.link'),
         $('.buzz a'),
         $('#foo div a'),
         $('a'),
         $('div > a')
         ];

// Programatically create an array with 5 items. Create a list item for each
// item in the array
// and add the list items to the unordered list with an id of "list1".
/**
 * Didin't know if "progromatically" meant non-hard-coded (a), so b would be
 * fine too.
 */
var a = [1,2,3,4,5],
	b = (function() {
			var input = function(arr) {
				if(arr.length == 5) return arr;
				arr.push(arr.length);
				return input(arr);
			};
			return input([]);
		}()),
	c = (function(){
			var a = [];
			a.length = 5;
			return a;
		}()),
	d = new Array(5);

for(var i = 0; i < b.length; i++) {
	$('#list1').append($('<li>').text(b[i] || String(i)));
}

// Use javascript to add a list of checkboxes and 2 links
// to the div with an id of "foobar"
// When the first link is clicked, all the checkboxes should be checked (i.e.
// check all)
// When the second link is clicked, all the checkboxes should be unchecked (i.e.
// uncheck all)
(function() {
	for(var i = 0; i < b.length; i++) {
		$('#foobar').append(
			$('<input type="checkbox" name="grp" value="' + b[i] + '">' + b[i] + '</input>'),
			$('<br>')
		);
	}
	$('#foobar').append(
		$('<a>').text('checkAll'),
		$('<a>').text('uncheckAll')
	);
	$('#foobar a').eq(0).on('click', function() {
		$('input').prop({
			'checked' : true
		});
	})
	$('#foobar a').eq(1).on('click', function() {
		$('input').prop({
			'checked' : false
		});
	})
}());