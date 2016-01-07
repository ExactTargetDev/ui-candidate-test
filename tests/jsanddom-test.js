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
	equal(reverseString("Marcus Warnsley"), "yelsnraW sucraM", "Expected for the value to equal yelsnraW sucraM with the value being equal to: " + reverseString("Marcus Warnsley"));
});


module("Min Array Values");
test("Min Array Values", function(){
	// Make sure the result returns the minimum value
	ok(findMinValue([35,65,23,4,78]), 4, "Expected for 4 to be the lowest value with the lowest value being: " + findMinValue([35,65,23,4,78]));
});

module("Distinctive Values");
test("Remove Duplicates", function(){
	// Make sure the result removes the duplicates in the array
	ok(findDistinctValues([25,65,25,13,78,65]), [25,65], "Expected to remove 25 and 65 with these values being removed: " + findDistinctValues([25,65,25,13,78,65]));
});

module("FizzBuzz");
test("Log Fizz Buzz", function(){
	// Make sure the result prints fizz, buzz, or fizz buzz
	ok(doFizzBuzz(), "Expected to print numbers 1-100 with Fizz for % 3, Buzz for % 5, and FizzBuzz for % 3 & 5");
});

module("Remove Fruits");
test("Remove Fruits", function(){
	// Make sure the fruits that are in the remove fruits array are removed from the other array
	ok(removeFruits(["banana","orange","strawberry","apple"],["banana","apple"]), "Expected for the results of the new array after removal to equal 'orange','strawberry' with the results being: " + removeFruits(["banana","orange","strawberry","apple"],["banana","apple"]));
});


module("Push to Array");
test("Push values onto array", function(){
	//Make sure a single value and array are pushed onto other array
	ok(pushOntoArray([3,"Hello","World",6], "Marcus Warnsley"), [3,"Hello","World",6,"Marcus Warnsley"], "Expected to push value onto end of array");

	//Second test to see if array values will modify the original array
	ok(pushOntoArray([3,"Hello","World",6], ["Marcus", "Warnsley"]), [3,"Hello","World",6,"Marcus", "Warnsley"], "Expected to push array value onto end of array");
});

module("Split String with comma");
test("Split string using comma delimiter", function(){
	//Make sure the string values are separated by a comma
	ok(splitListStrUsingComma("This will be the string to split"), [ 'This', 'will', 'be', 'the', 'string', 'to', 'split' ], "Expected for the string to be separated by commas");

	//Second test to make sure if the string is empty that it produced an empty array
	ok(splitListStrUsingComma(""), [''], "Expected to return an empty array since there are no values");
});

module("Return Sum");
test("Return sum of arguments", function(){
	//Make sure that the function returns the sum of ANY number of arguments
	ok(sum(3,7,5,2,8), 23, "Expect for any number of arguments to be accepted with the sum of all the numbers returned. End total after all arguments equals: " + sum(3,7,5,2,8));
});

module("White Space Function");
test("Test white space in string", function(){
	//Make sure the functions returns true for whitespace and false for not
	ok(isOnlyWhitespace("String to test"), true, "Expected for given string to return true because of whitespace with the given string returning: " + isOnlyWhitespace("String to test"));
});

module("Closure Example");
test("Display Message Closure Example", function(){
	//This should return a message from the inside closure function using the scope of its outer function variables
	ok(displayMessage("$4.99","$5.45"), 'The total price of your item before taxes will be $4.99 and $5.45 after taxes.', "Expected to return this string with paramters in place for pricing that should say: " + displayMessage("$4.99","$5.45"));
});