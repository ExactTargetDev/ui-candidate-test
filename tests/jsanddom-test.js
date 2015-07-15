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
module('ExactTarget UI Candidate Tests');
test('Reverse String Tests', 2, function() {
  // Verify the method exists
  equal(typeof reverseString, 'function', 'Must contain a reverseString function');

  // Make sure the result from reverseString function is valid
  equal(reverseString('I love you.'), '.uoy evol I', 'Expected \'.uoy evol I\' as the result, the result was: ' + reverseString('I love you.'));
});

test('Find Min Value Tests', 2, function() {
  // Verify the method exists
  equal(typeof findMinValue, 'function', 'Must contain a findMinValue function');


  // Make sure the result from findMinValue returns lowest value
  var testArray = [35, 10, 5, 7, 20, .18, 01, -3, 12];
  equal(findMinValue(testArray), -3, 'Expected \'-3\' as the result, the result was: ' + findMinValue(testArray));
});

test('Find Distinct Values in Array Tests', 2, function() {
  // Verify the method exists
  equal(typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function');


  // Make sure the result from findMinValue returns lowest value
  var testArray = [-3, 10, 5, 7, 20, 20, 20, -3, 12];
  deepEqual(findDistinctValues(testArray), [-3, 10, 5, 7, 20, 12], 'Expected \'[-3, 10, 5, 7, 20, 12]\' as the result, the result was: ' + findDistinctValues(testArray));
});

test('FizzBuzz Tests', 2, function() {
  // Verify the method exists
  equal(typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function');

  var testArray = [1,2,'Fizz',4,'Buzz', 'Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz',16,17,'Fizz',19,'Buzz','Fizz',22,23,'Fizz','Buzz']
  deepEqual(doFizzBuzz(), testArray, 'Expected result wasn\'t returned. Result was: ' + doFizzBuzz());
});

test('Remove Fruits Tests', 2, function() {
  // Verify the method exists
  equal(typeof removeFruits, 'function', 'Must contain a removeFruits function');

  deepEqual(removeFruits(['apple', 'orange', 'pineapple', 'lime'], ['lime', 'orange']), ['apple', 'pineapple'], 'Result was: ' + removeFruits(['apple', 'orange', 'pineapple', 'lime'], ['lime', 'orange']));
});

test('Push to Array Tests', 2, function() {
  // Verify the method exists
  equal(typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function');


  // Make sure the result from findMinValue returns lowest value
  var testArray = [1, 2, 3, 4];
  pushOntoArray(testArray, testArray)
  deepEqual(testArray, [1, 2, 3, 4, 1, 2, 3, 4], 'Expected \'[1, 2, 3, 4, 1, 2, 3, 4]\' as the result, the result was: ' + testArray);
});

test('Split List String by Comma Tests', 3, function() {
  // Verify the method exists
  equal(typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function');

  var testString = '';
  deepEqual(splitListStrUsingComma(testString), [], 'Expected result wasn\'t returned. Result was: ' + splitListStrUsingComma(testString));

  testString = 'hello, world. i missed you, dearly.';
  deepEqual(splitListStrUsingComma(testString), ["hello", " world. i missed you", " dearly."], 'Expected result wasn\'t returned. Result was: ' + splitListStrUsingComma(testString));
});

test('Sum Tests', 2, function() {
  // Verify the method exists
  equal(typeof sum, 'function', 'Must contain a sum function');

  equal(sum(1, 2, 3, 4), 10, 'Expected result was "10". Result was: ' + sum(1, 2, 3, 4));
});

test('Whitespace Tests', 4, function() {
  // Verify the method exists
  equal(typeof isOnlyWhitespace, 'function', 'Must contain an isOnlyWhitespace function');

  notOk(isOnlyWhitespace(''), 'Expected result was \'false\'. Result was: ' + isOnlyWhitespace(''));

  ok(isOnlyWhitespace('    '), 'Expected result was \'true\'. Result was: ' + isOnlyWhitespace('    '));

  notOk(isOnlyWhitespace('   afeef   '), 'Expected result was \'false\'. Result was: ' + isOnlyWhitespace('   afeef   '));

});

test('Closure Example Tests', 4, function() {
  // Verify the method exists
  equal(typeof createCounter, 'function', 'Must contain a createCounter function');

  var count = 0,
      counter = createCounter(3);

  equal(count, 0, 'Count should equal 0. Count was: ' + count);  
  count = counter();
  equal(count, 3, 'Count should equal 3. Count was: ' + count);
  count = counter();
  equal(count, 6, 'Count should equal 6. Count was: ' + count);
});

test('JSON Object Tests', 3, function() {
  equal(typeof people, 'object', 'Must contain a people object');
  equal(people[0].first_name, 'John', 'Expect name to be \'John\'');
  equal(people[1].first_name, 'Jane', 'Expect name to be \'Jane\'');
});


