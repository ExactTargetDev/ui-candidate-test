/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );

test( "divide Test", 2, function() {

    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    deepEqual( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );

});

/********************************
Please create your tests below...
********************************/

// reverseString
test( "reverseString test", 3, function() {

    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 

    equal(
    	reverseString("Let's write some code!"),
    	"!edoc emos etirw s'teL",
    	'Verify "!edoc emos etirw s\'teL is returned.'
	);

    // Make sure the string returned is not the same as the string passed into the function.
	notEqual(
		reverseString("Let's write some code!"),
		"Let's write some code!",
		"Test that the two strings are not equal."
	);

});



// findMinValue
test( "findMinValue test", 3, function() {
    
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 

    equal(
    	findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]),
    	-1.1,
    	"Verify -1.1 is the result.");

    // Make sure the string returned is not the same as the string passed into the function.
    notEqual(
    	findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]),
    	Infinity,
    	"Verify that Infinity is not the result."
	);

});



// findDistinctValues
test( "findDistinctValues test", 3, function() {

    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 

    // Make sure the result from the divide function is valid
    deepEqual(
    	findDistinctValues(['a','b','a','c','b','c','d']),
    	['a','b','c','d'],
    	"Verify that ['a','b','c','d'] is returned."
	);

    // Make sure the result from the divide function is valid
    notEqual(
    	findDistinctValues(['a','b','a','c','b','c','d']),
    	['b','a','d','c'],
    	"Don't expect the order of the results to be ['b','a','d','c']"
	);

});



// doFizzBuzz
test( "doFizzBuzz test", 1, function() {

    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function.  See console for output.' ); 

});



// removeFruits
test( "removeFruits test", 3, function() {

    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' ); 

    deepEqual(
    	removeFruits(['apple', 'orange', 'cherry', 'lemon', 'raspberry', 'currant', 'eggplant', 'grape'], ['eggplant', 'lemon']),
    	['apple', 'orange', 'cherry', 'raspberry', 'currant', 'grape'],
    	"Verifying ['eggplant', 'lemon'] are removed."
	);

    notEqual(
    	removeFruits(['apple', 'orange', 'cherry', 'lemon', 'raspberry', 'currant', 'eggplant', 'grape'], ['eggplant', 'lemon']),
    	['apple', 'orange', 'cherry', 'lemon', 'raspberry', 'currant', 'eggplant', 'grape'],
    	"Don't expect the original list of fruits to be returned."
	);

});



// pushOntoArray
test( "pushOntoArray test", 3, function() {

    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' ); 

    deepEqual(
    	pushOntoArray([], [1, 2, 3]),
    	[1, 2, 3],
    	"Verify the expected [1,2,3] is returned."
	);

    deepEqual(
    	pushOntoArray([], 4),
    	[4],
    	"Verify the expected [4] is returned."
	);

});



// splitListStrUsingComma
test( "splitListStrUsingComma test", 4, function() {

    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' ); 

    deepEqual(
    	splitListStrUsingComma("one"),
    	["one"],
    	"Testing that [\"one\"] is returned."
	);

    deepEqual(
    	splitListStrUsingComma("The, quick, brown, fox jumped over"),
    	["The", " quick", " brown", " fox jumped over"],
    	"Testing that the correct array of words is returned."
	);

    deepEqual(
    	splitListStrUsingComma(""),
    	[],
    	"Testing that an empty array is returned."
	);

});



// sum
test( "sum test", 4, function() {

    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' ); 

    deepEqual(
    	sum(2, 6, 4, 40, 5, 6, "Fuel UX", 7, 2),
    	72,
    	"Testing that the correct result of 72 is returned."
	);

    deepEqual(
    	sum(1, 1, 2, 3, 5, 7),
    	19,
    	"Testing that the correct result of 19 is returned."
	);

    notDeepEqual(
    	sum(1, 1, 2, 3, 5, 7),
    	0,
    	"Testing that the incorrect result of 0 is not returned."
	);

});



// isOnlyWhitespace
test( "isOnlyWhitespace test", 4, function() {

    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' ); 

    equal(
    	isOnlyWhitespace("Fuel UX"),
    	false,
    	"Testing that the correct result of false is returned."
	);

    equal(
    	isOnlyWhitespace("                             "),
    	true,
    	"Testing that the correct result of true is returned."
	);

    equal(
    	isOnlyWhitespace(""),
    	false,
    	"Testing that the correct result of false is returned."
	);

});

