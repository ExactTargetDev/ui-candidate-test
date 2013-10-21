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
    	var actualSorted = findDistinctValues( values ).sort();
    	var expectedUnsorted = expected.concat();
    	expected.sort();
    	deepEqual( actualSorted, expected.sort(), 'Passed: expected [' + expectedUnsorted + '] as the result, the result was: [' + expected.sort() + '] (order doesn\'t matter)');
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
