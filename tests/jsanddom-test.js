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

module("Reverse String");
test("Reverse String", function(){
	// Make sure the result is a reversed string
	equal(reverseString("Marcus Warnsley"), "yelsnraW sucraM", "Expected for the value to equal yelsnraW sucraM");
});


module("Min Array Values");
test("Min Array Values", function(){
	// Make sure the result returns the minimum value
	ok(findMinValue([35,65,23,4,78]), 4, "Expected for 4 to be the lowest value");
});