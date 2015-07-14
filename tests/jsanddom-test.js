/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/
module( "Basic Function Tests ");
test(" Reverse String Test ", function(assert) {
	//Verify the method exists
	equal(typeof reverseString, 'function', 'Must contain a reverseString function');

	//Make sure the results is expected.
	var string = reverseString('Subscribers rock');
	var expectedString = 'kcor srebircsbuS';

	assert.equal(string, expectedString, "Reverse string worked as expected. ");
});

test(" Find Minimum Value Test ", function(assert) {
	//Verify the method exists.
	equal(typeof findMinValue, 'function', 'Must contain a findMinValue function');

	//Make sure the result are expected.
	var testData = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];

	var expectedResult = -1.1;

	assert.equal(findMinValue(testData), expectedResult, "Expected Result matches");
});

test(" Find Distinct Values Test ", function(assert){
	//Verify the method exists.
	equal(typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function');

	//Make sure the results are expected.
	var testData = [1,1,2,3,5,7];

	var expectedResults = [1,2,3,5,7];
	assert.deepEqual(findDistinctValues(testData), expectedResults, "Expected result does not match corresponding array. ");
});

test("Fizz Buzz Test",function(assert){
	//Verify the method exists.
	equal(typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function ');

	//Make sure we get expected results.
	var expectedResults = [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"];
	
	//We are going to build into the fizz buzz function an array return with results 
	//of the first 15 elements (for brevity in handwriting data.)
	assert.deepEqual(doFizzBuzz(),expectedResults,"Expected result is matching arrays. ");
	
});

module(" Some Array Tests ");
test("Remove Fruits from Array",function(assert){
	//Verify the method exists.
	equal(typeof removeFruits, 'function', 'Must contain a removeFruits function ');

	//Make sure we get the expected results.
	var allFruits = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
	var fruitsToRemove = ['pear', 'banana'];
	var expectedResult = ['apple','orange','kiwi','plum','strawberry'];

	assert.deepEqual(removeFruits(allFruits, fruitsToRemove), expectedResult, "The array returned as expected with fruit removed. ");
});

test("Push Onto Array - Simple",function(assert){
	//Verify the method exists.
	equal(typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function ');

	//Make sure we get the expected result for a simple value.
	var currentArray = [1, 2, 3, 4, 5];
	var valueToPush = 6;
	var expectedResult = [1, 2, 3, 4, 5, 6];

	assert.deepEqual(pushOntoArray(currentArray, valueToPush),expectedResult, "Expected result of array is good. ");
});

test("Push Onto Array - Another Array",function(assert){
	//Make sure we get the expected result for a simple value.
	var currentArray = [1, 2, 3, 4, 5];
	var valueToPush = [7, 8, 9];
	var expectedResult = [1, 2, 3, 4, 5, 7, 8, 9];

	assert.deepEqual(pushOntoArray(currentArray, valueToPush),expectedResult, "Expected result of array is good. ");
});

test("Split string using commas ", function(assert){
	//Verify the method exists.
	equal(typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function ');

	//Get an empty array from an empty string.
	assert.deepEqual(splitListStrUsingComma(''),[],"An empty string returns an empty array");

	//Get an array of elements after splitting a string by commas
	var stringToSplit = 'The, quick, brown, fox jumped over';
	var expectedResult = ['The',' quick',' brown',' fox jumped over'];
	assert.deepEqual(splitListStrUsingComma(stringToSplit),expectedResult,"The string was split into an array as expected. ");
});

test("Sum up and number of arguments. ", function(assert){
	equal(typeof sum, 'function', 'Must contain a sum function ');

	assert.equal(sum(1, 1, 2, 3, 5, 7),19,"Passed the first summation test");

	assert.equal(sum(1,1,16),18,"Passed the second summation test");
});

module(" Testing for Regular Expressions ");
test("Is it Only Whitespace ?", function(assert){
	equal(typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function. ');

	//This string contains a space and a tab.
	var trueString = ' 	';
	var falsString = 'abc';
	var bothString = ' abc';	//This string contains both letters and whitespace.

	assert.ok(isOnlyWhitespace(trueString), "This string contains only whitespace. ");
	assert.ok(!isOnlyWhitespace(falsString), "This string contains no whitespace. ");
	assert.ok(!isOnlyWhitespace(bothString), "This string contains a combination of whitespace and letters. ");
});

module("Closure Tests");
test("Is it a closure ?", function(assert){
	equal(module.public_function(),"private","The publicly exposed method works. ");

	//Test for non-access to private function.
	equal(typeof module.private_function, "undefined", "No access to the private function. ");
});

module(" JSON Test");
test("Is it valid JSON ? ",function(assert){
	equal(people[0].first_name, "Joshua", "Valid JSON able to get object value out. ");
	equal(people[0].phone_numbers.cell_phone, "337-322-9661", "Able to get deeper information out of the object. ");
});

module(" DataTable tests ");
test(" Testing all DataTable functions ",function(assert){
	//Test for adding columns.
	DataTable.addColumns('column1', 'column2', 'column3');
	assert.equal(DataTable.columnCount(), 3, "The correct number of columns was found to be added. ");

	DataTable.addRow('value1A', 'value1B', 'value1C');
	assert.equal(DataTable.rowCount(), 1, "The correct number of rows was added. ");

	DataTable.addRow('value2A', 'value2B', 'value2C');
	assert.equal(DataTable.rowCount(), 2, "The correct number of rows is returned. ");

	expectedValue = [
		{"column1":"value1A","column2":"value1B","column3":"value1C"},
		{"column1":"value2A","column2":"value2B","column3":"value2C"}
	];

	assert.deepEqual(DataTable.getData(),expectedValue,"The expected JSON data was returned from getData. ");
});

module("DOM Testing");
test("Testing the selectors for the anchor",function(assert){
	ok(true, "Not sure how to write the tests for this, but wanted to include a test for it.");
});

test("Testing for the select build ", function(assert){
	ok(true, "Again, not sure how to write a test for that but wanted to include one. ");
});

test("Testing for the list items ", function(assert){
	ok(true, "Not sure how to test for that, but wanted to include it. ");
})

test("Testing the checkboxes ", function(assert){
	ok(true, "Not sure how to test for that, but wanted to include it. ");
})
