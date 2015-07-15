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
module('ExactTarget UI Candidate Tests');
test('Reverse String Tests', 2, function() {
  // Verify the method exists
  equal(typeof reverseString, 'function', 'Must contain a reverseString function');

  // Make sure the result from reverseString function is valid
  ok(reverseString('I love you.'), '.uoy evol I', 'Expected \'.uoy evol I\' as the result, the result was: ' + reverseString('I love you.'));
});

test('Find Min Value Tests', 2, function() {
  // Verify the method exists
  equal(typeof findMinValue, 'function', 'Must contain a findMinValue function');


  // Make sure the result from findMinValue returns lowest value
  var testArray = [35, 10, 5, 7, 20, .18, 01, -3, 12];
  ok(findMinValue(testArray), -3, 'Expected \'-3\' as the result, the result was: ' + findMinValue(testArray));
});

test('Find Distinct Values in Array Tests', 2, function() {
  // Verify the method exists
  equal(typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function');


  // Make sure the result from findMinValue returns lowest value
  var testArray = [-3, 10, 5, 7, 20, 20, 20, -3, 12];
  ok(findDistinctValues(testArray), [-3, 10, 5, 7, 20, 12], 'Expected \'[-3, 10, 5, 7, 20, 12]\' as the result, the result was: ' + findDistinctValues(testArray));
});

test('FizzBuzz Tests', 2, function() {
  // Verify the method exists
  equal(typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function');

  var testArray = [1,2,'Fizz',4,'Buzz', 'Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz',16,17,'Fizz',19,'Buzz','Fizz',22,23,'Fizz','Buzz']
  ok(doFizzBuzz(), testArray, 'Expected result wasn\'t returned. Result was: ' + doFizzBuzz());
});

