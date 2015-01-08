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