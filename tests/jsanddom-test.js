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

    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 

    ok( findDistinctValues( testValues ), [3, 5, 7, 20, .18, 1, -1.1, 12, Infinity], 'Expected [3, 5, 7, 20, .18, 1, -1.1, 12, Infinity] as the result, the result was: ' + JSON.stringify( findDistinctValues( testValues ) ) );
});
