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
module( "Matt Vrtis Unit Test" );
test( "Reverse String", 1, function() {
    // Verify the method exists
    //equal( typeof reverseString, 'function', 'Must reverse a string' );

    // Make sure the result from the divide function is valid
    ok(reverseString('Never odd or even.')=='.neve ro ddo reveN', 'Never odd or even reversed is .neve ro ddo reveN', 'Expected ".neve ro ddo reveN" as the result, the result was: ' +reverseString('Never odd or even.') );
});