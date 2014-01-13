module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});

module( "Reverse String Unit Test" );
test( "Reverse String Test", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 

    // Make sure the result from the divide function is valid
    ok( reverseString( "Test" ), "tseT", 'Expected "tseT" as the result, the result was: ' + reverseString( "tseT" ) );
});

module( "Find Minimum Value Unit Test" );
test( "Find Minimum Value Test", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 

    // Make sure the result from the divide function is valid
    ok( findMinValue( [3, 2, 5, 4, 6] ), 2, 'Expected 2 as the result, the result was: ' + findMinValue( [3, 2, 5, 4, 6] ));
});

module( "Find Distinct Values Unit Test" );
test( "Find Distinct Values Test", 2, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 

    // Make sure the result from the divide function is valid
    ok( findDistinctValues( [4, 2, 3, 4, 1] ), [1, 2, 3, 4], 'Expected [1, 2, 3, 4] as the result, the result was: ' + findDistinctValues( [4, 2, 3, 4, 1] ));
});
*/