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
module( "Reverse String" );
test( "Reverse String Test", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 

    // Make sure the result from the divide function is valid
    ok( reverseString( 'A quick brown fox' ), 'xof nworb kciuq A', 'Expected "xof nworb kciuq A" as the result, the result was: ' +  reverseString( 'A quick brown fox' ) );
});

module( "Find Min Value" );
test( "Find Min Value Test", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 

    // Make sure the result from the divide function is valid
    ok( findMinValue( [1, 2, -1, -6, Infinity, 5, 100.0, -6.1, 0, -6, -12] ),  -12, 'Expected -12 as the result, the result was: ' +   findMinValue( [1, 2, -1, -6, Infinity, 5, 100.0, -6.1, 0, -6, -12] ) );
});
