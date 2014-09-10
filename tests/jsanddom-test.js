/********************************
Unit Test Example
********************************/
module( "divide Unit Test" );
test( "divide", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' );

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});

/********************************
reverseString(str)
********************************/

module( "reverseString Unit Test" );
test( "reverseString", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' );


    ok( reverseString( "Hello Exact Target" ), 'tegraT tcaxE olleH', 'Expected 2 as the result, the result was: ' + reverseString( "Hello Exact Target") );
});

/********************************
findMinValue(values)
********************************/

module( "findMinValue Unit Test" );
test( "findMinValue", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

    ok( findMinValue( [3, 4, 1, 12, 7] ), 1 , 'Expected 1 as the result, the result was: ' + findMinValue( [3, 4, 1, 12, 7]));
});

/********************************
findDistinctValues(values)
********************************/

module( "findDistinctValues Unit Test" );
test( "findDistinctValues Test", 3, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );

    var arr=[1,4,9,4,6,2,0,6,8,8,8];
    var arr1=[1, 1, 2, 3, 3, 5, 7];

    ok( findDistinctValues(arr), [1,4,9,6,2,0,8], 'Expected "[1,4,9,6,2,0,8]" as the result, the result was: ' + findDistinctValues(arr) );

    ok( findDistinctValues(arr1), [1,2,3,5,7], 'Expected "[1,2,3,5,7]" as the result, the result was: ' + findDistinctValues(arr1) );
});

/********************************
doFizzBuzz()
********************************/

module( "doFizzBuzz Unit Test" );
test( "doFizzBuzz Test", 2, function() {
    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' );

    ok( doFizzBuzz(), '1 2 Fizz 4 FizzBuzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz 31 32 Fizz 34 Buzz Fizz 37 38 Fizz Buzz 41 Fizz 43 44 FizzBuzz 46 47 Fizz 49 Buzz Fizz 52 53 Fizz Buzz 56 Fizz 58 59 FizzBuzz 61 62 Fizz 64 Buzz Fizz 67 68 Fizz Buzz 71 Fizz 73 74 FizzBuzz 76 77 Fizz 79 Buzz Fizz 82 83 Fizz Buzz 86 Fizz 88 89 FizzBuzz 91 92 Fizz 94 Buzz Fizz 97 98 Fizz Buzz true',
      'Expected  as the result, the result was: ' + doFizzBuzz() );
});

/********************************
removeFruits(fruits, fruitsToRemove)
********************************/

module( "removeFruits Unit Test" );
test( "removeFruits Test", 2, function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruitsfunction' );


    ok( removeFruits( ['apple', 'pear', 'peach', 'plum'], ['apple', 'peach'] ), ["pear", "plum"], 'Expected "["pear", "plum"]" as the result, the result was: ' + removeFruits( ['apple', 'pear', 'peach', 'plum'], ['apple', 'peach'] ) );
});

/********************************
pushOntoArray(array, toPush)
********************************/

module( "pushOntoArray Unit Test" );
test( "pushOntoArray Test", 3, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a pushOntoArray function' );

    ok( pushOntoArray([1,2,3,5], 10), [1,2,3,5,10] , 'Expected "[1,2,3,5,10]" as the result, the result was: ' + pushOntoArray([1,2,3,5], 10) );

    ok( pushOntoArray([10,11,20], [1,2,3,5]), '[10,11,20,1,2,3,5]', 'Expected "[10,11,20,1,2,3,5]"as the result, the result was: ' + pushOntoArray([10,11,20], [1,2,3,5]) );
});

/********************************
splitListStrUsingComma(sourceStr)
********************************/

module( "splitListStrUsingCommaUnit Test" );
test( "splitListStrUsingComma Test", 3, function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' );

    ok( splitListStrUsingComma( "This is really fun." ), 'This, is, really, fun', 'Expected "This, is, really, fun", as the result, the result was: ' + splitListStrUsingComma( "This is really fun.") );

    equal( splitListStrUsingComma(""), "", 'Expected "", as the result, the result was: ' + splitListStrUsingComma("") );
});

/********************************
sum()
********************************/

module( "sum Unit Test" );
test( "sum Test", 4, function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' );


    ok( sum(1,3,5,8,10,20, 50), 97, 'Expected 97 as the result, the result was: ' + sum(1,3,5,8,10,20, 50) );

    ok( sum(1), 1, 'Expected 1 as the result, the result was: ' + sum(1) );

    ok( sum(1,3,5,7,11), 27, 'Expected 27 as the result, the result was: ' + sum(1,3,5,7,11) );
});

/********************************
isOnlyWhitespace(sourceStr)
********************************/

module( "isOnlyWhitespace Unit Test" );
test( "isOnlyWhitespace", 3, function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain an isOnlyWhitespace function' );

    var str1 = "    ";
    var str2 = "     get";

    equal( isOnlyWhitespace(str1), true, 'Expected true as the result, the result was: ' + isOnlyWhitespace(str1) );

    equal( isOnlyWhitespace(str2), false, 'Expected false as the result, the result was: ' + isOnlyWhitespace(str2) );

});