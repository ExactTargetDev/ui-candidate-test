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
 Unit Test for reverseString
 ********************************/
module( "Reverse String Unit Test" );
test( "Reverse String Test", 3, function() {
  // Verify the method exists
  equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

  // Make sure the result from the reverseString function is valid
  equal( reverseString('baseball'), 'llabesab', 'Expected llabesab as the result, the result was: ' + reverseString('baseball') );

  // Make sure the result from the reverseString function is valid for more complex string
  equal( reverseString('Happy Birthday to you!'), '!uoy ot yadhtriB yppaH', 'Expected !uoy ot yadhtriB yppaH as the result, the result was: ' + reverseString('Happy Birthday to you!') );
});


/********************************
 Unit Test for findMinValue
 ********************************/
module( "Find Min Value Unit Test" );
test( "Find Min Value Test", 4, function() {
  // Verify the method exists
  equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

  // Make sure the minimum value is returned
  equal( findMinValue([1,2,3,4,5,6]), 1, 'Expected 1 as the result, the result was: ' + findMinValue([1,2,3,4,5,6]) );

  // Make sure the minimum value is returned
  equal( findMinValue([6,5,4,3,2,1]), 1, 'Expected 1 as the result, the result was: ' + findMinValue([6,5,4,3,2,1]) );

  // Make sure the minimum value is returned
  equal( findMinValue([7,6,6,6,6,7.10,66,99,6]), 6, 'Expected 6 as the result, the result was: ' + findMinValue([7,6,6,6,6,7.10,66,99,6]) );
});

/********************************
 Unit Test for findDistinctValues
 ********************************/
module( "Find Distinct Values Unit Test" );
test( "Find Distinct Values Test", 3, function() {
  // Verify the method exists
  equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );

  // Make sure the result from the findDistinctValues function is valid
  deepEqual( findDistinctValues(["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"]), ["Mike","Matt","Nancy","Adam","Jenny","Carl"], 'Expected ["Mike","Matt","Adam","Jenny","Nancy","Carl"] as the result, the result was: ' + findDistinctValues(["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"]) );

  // Make sure the result from the findDistinctValues function is valid
  deepEqual( findDistinctValues(["one", 1, "1", "One"]), ["one", 1, "One"], 'Expected ["one", 1, "One"] as the result, the result was: ' + findDistinctValues(["one", 1, "1", "One"]) );
});



/********************************
 Unit Test for doFizzBuzz
 ********************************/
module( "FizzBuzz Unit Test" );
test( "doFizzBuzz Test", 5, function() {
  // Verify the method exists
  equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' );

  var results = doFizzBuzz();

  // Make sure the correct number of fizzbuzz numbers are found
  var totalFizzBuzz = results.fizzbuzz.length;
  equal(totalFizzBuzz , 6, 'Expected 6 numbers that are multiples of both three and five, the result was: ' + totalFizzBuzz );

  // Make sure the correct number of fizz numbers are found
  var totalFizz = results.fizz.length;
  equal( totalFizz, 27, 'Expected 27 numbers that are multiples of three, the result was: ' + totalFizz );

  // Make sure the correct number of buzz numbers are found
  var totalBuzz = results.buzz.length;
  equal( totalBuzz, 14, 'Expected 14 numbers that are multiples of five, the result was: ' + totalBuzz );

  // Make sure the correct number of nonfizzbuzz, nonfizz and nonbuzz numbers are found
  var totalOther = results.other.length;
  equal( totalOther, 53, 'Expected 53 numbers that are not multiples of five or three or three and five, the result was: ' + totalOther );
});
