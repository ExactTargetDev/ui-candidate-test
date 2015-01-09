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

    // Make sure the result from the reverseString function is equal to expected value
    equal( reverseString( 'Subscribers rock' ), 'kcor srebircsbuS', 'Expected kcor srebircsbuS as the result, the result was: ' + reverseString( 'Subscribers rock' ) );
    equal( reverseString( 'a' ), 'a', 'Expected a as the result, the result was: ' + reverseString( 'a' ) );
    equal( reverseString( 'abc123' ), '321cba', 'Expected 321cba as the result, the result was: ' + reverseString( 'abc123' ) );
});

// findMinValue
module( "findMinValue Unit Test" );
test( "Array Minimum Value Unit Test", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 

    // Make sure the result from the reverseString function is equal to expected value
    var testArray = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];

    equal( findMinValue( testArray ), -1.1, 'Expected -1.1 as the result, the result was: ' + findMinValue( testArray ) );
});

// findDistinctValues
module( "findDistinctValues Unit Test" );
test( "Find Distinct Values of Array Unit Test", 3, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 

    // Make sure the result from the findDistinctValues function is equal to expected value
    var testArrayInt = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12],
    	testArrayStr = ['a', 'a', 'b', 'b', 'c', 'c'];

    deepEqual( findDistinctValues( testArrayInt ), [3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity], 'Expected [3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity] as the result, the result was: ' + findDistinctValues( testArrayInt ) );
    deepEqual( findDistinctValues( testArrayStr ), ['a', 'b', 'c'], 'Expected ["a", "b", "c"] as the result, the result was: ' + findDistinctValues( testArrayStr ) );
});

// doFizzBuzz
module( "doFizzBuzz Unit Test" );
test( "Do Fizz Buzz Unit Test", 1, function() {
    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' ); 

    // Make sure the result from the doFizzBuzz function is equal to expected value
    // TODO: create tests for doFizzBuzz
});

// removeFruits
module( "removeFruits Unit Test" );
test( "Remove Fruits from Array Unit Test", 2, function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' ); 

    // Make sure the result from the findDistinctValues function is equal to expected value
    var fruits = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'],
    	fruitsToRemove = ['pear', 'banana'];

    deepEqual( removeFruits( fruits, fruitsToRemove ), ['apple', 'orange', 'kiwi', 'plum', 'strawberry'], 'Expected ["apple", "orange", "kiwi", "plum", "strawberry"] as the result, the result was: ' + removeFruits( fruits, fruitsToRemove ) );
});

// pushOntoArray
module( "pushOntoArray Unit Test" );
test( "Push Onto Array Unit Test", 3, function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' ); 

    // Make sure the result from the pushOntoArray function is equal to expected value
    deepEqual( pushOntoArray( [1, 2, 3, 4, 5], 6 ), [1, 2, 3, 4, 5, 6], 'Expected [1, 2, 3, 4, 5, 6] as the result, the result was: ' + pushOntoArray( [1, 2, 3, 4, 5], 6 ) );
    deepEqual( pushOntoArray( [1,2,3,4,5], [7, 8, 9] ), [1, 2, 3, 4, 5, 7, 8, 9], 'Expected [1, 2, 3, 4, 5, 7, 8, 9] as the result, the result was: ' + pushOntoArray( [1,2,3,4,5], [7, 8, 9] ) );
});

// splitListStrUsingComma
module( "splitListStrUsingComma Unit Test" );
test( "Split String by Comma into Array Unit Test", 3, function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' ); 

    // Make sure the result from the splitListStrUsingComma function is equal to expected value
    var sourceStr = 'The, quick, brown, fox jumped over',
    	sourceStrEmpty = '';

    deepEqual( splitListStrUsingComma( sourceStr ), ["The", "quick", "brown", "fox jumped over"], 'Expected ["The", "quick", "brown", "fox jumped over"] as the result, the result was: ' + splitListStrUsingComma( sourceStr ) );
    deepEqual( splitListStrUsingComma( sourceStrEmpty ), [], 'Expected [] as the result, the result was: ' + splitListStrUsingComma( sourceStrEmpty ) );
});

// sum
module( "sum Unit Test" );
test( "Sum of Arguments Unit Test", 2, function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' ); 

    // Make sure the result from the findDistinctValues function is equal to expected value
    equal( sum( 1, 1, 2, 3, 5, 7 ), 19, 'Expected 19 as the result, the result was: ' + sum( 1, 1, 2, 3, 5, 7 ) );
});

// isOnlyWhitespace
module( "isOnlyWhitespace Unit Test" );
test( "String is Only Whitespace Unit Test", 4, function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' );

    // Make sure the result from the isOnlyWhitespace function is equal to expected value
    equal( isOnlyWhitespace( '     ' ), true, 'Expected true as the result, the result was: ' + isOnlyWhitespace( '     ' ) );
    equal( isOnlyWhitespace( 'a b c' ), false, 'Expected false as the result, the result was: ' + isOnlyWhitespace( 'a b c' ) );
    equal( isOnlyWhitespace( 'abc' ), false, 'Expected false as the result, the result was: ' + isOnlyWhitespace( 'abc' ) );
});

// sayHello Closure
module( "sayHello Unit Test" );
test( "Say Hello Closure Unit Test", 4, function() {
    // Verify the method exists
    equal( typeof sayHello, 'function', 'Must contain a sayHello function' );

    // Verify that method returns a function
    equal( typeof sayHello('Jon'), 'function', 'Must return a function' );

    var helloThere = sayHello('Jon');

    // Make sure the result from the sayHello function is equal to expected value
    equal( helloThere( 'Andrew' ), 'Hello Andrew my name is Jon', 'Expected "Hello Andrew my name is Jon" as the result, the result was: ' + helloThere( 'Andrew' ) );
    equal( helloThere( 'Peyton' ), 'Hello Peyton my name is Jon', 'Expected "Hello Peyton my name is Jon" as the result, the result was: ' + helloThere( 'Peyton' ) );
});
