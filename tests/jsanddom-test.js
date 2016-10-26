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
var doTest = function(expected, actual) {
	return ok(expected, actual,
			'Expected ' + expected + ' as result, but result was: ' + actual);
}

/**
 * reverseString
 */
test('reverse test', function() {
	doTest(reverseString('Eric'), 'cirE');
});

/**
 * findMinValue
 */
test('test find min values', function() {
	doTest(findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]), -1.1);
});

/**
 * findDistinctValues
 */
test('find distinct values test', function() {
	doTest(findDistinctValues([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]),
			[3, 5, 7, 20, .18, 01, -1.1, 12, 'Infinity', 0.18]);
});

/**
 * doFizzBuzz
 */
test('test doFizzBuzz', function() {
	doTest(doFizzBuzz(15), 
		   '12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz');
	doTest(doFizzBuzz(10), 
	   '12Fizz4BuzzFizz78FizzBuzz');
});

/**
 * removeFruits
 */
test('test removeFruits', function() {
	doTest(removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'],
						['pear', 'banana']),
		   ['apple', 'orange', 'kiwi', 'plum', 'strawberry']);
});

/**
 * pushOntoArray
 */
test('test pushOntoArray', function() {
	doTest(pushOntoArray([1, 2, 3, 4, 5], 6),
			[1,2,3,4,5,6]);
	
	doTest(pushOntoArray(['a', 'b', 'c', 'd'],
	                     ['x', 'y', 'z']),
	       ['a', 'b', 'c', 'd', 'x', 'y', 'z']);
});

/**
 * splitListStrUsingComma
 */
test('test splitListsStrUsingComma', function() {
	doTest(splitListStrUsingComma('The, quick, brown, fox jumped over'),
			['The', ' quick', ' brown', ' fox jumped over']);
	
	equal(splitListStrUsingComma('').length, 0);
});

/**
 * sum
 */
test('test sum', function() {
	doTest(sum(1, 1, 2, 3, 5, 7), 19);
	
	doTest(sum(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 22), 32);
});

/**
 * isOnlyWhitespace
 */
test('test isOnlyWhitespace', function() {
	doTest(isOnlyWhitespace('                       \t\t\t\t\n\n\n'), true);
	equal(isOnlyWhitespace('         a      '), false);
});