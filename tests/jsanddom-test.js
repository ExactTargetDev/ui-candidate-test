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
Please create your tests below...
********************************/
module( "reverseString Unit Test" );
test( "reverseString", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' );


    ok( reverseString( "Hello Exact Target" ), 'tegraT tcaxE olleH', 'Expected 2 as the result, the result was: ' + reverseString( "Hello Exact Target") );
});

module( "findMinValue Unit Test" );
test( "findMinValue", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

    ok( findMinValue( [3, 4, 1, 12, 7] ), 1 , 'Expected 2 as the result, the result was: ' + findMinValue( [3, 4, 1, 12, 7]));
});


/*********************************/
// module( "findDistinctValues Unit Test" );
// test( "findDistinctValues Test", 2, function() {
//     // Verify the method exists
//     equal( typeof findDistinctValues, 'function', 'Must contain a reverseString function' );

//     // Make sure the result from the divide function is valid
//     ok( findDistinctValues( "Hello Exact Target" ), 'tegraT tcaxE olleH', 'Expected 2 as the result, the result was: ' + reverseString( "Hello Exact Target") );
// });

/*********************************/
module( "doFizzBuzz Unit Test" );
test( "doFizzBuzz Test", 2, function() {
    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' );

    ok( doFizzBuzz(), '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz 31 32 Fizz 34 Buzz Fizz 37 38 Fizz Buzz 41 Fizz 43 44 FizzBuzz 46 47 Fizz 49 Buzz Fizz 52 53 Fizz Buzz 56 Fizz 58 59 FizzBuzz 61 62 Fizz 64 Buzz Fizz 67 68 Fizz Buzz 71 Fizz 73 74 FizzBuzz 76 77 Fizz 79 Buzz Fizz 82 83 Fizz Buzz 86 Fizz 88 89 FizzBuzz 91 92 Fizz 94 Buzz Fizz 97 98 Fizz Buzz 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz 31 32 Fizz 34 Buzz Fizz 37 38 Fizz Buzz 41 Fizz 43 44 FizzBuzz 46 47 Fizz 49 Buzz Fizz 52 53 Fizz Buzz 56 Fizz 58 59 FizzBuzz 61 62 Fizz 64 Buzz Fizz 67 68 Fizz Buzz 71 Fizz 73 74 FizzBuzz 76 77 Fizz 79 Buzz Fizz 82 83 Fizz Buzz 86 Fizz 88 89 FizzBuzz 91 92 Fizz 94 Buzz Fizz 97 98 Fizz Buzz',
      'Expected  as the result, the result was: ' + doFizzBuzz() );
});

/*********************************/
module( "removeFruits Unit Test" );
test( "removeFruits Test", 2, function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruitsfunction' );


    ok( removeFruits( ['apple', 'pear', 'peach', 'plum'], ['apple', 'peach'] ), ["pear", "plum"], 'Expected "["pear", "plum"]" as the result, the result was: ' + removeFruits( ['apple', 'pear', 'peach', 'plum'], ['apple', 'peach'] ) );
});

/*********************************/
// module( "pushOntoArray Unit Test" );
// test( "pushOntoArray Test", 2, function() {
//     // Verify the method exists
//     equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

//     // Make sure the result from the divide function is valid
//     ok( pushOntoArray() "Hello Exact Target" ), 'tegraT tcaxE olleH', 'Expected 2 as the result, the result was: ' + pushOntoArray( "Hello Exact Target") );
// });

/*********************************/
module( "splitListStrUsingCommaUnit Test" );
test( "splitListStrUsingComma Test", 3, function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' );

    ok( splitListStrUsingComma( "This is really fun." ), 'This, is, really, fun', 'Expected "This, is, really, fun", as the result, the result was: ' + splitListStrUsingComma( "This is really fun.") );

    ok( splitListStrUsingComma(" "), "", 'Expected "", as the result, the result was: ' + splitListStrUsingComma("") );
});

/*********************************/
// module( "sum Unit Test" );
// test( "sum Test", 2, function() {
//     // Verify the method exists
//     equal( typeof sum, 'function', 'Must contain a reverseString function' );

//     // Make sure the result from the divide function is valid
//     ok( sum( "Hello Exact Target" ), 'tegraT tcaxE olleH', 'Expected 2 as the result, the result was: ' + sum( "Hello Exact Target") );
// });

/*********************************/
// module( "isOnlyWhitespace Unit Test" );
test( "isOnlyWhitespace", 3, function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' );

    ok( isOnlyWhitespace( "    " ), 'true', 'Expected "true" as the result, the result was: ' + isOnlyWhitespace( "    ") );

    ok( isOnlyWhitespace( "     get" ), 'false', 'Expected "false" as the result, the result was: ' + isOnlyWhitespace( "     get") );
});