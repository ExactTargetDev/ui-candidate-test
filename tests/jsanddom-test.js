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
module( " ASSESSMENT Unit Test " );
test( "1. reverseString Test ", 4, function() {
    equal( typeof reverseString, 'function', 'contains reverseString function ');

    ok( reverseString('123456'), 'Expected 654321 as the result, the result was: ' + reverseString('123456') );
    ok( reverseString('&*^&%&^'), 'Expected \'^&%&^*&\' as the result, the result was: ' + reverseString('&*^&%&^') );

    notOk( reverseString(1234) ,'Expected false as the result, the result was: ' + reverseString(1234) );

});

test( "2. findMinValue", 2, function() {
    equal( typeof findMinValue, 'function', 'contains findMinValue function ');

    ok( findMinValue([1, 4, -1, -11.92, 11.92]), 'Expected -11.92  as the result, the result was: ' + findMinValue([1, 4, -1, -11.92, 11.92]));
});

test( "3. findDistinctValues", 2, function() {
    equal( typeof findDistinctValues, 'function', 'contains findDistinctValues function ');

    ok( findDistinctValues([1, 4, 5, 90, -1, -11.92, -11.92, 90, 11.92, 1, 4, 472]), 'Expected [1, 4, 5, 90, -1, -11.92, 11.92, 472] as the result '+ findDistinctValues([1, 4, 5, 90, -1, -11.92, -11.92, 90, 11.92, 1, 4, 472]));
});

test( "4. doFizzBuzz", 2, function() {
    equal( typeof doFizzBuzz, 'function', 'contains doFizzBuzz function ');

    ok( doFizzBuzz(4, 16), 'Expected  | 4 | Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz | 13 | 14 | FizzBuzz | and got' + doFizzBuzz(4, 16));
});

test( "5. removeFruits", 5, function() {
    equal( typeof removeFruits, 'function', 'contains removeFruits function ');

    ok( removeFruits(['apple', 'banana', 'orange'], ['banana']), "Expected ['apple', 'orange'] got :  " +  removeFruits(['apple', 'banana', 'orange'], ['banana']) );
    ok( removeFruits(['apple', 'banana', 'orange'], ['apple', 'orange']), "Expected ['banana'] got :  "    +  removeFruits(['apple', 'banana', 'orange'], ['apple', 'orange']) );
    ok( removeFruits(['apple', 'banana', 'orange'], ['kiwi']), "Expected ['apple', 'banana', 'orange'] got :  ['apple', 'banana', 'orange']" +  removeFruits(['apple', 'banana', 'orange'], ['kiwi']) );

    deepEqual(  removeFruits(['apple', 'banana', 'orange'], 'banana'), false, "removeFruits(['apple', 'banana', 'orange'], 'banana') is false");
});

test( "6. pushOntoArray", 3, function() {
    equal( typeof pushOntoArray, 'function', 'contains pushOntoArray function ');

    deepEqual(pushOntoArray(['apple', 'banana', 'orange'], ['kiwi', 'strawberry']), ['apple', 'banana', 'orange', 'kiwi', 'strawberry'], "pushOntoArray of ['apple', 'banana', 'orange'], ['kiwi', 'strawberry']) is ['apple', 'banana', 'orange', 'kiwi']");
    deepEqual(pushOntoArray(['apple', 'banana', 'orange'], 'kiwi'), ['apple', 'banana', 'orange', 'kiwi'], "pushOntoArray of ['apple', 'banana', 'orange'], 'kiwi') is ['apple', 'banana', 'orange', 'kiwi']");

});

test( "7. splitListStrUsingComma", 3, function() {
    equal( typeof splitListStrUsingComma, 'function', 'contains splitListStrUsingComma function ');
    ok( splitListStrUsingComma('this is a test string!') , "  Expected - this is a test string!; Got :  " + splitListStrUsingComma('this is a test string!') );
    ok( splitListStrUsingComma('this is a test string!, with fruits, apple, banana, orange'), " Expected - [this is a test string!, with fruits, apple, banana, orange] ; Got :   " + splitListStrUsingComma('this is a test string!, with fruits, apple, banana, orange'));
});

test( "8. sum", 5, function() {
    equal( typeof sum, 'function', 'contains sum function ');

    ok( sum(12, -1, 20, -3), " Expected - 28; Got :  " + sum(12, -1, 20, -3));
    ok( sum(12, -1.1, 0.20, -3), "  Expected - 8.10; Got :  " + sum(12, -1.1, 0.20, -3));
    ok( sum(-10, -20.29, -30.22), "  Expected - -60.51 ; Got :  " + sum(-10, -20.29, -30.22));

    deepEqual(sum(1, 2, 3, 4, 5, 6), 21, "sum of 1, 2, 3, 4, 5, 6 is 21");

});

test( "9. isOnlyWhitespace", 4, function() {
    equal( typeof isOnlyWhitespace, 'function', 'contains isOnlyWhitespace function ');
    deepEqual(isOnlyWhitespace('    '), true, "isOnlyWhitespace('    ') is true");
    deepEqual(isOnlyWhitespace('  x  '), false, "isOnlyWhitespace('  x  ') is false");
    notOk( isOnlyWhitespace(''), " Expected false; Got :  " + isOnlyWhitespace(''));
});

test( "10. closureSample", 1, function () {
    equal( typeof Counter, 'function', 'contains Sample Closure');
});

test( "11. peopleJSON", 1, function () {
    equal( typeof peopleJSON, 'function', 'contains peopleJSON function ');
});

test( "12. dataTable ", 1, function () {
    equal( typeof DataTable, 'function', 'contains dataTable function ');
});

test( "13. selectElemnts", 1, function () {
    equal( typeof selectElements, 'function', 'contains selectElements function ');
});

test( "14. retrieveAnchorText", 1, function () {
    equal( typeof retrieveAnchorText, 'object', 'contains retrieveAnchorText function ');
});

test( "15. listItems", 1, function () {
    equal( typeof listItems, 'function', 'contains listItems function ');
});

test( "16. CheckBox Toggle Test", 1, function () {
    equal( typeof checkBoxToggle, 'object', 'contains checkBoxToggle function ');
});