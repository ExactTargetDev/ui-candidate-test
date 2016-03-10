/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    deepEqual( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/
module( "Assessment Unit Tests" );
test( "Reverse String Test", function() {
    var fwdStr = 'This is a reversed string.';
    var revStr = '.gnirts desrever a si sihT';

    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 

    deepEqual( reverseString(fwdStr), revStr, 'Expected "' + revStr + '" as the result, the result was: "' + reverseString(fwdStr) + '"');
});
test( "Min Array Value Test", function() {
    var arr = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 

    var minValue = findMinValue(arr);

    deepEqual( minValue, -1.1, 'Expected -1.1 as the result, the result was: ' + minValue);
});
test( "Distinct Array Value Test", function() {
    var arr = [-2, -2, "-2", 0, 1, Infinity, Infinity];
    var arrDistinct = [-2, 0, 1, Infinity];
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 

    deepEqual( findDistinctValues(arr), arrDistinct, 'Expected ' + arrDistinct + ' as the result, the result was: ' + findDistinctValues(arr));
});
test( "FizzBuzz Results Count Test", function() {
    
    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' ); 

    deepEqual( doFizzBuzz().length, 100, 'Expected ' + 100 + ' as the result, the result was: ' + doFizzBuzz().length);
});
test( "FizzBuzz Specific Number Tests", function() {
    
    // Verify the method exists
    equal( typeof getFizzBuzzFor, 'function', 'Must contain a getFizzBuzzFor function' ); 
    var tst = 1;
    deepEqual( getFizzBuzzFor(tst), tst, 'Expected ' + tst + ' as the result, the result was: ' + getFizzBuzzFor(tst));
    tst = 3;
    deepEqual( getFizzBuzzFor(tst), 'Fizz', 'Expected Fizz as the result, the result was: ' + getFizzBuzzFor(tst));
    tst = 5;
    deepEqual( getFizzBuzzFor(tst), 'Buzz', 'Expected Buzz as the result, the result was: ' + getFizzBuzzFor(tst));
    tst = 15;
    deepEqual( getFizzBuzzFor(tst), 'FizzBuzz', 'Expected FizzBuzz as the result, the result was: ' + getFizzBuzzFor(tst));       
});
test( "Fruitful Tests", function() {
    var fruits = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
    var remove = ['pear', 'banana'];
    var fruitsRemoved = ['apple', 'orange', 'kiwi', 'plum', 'strawberry'];
    
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' ); 

    deepEqual( removeFruits(fruits, remove), fruitsRemoved, 'Expected ' + fruitsRemoved + ' as the result, the result was: ' + removeFruits(fruits, remove));
});
test( "Array Push Tests", function() {

    var srcArray = [1, 2, 3, 4, 5];
    var push1 = 6;
    var push2 = [7, 8, 9];    
    
    var expRslt1 = [1, 2, 3, 4, 5, 6];
    var expRslt2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' ); 
    
    pushOntoArray(srcArray, push1);
    deepEqual( srcArray, expRslt1, 'Expected ' + expRslt1 + ' as the result, the result was: ' + srcArray);
    
    pushOntoArray(srcArray, push2);
    deepEqual( srcArray, expRslt2, 'Expected ' + expRslt2 + ' as the result, the result was: ' + srcArray);
});
test( "String Split Tests", function() {
    var str1 = 'The, quick, brown, fox jumped over';
    var str2 = '';
    
    var expRslt1 = ['The', ' quick', ' brown', ' fox jumped over'];
    var expRslt2 = [];
    
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' ); 
    
    var testRslt = splitListStrUsingComma(str1);
    deepEqual( testRslt, expRslt1, 'Expected ' + expRslt1 + ' as the result, the result was: ' + testRslt);
    
    testRslt = splitListStrUsingComma(str2);
    deepEqual( testRslt, expRslt2, 'Expected ' + expRslt2 + ' as the result, the result was: ' + testRslt);
});
test( "Sum Tests", function() {
    var expRslt1 = 19;
    
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' ); 
    
    var testRslt = sum(1, 1, 2, 3, 5, 7);
    deepEqual( testRslt, expRslt1, 'Expected ' + expRslt1 + ' as the result, the result was: ' + testRslt);
        
});
test( "Whitespace Tests", function() {
    
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain an isOnlyWhitespace function' ); 

    var testRslt = isOnlyWhitespace('');
    deepEqual( testRslt, true, 'Expected true as the result, the result was: ' + testRslt);

    testRslt = isOnlyWhitespace(' ');
    deepEqual( testRslt, true, 'Expected true as the result, the result was: ' + testRslt);

    testRslt = isOnlyWhitespace(null);
    deepEqual( testRslt, true, 'Expected true as the result, the result was: ' + testRslt);
    
    testRslt = isOnlyWhitespace('Blah');
    deepEqual( testRslt, false, 'Expected false as the result, the result was: ' + testRslt);
        
});
