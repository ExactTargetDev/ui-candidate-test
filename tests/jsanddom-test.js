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