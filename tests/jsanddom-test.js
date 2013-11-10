/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' );

    // Make sure the result from the divide function is valid
    equal( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/

module( "JS and DOM tests" );
test( "Reverse a String", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a string reversal function' );

    equal( reverseString( 'Subscribers rock' ), 'kcor srebircsbuS', 'Expected kcor srebircbus as the result, the result was: ' + reverseString( 'Subscribers rock' ) );
});

