/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide,
        'function',
        'Must contain a divide function' );

    // Make sure the result from the divide function is valid
    strictEqual( divide( 4, 2 ),
        2,
        'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/


/********************************
Reverse String
********************************/
module( "Reverse String" );

test( "reverseString", 5, function() {
    // Verify the method exists
    equal( typeof reverseString,
        'function',
        'Must contain a reverseString function' );

    // Make sure the result from the reverseString function is valid
    strictEqual( reverseString( "doge" ),
        "egod",
        'Expected "egod" as the result, the result was: ' + reverseString( "doge" ) );

    // Ensure that ET test data passes
    strictEqual( reverseString( "Subscribers rock" ),
        "kcor srebircsbuS",
        'Expected "kcor srebircsbuS" as the result, the result was: ' + reverseString( "Subscribers rock" ) );

    // Ensure astral symbols reverse properly. see: https://github.com/mathiasbynens/esrever
    strictEqual( reverseString( "foo 𝌆 bar" ),
        "rab 𝌆 oof",
        'Expected "rab 𝌆 oof" as the result, the result was: ' + reverseString( "foo 𝌆 bar" ) );

    // Ensure that combining marks reverse perperly. see: https://github.com/mathiasbynens/esrever
    strictEqual( reverseString( "mañana mañana" ),
        "anañam anañam",
        'Expected "anañam anañam" as the result, the result was: ' + reverseString( "mañana mañana" ) );
});


/********************************
Find Min Value
********************************/
module( "Find Min Value" );

test( "findMinValue", 4, function() {
    // Verify the method exists
    equal( typeof findMinValue,
        'function',
        'Must contain a findMinValue function' );

    // Make sure the result from the findMinValue function is valid
    strictEqual( findMinValue( [5,2,9,13,7,4,32] ),
        2,
        'Expected "2" as the result, the result was: ' + findMinValue( [5,2,9,13,7,4,32] ) );

    // Ensure that ET test data passes
    strictEqual( findMinValue( [3, 5, 7, 20, 0.18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ),
        -1.1,
        'Expected "-1.1" as the result, the result was: ' + findMinValue( [3, 5, 7, 20, 0.18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ) );

    // Throw 'error' if array is empty
    equal( findMinValue( [] ),
        '*throw array empty error*',
        'Expected "*throw array empty error*" as the result, the result was: ' + findMinValue( [] ) );
});


/********************************
Find Distinct Values
********************************/
module( "Find Distinct Values" );

test( "findDistinctValues", 3, function() {
    // Verify the method exists
    equal( typeof findDistinctValues,
        'function',
        'Must contain a findDistinctValues function' );

    // Make sure the result from the findDistinctValues function is valid
    deepEqual( findDistinctValues( [5, 2, 9, 13, 9, 7, 4, 13, 32] ),
        [5, 2, 9, 13, 7, 4, 32],
        'Expected "[5, 2, 9, 13, 7, 4, 32]" as the result, the result was: ' + findDistinctValues( [5, 2, 9, 13, 9, 7, 4, 13, 32] ) );

    // Ensure that ET test data passes
    deepEqual( findDistinctValues( [3, 5, 7, 20, 0.18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ),
        [3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity],
        'Expected "[3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity]" as the result, the result was: ' + findDistinctValues( [3, 5, 7, 20, 0.18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ) );
});


/********************************
Do Fizz Buzz
********************************/
module( "Do Fizz Buzz" );

test( "doFizzBuzz", 1, function() {
    // Verify the method exists
    equal( typeof doFizzBuzz,
        'function',
        'Must contain a doFizzBuzz function' );
});


/********************************
Remove Fruits
********************************/
module( "Remove Fruits" );

test( "removeFruits", 2, function() {
    // Verify the method exists
    equal( typeof removeFruits,
        'function',
        'Must contain a removeFruits function' );

    // Ensure that ET test data passes
    deepEqual( removeFruits( ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana'] ),
        ['apple', 'orange', 'kiwi', 'plum', 'strawberry'],
        'Expected "["apple", "orange", "kiwi", "plum", "strawberry"]" as the result, the result was: ' + removeFruits( ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana'] ) );
});


/********************************
Push Onto Array
********************************/
module( "Push Onto Array" );

test( "pushOntoArray", 3, function() {
    // Verify the method exists
    equal( typeof pushOntoArray,
        'function',
        'Must contain a pushOntoArray function' );

    // Ensure that ET test data passes: simple value
    deepEqual( pushOntoArray( [1, 2, 3, 4, 5], 6 ),
        [1, 2, 3, 4, 5, 6],
        'Expected "[1, 2, 3, 4, 5, 6]" as the result, the result was: ' + pushOntoArray( [1, 2, 3, 4, 5], 6 ) );

    // Ensure that ET test data passes: array
    deepEqual( pushOntoArray( [1, 2, 3, 4, 5], [7, 8, 9] ),
        [1, 2, 3, 4, 5, 7, 8, 9],
        'Expected "[1, 2, 3, 4, 5, 7, 8, 9]" as the result, the result was: ' + pushOntoArray( [1, 2, 3, 4, 5], [7, 8, 9] ) );
});





