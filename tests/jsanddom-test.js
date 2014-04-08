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

module( "nmhai3's unit testing" );

test( "reverseString of exacttarget should return tegrattcaxe", function() {
	equal( typeof reverseString, 'function', 'reverseString function must exist' );
	
	equal( reverseString("exacttarget"),  "tegrattcaxe", "passed!");
});

test( "findMinValue of 1 2 3 should return 1", function() {
	equal( typeof findMinValue, 'function', 'findMinValue function must exist' );
	equal( findMinValue([1,2,3]), 1, "passed!");
});

