/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    ok(  2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/
/*Reverse string test*/
module( "Reverse String  Unit Test" );
test( "Reverse String Test",function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Have to return reverse of a string' ); 

    // Make sure the result from the divide function is valid
    ok( reverseString('Subscribers rock'), 'Expected result "kcor srebircsbuS" the result was: ' + reverseString('Subscribers rock') );
});
//[3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]
//min of a array test

module( "Find minimum value from an array" );
test( "Find an Array min value Test",function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Returns minimum value of an array' ); 

    // Make sure the result returns minimum value of an array
    ok( findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]), 'Minimum value of a array is : ' + findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]) );
});
//module find unique values of an array test

module( "Find distinct value from an array" );
test( "Find an Array unique  values Test",function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Returns unique  values of an array' ); 

    // Make sure the result gives us distinct values
    ok( findDistinctValues([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]), 'Unique  values of a array [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] is: ' + findDistinctValues([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]) );
});


//Fizz Buzz Test case doFizzBuzz

module( "test for function that logs the numbers from 1 to 100 to the console" );
test( "Fizz Buzz Console log Test",function() {
    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'Returns results on console log' ); 

    // check on console log for the result
    ok( doFizzBuzz(), 'finally fiz buzz  console log results ' + doFizzBuzz() );
});

//test to check a function to  remove the values contained in fruitsToRemove from the array fruits
module( "test for check fruitsToRemove values are removed from array fruits");
test( "RemoveFruits function test",function() {
    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'Must remove values from array Fruits contained in fruitsToRemove' ); 

    // check on console log for the result
    ok( removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'],['pear', 'banana']), 'fruits array value after removing values contained in fruitsToRemove  ' + removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'],['pear', 'banana']) );
});

//pushOntoArray test
//[1, 2, 3, 4, 5]
module( "test to check if toPush is an array or a value and push onto array");
test( "pushOntoArray function test",function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Push array values/elements to a array' ); 

    // check on console log for the result
    ok( pushOntoArray([1, 2, 3, 4, 5],6), 'Push value to an array  ' + pushOntoArray([1, 2, 3, 4, 5],6) );
    ok( pushOntoArray([1, 2, 3, 4, 5],[7, 8, 9]), 'Push array  to an array  ' + pushOntoArray([1, 2, 3, 4, 5],[7, 8, 9]) );
    
});

//'The, quick, brown, fox jumped over' ''
module( "test to check if split this string using comma as your delimiter, and producing an empty array if the string is empty");
test( "splitListStrUsingComma function test",function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'splitListStrUsingComma' ); 

    ok( splitListStrUsingComma('The, quick, brown, fox jumped over'), 'Result of Splitting the string using comma as a delimiter is ' + splitListStrUsingComma('The, quick, brown, fox jumped over') );
    ok( splitListStrUsingComma(''), 'Empty an array if string is empty  ' + splitListStrUsingComma('') );
    
});

//sum test case

module( "test to get the sum of all the arguments" );
test( "sum of all the arguments",function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Returns sum of the  arguments' ); 

    // Make sure the result gives us sum of all the argument values
    ok(sum(1, 1, 2, 3, 5, 9), 'sum of arguments ' + sum(1, 1, 2, 3, 5, 9) );
});

//test to see if a specified string consists of only whitespace.

module( "test to see if a specified string consists of only white space or not" );
test( "White Space Detector test",function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Returns results on console log' ); 

    // Make sure the result gives us true for  whitespace
    ok( isOnlyWhitespace(' '), 'return true if the specified string consists of only whitespace ' + isOnlyWhitespace(' ') );
});  
    
