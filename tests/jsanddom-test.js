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
Browser Version:
IE 11
Chrome Version 44.0.2403.155

********************************/
test( "String reverse", 3, function() {
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 
    equal( reverseString("abcde"), "edcba", 'Expected edcba as the result, the result was: ' + reverseString("abcde") );
    equal( reverseString("ab c"), "c ba", 'Expected c ba as the result, the result was: ' + reverseString("ab c") );

});

test( "Find minimum value", function() {
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 
    equal( findMinValue([1,3,4,5,6,100]), 1, 'Expected 1 as the result, the result was: ' + findMinValue([1,3,4,5,6,100]) );
});

test( "Find distinct values", function() {
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 
    equal( findDistinctValues([1,2,3,1,2,3,5]),"1,2,3,5", 'Expected [1,2,3,5] as the result, the result was: ' + findDistinctValues([1,2,3,1,2,3,5]) );
});

test( "Test do fizz buzz", function() {
    equal( typeof doFizzBuzz, 'function', 'Must contain a findDistinctValues function' ); 
    equal( doFizzBuzz(5),"1,2,Fizz,4,Buzz", 'Expected [1,2,Fizz,4,Buzz] as the result, the result was: ' + doFizzBuzz(5));
});

test( "Remove fruits", function() {
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' ); 
    equal( removeFruits(["apple","banana","grape"],["apple"]),"banana,grape", 'Expected [banana,grape] as the result, the result was: ' + removeFruits(["apple","banana","grape"],["apple"] ));
});

test( "Push onto array", function() {
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' ); 
    equal( pushOntoArray(["a","b"],"c"),"a,b,c", 'Expected [a,b,c] as the result, the result was: ' + pushOntoArray(["a","b"],"c"));
    equal( pushOntoArray(["a","b"],["c","d"]),"a,b,c,d", 'Expected [a,b,c,d] as the result, the result was: ' + pushOntoArray(["a","b"],["c","d"]));
});

test( "Split list string using comma", function() {
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' ); 
    equal( splitListStrUsingComma("ab,cde,fg,h"),"ab,cde,fg,h", 'Expected [ab,cde,fg,h] as the result, the result was: ' + splitListStrUsingComma("ab,cde,fg,h"));
    equal( splitListStrUsingComma(""),"", 'Expected [] as the result, the result was: ' + splitListStrUsingComma(""));

});

test( "Sum all the numbers in the array", function() {
    equal( typeof sum, 'function', 'Must contain a sum function' ); 
    equal( sum([1,2,3,4]),10, 'Expected 10 as the result, the result was: ' + sum([1,2,3,4]));
    equal( sum([1,2]),3, 'Expected 3 as the result, the result was: ' + sum([1,2]));

});

test( "Is only white space", function() {
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' ); 
    equal( isOnlyWhitespace("  "),true, 'Expected true as the result, the result was: ' + isOnlyWhitespace("  "));
    equal( isOnlyWhitespace("  ab"),false, 'Expected false as the result, the result was: ' + isOnlyWhitespace("  ab"));
});














