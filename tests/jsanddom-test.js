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

module( "Reverse String" );
test( "Reverse String", 4, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

    // Make sure the result from the divide function is valid
    strictEqual( reverseString( "doge" ), "egod", 'Expected "egod" as the result, the result was: ' + reverseString( "doge" ) );

    // Ensure astral symbols reverse properly
    strictEqual( reverseString( "foo 𝌆 bar" ), "rab 𝌆 oof", 'Expected "rab 𝌆 oof" as the result, the result was: ' + reverseString( "foo 𝌆 bar" ) );

    // Ensure that combining marks reverse perperly
    strictEqual( reverseString( "mañana mañana" ), "anañam anañam", 'Expected "anañam anañam" as the result, the result was: ' + reverseString( "mañana mañana" ) );

});
