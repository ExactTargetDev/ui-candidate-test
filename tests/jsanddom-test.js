/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    strictEqual( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/
module( "Applicant Unit Tests" );
test( "Reverse String Test", 2, function() {
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' );
	
	var result = reverseString( 'Bugs Bunny' );
	strictEqual( result, 'ynnuB sguB', 'Expected "ynnuB sguB", the result was: ' + result );
});

test( "Find Min Value Test", 2, function() {
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );
	
	var result = findMinValue([20, 5, 0, 54, -1, 7, -5, 412, 13]);
	strictEqual( result, -5, 'Expected -5, the result was: ' + result );
});

test( "Find Distinct Value Test", 2, function() {
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );
	
	var result = findDistinctValues([1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 0, 2, 6, 1, 7]);
	deepEqual( result, [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'Expected [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], the result was: ' + result );
});

test( "Fizz Buzz Test", 6, function() {
    equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' );
	
	var spy = sinon.spy(console, "log");
	doFizzBuzz();
	strictEqual( spy.callCount, 100, 'Expected 100, the result was: ' + spy.callCount );
	ok( spy.getCall(0).calledWithExactly(1), 'Expected 1, called with: ' + spy.getCall(0).args );
	ok( spy.getCall(2).calledWithExactly('Fizz'), 'Expected "Fizz", called with: ' + spy.getCall(2).args );
	ok( spy.getCall(4).calledWithExactly('Buzz'), 'Expected "Buzz", called with: ' + spy.getCall(4).args );
	ok( spy.getCall(14).calledWithExactly('FizzBuzz'), 'Expected "FizzBuzz", called with: ' + spy.getCall(14).args );
});

test( "Remove Fruit Test", 2, function() {
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );
	
	var fruits = ['Apple', 'Orange', 'Peach', 'Pear', 'Plum', 'Strawberry', 'Mango', 'Blueberry', 'Banana'],
	    removeList = ['Mango', 'Peach', 'Plum', 'Apple'],
		expected = ['Orange', 'Pear', 'Strawberry', 'Blueberry', 'Banana'],
		result = removeFruits(fruits, removeList);
	deepEqual( result, expected, 'Expected ' + expected + ', the result was: ' + result );
});

test( "Push Onto Array Test (Simple)", 3, function() {
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' );
	
	var myArray = [1, 7, 13, 9, 2, 8],
	    result = pushOntoArray(myArray, 3);
	deepEqual( result, myArray, 'The parameter was not modified' );
	deepEqual( myArray, [1, 7, 13, 9, 2, 8, 3], 'Expected [1, 7, 13, 9, 2, 8, 3], the result was: ' + result );
});

test( "Push Onto Array Test (Array)", 3, function() {
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' );

	var myArray = [1, 7, 13, 9, 2, 8],
	    toPush = [3, 19, 1, 4],
	    result = pushOntoArray(myArray, toPush);
	deepEqual( result, myArray, 'The parameter was not modified' );
	deepEqual( myArray, [1, 7, 13, 9, 2, 8, 3, 19, 1, 4], 'Expected [1, 7, 13, 9, 2, 8, 3, 19, 1, 4], the result was: ' + result );
});

test( "Split List Test", 3, function() {
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' );
	
	deepEqual( splitListStrUsingComma(''), [], 'Expected [], the result was: ' + splitListStrUsingComma('') );
	
	var result = splitListStrUsingComma('one,two,three,four,five');
	deepEqual( result, ['one', 'two', 'three', 'four', 'five'], "Expected ['one', 'two', 'three', 'four', 'five'], the result was: " + result );
});

test( "Sum Test", function() {
    equal( typeof sum, 'function', 'Must contain a sum function' );
	
	var result = sum(1, 14, -5, 3, 0, 123, -33, 45);
	strictEqual( result, 148, 'Expected 148, the result was: ' + result );
});

test( "Only Whitespace Test", function() {
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' );
	
	var ws = ' 	\
	';
	strictEqual( isOnlyWhitespace(ws), true, 'Expected true, the result was: ' + isOnlyWhitespace(ws) );
	strictEqual( isOnlyWhitespace(ws+'.'), false, 'Expected false, the result was: ' + isOnlyWhitespace(ws+'.') );
});
