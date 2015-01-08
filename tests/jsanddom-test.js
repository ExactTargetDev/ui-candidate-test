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

// reverseString
module( "reverseString Unit Test" );
test( "Reverse String Test", 4, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 

    // Make sure the result from the reverseString function is valid
    ok( reverseString( 'Subscribers rock' ), 'kcor srebircsbuS', 'Expected kcor srebircsbuS as the result, the result was: ' + reverseString( 'kcor srebircsbuS' ) );
    ok( reverseString( 'a' ), 'a', 'Expected a as the result, the result was: ' + reverseString( 'a' ) );
    ok( reverseString( 'abc123' ), '321cba', 'Expected 321cba as the result, the result was: ' + reverseString( 'abc123' ) );
});

// findMinValue
module( "findMinValue Unit Test" );
test( "Array Minimum Value Unit Test", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 

    // Make sure the result from the reverseString function is valid
    var testArray = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];

    ok( findMinValue( testArray ), -1.1, 'Expected -1.1 as the result, the result was: ' + findMinValue( testArray ) );
});

// findDistinctValues
module( "findDistinctValues Unit Test" );
test( "Find Distinct Values of Array Unit Test", 3, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 

    // Make sure the result from the findDistinctValues function is valid
    var testArrayInt = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12],
    	testArrayStr = ['a', 'a', 'b', 'b', 'c', 'c'];

    ok( findDistinctValues( testArrayInt ), [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, 0.18], 'Expected [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, 0.18] as the result, the result was: ' + findDistinctValues( testArrayInt ) );
    ok( findDistinctValues( testArrayStr ), ['a', 'b', 'c'], 'Expected ["a", "b", "c"] as the result, the result was: ' + findDistinctValues( testArrayStr ) );
});

// doFizzBuzz
module( "doFizzBuzz Unit Test" );
test( "Do Fizz Buzz Unit Test", 1, function() {
    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' ); 

    // Make sure the result from the doFizzBuzz function is valid
    // TODO: create tests for doFizzBuzz
});

// removeFruits
module( "removeFruits Unit Test" );
test( "Remove Fruits from Array Unit Test", 2, function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' ); 

    // Make sure the result from the findDistinctValues function is valid
    var fruits = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'],
    	fruitsToRemove = ['pear', 'banana'];

    ok( removeFruits( fruits, fruitsToRemove ), ['apple', 'orange', 'kiwi', 'plum', 'strawberry'], 'Expected ["apple", "orange", "kiwi", "plum", "strawberry"] as the result, the result was: ' + removeFruits( fruits, fruitsToRemove ) );
});

// pushOntoArray
module( "pushOntoArray Unit Test" );
test( "Push Onto Array Unit Test", 3, function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' ); 

    // Make sure the result from the pushOntoArray function is valid
    var array = [1, 2, 3, 4, 5],
    	toPushSimple = 6,
    	toPushArray = [7, 8, 9];

    ok( pushOntoArray( array, toPushSimple ), [1, 2, 3, 4, 5, 6], 'Expected [1, 2, 3, 4, 5, 6] as the result, the result was: ' + pushOntoArray( array, toPushSimple ) );
    ok( pushOntoArray( array, toPushArray ), [1, 2, 3, 4, 5, 7, 8, 9], 'Expected [1, 2, 3, 4, 5, 7, 8, 9] as the result, the result was: ' + pushOntoArray( array, toPushArray ) );
});

// splitListStrUsingComma
module( "splitListStrUsingComma Unit Test" );
test( "Split String by Comma into Array Unit Test", 3, function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' ); 

    // Make sure the result from the pushOntoArray function is valid
    var sourceStr = 'The, quick, brown, fox jumped over',
    	sourceStrEmpty = '';

    ok( splitListStrUsingComma( sourceStr ), ["The", "quick", "brown", "fox jumped over"], 'Expected ["The", "quick", "brown", "fox jumped over"] as the result, the result was: ' + splitListStrUsingComma( sourceStr ) );
    ok( splitListStrUsingComma( sourceStrEmpty ), [], 'Expected [] as the result, the result was: ' + splitListStrUsingComma( sourceStrEmpty ) );
});
