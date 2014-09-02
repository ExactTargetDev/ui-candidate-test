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
module( "jsanddom-test Unit Test" );

test( "Reverse String Test", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

    // Make sure the result from the divide function is valid
    ok( reverseString( 'hello' ), 'olleh', 'Expected olleh as the result, the result was: ' + reverseString('hello') );
});

test( "Find min value Test", 2,  function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

    // Make sure the result from the divide function is valid
    ok( findMinValue([2,4,5,10,9,1]), 1, 'Expected 1 as the result, the result was: ' + findMinValue([2,4,5,10,9,1]) );
});


test( "Find Distinct Values Test", 2,  function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );

    // Make sure the result from the divide function is valid
    ok( findDistinctValues( [10,1,3,1,2,4,5,10,3,9,1]), [10,1,3,2,4,5,9], 'Expected [10,1,3,2,4,5,9] as the result, the result was: ' + findDistinctValues( [10,1,3,1,2,4,5,10,3,9,1]));
});



test( "Do Fizz Buzz Test", 2,  function() {
    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' );

    // Make sure the result from the divide function is valid
    ok( doFizzBuzz(),  [1, 2, "Fizz", 3, 4, "Buzz", "Fizz", 6, 7, 8, "Fizz", 9, "Buzz", 11, "Fizz", 12, 13, 14, "FizzBuzz", "Buzz", 16, 17, "Fizz", 18, 19, "Buzz", "Fizz", 21, 22, 23, "Fizz", 24, "Buzz", 26, "Fizz", 27, 28, 29, "FizzBuzz", "Buzz", 31, 32, "Fizz", 33, 34, "Buzz", "Fizz", 36, 37, 38, "Fizz", 39, "Buzz", 41, "Fizz", 42, 43, 44, "FizzBuzz", "Buzz", 46, 47, "Fizz", 48, 49, "Buzz", "Fizz", 51, 52, 53, "Fizz", 54, "Buzz", 56, "Fizz", 57, 58, 59, "FizzBuzz", "Buzz", 61, 62, "Fizz", 63, 64, "Buzz", "Fizz", 66, 67, 68, "Fizz", 69, "Buzz", 71, "Fizz", 72, 73, 74, "FizzBuzz", "Buzz", 76, 77, "Fizz", 78, 79, "Buzz", "Fizz", 81, 82, 83, "Fizz", 84, "Buzz", 86, "Fizz", 87, 88, 89, "FizzBuzz", "Buzz", 91, 92, "Fizz", 93, 94, "Buzz", "Fizz", 96, 97, 98, "Fizz", 99, "Buzz"]
        , 'Expected   [1, 2, "Fizz", 3, 4, "Buzz", "Fizz", 6, 7, 8, "Fizz", 9, "Buzz", 11, "Fizz", 12, 13, 14, "FizzBuzz", "Buzz", 16, 17, "Fizz", 18, 19, "Buzz", "Fizz", 21, 22, 23, "Fizz", 24, "Buzz", 26, "Fizz", 27, 28, 29, "FizzBuzz", "Buzz", 31, 32, "Fizz", 33, 34, "Buzz", "Fizz", 36, 37, 38, "Fizz", 39, "Buzz", 41, "Fizz", 42, 43, 44, "FizzBuzz", "Buzz", 46, 47, "Fizz", 48, 49, "Buzz", "Fizz", 51, 52, 53, "Fizz", 54, "Buzz", 56, "Fizz", 57, 58, 59, "FizzBuzz", "Buzz", 61, 62, "Fizz", 63, 64, "Buzz", "Fizz", 66, 67, 68, "Fizz", 69, "Buzz", 71, "Fizz", 72, 73, 74, "FizzBuzz", "Buzz", 76, 77, "Fizz", 78, 79, "Buzz", "Fizz", 81, 82, 83, "Fizz", 84, "Buzz", 86, "Fizz", 87, 88, 89, "FizzBuzz", "Buzz", 91, 92, "Fizz", 93, 94, "Buzz", "Fizz", 96, 97, 98, "Fizz", 99, "Buzz"]' +
            ' as the result, the result was: ' + doFizzBuzz());
});

test( "Remove Fruits Test", 2,  function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );

    // Make sure the result from the divide function is valid
    ok( removeFruits(['apple', 'orange','banana','cherries','grapes','peaches'], ['banana','cherries','peaches']),['apple', 'orange','grapes'], "Expected ['apple', 'orange','grapes'] as the result, the result was: " +  removeFruits(['apple', 'orange','banana','cherries','grapes','peaches'],  ['banana','cherries','peaches']));
});


test( "Push Onto Array Test", 2,  function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a removeFruits function' );

    // Make sure the result from the divide function is valid
    ok( pushOntoArray([100,'test','SpeedRacer'],[1,4,'sugar','funny',['apple', 'orange','banana','cherries','grapes','peaches'],'monster',['piano','drum'],30]),[100,'test','SpeedRacer',1,4,'sugar','funny','apple', 'orange','banana','cherries','grapes','peaches','monster','piano','drum',30],
        "Expected [100,'test','SpeedRacer',1,4,'sugar','funny','apple', 'orange','banana','cherries','grapes','peaches','monster','piano','drum',30] as the result, the result was: " +  pushOntoArray([100,'test','SpeedRacer'],[1,4,'sugar','funny',['apple', 'orange','banana','cherries','grapes','peaches'],'monster',['piano','drum'],30]));
});


test( "Split List Str Using Comma Test", 2,  function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' );

    // Make sure the result from the divide function is valid
    ok( splitListStrUsingComma('HelloWorld'), 'H,e,l,l,o,W,o,r,l,d', 'Expected H,e,l,l,o,W,o,r,l,d as the result, the result was: ' +splitListStrUsingComma('HelloWorld') );
});



test( "Sum Test", 2,  function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' );

    // Make sure the result from the divide function is valid
    ok( sum(1,2,3,45,9,1,10,11,12), 94 , 'Expected 94 as the result, the result was: ' + sum(1,2,3,45,9,1,10,11,12));
});

test( "Is Only Whitespace Test", 2,  function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' );

    // Make sure the result from the divide function is valid
    ok( isOnlyWhitespace('                  '), true , 'Expected 94 as the result, the result was: ' + isOnlyWhitespace('                  '));
});