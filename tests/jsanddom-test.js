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
test("Minimum Value Test", function(){
	equal( typeof findMinValue, 'function', 'Must contain findMinValue function');
	var x = [3, 4, 6, 1, 2, 9, 7, 4, 5];
	ok( findMinValue(x), 1, "Expected 1 as result, test result was: " + findMinValue(x));
	
});

module("Distinct Values Unit Test");
test("Distinct Values Test", function(){
	equal( typeof findDistinctValues, 'function', 'Must contain findDistinctVaulues function');
	var x = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
	ok( findDistinctValues(x), [3, 5, 7, 20, 01], "Expected [3, 5, 7, 20, 01], test result was: " + findDistinctValues(x));
});