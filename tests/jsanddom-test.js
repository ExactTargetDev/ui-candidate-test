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

// Reverse String Unit Test
module( 'Reverse String Unit Test' );

test( 'Reverse String Test',  function () {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 

    // Valid result when string is undefined
    equal( reverseString(), '', 'Expected an empty string, actual result was ' + reverseString() );


    // Valid result when string is empty
    equal( reverseString(), '', 'Expected an empty string, actual result was ' + reverseString(''));

     // Valid result when string
    //equal( reverseString("abc"), "cba", 'Expected reveresed string.' );       
    equal( reverseString('Hello world!'), '!dlrow olleH', "Expected '!dlrow olleH', actual result was " 
    	+ reverseString('Hello world!') ); 
  
});

test( 'Reverse String Test With Undefined or Empty String',  function () {

    // Valid result when string is undefined
    equal( reverseString(), "", "Expected an empty string, actual result was " + reverseString() );

    // Valid result when string is empty
    equal( reverseString(), '', 'Expected an empty string, actual result was ' + reverseString(''));
  
});


// Find Min Value Unit Test
module( 'Find Min Value Unit Test' );
test( 'Find Min Value Test',  function () {

	var intArray = [3, 8, 9]; 
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 

    // Make sure the result from the findMinValue function is valid
    equal(findMinValue(intArray), 3, 'Expected 3, actual result was ' +  findMinValue(intArray));
});

test( 'Find Min Value Test With Invalid Array',  function () {
	var intArray = [3, 8, 'nine']; 


    // Make sure the result from the findMinValue function is valid
    throws( findMinValue(intArray),  'Error expected when array contains a non-numeric or infinite number.' );
});

// Remove Duplicates Test
module( 'Remove Duplicates Unit Test' );
test( 'Remove Duplicates',  function () {

    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 

    // Valid result 
    deepEqual( findDistinctValues([1, 1, 2, 3, 4, 4]), [1, 2, 3, 4], 'Expected [1, 2, 3, 4], actual result was ' 
    	+ findDistinctValues([1, 1, 2, 3, 4, 4]));   

    // Valid results with two elements
    deepEqual( findDistinctValues([1, 1]), [1], "Expected [1], actual result was " 
    	+ findDistinctValues([1, 1]));

    // Test with strings
	deepEqual( findDistinctValues(['pear', 'apple',  'apple', 'apple', 'grapes']), ['pear', 'apple', 'grapes'], 
		"Expected ['pear', 'apple', 'grapes'], actual result was " 
		+ findDistinctValues(['pear', 'apple',  'apple', 'apple', 'grapes']));     
});

// Do Fizz Buzz Test
module( 'Do Fizz Buzz Unit Test' );

// See Javascript console for results
//doFizzBuzz() ;

// Remove Fruits Test
module( "Remove Fruits Unit Test" );
test( 'Remove Fruits Test', function () {

	var fruits = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
	var fruitsToRemove = ['pear', 'banana'];
	var expected = ['apple', 'orange', 'kiwi', 'plum', 'strawberry'];

    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' ); 

    // Remove a list of fruits from array
 	removeFruits( fruits, fruitsToRemove )

    // Make sure the result from the divide function is valid
    deepEqual( fruits,expected , 'Expected ' + expected +  ' as the result, the result was: ' + fruits );
});

// Push to Array Test
module( 'Push to Array Unit Test' );
test( 'Push to Array Test With Array', function () {

	var fruits =  ['pear', 'banana'];   
	var fruitsToPush = ['pear', 'plum', 'strawberry']
	var expected = ['pear', 'banana', 'pear', 'plum', 'strawberry'];

    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' ); 

    // Add list of fruits onto  array (modify original array)
 	pushOntoArray( fruits, fruitsToPush )

    // Make sure the result from the divide function is valid
    deepEqual( fruits, expected , 'Expected ' + expected +  ' as the result, the result was: ' + fruits );
});	

test( 'Push to Array Test With Single Value',  function () {

	var fruits =  ['pear', 'banana'];  
	var fruitToPush = 'grape fruit';
	var expected = ['pear', 'banana', 'grape fruit'];

	// Add a single fruit onto array (modifiy original array)
 	pushOntoArray( fruits, fruitToPush )

    // Make sure the result from the divide function is valid
    deepEqual( fruits, expected , 'Expected ' + expected +  ' as the result, the result was: ' + fruits );
});	


// Split List String Using Comma Test
module( 'Split List String Using Comma Unit Test' );

test( 'Split Non-Empty List String Using Comma', function () {

	var someString = 'The, quick, brown, fox jumped over';
	var expected = ['The', ' quick', ' brown', ' fox jumped over'];

    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' ); 



    // Make sure the result from the divide function is valid
    deepEqual( splitListStrUsingComma(someString) , expected , 'Expected ' + expected
     +  ' as the result, the result was: ' + splitListStrUsingComma(someString)  );
});	

test( 'Split Empty List String Using Comma', function () {

	var someString = '';
	var expected = [];


    // Make sure the result from the divide function is valid
    deepEqual( splitListStrUsingComma(someString) , expected , 'Expected ' + expected
     +  ' as the result, the result was: ' + splitListStrUsingComma(someString)  );
});	



// SumTest
module( 'SumUnit Unit Test' );

test( 'Sum', function () {

    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' ); 

    // Make sure the result from the sum function is valid
    equal( sum(1, -1, 2, 3, 5, 7) , 17 , 'Expected 17 as the result, the result was: ' + sum(1, -1, 2, 3, 5, 7)  );

    // With floating number..,
    equal( sum(5, 5, 6.5) , 16.5 , 'Expected 16.5 as the result, the result was: ' + sum(5, 5, 6.5)  );

    // With string element...
    equal( sum(5, 'Red beans', 6.5) , 11.5 , 'Expected 11.5 as the result, the result was: ' + sum(5, 5, 6.5)  );
});	


// Is Only White Space
module( 'Is Only White Space Unit Test' );


test( 'Is Only White Space', function () {



    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' ); 


    // Make sure the result from the divide function is valid
    ok( isOnlyWhitespace('        '), ' Returns true, string contains only white spaces'  );
	ok( ! isOnlyWhitespace('        x        '), ' Returns false, string contains non-white space '  );
});	

