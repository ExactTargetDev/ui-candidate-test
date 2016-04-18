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


/********************************
 Unit Test 1 for findMinValue
 ********************************/
module( "Find Min Value Unit Test 1" );
test( "Find Min Value Test 1", 2, function() {
  // Verify the method exists
  equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

  // Make sure the result from the findMinValue function is valid
  ok( findMinValue([1,2,3,4,5,6]), '1', 'Expected 1 as the result, the result was: ' + findMinValue([1,2,3,4,5,6]) );
});

/********************************
 Unit Test 2 for findMinValue
 ********************************/
module( "Find Min Value Unit Test 2" );
test( "Find Min Value Test 2", 2, function() {
  // Verify the method exists
  equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

  // Make sure the result from the findMinValue function is valid
  ok( findMinValue([6,5,4,3,2,1]), '1', 'Expected 1 as the result, the result was: ' + findMinValue([6,5,4,3,2,1]) );
});

/********************************
 Unit Test 3 for findMinValue
 ********************************/
module( "Find Min Value Unit Test 3" );
test( "Find Min Value Test 3", 2, function() {
  // Verify the method exists
  equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

  // Make sure the result from the findMinValue function is valid
  ok( findMinValue([7,6,6,6,6,7.10,66,99,6]), '6', 'Expected 6 as the result, the result was: ' + findMinValue([7,6,6,6,6,7.10,66,99,6]) );
});


/********************************
 Unit Test 1 for findDistinctValues
 ********************************/
module( "Find Distinct Values Unit Test 1" );
test( "Find Distinct Values Test 1", 2, function() {
  // Verify the method exists
  equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );

  // Make sure the result from the findDistinctValues function is valid
  ok( findDistinctValues(["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"]), '["Mike","Matt","Adam","Jenny","Nancy","Carl"]', 'Expected ["Mike","Matt","Adam","Jenny","Nancy","Carl"] as the result, the result was: ' + findDistinctValues(["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"]) );
});

/********************************
 Unit Test 2 for findDistinctValues
 ********************************/
module( "Find Distinct Values Unit Test 2" );
test( "Find Distinct Values Test 2", 2, function() {
  // Verify the method exists
  equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );

  // Make sure the result from the findDistinctValues function is valid
  ok( findDistinctValues(["one", 1, "1", "One"]), '["one", "1", "One"]', 'Expected ["one", "1", "One"] as the result, the result was: ' + findDistinctValues(["one", 1, "1", "One"]) );
});
