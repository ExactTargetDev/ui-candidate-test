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
module( "Reverse String Unit Test" );
test( "reverseString", 3, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'reverseString is a function if this passes' ); 

    // Make sure the result from the divide function is valid
    // ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
    ok( reverseString( "this" ), "siht", 'Expected siht as the result, the result was: ' + reverseString( "this" ) );
    ok( reverseString( "Ty" ), "yT", 'Expected yT as the result, the result was: ' + reverseString( "Ty" ) );
});