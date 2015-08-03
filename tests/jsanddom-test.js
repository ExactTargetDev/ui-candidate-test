/********************************
Unit Test Example
********************************/
module( "testMethods" );

/* divide() */
test( "divide", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});

/********************************
Please create your tests below...
********************************/

/* reverseString(str) */
test( "reverseString", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 

    // Make sure the result from the reverseString function is valid
    ok( reverseString( "Test string" ), "gnirts tseT", 'Expected "gnirts tseT" as the result, the result was: ' 
      + reverseString( "Test string" ) );
});

var numericArray = [ 12, 5, 8, 90, 1, 2, 3, 5, 1, 5, 2, 3 ];
var alphaNumericArray = [ 'test', 9, 'test2', 'test', 67, 123, 6.5 ];

/* findMinValue(valuesArray) */
test( "findMinValue", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 

    // Make sure the result from the findMinValue function is valid
    ok( findMinValue( numericArray ), 1, 'Expected 1 as the result, the result was: ' 
      + findMinValue( numericArray ) );
});

/* findDistinctValues(valuesArray) */
test( "findDistinctValues", 3, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 

    // Make sure the result from the findDistinctValues function is valid
    deepEqual( findDistinctValues( numericArray ), [12, 5, 8, 90, 1, 2, 3], 
      'Expected 12,5,8,90,1,2,3 as the result, the result was: ' 
      + findDistinctValues( numericArray ) );

    // Make sure the result from the findDistinctValues function is valid with alpha-numeric array
    deepEqual( findDistinctValues( alphaNumericArray ), ['test', 9, 'test2', 67, 123, 6.5], 
      'Expected test,9,test2,67,123,6.5 as the result, the result was: ' 
      + findDistinctValues( alphaNumericArray ) );
});

/* doFizzBuzz() */
test( "doFizzBuzz", 5, function() {
    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' ); 

    var fizzBuzzResults = doFizzBuzz();

    // Make sure the results from the doFizzBuzz function is valid
    equal( typeof fizzBuzzResults, 'object', 'Must return an Object');

    equal( fizzBuzzResults[2], 'Fizz', 'Result at index 2 should be \'Fizz\'' );

    equal( fizzBuzzResults[4], 'Buzz', 'Result at index 4 should be \'Buzz\'' );

    equal( fizzBuzzResults[14], 'FizzBuzz', 'Result at index 14 should be \'FizzBuzz\'' );
});

/* sum(a, b) */
test( "sum", 2, function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' ); 

    // Make sure the result from the sum function is valid
    ok( sum( 1, 2 ), 3, 'Expected 3 as the result, the result was: ' 
      + sum( 1, 2 ) );
});

/* isOnlyWhitespace(sourceStr) */
test( "isOnlyWhitespace", 3, function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' ); 

    // Make sure the results from the isOnlyWhitespace function is valid
    equal( isOnlyWhitespace( "        " ), true, 'Expected true as the result, the result was: ' 
      + isOnlyWhitespace( "        " ) );

    equal( isOnlyWhitespace( "    2    " ), false, 'Expected false as the result, the result was: ' 
      + isOnlyWhitespace( "    2    " ) );
});