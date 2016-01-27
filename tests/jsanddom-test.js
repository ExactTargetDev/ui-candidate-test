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

/********************************
Test pushOntoArray
********************************/
module( "pushOntoArray Unit Test" );
test( "pushOntoArray Test", 3, function() {
 	// Verify the method exists
 	equal( typeof pushOntoArray, "function", "Must contain a pushOntoArray function" );

 	var actualResult1 = pushOntoArray([1, 2, 3, 4, 5], 6);
 	var actualResult2 = pushOntoArray([1, 2, 3, 4, 5], [7, 8, 9]);

	var expectedResult1 = [1, 2, 3, 4, 5, 6];
	var expectedResult2 = [1, 2, 3, 4, 5, 7, 8, 9];
	
	// Make sure the result from the pushOntoArray function is valid
	deepEqual( actualResult1, expectedResult1, "Expected " + expectedResult1 + " as the result, the result was: " + actualResult1);
	deepEqual( actualResult2, expectedResult2, "Expected " + expectedResult2 + " as the result, the result was: " + actualResult2);
});

/********************************
Test splitListStrUsingComma
********************************/
module( "splitListStrUsingComma Unit Test" );
test( "splitListStrUsingComma Test", 3, function() {
 	// Verify the method exists
 	equal( typeof splitListStrUsingComma, "function", "Must contain a splitListStrUsingComma function" );

 	var actualResult1 = splitListStrUsingComma("The, quick, brown, fox jumped over");
    var actualResult2 = splitListStrUsingComma("");

    var expectedResult1 = ["The", " quick", " brown", " fox jumped over"];
    var expectedResult2 = [];
	
	// Make sure the result from the splitListStrUsingComma function is valid
	deepEqual( actualResult1, expectedResult1, "Expected " + expectedResult1 + " as the result, the result was: " + actualResult1);
	deepEqual( actualResult2, expectedResult2, "Expected " + expectedResult2 + " as the result, the result was: " + actualResult2);
});

/********************************
Test sum
********************************/
module( "sum Unit Test" );
test( "sum Test", 2, function() {
 	// Verify the method exists
 	equal( typeof sum, "function", "Must contain a sum function" );

	var testData = [1, 1, 2, 3, 5, 7];
	var expectedResult = 19;
	
	// Make sure the result from the sum function is valid
	equal( sum(testData), expectedResult, "Expected " + expectedResult + " as the result, the result was: " + sum(testData));

});

/********************************
Test isOnlyWhitespace
********************************/
module( "isOnlyWhitespace Unit Test" );
test( "isOnlyWhitespace Test", 4, function() {
 	// Verify the method exists
 	equal( typeof isOnlyWhitespace, "function", "Must contain a isOnlyWhitespace function" );

 	var actualResult1 = isOnlyWhitespace("   exacttarget");
 	var actualResult2 = isOnlyWhitespace(" ");
    var actualResult3 = isOnlyWhitespace("");

    var expectedResult1 = false;
    var expectedResult2 = true;
    var expectedResult3 = true;
	
	// Make sure the result from the isOnlyWhitespace function is valid
	equal( actualResult1, expectedResult1, "Expected " + expectedResult1 + " as the result, the result was: " + actualResult1);
	equal( actualResult2, expectedResult2, "Expected " + expectedResult2 + " as the result, the result was: " + actualResult2);
	equal( actualResult3, expectedResult3, "Expected " + expectedResult3 + " as the result, the result was: " + actualResult3);
});

/********************************
Test sayHello
********************************/
module( "sayHello Unit Test" );
test( "sayHello Test", 2, function() {
 	// Verify the method exists
	equal( typeof sayHello, 'function', 'Must contain a sayHello function' );

    var hello = sayHello("Hello");
    var name = hello("Jeremy");

	// Make sure the result from the sayHello function is valid
	equal( name, "Hello Jeremy", "Expected " + "Hello Jeremy" + " as the result, the result was: " + name);
});