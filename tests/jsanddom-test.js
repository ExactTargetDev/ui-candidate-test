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
    equal( typeof reverseString, 'function', 'reverseString Problem');

    ok( reverseString('123456'), 'Expected 654321 as the result, the result was: ' + reverseString('123456') );
    ok( reverseString('&*^&%&^'), 'Expected \'^&%&^*&\' as the result, the result was: ' + reverseString('&*^&%&^') );

    notOk( reverseString(1234) ,'Expected false as the result, the result was: ' + reverseString(1234) );

});

test( "2. findMinValue", 2, function() {
    equal( typeof findMinValue, 'function', 'findMinValue Problem');

    ok( findMinValue([1, 4, -1, -11.92, 11.92]), 'Expected -11.92  as the result, the result was: ' + findMinValue([1, 4, -1, -11.92, 11.92]));
});

test( "3. findDistinctValues", 2, function() {
    equal( typeof findDistinctValues, 'function', 'findDistinctValues Problem');

    ok( findDistinctValues([1, 4, 5, 90, -1, -11.92, -11.92, 90, 11.92, 1, 4, 472]), 'Expected [1, 4, 5, 90, -1, -11.92, 11.92, 472] as the result '+ findDistinctValues([1, 4, 5, 90, -1, -11.92, -11.92, 90, 11.92, 1, 4, 472]));
});

test( "4. doFizzBuzz", 2, function() {
    equal( typeof doFizzBuzz, 'function', 'doFizzBuzz Problem');

    ok( doFizzBuzz(4, 16), 'Expected  | 4 | Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz | 13 | 14 | FizzBuzz | and got' + doFizzBuzz(4, 16));
});

test( "5. removeFruits", 5, function() {
    equal( typeof removeFruits, 'function', 'removeFruits Problem');

    ok( removeFruits(['apple', 'banana', 'orange'], ['banana']), "Expected ['apple', 'orange'] got - " +  removeFruits(['apple', 'banana', 'orange'], ['banana']) );
    ok( removeFruits(['apple', 'banana', 'orange'], ['apple', 'orange']), "Expected ['banana'] got - "    +  removeFruits(['apple', 'banana', 'orange'], ['apple', 'orange']) );
    ok( removeFruits(['apple', 'banana', 'orange'], ['kiwi']), "Expected ['apple', 'banana', 'orange'] got - ['apple', 'banana', 'orange']" +  removeFruits(['apple', 'banana', 'orange'], ['kiwi']) );

    notOk( removeFruits(['apple', 'banana', 'orange'], 'banana'), "Expected false got - " +  removeFruits(['apple', 'banana', 'orange'], 'banana') );
});

test( "6. pushOntoArray", 3, function() {
    equal( typeof pushOntoArray, 'function', 'pushOntoArray Problem');

    ok( pushOntoArray(['apple', 'banana', 'orange'], 'kiwi'), "Expected - ['apple', 'banana', 'orange', 'kiwi']; Got - " + pushOntoArray(['apple', 'banana', 'orange'], 'kiwi'));
    ok( pushOntoArray(['apple', 'banana', 'orange'], ['kiwi', 'strawberry']), "Expected - ['apple', 'banana', 'orange', 'kiwi', 'strawberry']; Got - " + pushOntoArray(['apple', 'banana', 'orange'], ['kiwi', 'strawberry']));

});

test( "7. splitListStrUsingComma", 3, function() {
    equal( typeof splitListStrUsingComma, 'function', 'splitListStrUsingComma Problem');
    ok( splitListStrUsingComma('this is a test string!') , "  Expected - this is a test string!; Got - " + splitListStrUsingComma('this is a test string!') );
    ok( splitListStrUsingComma('this is a test string!, with fruits, apple, banana, orange'), " Expected - [this is a test string!, with fruits, apple, banana, orange] ; Got -  " + splitListStrUsingComma('this is a test string!, with fruits, apple, banana, orange'));
});

test( "8. sum", 1, function() {
    equal( typeof sum, 'function', 'sum Problem');
});

test( "9. isOnlyWhitespace", 1, function() {
    equal( typeof isOnlyWhitespace, 'function', 'isOnlyWhitespace Problem');
});

test( "10. closureSample", 1, function () {
    equal( typeof Counter, 'function', 'Counter Problem');
});

test( "11. peopleJSON", 1, function () {
    equal( typeof peopleJSON, 'function', 'peopleJSON Problem');
});

test( "12. dataTable ", 1, function () {
    equal( typeof DataTable, 'function', 'dataTable Problem');
});

test( "13. selectElemnts", 1, function () {
    equal( typeof selectElements, 'function', 'selectElements Problem');
});

test( "14. retrieveAnchorText", 1, function () {
    equal( typeof retrieveAnchorText, 'object', 'retrieveAnchorText Problem');
});

test( "15. listItems", 1, function () {
    equal( typeof listItems, 'function', 'listItems Problem');
});

test( "16. CheckBox Toggle Test", 1, function () {
    equal( typeof checkBoxToggle, 'object', 'checkBoxToggle Problem');
});