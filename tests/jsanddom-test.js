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

test("reverseString Test", 5, function() {
    equal(typeof reverseString, 'function', 'Verify the reverseString function is present');

    ok(reverseString('Nick'), 'kciN', 'Expect a valid result');

    // Even number of characters
    equal(reverseString('Nick'), 'kciN', 'Check even # Chars');

    // Odd number of characters
    equal(reverseString('Reitman'), 'namtieR', 'Check odd # Chars');

    // Two Words
    equal(reverseString('Nick Reitman'), 'namtieR kciN', 'Check with two words');
});