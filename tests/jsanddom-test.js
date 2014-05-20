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

test( 'Logging FizzBuzz to console', 7, function() {
  // Verify the method exists
  equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' );

  // Make sure the return value from the function is valid
  ok( !doFizzBuzz(), 'Expected no returned result, the result was: ' + doFizzBuzz() );

  // test to see if console.log was called the correct number of times
  var cons = sinon.spy(console, 'log');
  doFizzBuzz();
  equal( cons.callCount, 100, 'Expected console.log to have been called exactly 100 times.' );

  // tests results of fizzbuzz calls
  var fizzBuzzThree = console.log.getCall(2); // 2nd index = 3
  equal( fizzBuzzThree.args[0], 'Fizz', 'Expected 3 to be replaced with "Fizz"' );

  var fizzBuzzFive = console.log.getCall(4); // 4th index = 5
  equal( fizzBuzzFive.args[0], 'Buzz', 'Expected 5 to be replaced with "Buzz"' );

  var fizzBuzzFifteen = console.log.getCall(14); // 14th index = 15
  equal( fizzBuzzFifteen.args[0], 'FizzBuzz', 'Expected 15 to be replaced with "FizzBuzz"' );

  var fizzBuzzSeven = console.log.getCall(6); // 6th index = 7
  equal( fizzBuzzSeven.args[0], 7, 'Expected 7 to be unaltered' );

  //removes the spy from console.log
  console.log.restore();
});

test( 'Take 2 arrays and remove all elements in the first found in the second', 2, function() {
  // Verify the method exists
  equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );

  // Make sure the result from the function is valid
  deepEqual( removeFruits( ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana'] ), ['apple', 'orange', 'kiwi', 'plum', 'strawberry'], 'Expected [\'apple\', \'orange\', \'kiwi\', \'plum\', \'strawberry\'] as the result, the result was: ' + removeFruits( ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana'] ) );
});

test( 'Push element or another array onto the end of an array', 3, function() {
  // Verify the method exists
  equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' );

  // Make sure the result from the function is valid
  deepEqual( pushOntoArray( [1, 2, 3, 4], 5 ), [1, 2, 3, 4, 5], 'Expected [1, 2, 3, 4, 5] as the result, the result was: ' + pushOntoArray( [1, 2, 3, 4], 5 ) );
  deepEqual( pushOntoArray( [1, 2, 3, 4], [5, 6, 7, 8] ), [1, 2, 3, 4, 5, 6, 7, 8], 'Expected [1, 2, 3, 4, 5, 6, 7, 8] as the result, the result was: ' + pushOntoArray( [1, 2, 3, 4], [5, 6, 7, 8] ) );
});

test( 'Split a string to an array at it\'s commas', 4, function() {
  // Verify the method exists
  equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' );

  // Make sure the result from the function is valid
  deepEqual( splitListStrUsingComma( 'The, quick, brown, fox jumped over' ), ['The', 'quick', 'brown', 'fox jumped over'], 'Expected [\'The\', \'quick\', \'brown\', \'fox jumped over\'] as the result, the result was: ' + splitListStrUsingComma( 'The, quick, brown, fox jumped over' ) );
  deepEqual( splitListStrUsingComma( '' ), [], 'Expected [] as the result, the result was: ' + splitListStrUsingComma( '' ) );
  deepEqual( splitListStrUsingComma( 'Fhqwhgads' ), ['Fhqwhgads'], 'Expected [\'Fhqwhgads\'] as the result, the result was: ' + splitListStrUsingComma( 'Fhqwhgads' ) );
});

test( 'Test if a string contains ONLY whitespace', 4, function() {
  // Verify the method exists
  equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' );

  // Make sure the result from the function is valid
  equal( isOnlyWhitespace( 'hello' ), false, 'Expected false as the result, the result was: ' + isOnlyWhitespace( 'hello' ) );
  equal( isOnlyWhitespace( 'h e l l o' ), false, 'Expected false as the result, the result was: ' + isOnlyWhitespace( 'h e l l o' ) );
  equal( isOnlyWhitespace( '         ' ), true, 'Expected true as the result, the result was: ' + isOnlyWhitespace( '         ' ) );
});

/********************************
DataTable tests
********************************/

