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
test( "Reverse String ", function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

    // Make sure the result from the reverseString function is valid
    ok( reverseString('Subscribers rock'), 'kcor srebircsbuS', 'Expected "kcor srebircsbuS" as the result, the result was: ' + reverseString('Subscribers rock') );
});
test( "Minimum Value ", function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

    // Make sure the result from the reverseString function is valid
    ok( findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]), -1.1, 'Expected -1.1 as the result, the result was: ' + findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]) );
});
test( "Distinct Values", function() {
    // Verify the method exists
    equal( typeof findDistinct, 'function', 'Must contain a findDistinctValues function' );

    // Make sure the result from the reverseString function is valid
    ok( findDistinct([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]), [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, 0.18], 'Expected [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, 0.18] as the result, the result was: ' + findDistinct([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]) );
});
test( "Remove Fruits ", function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );

    // Make sure the result from the reverseString function is valid
    ok( removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'],['pear', 'banana']),
        ['apple', 'orange', 'kiwi', 'plum', 'strawberry'], "Expected ['apple', 'orange', 'kiwi', 'plum', 'strawberry'] as the result, the result was: " + removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'],['pear', 'banana']) );
});
test( "Push Onto Array", function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' );

    // Make sure the result from the reverseString function is valid
    ok( pushOntoArray([1, 2, 3, 4, 5],[7, 8, 9]),[1, 2, 3, 4, 5, 7, 8, 9], "Expected [1, 2, 3, 4, 5, 7, 8, 9] as the result, the result was: " + pushOntoArray([1, 2, 3, 4, 5],[7, 8, 9]));
});
test( "SplitUsingComa ", function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' );

    // Make sure the result from the reverseString function is valid
    ok( splitListStrUsingComma('The, quick, brown, fox jumped over'),['The', 'quick', 'brown', 'fox jumped over'], "Expected ['The', 'quick', 'brown', 'fox jumped over'] as the result, the result was: " + splitListStrUsingComma('The, quick, brown, fox jumped over'));
});

test( "Sum of no's", function() {
    // Verify the method exists
    equal( typeof abc, 'function', 'Must contain a Sum function' );

    // Make sure the result from the reverseString function is valid
    ok( abc(1, 1, 2, 3, 5, 7),19, "Expected 19 as the result, the result was: " + abc(1, 1, 2, 3, 5, 7));
});