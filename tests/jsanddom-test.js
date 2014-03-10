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
module("String Reverse Unit Test");
test("String Reverse Test", function(){
	equal( typeof reverseString, 'function', 'Must contain reverseString function');
	ok( reverseString("Reid"),"deiR", "Expected deiR as result, test result was: " + reverseString("Reid"));
});

module("Minimum Value Unit Test");
test("Minimum Value Test", 2, function(){
	equal( typeof findMinValue, 'function', 'Must contain findMinValue function');
	ok(findMinValue(), 1, "Expected 1 as result, test result was:" + findMinValue());
	
});
