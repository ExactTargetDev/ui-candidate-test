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


/********************************
reverseString(str)
********************************/

module( "reverseString Test" );
test ("Reverse String", 2, function() {

		//Verify the method exists
		equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

		// Make sure the result from the reverseString function is valid
		ok( reverseString( "Hadoop" ), "poodaH", 'Expected "poodaH" as the result, the result was: ' + reverseString("Hello") );
});


/********************************
findMinValue(values)
********************************/

module("findMinValue Test");
test("Find Minimum Value of array", 4, function() {

			//Verify the method exists
		equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

		// Make sure the result from the findMinValue function is valid
		var arr1 = [1,2,3,4,5,6,7,8,9],
				arr2 = [9,8,7,6,5,4,3,2,1],
				arr3 = [100,34,68,299,55,9];

		ok( findMinValue(arr1), 1, 'Expected 1 as the result, the result was: ' + findMinValue(arr1) );
		ok( findMinValue(arr2), 1, 'Expected 1 as the result, the result was: ' + findMinValue(arr2) );
		ok( findMinValue(arr3), 9, 'Expected 9 as the result, the result was: ' + findMinValue(arr3) );
});


/********************************
findDistinctValues(values)
********************************/

module("findDistinctValues Test");
test("Find Distinct Values in Array", 1, function() {

			//Verify the method exists
		equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );

});


/********************************
doFizzBuzz()
********************************/


module("doFizzBuzz Test");
test("Print the integers 1 - 100 to console with a twist", 1, function() {

			//Verify the method exists
		equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' );

});

/********************************
removeFruits(fruits, fruitsToRemove)
********************************/

module("removeFruits Test");
test("Remove fruits listed in one array from a main array", 1, function() {

			//Verify the method exists
		equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );

});


/********************************
pushOntoArray(array, toPush)
********************************/


module("pushOntoArray Test");
test("Push values onto Array", 1, function() {

			//Verify the method exists
		equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' );

});


/********************************
splitListStrUsingComma(sourceStr)
********************************/


module("splitListStrUsingCommaTest");
test("Split string into array with comma separator", 1, function() {

			//Verify the method exists
		equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' );

});


/********************************
sum()
********************************/


module("sum Test");
test("Find the sum of an unlimited amount of integers", 1, function() {

			//Verify the method exists
		equal( typeof sum, 'function', 'Must contain a sum function' );

});





/********************************
isOnlyWhitespace(sourceStr)
********************************/


module("isOnlyWhitespace Test");
test("Test array for only whitespace", 1, function() {

			//Verify the method exists
		equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' );

});

