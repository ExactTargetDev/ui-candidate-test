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
module( "Test Suite" );
test( "reverseString Test", 5, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

    // Check the reverseString function works right
    // First test is taken from data/testdata.txt:
    equal( reverseString( "Subscribers rock" ), "kcor srebircsbuS", 'Expected "kcor srebircsbuS" as the result, the result was: ' + reverseString( "Subscribers rock" ) );
    equal( reverseString( "123" ), "321", 'Expected "321" as the result, the result was: ' + reverseString( "123" ) );
    equal( reverseString( " a#X -12 3" ), "3 21- X#a ", 'Expected "3 21- X#a " as the result, the result was: ' + reverseString( " a#X -12 3" ) );
    equal( reverseString( " 	 	" ), "	 	 ", 'Expected " 	 	" as the result, the result was: ' + reverseString( " 	 	" ) );
});

test( "findMinValue Test", 3, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

    // Check the findMinValue function works right
    // First test is taken from data/testdata.txt:
    equal( findMinValue( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ), -1.1, 'Expected "-1.1" as the result, the result was: ' + findMinValue( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ) );
    equal( findMinValue( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, -Infinity, 0.18, -1.1, 12] ), -1.1, 'Expected "-Infinity" as the result, the result was: ' + findMinValue( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, -Infinity, 0.18, -1.1, 12] ) );
});

test( "findDistinctValues Test", function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );

    // Check the findDistinctValues function works right
    function testShortcut(values, expected) {
    	// Add sorting to arrays being compared to not depend on the order of elements
    	// For example, both [1, 2] and [2, 1] are arrays containing only distinct values.
    	var actual = findDistinctValues( values );

    	var actualUnsorted = actual.concat();
    	var expectedUnsorted = expected.concat();

    	actual.sort();
    	expected.sort();

    	deepEqual( actual, expected, 'Passed: expected [' + expectedUnsorted + '] as the result, the result was: [' + actualUnsorted + '] (order doesn\'t matter)');
    }

    // Check via shortcut function for readability
    // First test is taken from data/testdata.txt:
    testShortcut( [1, 1, 2, 3, 5, 7], [1, 2, 3, 5, 7]); 
    testShortcut( ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry']);    
    testShortcut( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, -Infinity, 0.18, -1.1, 12], [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, -Infinity ] );
    // Test that results don't depend on the order of elements in actual and expected arrays (we take into accout only that values must be distinct)
    testShortcut( [1, 2], [2, 1] );
    testShortcut( [3, 3, 5, 7], [5, 7, 3 ] );
});

test( "removeFruits Test", function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );

    // Check the removeFruits function works right
    // Test data is taken from data/testdata.txt:
    deepEqual(	removeFruits(	['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana'] ), 
    						['apple', 'orange', 'kiwi', 'plum', 'strawberry'], 
    	'Expected "[apple,orange,kiwi,plum,strawberry]" as the result, the result was: [' + 
    		removeFruits( 	['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana'] ) + ']' );
});

test( "pushOntoArray Test", function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' );

    // Check the pushOntoArray function works right
    // Test data is taken from data/testdata.txt:

    // push simple value of 6
    deepEqual( pushOntoArray( [1, 2, 3, 4, 5], 6 ), [1, 2, 3, 4, 5, 6], 'Expected "[1,2,3,4,5,6]" as the result, the result was: [' + 
    		pushOntoArray( [1, 2, 3, 4, 5], 6 ) + ']');

    // push array: [7, 8, 9]
    deepEqual( pushOntoArray( [1, 2, 3, 4, 5], [7, 8, 9] ), [1, 2, 3, 4, 5, 7, 8, 9], 'Expected "[1,2,3,4,5,7,8,9]" as the result, the result was: [' + 
    		pushOntoArray( [1, 2, 3, 4, 5], [7, 8, 9] ) + ']');
});

test( "splitListStrUsingComma Test", function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' );

    // Check the splitListStrUsingComma function works right
    // Test data is taken from data/testdata.txt:
    deepEqual( splitListStrUsingComma( "The, quick, brown, fox jumped over" ), [ "The", " quick", " brown", " fox jumped over" ], 
    	'Expected [The, quick, brown, fox jumped over] as the result, the result was: [' + splitListStrUsingComma( "The, quick, brown, fox jumped over" ) + ']' );

    deepEqual( splitListStrUsingComma( "" ), [], 
    	'Expected [] as the result, the result was: [' + splitListStrUsingComma( "" ) + ']' );
});

test( "sum Test", function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' );

    // Check the sum function works right
    // Test data is taken from data/testdata.txt:
    equal( sum( 1, 1, 2, 3, 5, 7 ), 19, 'Expected 19 as the result, the result was: ' + sum( 1, 1, 2, 3, 5, 7 ) );
    equal( sum( 1, "1", 2, 3, 5, 7 ), "112357", 'Expected "112357" as the result, the result was: ' + sum( 1, "1", 2, 3, 5, 7 ) );
    equal( sum( 3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12 ), Infinity, 'Expected Infinity as the result, the result was: ' + sum( 3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12 ) );
    equal( sum( "1", -Infinity ), "01-Infinity", 'Expected "01-Infinity" as the result, the result was: ' + sum( "1", -Infinity ) );
});


test( "closureExample Test", function() {
    // Verify the method exists
    equal( typeof closureExample, 'function', 'Must contain a closureExample function' );

    var closure = closureExample();

    equal( typeof closure.getPrivateProperty, 'function', 'Must contain a closure.getPrivateProperty function' );
    equal( typeof closure.setPrivateProperty, 'function', 'Must contain a closure.setPrivateProperty function' );

    // Check the closureExample function works right

    // Get closure's private property value via getter:
    equal( closure.getPrivateProperty(), 'privateValue', 'Expected "privateValue" as the result, the result was: ' + closure.getPrivateProperty() );

    // Change closure's private property via setter:
	closure.setPrivateProperty('changedPrivateValue');

	// Check closure's chnaged private property value via getter:
	equal( closure.getPrivateProperty(), 'changedPrivateValue', 'Expected "changedPrivateValue" as the result, the result was: ' + closure.getPrivateProperty() );
});

