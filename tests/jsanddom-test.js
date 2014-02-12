/*global module, test, equal, deepEqual, ok, strictEqual, divide, reverseString, findMinValue, findDestinctValues, removeFruits, pushOntoArray, splitListStrUsingComma, sum */

'use strict';

/********************************
Unit Test Example
********************************/
module( 'Example Unit Test' );
test( 'Example Test', 2, function() {
		// Verify the method exists
		equal( typeof divide, 'function', 'Must contain a divide function' );

		// Make sure the result from the divide function is valid
		ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});

/********************************
Please create your tests below...
********************************/
module( 'Test Questions' );
test( 'Reverse String', function() {
	var toReverse = 'Subscribers rock';
	var reversed;

	equal( typeof reverseString, 'function', 'Must contain a reverse string function' );

	// make sure the string is actually reversed
	reversed = reverseString( toReverse );
	strictEqual( reversed, 'kcor srebircsbuS', 'String should be reversed' );
});

test( 'Find Min Value', function() {
	var testArray1 = [3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
	var testArray2 = [1, 1, 2, 3, 5, 7];
	var testArray3 = [7, 5, 3, 2, 1, 1];
	var result1, result2, result3;

	equal( typeof findMinValue, 'function', 'Must contain a find min value function' );

	// confirm finding min val in arrays works
	result1 = findMinValue( testArray1 );
	result2 = findMinValue( testArray2 );
	result3 = findMinValue( testArray3 );

	strictEqual( result1, -1.1, 'Should return minimum value' );
	strictEqual( result2, 1, 'Should return minimum value' );
	strictEqual( result3, 1, 'Should return minimum value' );
});

test( 'Find Distinct Values', function() {
	var testArray1 = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'apple', 'plum', 'strawberry'];
	var testArray2 = [3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
	var testArray3 = ['apple', 'banana', 'orange', 'kiwi', 1, -1.1, 12, Infinity, Infinity, 0.18];
	var testArray4 = [1, 2, 'fun', ['inception!', 'deeper'], 42, 2];
	var result1, result2, result3, result4;

	equal( typeof findDistinctValues, 'function', 'Must contain a find distinct values function' );

	// confirm only destinct values are returned
	result1 = findDistinctValues( testArray1 );
	result2 = findDistinctValues( testArray2 );
	result3 = findDistinctValues( testArray3 );
	result4 = findDistinctValues( testArray4 );

	deepEqual( result1, ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], 'Should contain only unique values' );
	deepEqual( result2, [3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity], 'Should contain only unique values' );
	deepEqual( result3, ['apple', 'banana', 'orange', 'kiwi', 1, -1.1, 12, Infinity, 0.18], 'Should contain only unique values' );
	deepEqual( result4, [1, 2, 'fun', ['inception!', 'deeper'], 42], 'Should contain only unique values' );
});

test( 'Remove Fruits', function() {
	var fruits1 = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
	var fruits2 = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
	var fruits3 = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
	var fruits4 = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
	var removeFruits1 = ['pear', 'banana'];
	var removeFruits2 = ['watermelon'];
	var removeFruits3 = [];
	var removeFruits4 = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
	var expected1 = ['apple', 'orange', 'kiwi', 'plum', 'strawberry'];
	var expected2 = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
	var expected3 = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
	var expected4 = [];
	var result1, result2, result3, result4;

	equal( typeof removeFruits, 'function', 'Must contain a remove fruits function' );

	// confirm fruits are removed properly
	removeFruits( fruits1, removeFruits1 );
	removeFruits( fruits2, removeFruits2 );
	removeFruits( fruits3, removeFruits3 );
	removeFruits( fruits4, removeFruits4 );

	deepEqual( fruits1, expected1, 'Fruits should be removed from list' );
	deepEqual( fruits2, expected2, 'Fruits should be removed from list' );
	deepEqual( fruits3, expected3, 'Fruits should be removed from list' );
	deepEqual( fruits4, expected4, 'Fruits should be removed from list' );
});

