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
module( "String " );
test( "reverseString() should return the input string backwards", 1, function() {
	var mirrored = reverseString("Timperman");
	ok( mirrored, "namrepmiT", "Timperman backwards is " + mirrored );
});