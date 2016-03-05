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
 Reverse String
 ********************************/
test( "Reverse String", 2, function() {
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

    ok( reverseString("reverse this!"), "!siht esrever", 'Expected !siht esrever as the result, the result was: ' + reverseString("reverse this!"));
});

/********************************
 Minimun Value
 ********************************/
test( "Minimum Value", 2, function() {
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

    ok( findMinValue([1,2,3,4,5]), 1, 'Expected 1 as the result, the result was: ' + findMinValue([1,2,3,4,5]));
});

/********************************
 Distinct Values
 ********************************/
test( "Destinct Values", 2, function() {
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );

    ok( findDistinctValues([1,1,3,1,1]), 3, 'Expected 3 as the result, the result was: ' + findDistinctValues([1,1,3,1,1]));
});

/********************************
 Fizz Buzz
 ********************************/
test( "Fizz Buzz Multiples", 2, function() {
    equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' );

    ok( doFizzBuzz(), 'The result was: ' + doFizzBuzz());
});