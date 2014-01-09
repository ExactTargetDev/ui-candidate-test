/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    equal( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
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
		equal( reverseString( "Hadoop" ), "poodaH", 'Expected "poodaH" as the result, the result was: ' + reverseString("Hadoop") );
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

		equal( findMinValue(arr1), 1, 'Expected 1 as the result, the result was: ' + findMinValue(arr1) );
		equal( findMinValue(arr2), 1, 'Expected 1 as the result, the result was: ' + findMinValue(arr2) );
		equal( findMinValue(arr3), 9, 'Expected 9 as the result, the result was: ' + findMinValue(arr3) );
});


/********************************
findDistinctValues(values)
********************************/

module("findDistinctValues Test");
test("Find Distinct Values in Array", 2, function() {

			//Verify the method exists
		equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );
			// Make sure the result from the findMinValue function is valid
		var arr=[1,4,9,4,6,2,0,6,8,8,8]
		equal( findDistinctValues(arr), [1,4,9,6,2,0,8], 'Expected [1,4,9,6,2,0,8] as the result, the result was: ' + findDistinctValues(arr) );
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
test("Remove fruits listed in one array from a main array", 2, function() {

			//Verify the method exists
		equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );

		// Make sure the result from the findMinValue function is valid
		var fruits = ["apple", "pear", "cherry"],
				fruitsToRemove = ["pear"];

		equal( removeFruits(fruits, fruitsToRemove), ["apple", "cherry"], 'Expected ["apple", "cherry"] as the result, the result was: ' + removeFruits(fruits, fruitsToRemove) );
});


/********************************
pushOntoArray(array, toPush)
********************************/


module("pushOntoArray Test");
test("Push values onto Array", 3, function() {

			//Verify the method exists
		equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' );

			// Make sure the result from the pushOntoArray function is valid
			var arr = [1,5,[6,7,8],0],
					//arr1 = [1,5,[6,7,8],0],
					test1 = 2389;
					//test2 = [2,3,0,7];

		equal( pushOntoArray(arr, test1), [1,5,[6,7,8],0,2389], 'Expected [1,5,[6,7,8],0,2389] as the result, the result was: ' + pushOntoArray(arr, test1) );
		//equal( pushOntoArray(arr1, test2), [1,5,[6,7,8],0,[2,3,0,7]], 'Expected [1,5,[6,7,8],0,[2,3,0,7]] as the result, the result was: ' + pushOntoArray(arr1, test2) );
});


/********************************
splitListStrUsingComma(sourceStr)
********************************/


module("splitListStrUsingCommaTest");
test("Split string into array with comma separator", 3, function() {

			//Verify the method exists
		equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' );

			// Make sure the result from the pushOntoArray function is valid
		var s1 = "Now, is the summer, of our discontent, he said.";
		var s2 = " ";
		equal( splitListStrUsingComma(s1), ["Now", "is the summer", "of our discontent", "he said."], 'Expected ["Now", "is the summer", "of our discontent", "he said."] as the result, the result was: ' + splitListStrUsingComma(s1) );
		equal( splitListStrUsingComma(s2), [], 'Expected [] as the result, the result was: ' + splitListStrUsingComma(s2) );
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
test("Test array for only whitespace", 3, function() {

			//Verify the method exists
		equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' );

		// Make sure the result from the isOnlyWhitespace function is valid
    var str1 = "   ",
    		str2 = "ji m";
    equal( isOnlyWhitespace(str1), true, 'Expected true as the result, the result was: ' + isOnlyWhitespace(str1) );
    equal( isOnlyWhitespace(str2), false, 'Expected false as the result, the result was: ' + isOnlyWhitespace(str2) );
});

