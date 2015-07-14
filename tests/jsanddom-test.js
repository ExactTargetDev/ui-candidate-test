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
})

test("Push Onto Array - Another Array",function(assert){
	//Make sure we get the expected result for a simple value.
	var currentArray = [1, 2, 3, 4, 5];
	var valueToPush = [7, 8, 9];
	var expectedResult = [1, 2, 3, 4, 5, 7, 8, 9];

	assert.deepEqual(pushOntoArray(currentArray, valueToPush),expectedResult, "Expected result of array is good. ");
})