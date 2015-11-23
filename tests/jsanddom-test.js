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

module("Marcie's Unit Tests");
test("Reverse String", 2, function() {
	equal( typeof reverseString, 'function', 'Must contain reverse function');
	strictEqual( reverseString('abcdefg'), 'gfedcba', 'Successful output. Expected gfedcba, Result ' + reverseString('abcdefg'))
});
