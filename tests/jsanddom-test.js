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

test( 'Finding the minimum value of an array', 3, function() {
  // Verify the method exists
  equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

  // Make sure the result from the function is valid
  ok( findMinValue( [3,2,4,1,5] ), 1, 'Expected 1 as the result, the result was: ' + findMinValue( [3,2,4,1,5] ) );
  ok( findMinValue( [0,1,2,3,-6,-7] ), -7, 'Expected -7 as the result, the result was: ' + findMinValue( [0,1,2,3,-6,-7] ) );
});

test( 'Finding the distinct values in an array', 4, function() {
  // Verify the method exists
  equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );

  // Make sure the result from the function is valid
  ok( findDistinctValues( [3,2,4,1,5] ), [3,2,4,1,5], 'Expected [3,2,4,1,5] as the result, the result was: ' + findDistinctValues( [3,2,4,1,5] ) );
  ok( findDistinctValues( [1,1,1,1,1,1] ), [1], 'Expected [1] as the result, the result was: ' + findDistinctValues( [0,1,2,3,-6,-7] ) );

  // Make sure input array is not modified
  var values = [1,2,2,2,2,3];
  findDistinctValues( values );
  deepEqual( values, [1,2,2,2,2,3], 'Must not modify input array' );
});

test( 'Logging fizzbuzz to console', 3, function() {
  // Verify the method exists
  equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' );

  var cons = sinon.spy(console.log);
  // Make sure the result from the function is valid
  ok( !doFizzBuzz(), 'Expected no returned result, the result was: ' + doFizzBuzz() );
  doFizBuzz();
  ok( cons.called, 'Expected console.log to have been called.' );
});