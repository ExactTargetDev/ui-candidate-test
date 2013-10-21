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
test( "reverseString Test", 7, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

    // Check the reverseString function works right
    equal( reverseString( "123" ), "321", 'Expected "321" as the result, the result was: ' + reverseString( "123" ) );
    equal( reverseString( "abcd" ), "dcba", 'Expected "dcba" as the result, the result was: ' + reverseString( "abcd" ) );
    equal( reverseString( "1    z" ), "z    1", 'Expected "z    1" as the result, the result was: ' + reverseString( "1    z" ) );
    equal( reverseString( " a#X -12 3" ), "3 21- X#a ", 'Expected "3 21- X#a " as the result, the result was: ' + reverseString( " a#X -12 3" ) );
    equal( reverseString( "4, 2" ), "2 ,4", 'Expected "2 ,4" as the result, the result was: ' + reverseString( "4, 2" ) );
    equal( reverseString( " 	 	" ), "	 	 ", 'Expected " 	 	" as the result, the result was: ' + reverseString( " 	 	" ) );
});