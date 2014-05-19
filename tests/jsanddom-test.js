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

module( 'JS and Dom Unit Tests' );
test( 'Reverseing a string', 2, function() {
  // Verify the method exists
  equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

  // Make sure the result from the function is valid
  ok( reverseString( 'Banana' ), 'ananaB', 'Expected ananaB as the result, the result was: ' + reverseString( 'Banana' ) );
});

test( 'Finding the minimum value', 3, function() {
  // Verify the method exists
  equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

  // Make sure the result from the function is valid
  ok( findMinValue( [3,2,4,1,5] ), 1, 'Expected 1 as the result, the result was: ' + findMinValue( [3,2,4,1,5] ) );
  ok( findMinValue( [0,1,2,3,-6,-7] ), -7, 'Expected -7 as the result, the result was: ' + findMinValue( [0,1,2,3,-6,-7] ) );
});