test( 'Push Onto Array', function() {
	var originalArray1 = [1, 2, 3];
	var originalArray2 = [1, 2, 3];
	var originalArray3 = [1, 2, 3];
	var originalArray4 = [1, 2, 3];
	var toPush1 = 42;
	var toPush2 = [42];
	var toPush3 = [4, 2];
	var toPush4 = [4, 2, [1, 2, 3, 4]];
	var expected1 = [1, 2, 3, 42];
	var expected2 = [1, 2, 3, 42];
	var expected3 = [1, 2, 3, 4, 2];
	var expected4 = [1, 2, 3, 4, 2, 1, 2, 3, 4];
	var result1, result2, result3, result4;

	equal( typeof pushOntoArray, 'function', 'Must contain a push onto array function' );

	// confirm values are pushed onto array correctly
	pushOntoArray( originalArray1, toPush1 );
	pushOntoArray( originalArray2, toPush2 );
	pushOntoArray( originalArray3, toPush3 );
	pushOntoArray( originalArray4, toPush4 );

	deepEqual( originalArray1, expected1, 'Items should be pushed onto array' );
	deepEqual( originalArray2, expected2, 'Items should be pushed onto array' );
	deepEqual( originalArray3, expected3, 'Items should be pushed onto array' );
	deepEqual( originalArray4, expected4, 'Items should be pushed onto array using nested arrays' );

});

test( 'Split List String Using Commas', function() {
	var testString1 = 'The, quick, brown, fox jumped over';
	var testString2 = '';
	var expected1 = ['The', 'quick', 'brown', 'fox jumped over'];
	var expected2 = [];
	var result1, result2;

	equal( typeof splitListStrUsingComma, 'function', 'Must contain a split list string using commas function' );

	// confirm strings are split properly
	result1 = splitListStrUsingComma( testString1 );
	result2 = splitListStrUsingComma( testString2 );

	deepEqual( result1, expected1, 'List string should be split' );
	deepEqual( result2, expected2, 'List string should be split' );
});

test( 'Sum', function() {
	var result1, result2, result3;

	equal( typeof sum, 'function', 'Must contain a sum function' );

	// confirm proper addition
	result1 = sum( 0, 1, 1, 2, 3, 5, 8 );
	result2 = sum( -144, 144 );
	result3 = sum( -2, -2 );

	strictEqual( result1, 20, 'parameters should be added up' );
	strictEqual( result2, 0, 'parameters should be added up' );
	strictEqual( result3, -4, 'parameters should be added up' );
});

test( 'Is Only Whitespace', function() {

	// ECMA-262 standard for unicode whitespace characters http://blog.stevenlevithan.com/archives/javascript-regex-and-unicode
	var testSpaces = ['\u0009',// — Tab — \t
		'\u000a', // — Line feed — \n — (newline character)
		'\u000b', // — Vertical tab — \v
		'\u000c', // — Form feed — \f
		'\u000d', // — Carriage return — \r — (newline character)
		'\u0020', // — Space
		'\u00a0', // — No-break space
		'\u1680', // — Ogham space mark
		'\u180e', // — Mongolian vowel separator
		'\u2000', // — En quad
		'\u2001', // — Em quad
		'\u2002', // — En space
		'\u2003', // — Em space
		'\u2004', // — Three-per-em space
		'\u2005', // — Four-per-em space
		'\u2006', // — Six-per-em space
		'\u2007', // — Figure space
		'\u2008', // — Punctuation space
		'\u2009', // — Thin space
		'\u200a', // — Hair space
		'\u2028', // — Line separator — (newline character)
		'\u2029', // — Paragraph separator — (newline character)
		'\u202f', // — Narrow no-break space
		'\u205f', // — Medium mathematical space
		'\u3000']; // — Ideographic space
	var testString1 = testSpaces.join( ' ' );
	var testString2 = ' not only whitespace ';
	var testString3 = '       ';
	var testString4 = '';
	var testString5 = '\t\n\v\f\r';
	var result1, result2, result3, result4, result5;

	equal( typeof isOnlyWhitespace, 'function', 'Must contain an is only whitespace function' );

	// confirm proper whitespace checking
	result1 = isOnlyWhitespace( testString1 );
	result2 = isOnlyWhitespace( testString2 );
	result3 = isOnlyWhitespace( testString3 );
	result4 = isOnlyWhitespace( testString4 );
	result5 = isOnlyWhitespace( testString5 );

	strictEqual( result1, true, 'Should detect whitespace properly' );
	strictEqual( result2, false, 'Should detect whitespace properly' );
	strictEqual( result3, true, 'Should detect whitespace properly' );
	strictEqual( result4, false, 'Should detect whitespace properly' );
	strictEqual( result5, true, 'Should detect whitespace properly' );
});
