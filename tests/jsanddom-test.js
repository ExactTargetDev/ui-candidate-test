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
Test reverseString
********************************/
module( "reverseString Unit Test" );
test( "reverseString Test", 2, function() {
	// Verify the method exists
	equal( typeof reverseString, "function", "Must contain a reverseString function" );

	// Make sure the result from the reverseString function is valid
	equal( reverseString("Subscribers rock"), "kcor srebircsbuS", "Expected kcor srebircsbuS as the result, the result was: " + reverseString("Subscribers rock"));
});

/********************************
Test findMinValue
********************************/
module( "findMinValue Unit Test" );
test( "findMinValue Test", 2, function() {
	// Verify the method exists
	equal( typeof findMinValue, "function", "Must contain a findMinValue function" );

	var testData = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];

	// Make sure the result from the findMinValue function is valid
	equal( findMinValue(testData), -1.1, "Expected -1.1 as the result, the result was: " + findMinValue(testData));
});

/********************************
Test findDistinctValues
********************************/
module( "findDistinctValues Unit Test" );
test( "findDistinctValues Test", 2, function() {
 	// Verify the method exists
 	equal( typeof findDistinctValues, "function", "Must contain a findDistinctValues function" );

	var testData = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
	var expectedResult = [3, 5, 7, 20, .18, 1, -1.1, 12, Infinity];

	// Make sure the result from the findDistinctValues function is valid
	deepEqual( findDistinctValues(testData), expectedResult, "Expected [3, 5, 7, 20, .18, 1, -1.1, 12, Infinity] as the result, the result was: " + findDistinctValues(testData));
});

/********************************
Test removeFruits
********************************/
module( "removeFruits Unit Test" );
test( "removeFruits Test", 2, function() {
 	// Verify the method exists
 	equal( typeof removeFruits, "function", "Must contain a removeFruits function" );

	var testFruits = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
	var testFruitsToRemove = ['pear', 'banana'];
	var expectedResult = ['apple', 'orange', 'kiwi', 'plum', 'strawberry'];
	
	// Make sure the result from the removeFruits function is valid
	deepEqual( removeFruits(testFruits, testFruitsToRemove), expectedResult, "Expected " + expectedResult + " as the result, the result was: " + removeFruits(testFruits, testFruitsToRemove));
});