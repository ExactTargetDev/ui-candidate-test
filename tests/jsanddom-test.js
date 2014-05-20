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
@module REVERSE STRING
@version 1.0
@author Luc Martin
********************************/
module( "Example Unit Test REVERSE STRING" );
test( "Reverse a string-- 'Subscribers rock' into 'kcor srebircsbuS'", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', "Reverse a string-- 'Subscribers rock'" );

    // Make sure the result from the function is valid
    ok( reverseString( 'Subscribers rock' ), 'kcor srebircsbuS', 'Expected kcor srebircsbuS as the result, the result was: ' + reverseString( 'Subscribers rock' ) );
});

/********************************
@module Test MIN VALUE
@version 1.0
@author Luc Martin
*********************************/

module( "Example Unit Test MIN VALUE" );
test( "Find the minimum value in an array", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Min value' );

    // Make sure the result from the function is valid
    equal( findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]), -1.1, reverseString([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]) );
});

/********************************
@module Test DISTINCT VALUES
@version 1.0
@author Luc Martin
********************************/

module( "Example Unit Test DISTINCT VALUES" );
test( "Removes duplicates in an array", 2, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'removes duplicates from array [1,2,3,5,8,13,21,1,3,5]' );

    // Make sure the result from the function is valid
    equal( findDistinctValues([1,2,3,5,8,13,21,1,3,5]), '1,2,3,5,8,13,21' , 'Expected 1,2,3,5,8,13,21 RESULT IS: ' + findDistinctValues([1,2,3,5,8,13,21,1,3,5]) );
});

/********************************
@module REVERSE STRING
@version 1.0
@author Luc Martin
********************************/

module( "Example Unit Test Modulus" );
test( "3 is a Fizz 5 is a Buzz", 2, function() {
    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'log modulus 3 as Fizz, Modulus 5 as Buzz, both as FizzBuzz or just a number from 1 to 100' );

    // Make sure the result from the divide function is valid
    equal( doFizzBuzz(), '12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz1617Fizz19BuzzFizz2223FizzBuzz26Fizz2829FizzBuzz3132Fizz34BuzzFizz3738FizzBuzz41Fizz4344FizzBuzz4647Fizz49BuzzFizz5253FizzBuzz56Fizz5859FizzBuzz6162Fizz64BuzzFizz6768FizzBuzz71Fizz7374FizzBuzz7677Fizz79BuzzFizz8283FizzBuzz86Fizz8889FizzBuzz9192Fizz94BuzzFizz9798FizzBuzz', '12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz1617Fizz19BuzzFizz2223FizzBuzz26Fizz2829FizzBuzz3132Fizz34BuzzFizz3738FizzBuzz41Fizz4344FizzBuzz4647Fizz49BuzzFizz5253FizzBuzz56Fizz5859FizzBuzz6162Fizz64BuzzFizz6768FizzBuzz71Fizz7374FizzBuzz7677Fizz79BuzzFizz8283FizzBuzz86Fizz8889FizzBuzz9192Fizz94BuzzFizz9798FizzBuzz','[1,2,3,5,8,13,21]' + doFizzBuzz() );
});

/********************************
@module Test REMOVE FRUITS
@version 1.0
@author Luc Martin
********************************/

module( "Example Unit Test REMOVE FRUITS" );
test( "Removes fruits in an array using another array", 2, function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', "removes ['pear', 'banana'] from array ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry']" );

    // Make sure the result from the function is valid
    equal( removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana']), 'apple,orange,kiwi,plum,strawberry', 'Expected: "apple,orange,kiwi,plum,strawberry" RESULT: ' +removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana']) );
});
/********************************
@module Test TYPE DETECTION
@version 1.0
@author Luc Martin
********************************/

module( "Example Unit Test TYPE DETECTION : Push numbers or push array elements" );
test( "TYPE DETECTION pushing into an array", 2, function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', "Detect and push" );

    // Make sure the result from the function is valid
    equal( pushOntoArray([], [[1, 2, 3, 4, 5], 6, [7, 8, 9]]), '1,2,3,4,5,6,7,8,9', 'Expected: "1,2,3,4,5,6,7,8,9" Result is : ' + pushOntoArray( [], [[1, 2, 3, 4, 5], 6, [7, 8, 9]] ) );
});

/********************************
@module Test splitListStrUsingComma(sourceStr)
@version 1.0
@author Luc Martin
********************************/

module( "Example Unit Test splitListStrUsingComma : Empty array " );
test( "TYPE DETECTION pushing into an array", 3, function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', "Split using Comma" );

    // Make sure the result from the function is valid
    equal( splitListStrUsingComma().length, 0, 'Using an empty string Expected: 0 Result is : ' + splitListStrUsingComma().length );
    equal( splitListStrUsingComma('The Matrix, rules all').length, 2, 'Using an empty string Expected: 0 Result is : ' + splitListStrUsingComma('The Matrix, rules all').length );
});

/********************************
@module Test sum(args)
@version 1.0
@author Luc Martin
********************************/

module( "Example Unit Test sum : adds all args " );
test( "SUM", 2, function() {
    // Verify the method exists
    equal( typeof sum, 'function', "function that will take any number of arguments and return their sum" );

    // Make sure the result from the function is valid
    equal( sum(1,2,3,5), 11, 'Sum Expected: 11 Result is : ' + splitListStrUsingComma(1,2,3,5));
});
