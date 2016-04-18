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


/********************************
 Unit Test 1 for reverseString
 ********************************/
module( "Reverse String Unit Test 1" );
test( "Reverse String Test 1", 2, function() {
  // Verify the method exists
  equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

  // Make sure the result from the divide function is valid
  ok( reverseString('baseball'), 'llabesab', 'Expected llabesab as the result, the result was: ' + reverseString('baseball') );
});

/********************************
 Unit Test 2 for reverseString
 ********************************/
module( "Reverse String Unit Test 2" );
test( "Reverse String Test 2", 2, function() {
  // Verify the method exists
  equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

  // Make sure the result from the divide function is valid
  ok( reverseString('Happy Birthday to you!'), '!uoy ot yadhtriB yppaH', 'Expected !uoy ot yadhtriB yppaH as the result, the result was: ' + reverseString('Happy Birthday to you!') );
});
