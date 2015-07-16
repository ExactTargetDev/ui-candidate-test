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

//module( "Salesforce UI Candidate Test Unit Testing" );
module( "Function That Returns String Reversed" );
test( "Test reverseString with Valid arg", function(){
	//check function reverseString exists
	equal( typeof reverseString, 'function', 'Must contain a reverseString function' );	
	equal( reverseString("fish"), 'hsif', 'The function should reverse string arg' );	
	//test with different size strings
	equal( reverseString("georgerootsisfun"), 'nufsistooregroeg', 'The function should reverse string arg' );	
	
});


module("Function That Finds Min Value in Array");
test( "Test findMinValue with valid info", function(){
	//check function findMinValue exists
	equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );
	equal( findMinValue(["2", "3", "4", "5", "5"]), '2', 'Function should return min value' );	
	equal( findMinValue(["100", "1000", "2", "3", "4", "5", "5"]), '2', 'Function should return min value' );	
});


module("Function That Returns Distinct Values of Array");
test( "Test findDistinctValues with Valid info", function(){
	//check function findDistinctValues exists
	equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );
	deepEqual( findDistinctValues(["2", "2", "3", "4", "4", "5", "6"]), '["2", "3", "4", "5", "6"]', 'Return Distinct values' );

});

module("Function Buzz, Fizz, or BuzzFizz based on place in counter");
test( "Test Correct Return", function(){
	//check function doFizzBuzz exists
	equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' );

});


module("Function pushOntoArray");
test( "Test Correct Return", function(){
	//check function pushOntoArray exists
	equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' );
});


module("Function sum");
test( "Test Correct Return", function(){
	//check function sum exists
	equal( typeof sum, 'function', 'Must contain a sum function' );
	equal( sum(2, 4, 6), '12', 'Sum equals 12' );
});


module("Function isOnlyWhitespace");
test( "Test Correct Return", function(){
	//check function isOnlyWhitespace exists
	equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' );
	equal( isOnlyWhitespace("    "), true, 'Function should only return white space' );
});