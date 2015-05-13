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
test( "Reverse String Test", 'kcor srebircsbuS', function() {
    equal( typeof reverseString, 'function', 'Must contain a reverse string function' );
    ok( reverseString('Subscribers rock'), 'kcor srebircsbuS', 'Expected reverse of string ' + reverseString('Subscribers rock') );
});

test( "findMinValue Test", 1, function() {
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );
    ok( findMinValue([1, 2, 3, 4, 5]), 1, 'Expected 1 as the result, the result was: ' + findMinValue([1, 2, 3, 4, 5]) );
});

test( "findDistinctValues Test", [3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity], function() {
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );
    ok( findDistinctValues([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]), 1, 'Expected [3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity] as the result, the result was: ' + findDistinctValues([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]) );
});

test( "doFizzBuzz Test", '', function() {
    equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' );
    ok( doFizzBuzz(), '', 'Expected no errors as the result, the result was: ' + doFizzBuzz() );
});

test( "removeFruits Test", ['apple', 'orange', 'kiwi', 'plum', 'strawberry'], function() {
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );
    ok( removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'],
                             ['pear', 'banana'])), 1, 'Expected ['apple', 'orange', 'kiwi', 'plum', 'strawberry'] as the result, the result was: ' + removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'],
                                                                                                                  ['pear', 'banana'])) );
});

test( "pushOntoArray Test", [1, 2, 3, 4, 5, 6], function() {
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' );
    ok( pushOntoArray([1, 2, 3, 4, 5], 6), [1, 2, 3, 4, 5, 6], 'Expected [1, 2, 3, 4, 5, 6] as the result, the result was: ' + pushOntoArray([1, 2, 3, 4, 5], 6) );
    ok( pushOntoArray([1, 2, 3, 4, 5], [7, 8, 9]), 1, 2, 3, 4, 5, Array[3], 'Expected 1, 2, 3, 4, 5, Array[3] as the result, the result was: ' + pushOntoArray([1, 2, 3, 4, 5], [7, 8, 9]) );
});

test( "splitListStrUsingComma Test", The
  quick
  brown
  fox jumped over, function() {
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' );
    ok( splitListStrUsingComma('The, quick, brown, fox jumped over'), The
                                                                      quick
                                                                      brown
                                                                      fox jumped over, 'Expected The
                                                                        quick
                                                                        brown
                                                                        fox jumped over as the result, the result was: ' + splitListStrUsingComma('The, quick, brown, fox jumped over') );

});

test( "sum Test", 19, function() {
    equal( typeof sum, 'function', 'Must contain a sum function' );
    ok( sum( 1, 1, 2, 3, 5, 7), 19, 'Expected 19 as the result, the result was: ' + sum( 1, 1, 2, 3, 5, 7) );
});

test( "isOnlyWhitespace Test", true, function() {
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' );
    ok( isOnlyWhitespace, true, 'Expected true as the result, the result was: ' + isOnlyWhitespace );
});
