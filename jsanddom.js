// Example unit test function
function divide( a, b ) {
  // To see the test pass, uncomment the following line
  return a / b;
}

// Write a function that takes a single argument (a string) and returns the string reversed.
function reverseString(str) {
	var $str = str.split("");
	$str.reverse();
	return $str.join("");
}

// Write a function that takes an array of numbers and returns the minimum value
function findMinValue(values, allowStrings) {
	// value evaluate nothing
	if (toString.call(values) !== "[object Array]") {
		return false;
	}
	
	var $minimum = null;
	 
	var $key, $value;
	for ($key in values) {
		$value = values[$key];
		
		// a string can be a number in hiding...
		if (typeof $value == "string" && allowStrings) {
			$value = parseFloat($value);
		}
		
		// validate for numberness
		if (!isFinite($value)) continue;
		if (toString.call($value) !== "[object Number]") continue;
		
		// check value
		if ($minimum != null && $value > $minimum) {
			continue;
		}
		
		$minimum = $value;
	}
	
	// none of the values were numbers
	// returning a minimum is useless
	if ($minimum == null) return false;
	
	return $minimum;
}

// Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
function findDistinctValues(values) {
	var $valuesAsColumns = {};
	var $distinct = [];
	
	var $key, $value, str;
	for ($key in values) {
		$value = values[$key];

		// who needs empty distinctions?
		if ($value == null) continue;
		
		// convert to JSON string
		$str = JSON.stringify($value);
		
		// check for previous identicals
		if ($valuesAsColumns[$str] != null) continue;
		$valuesAsColumns[$str] = true;
		$distinct.push($value);
	}

	return $distinct;
}

// Write a function that logs the numbers from 1 to 100 to the console.
// For multiples of three print "Fizz" instead of the number.
// For multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
function doFizzBuzz() {
   // FILL THIS IN
}

// You have a master array of strings, where each element is a fruit name.
// You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
// For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
// Write the function that will remove the values contained in fruitsToRemove from the array fruits.
function removeFruits(fruits, fruitsToRemove) {
   // FILL THIS IN
}

// Write a function to push either a simple value or an array of values onto a specified array.
// For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
// If toPush is a simple value, it should be pushed onto array as an element.
// If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
function pushOntoArray(array, toPush) {
   // FILL THIS IN
}

// Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
function splitListStrUsingComma(sourceStr) {
	// ensure string sanity
	if (sourceStr == null) return [];
	if (typeof sourceStr != "string") return [];
	
	// clean string
	var $string = sourceStr.replace(/^\s*|\s*$/g, '');
	if (!$string.length) return [];
	
	var $array = $string.split(/\s*,\s*/);
	
	if ($array == null) return [];
	if (!$array.length) return [];
	return $array;
}

// Write a function that will take any number of arguments and return their sum
function sum() {
	var $arguments = Array.prototype.slice.call(arguments);
	if ($arguments.length == 0) $arguments = [[]];
	$numbers = $arguments[0];
	
	var $sum = 0;
	
	// parsing non-numbers was not specified, therefore:
	// true = 1, false = 0
	var $key, $number;
	for ($key in $numbers) {
		$number = $numbers[$key];
		if ($number == null) continue;
		if (!isFinite($number)) continue;
		$sum += $number;
	}
	
	return $sum;
}

// Write a function that will return true if a specified string consists of only whitespace.
function isOnlyWhitespace(sourceStr) {
	// a string with only whitespace collapses to an empty string
	// when trimmed. We'll use regex since we can't be 100% that
	// String.trim exists in all browsers
	var $source = sourceStr.replace(/^\s*|\s*$/g, '');
	return ($source.length <= 0);
}



// write an example of a javascript closure
/// traditional
(function(a) {
	// you can put private variables here to make
	// a singleton, but I prefer to think of this
	// space as scope-defining only. Later, I 
	// declare a singleton in what I call a "double
	// closure" pattern.

	a.closure = {
		property: "check",
		method: function() {
			return "check";
		}
	}
})(window);

/// double closure (singleton)
(function(a) { 
	// $.fn.singleton, etc
	a.singleton = (function() {
		var privateVariable = "check";
		
		function privateMethod() {
			return "check";
		}
		
		return {
			publicProperty: "check",
			publicMethod: function() {
				return "check";
			}
		};
	})();
})(window);




// define a json object that represents a collection of people.
// each person should have the following properties
// - first name
// - last name
// - city
// - state
// - zip
// - a collection of phone numbers (home, work, mobile)

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

// see custom.js: dataTableTest

var DataTable = function() {
	var _columns = [];
	var _columnsByName = {};
	var _rows = [];
	
	function addColumns() {
		var $columns = Array.prototype.slice.call(arguments);
		var $key, $column;
		for ($key in $columns) {
			$column = $columns[$key];
			// cheap extend filter
			if (_columnsByName[$column] != null) continue;
			_columnsByName[$column] = true;
			_columns.push($column);
		}
	}
	
	function addRow() {
		var $values = Array.prototype.slice.call(arguments);
		_rows.push($values);
	}
	
	function getData(debug) {
		var $output = [];
		var $columns = _columns;
		var $rows = _rows;
		
		var $key, $row, $column, $data,
			$i, $ic = $rows.length;
		for ($i=0; $i<$ic; $i++) {
			$row = $rows[$i];
			
			$data = {};
			for ($key in $columns) {
				$column = $columns[$key];
				$data[$column] = $row[$key];
			}
			
			$output.push($data);
		}
		
		if (debug) {
			console.log("JSON \"Object\": ", $output);
			console.log("JSON string: ", JSON.stringify($output));
		}
		
		return $output;
	}
	
	return {
		addColumns: addColumns,
		addRow: addRow,
		getData: getData
	};
};



// within div1, programatically create a
// SELECT element (with multiple items) and a button.
// when the button is clicked write out the name and value of the selected item to the console.

// see custom.js: div1Answer



// Write 5 different jQuery selectors to retrieve the
// sample anchor in the markup below.

/*
// extreme selector minimizing DOM seeking
1. $("body > #foo > #fizz > a.link") 

// direct path
2. $("#foo #fizz .link");

// relative seeking irrespective of container types
3. $(".bar .buzz .link")

// circumstantial: "an anchor link with the class link inside something with the id fizz that's inside a div with the class bar"
4. $("div.bar #fizz a.link")

// universal
5. $(".link") 
*/



// Programatically create an array with 5 items.  Create a list item for each item in the array
// and add the list items to the unordered list with an id of "list1".

// see custom.js: listAnswer



// Use javascript to add a list of checkboxes and 2 links
// to the div with an id of "foobar"
// When the first link is clicked, all the checkboxes should be checked (i.e. check all)
// When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)

// see custom.js: checkboxAnswer
