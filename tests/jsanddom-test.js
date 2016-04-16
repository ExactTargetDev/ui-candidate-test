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

module ( "reverseString" );
test( "Reverse String unit test", 4, function () {
  equal ( typeof reverseString, 'function', "Must contain a reverse string function" );
  equal ( reverseString( "1234"), "4321", "Expected 1234 to return 4321");
  equal ( reverseString( "straw" ), "warts", "Expected straw to return warts" );
  notEqual ( reverseString( "" ), "something else", "Expected the empty string to NOT return the string something else");
})
