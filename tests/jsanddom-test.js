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

test("reverseString Test", 5, function() {
    equal(typeof reverseString, 'function', 'Verify the reverseString function is present');

    ok(reverseString('Nick'), 'kciN', 'Expect a valid result');

    // Even number of characters
    equal(reverseString('Nick'), 'kciN', 'Check even # Chars');

    // Odd number of characters
    equal(reverseString('Reitman'), 'namtieR', 'Check odd # Chars');

    // Two Words
    equal(reverseString('Nick Reitman'), 'namtieR kciN', 'Check with two words');
});

test("findMinValue Test", 2, function(){
    equal(typeof findMinValue, 'function', 'Verify the findMinValue function is present');

    equal(findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]), -1.1, 'Verify we find the minimum value');
});


test("findDistinctValues", 3, function(){
    equal(typeof findDistinctValues, 'function', 'Verify the findDistinctValues function is present');

    deepEqual(findDistinctValues([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]), [3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity], 'Check that we got a unique set of numbers');
    deepEqual(findDistinctValues([1,3,'dupe',5,5,'5',7,3,8,'dupe']), [1,3,'dupe',5,'5',7,8], 'Check that strings evaluate uniquely');
});


test("doFizzBuzz Test", 1, function(){
    equal(typeof doFizzBuzz, 'function', 'Verify the doFizzBuzz function is present');
});

test("removeFruits", 2, function() {
    equal(typeof removeFruits, 'function', 'Verify the removeFruits function is present');

    var fruits = ['apple', 'orange', 'pear', 'peach', 'plum', 'banana', 'melon'];

    deepEqual(removeFruits(fruits, ['pear', 'apple', 'melon']), ['orange', 'peach', 'plum', 'banana'], 'Verify we revmoved the correct fruits from the list');
});

test("pushOntoArray", 3, function() {
    equal(typeof pushOntoArray, 'function', 'Verify the pushOntoArray function is present');

    var arr = [1, 2, 3, 4, 5];

    pushOntoArray(arr, 6);
    deepEqual(arr, [1, 2, 3, 4, 5, 6], 'Check single value push');

    pushOntoArray(arr, [7,8,9]);
    deepEqual(arr, [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Check array push');
});

test("splitListStrUsingComma", 3, function(){
    equal(typeof splitListStrUsingComma, 'function', 'Verify the splitListStrUsingComma function is present');

    var str = 'The, quick, brown, fox jumped over';
    deepEqual(splitListStrUsingComma(str), ['The',' quick',' brown',' fox jumped over'], 'Check split string');

    deepEqual(splitListStrUsingComma(''), [], 'Check empty string results');
});

test("sum", 2, function() {
    equal(typeof sum, 'function', 'Verify the sum function is present');

    equal(sum(1, 1, 2, 3, 5, 7), 19, 'Check that sum works correctly');
});