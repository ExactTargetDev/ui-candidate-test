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

// reverseString
module( "reverseString Unit Test" );
test( "Reverse String Test", 4, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 

    // Make sure the result from the reverseString function is valid
    ok( reverseString( 'hello' ), 'olleh', 'Expected olleh as the result, the result was: ' + reverseString( 'hello' ) );
    ok( reverseString( 'a' ), 'a', 'Expected a as the result, the result was: ' + reverseString( 'a' ) );
    ok( reverseString( 'abc123' ), '321cba', 'Expected 321cba as the result, the result was: ' + reverseString( 'abc123' ) );
});