/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 
    ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
test( "reverseString Test",function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 
    ok(reverseString('italy'), 'ylati', 'the result was: ' + reverseString('italy') );
});
test( "findMinValue Test",function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 
    ok(findMinValue([10,100,3,56]), 3, 'the result was: ' + findMinValue([10,100,3,56]) );
});
test( "findDistinctValues Test",function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 
    ok(findDistinctValues(["rick", "john", "rick", "james"]), ["rick","john","james"], 'the result was: ' + findDistinctValues(["rick", "john", "rick", "james"]) );
});

test( "doFizzBuzz Test",function() {
    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' ); 
    ok(doFizzBuzz(), true, 'the result was: ' + doFizzBuzz());
});

test( "removeFruits Test",function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' ); 
    ok(removeFruits(["apple", "orange", "mango", "peach", "grape"], ["apple","grape"]),["orange","mango","peach","grape"], 'the result was: ' + removeFruits(["apple", "orange", "mango", "peach", "grape"], ["apple","grape"]));
});

test( "pushOntoArray Test",function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' ); 
    var arr1 = ['value1','value2', 'value3', 'value4'];
    var arr2 = ['value5', 'value6', 'value7'];
    pushOntoArray(arr1,arr2)
    //test arr1 length after pushing
    ok(arr1.length, 7, 'the result was: ' + arr1.length);
});

test( "splitListStrUsingComma Test",function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' ); 
    var str = "How are you doing today?";
    ok(splitListStrUsingComma(str), ["How","are","you","doing","today?"], 'the result was: ' + splitListStrUsingComma(str));
    var strNull = null; 
    ok(splitListStrUsingComma(strNull), [], 'the result was: ' + splitListStrUsingComma(strNull));
});

test( "sum Test",function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' ); 
    ok(sum(4,5,6,10), 25, 'the result was: ' + sum(4,5,6,10));
    ok(sum(4,5,6,10,30), 55, 'the result was: ' + sum(4,5,6,10,30));
});

test( "isOnlyWhitespace Test",function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' ); 
    ok(isOnlyWhitespace("has space"), true, 'the result was: ' + isOnlyWhitespace("has space"));
});

test( "makeCounter Test",function() {
    // Verify the method exists
    equal( typeof makeCounter, 'function', 'Must contain a makeCounter function' ); 
    ok(makeCounter(), 1, 'the result was: ' + makeCounter());
    ok(makeCounter(), 2, 'the result was: ' + makeCounter());
});

