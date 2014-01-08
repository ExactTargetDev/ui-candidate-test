/********************************
Unit Tests
********************************/
module( "Functions and Objects Unit Tests" );
test( "Divide test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    equal( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});

test("Reverse String", 2, function(){
	equal(typeof reverseString, 'function', 'Must contain a reverseString function');
	equal( reverseString('Subscribers rock'), 'kcor srebircsbuS', 
		'Expected "kcor srebircsbuS" as the result, the result was: ' + reverseString('Subscribers rock'));
});

test("Find Minimum value", 2, function(){
	equal(typeof findMinValue, 'function', 'Must contain a findMinValue function');
	equal( findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]), -1.1, 
		'Expected "-1.1" as the result, the result was: ' + findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]));
});

test("Find distinct values", 2, function(){
	var input = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12],
		expected = [1, 3, 5, 7, 12, 20, 0.18, -1.1, Infinity];
	equal(typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function');
	deepEqual( findDistinctValues(input), expected, 
		'Expected "' + expected + '" as the result, the result was: ' 
			+ findDistinctValues(input));
});

test("Do Fizz Buzz", function(){
	var expected = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz", "Fizz", 52, 53, "Fizz", "Buzz", 56, "Fizz", 58, 59, "FizzBuzz", 61, 62, "Fizz", 64, "Buzz", "Fizz", 67, 68, "Fizz", "Buzz", 71, "Fizz", 73, 74, "FizzBuzz", 76, 77, "Fizz", 79, "Buzz", "Fizz", 82, 83, "Fizz", "Buzz", 86, "Fizz", 88, 89, "FizzBuzz", 91, 92, "Fizz", 94, "Buzz", "Fizz", 97, 98, "Fizz", "Buzz"],
		result = doFizzBuzz();
	equal(typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function');
	deepEqual(result, expected, 'Expected "' + expected + '" as the result, the result was: ' + result);
})

test("Remove fruits", 2, function(){
	var expected = ['apple', 'orange', 'kiwi', 'plum', 'strawberry'],
		fruits = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'],
		fruitsToRemove = ['pear', 'banana'],
		result = removeFruits(fruits, fruitsToRemove);
	equal(typeof removeFruits, 'function', 'Must contain a removeFruits function');
	deepEqual( result, expected, 
		'Expected "' + expected + '" as the result, the result was: ' + result);
});

test("Push a single value and then an array on to another array", 3, function(){
	var expectedSingle = [1,2,3,4,5,6],
		expectedArray = [1,2,3,4,5,6,7,8,9]
		array = [1,2,3,4,5],
		singleValue = 6,
		arrayValue = [7, 8, 9];

	pushOntoArray(array, singleValue);
	equal(typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function');
	deepEqual( array, expectedSingle, 
		'Expected "' + expectedSingle + '" as the result, the result was: ' + array);
	
	pushOntoArray(array, arrayValue);
	deepEqual( array, expectedArray, 
		'Expected "' + expectedArray + '" as the result, the result was: ' + array);
});

test("Split List String Using Comma", 2, function(){
	var expected = ["The", "quick", "brown", "fox jumped over"],
		input = 'The, quick, brown, fox jumped over';
	equal(typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function');
	deepEqual( splitListStrUsingComma(input), expected, 
		'Expected "' + expected + '" as the result, the result was: ' + splitListStrUsingComma(input));
});

test("Split List String Using Comma", 2, function(){
	var expected = 3;
	equal(typeof sum, 'function', 'Must contain a sum function');
	equal( sum(2,1), expected, 
		'Expected "' + expected + '" as the result, the result was: ' + sum(1,2));
});

test("Split List String Using Comma", 2, function(){
	var expected = true;
	equal(typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function');
	equal( isOnlyWhitespace(''), expected, 
		'Expected "' + expected + '" as the result, the result was: ' + isOnlyWhitespace(''));
});

test("Closure returns an object", 1, function(){
	equal(typeof someClosure, 'object', 'Must contain a someClosure object');
});

test("JSON Object", 1, function(){
	equal(typeof jsonObj, 'object', 'Must contain a jsonObj object');
});

var dt;
module( "DataTable Tests", {
  setup: function() {
    dt = new DataTable();
  }
});
test( "DataTable instatiation", 2, function() {
    // Verify the method exists
    equal( typeof DataTable, 'function', 'Must contain a DataTable function' ); 

    // Make sure the result from the divide function is valid
    ok(dt instanceof DataTable, 'Successfully created DataTable instance');
});
test("Add Column and Row", 3, function(){
	var expected = {"columns":["column1","column2","column3"],"rows":[]};
	deepEqual(dt.addColumns('column1', 'column2', 'column3'), expected, 
		"Added columns Successfully");

	expected = {"columns":["column1","column2","column3"],"rows":[{"column1":"value1A","column2":"value1B","column3":"value1C"}]};
	deepEqual(dt.addRow('value1A', 'value1B', 'value1C'), expected, 
		"Added rows Successfully");

	deepEqual(dt.getData(), expected,
		'Expected :' + JSON.stringify(expected) + '" as the result, the result was: ' + JSON.stringify(dt.getData()));
});









