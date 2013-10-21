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
    equal( reverseString( "Subscribers rock" ), "kcor srebircsbuS", 'Expected "kcor srebircsbuS" as the result, the result was: ' + reverseString( "Subscribers rock" ) );
    equal( reverseString( "123" ), "321", 'Expected "321" as the result, the result was: ' + reverseString( "123" ) );
    equal( reverseString( " a#X -12 3" ), "3 21- X#a ", 'Expected "3 21- X#a " as the result, the result was: ' + reverseString( " a#X -12 3" ) );
    equal( reverseString( " 	 	" ), "	 	 ", 'Expected " 	 	" as the result, the result was: ' + reverseString( " 	 	" ) );
});

test( "reverseString Test", 3, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

    // Check the reverseString function works right
    equal( findMinValue( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ), -1.1, 'Expected "-1.1" as the result, the result was: ' + findMinValue( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ) );
    equal( findMinValue( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, -Infinity, 0.18, -1.1, 12] ), -1.1, 'Expected "-Infinity" as the result, the result was: ' + findMinValue( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, -Infinity, 0.18, -1.1, 12] ) );
});
