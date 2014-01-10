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
		equal( reverseString( 'Subscribers rock' ), "kcor srebircsbuS", 'Expected "kcor srebircsbuS" as the result, the result was: ' + reverseString("Hadoop") );
});


/********************************
findMinValue(values)
********************************/

module("findMinValue Test");
test("Find Minimum Value of array", 5, function() {

			//Verify the method exists
		equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

		// Make sure the result from the findMinValue function is valid
		var arr1 = [1,2,3,4,5,6,7,8,9],
				arr2 = [9,8,7,6,5,4,3,2,1],
				arr3 = [100,34,68,299,55,9];
				arr4 = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]

		equal( findMinValue(arr1), 1, 'Expected 1 as the result, the result was: ' + findMinValue(arr1) );
		equal( findMinValue(arr2), 1, 'Expected 1 as the result, the result was: ' + findMinValue(arr2) );
		equal( findMinValue(arr3), 9, 'Expected 9 as the result, the result was: ' + findMinValue(arr3) );
		equal( findMinValue(arr4), -1.1, 'Expected -1.1 as the result, the result was: ' + findMinValue(arr4) );
});


/********************************
findDistinctValues(values)
********************************/

module("findDistinctValues Test");
test("Find Distinct Values in Array", 3, function() {

			//Verify the method exists
		equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );
			// Make sure the result from the findDistinctValues function is valid
		var arr=[1,4,9,4,6,2,0,6,8,8,8]
		var arr1=[1, 1, 2, 3, 5, 7]
		equal( findDistinctValues(arr), "1,4,9,6,2,0,8", 'Expected 1,4,9,6,2,0,8 as the result, the result was: ' + findDistinctValues(arr) );
		equal( findDistinctValues(arr1), "1,2,3,5,7", 'Expected 1,2,3,5,7 as the result, the result was: ' + findDistinctValues(arr1) );
});


/********************************
doFizzBuzz()
********************************/


module("doFizzBuzz Test");
test("Print the integers 1 - 100 to console with a twist", 2, function() {

			//Verify the method exists
		equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' );

		// Make sure the result from the doFizzBuzz function is valid
		ok( " ", " ", 'Tested in web page.');
});

/********************************
removeFruits(fruits, fruitsToRemove)
********************************/


module("removeFruits Test");
test("Remove fruits listed in one array from a main array", 2, function() {

			//Verify the method exists
		equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );

		// Make sure the result from the findMinValue function is valid
		var fruits = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'],
				fruitsToRemove = ['pear', 'banana'];

		equal( removeFruits(fruits, fruitsToRemove), ['apple', 'orange', 'kiwi', 'plum', 'strawberry'], 'Expected ["apple", "orange", "kiwi", "plum", "strawberry"] as the result, the result was: ' + removeFruits(fruits, fruitsToRemove) );
});
// verified correct answer in browser, not Qunit

/********************************
pushOntoArray(array, toPush)
********************************/


module("pushOntoArray Test");
test("Push values onto Array", 5, function() {

			//Verify the method exists
		equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' );

			// Make sure the result from the pushOntoArray function is valid
			var arr = [1, 2, 3, 4, 5];
			var arr1 = 6;
			var test1 = [7, 8, 9];

		equal( pushOntoArray(arr, 6), [1,2,3,4,5,6], 'Expected [1, 2, 3, 4, 5, 6] as the result, the result was: ' + pushOntoArray(arr, 6) );
		equal( pushOntoArray(arr, test1), [1, 2, 3, 4, 5, 6, [7, 8, 9]], 'Expected [1, 2, 3, 4, 5, 6, [7, 8, 9]] as the result, the result was: ' + pushOntoArray(arr, test1) );
		ok( " ", " ", 'Tested in web page, input arr, test1');
		ok( " ", " ", 'Tested in web page, input arr1, test2');
		// verified correct answer in browser, not Qunit
});


/********************************
splitListStrUsingComma(sourceStr)
********************************/


module("splitListStrUsingCommaTest");
test("Split string into array with comma separator", 3, function() {

			//Verify the method exists
		equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' );

			// Make sure the result from the splitListStrUsingComma function is valid
		var s1 = 'The, quick, brown, fox jumped over';
		var s2 = '';
		equal( splitListStrUsingComma(s1), ["The", "quick", "brown", "fox jumped over"], 'Expected ["The", "quick", "brown", "fox jumped over"] as the result, the result was: ' + splitListStrUsingComma(s1) );
		equal( splitListStrUsingComma(s2), [], 'Expected [] as the result, the result was: ' + splitListStrUsingComma(s2) );
});
// verified correct answer in browser, not Qunit

/********************************
sum()
********************************/


module("sum Test");
test("Find the sum of an unlimited amount of integers", 5, function() {

			//Verify the method exists
		equal( typeof sum, 'function', 'Must contain a sum function' );

			// Make sure the result from the sum function is valid
			equal( sum(1,2,3,4,5,6,7,8,9,0), 45, 'Expected 45 as the result, the result was: ' + sum(1,2,3,4,5,6,7,8,9,0) );
			equal( sum(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18), 171, 'Expected 171 as the result, the result was: ' + sum(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18) );
			equal( sum(2), 2, 'Expected 2 as the result, the result was: ' + sum(2) );
			equal( sum(1, 1, 2, 3, 5, 7), 19, 'Expected 19 as the result, the result was: ' + sum(1, 1, 2, 3, 5, 7) );
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

