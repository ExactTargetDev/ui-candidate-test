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

module( 'Candidate Unit Test' );

test( 'Reverse String Test', 2, function() {
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 

    ok( reverseString( 'Subscribers rock' ), 'kcor srebircsbuS', 'Expected kcor srebircsbuS as the result, the result was: ' + reverseString( 'Subscribers rock' ) );
});

test( 'Find Min Value Test', 2, function() {
    var testValues = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];

    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 

    ok( findMinValue( testValues ), '-1.1', 'Expected -1.1 as the result, the result was: ' + findMinValue( testValues ) );
});

test( 'Find Distinct Values Test', 2, function() {
    var testValues = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
    var distinctValues = findDistinctValues( testValues );
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 

    deepEqual( _.sortBy( distinctValues, function( num ) { return num; }), [-1.1, .18, 1, 3, 5, 7, 12, 20, Infinity], 'Expected [3, 5, 7, 20, .18, 1, -1.1, 12, Infinity] as the result, the result was: ' + JSON.stringify( findDistinctValues( testValues ) ) );
});

test( 'Do Fizz Buzz Test', 1, function() {
    equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' ); 
});


test( 'Remove Fruits Test', 2, function() {
    var fruits         = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
    var fruitsToRemove = ['pear', 'banana'];

    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' ); 

    // Execute method as it affects the fruits collection directly (rather than return a result) - which is "assumed" but not "spelled out" as the instructions for pushOntoArray is.
    removeFruits( fruits, fruitsToRemove );

    deepEqual( fruits, ['apple', 'orange', 'kiwi', 'plum', 'strawberry'], 'Expected [apple, orange, kiwi, plum, strawberry] as the result, the result was: ' + JSON.stringify( fruits ) );
});

test( 'Push Element On To Array Test', 2, function() {
    var array     = [1, 2, 3, 4, 5];
    var toPushEl  = 6;

    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' ); 

    // Execute method as it affects the fruits collection directly (rather than return a result)
    pushOntoArray( array, toPushEl );

    deepEqual( array, [1, 2, 3, 4, 5, 6], 'Expected [1, 2, 3, 4, 5, 6] as the result, the result was: ' + JSON.stringify( array ) );
});

test( 'Push Array On To Array Test', 2, function() {
    var array     = [1, 2, 3, 4, 5];
    var toPushArr = [7, 8, 9];

    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' ); 

    // Execute method as it affects the fruits collection directly (rather than return a result)
    console.log( array );
    pushOntoArray( array, toPushArr );
    console.log( array );

    deepEqual( array, [1, 2, 3, 4, 5, 7, 8, 9], 'Expected [1, 2, 3, 4, 5, 7, 8, 9] as the result, the result was: ' + JSON.stringify( array ) );
});

test( 'Split List String Using Comma Test', 2, function() {
    var sourceStr = 'The, quick, brown, fox jumped over';

    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' ); 

    // Execute method as it affects the fruits collection directly (rather than return a result)
    deepEqual( splitListStrUsingComma( sourceStr ), ["The", " quick", " brown", " fox jumped over"], 'Expected ["The", " quick", " brown", " fox jumped over"] as the result, the result was: ' + JSON.stringify( splitListStrUsingComma( sourceStr ) ) );
});

test( 'Sum Test', 2, function() {
    equal( typeof sum, 'function', 'Must contain a sum function' ); 

    // Execute method as it affects the fruits collection directly (rather than return a result)
    deepEqual( sum( 1, 1, 2, 3, 5, 7 ), 19, 'Expected 19 as the result, the result was: ' + sum( 1, 1, 2, 3, 5, 7 ) );
});

test( 'Is Only Whitespace Test', 2, function() {
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' ); 

    // Execute method as it affects the fruits collection directly (rather than return a result)
    ok( isOnlyWhitespace( '       ' ), true, 'Expected true as the result, the result was: ' + isOnlyWhitespace( '       ' ) );
});

