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
Test reverseString
********************************/
module( "reverseString Unit Test" );
test( "Test reverseString", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' );
    var result = reverseString('Subscribers rock');
    var expect = 'kcor srebircsbuS';
    // Make sure the result from the reverseString function is valid
    equal( result, expect, 'Expected ' + expect + ' as the result, the result was: ' + result );
});

/********************************
Test findMinValue
********************************/
module( "findMinValue Unit Test" );
test( "Test findMinValue", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );
    var result = findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]);
    var expect = -1.1;
    // Make sure the result from the findMinValue function is valid
    equal( result, expect, 'Expected ' + expect + ' as the result, the result was: ' + result );
});

/********************************
Test findDistinctValues
********************************/
module( "findDistinctValues Unit Test" );
test( "Test findDistinctValues", 2, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );
    var result = findDistinctValues([1,2,3,4,3,1,2,7,8,9,10,10,11,10,1,6]);
    var expect = [4, 3, 2, 7, 8, 9, 11, 10, 1, 6];
    // Make sure the result from the findDistinctValues function is valid
    deepEqual( result, expect, 'Expected ' + expect + ' as the result, the result was: ' + result );
});

/********************************
Test removeFruits
********************************/
module( "removeFruits Unit Test" );
test( "Test removeFruits", 2, function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );
    var result = removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana']);
    var expect = ['apple', 'orange', 'kiwi', 'plum', 'strawberry'];
    // Make sure the result from the removeFruits function is valid
    deepEqual( result, expect, 'Expected ' + expect + ' as the result, the result was: ' + result );
});

/********************************
Test pushOntoArray
********************************/
module( "pushOntoArray Unit Test" );
test( "Test pushOntoArray", 3, function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' );
    var result1 = pushOntoArray([1, 2, 3, 4, 5], 6);
    var result2 = pushOntoArray([1, 2, 3, 4, 5], [7, 8, 9]);
    var expect1 = [1, 2, 3, 4, 5, 6];
    var expect2 = [1, 2, 3, 4, 5, 7, 8, 9];
    // Make sure the result from the pushOntoArray function is valid (when argument is a single element)
    deepEqual( result1, expect1, 'Expected ' + expect1 + ' as the result, the result was: ' + result1 );
    // Make sure the result from the pushOntoArray function is valid (when argument is an array of elements)
    deepEqual( result2, expect2, 'Expected ' + expect2 + ' as the result, the result was: ' + result2 );
});

/********************************
Test splitListStrUsingComma
********************************/
module( "splitListStrUsingComma Unit Test" );
test( "Test splitListStrUsingComma", 3, function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' );
    var result1 = splitListStrUsingComma('The, quick, brown, fox jumped over');
    var result2 = splitListStrUsingComma('');
    var expect1 = ['The', ' quick', ' brown', ' fox jumped over'];
    var expect2 = [];
    // Make sure the result from the splitListStrUsingComma function is valid (when argument is a non-empty string)
    deepEqual( result1, expect1, 'Expected ' + expect1 + ' as the result, the result was: ' + result1 );
    // Make sure the result from the splitListStrUsingComma function is valid (when argument is an empty string)
    deepEqual( result2, expect2, 'Expected ' + expect2 + ' as the result, the result was: ' + result2 );
});

/********************************
Test sum
********************************/
module( "sum Unit Test" );
test( "Test sum", 2, function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' );
    var result = sum(1, 1, 2, 3, 5, 7);
    var expect = 19;
    // Make sure the result from the sum function is valid
    equal( result, expect, 'Expected ' + expect + ' as the result, the result was: ' + result );
});


/********************************
Test isOnlyWhitespace
********************************/
module( "isOnlyWhitespace Unit Test" );
test( "Test isOnlyWhitespace", 4, function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' );
    var result1 = isOnlyWhitespace('            ');
    var result2 = isOnlyWhitespace('         a   ');
    var result3 = isOnlyWhitespace('');
    var expect1 = true;
    var expect2 = false;
    var expect3 = false;
    // Make sure the result from the isOnlyWhitespace function is valid (just whitespace)
    equal( result1, expect1, 'Expected ' + expect1 + ' as the result, the result was: ' + result1 );
    // Make sure the result from the isOnlyWhitespace function is valid (character in string)
    equal( result2, expect2, 'Expected ' + expect2 + ' as the result, the result was: ' + result2 );
    // Make sure the result from the isOnlyWhitespace function is valid (empty string)
    equal( result3, expect3, 'Expected ' + expect3 + ' as the result, the result was: ' + result3 );
});
