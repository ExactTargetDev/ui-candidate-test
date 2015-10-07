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
module( "Reverse String Unit Test" );
test( "reverseString", 3, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'reverseString is a function if this passes' ); 

    // Make sure the result from the divide function is valid
    // ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
    ok( reverseString( "this" ), "siht", 'Expected siht as the result, the result was: ' + reverseString( "this" ) );
    ok( reverseString( "Ty" ), "yT", 'Expected yT as the result, the result was: ' + reverseString( "Ty" ) );
});

module('Find min value Unit Test');
test( "findMinValue", 3, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'findMinValue is a function if this passes' ); 

    // Make sure the result from the divide function is valid
    // ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
    var info = [3,23,54,1,400];
    ok( findMinValue(info), 1, 'Expected 1 as the result, the result was: ' + findMinValue( info ) );
    var info2 = [54,400,23,43,37];
    ok( findMinValue(info2), 23, 'Expected 23 as the result, the result was: ' + findMinValue( info2 ) );
});

module('findDistinctValues Unit Test');
test( "findDistinctValues", 2, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'findMinValue is a function if this passes' ); 

    var info = [17,17,17,1,3,4,"test","test","test"];
    ok( findDistinctValues(info), [17,1,3,4,"test"], 'Expected [17,1,3,4,"test"] as the result, the result was: ' + findDistinctValues( info ) );
});

module('doFizzBuzz Unit Test');
test( "doFizzBuzz", 1, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'doFizzBuzz is a function if this passes' ); 
});

module('removeFruits Unit Test');
test( "removeFruits", 2, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'findDistinctValues is a function if this passes' ); 

    var a1=["apples","oranges","strawberry", "watermelon"], a2=['apples', 'oranges'];
    ok( removeFruits(a1, a2), ["strawberry", "watermelon"], 'Expected ["strawberry", "watermelon"] as the result, the result was: ' + removeFruits(a1, a2) );
});

module("pushOntoArray Unit Test");
test( "pushOntoArray", 3, function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'pushOntoArray is a function if this passes' ); 

    var a1=["apples","oranges","strawberry", "watermelon"], a2=['apples', 'oranges'];
    ok( pushOntoArray(a1, a2), ["apples","oranges","strawberry", "watermelon","apples","oranges"], 'Expected ["apples","oranges","strawberry", "watermelon","apples","oranges"] as the result, the result was: ' + pushOntoArray(a1, a2) );

    var a3=["apples","oranges","strawberry", "watermelon"];
    ok( pushOntoArray(a3, 10), ["apples","oranges","strawberry", "watermelon", 10], 'Expected ["apples","oranges","strawberry", "watermelon", 10] as the result, the result was: ' + pushOntoArray(a3, 10) );

});

module("splitListStrUsingComma Unit Test");
test( "splitListStrUsingComma", 3, function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'splitListStrUsingComma is a function if this passes' ); 

    ok( splitListStrUsingComma("words,will,be here"), ["words", "will","be here"], 'Expected ["words", "will","be here"] as the result, the result was: ' + splitListStrUsingComma("words,will,be here") );
    ok( splitListStrUsingComma(""), [], 'Expected [] as the result, the result was: ' + splitListStrUsingComma("") );
});

module("sum Unit Test");
test( "sum", 4, function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'sum is a function if this passes' ); 

    ok( sum([10,55,20]), 85, 'Expected 85 as the result, the result was: ' + sum([10,55,20]) );
    ok( sum([1,2,3]), 6, 'Expected 6 as the result, the result was: ' + sum([1,2,3]) );
    ok( sum(10), 10, 'Expected 6 as the result, the result was: ' + sum(10) );
    
});

module("isOnlyWhitespace Unit Test");
test( "isOnlyWhitespace", 4, function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'isOnlyWhitespace is a function if this passes' ); 

    ok( isOnlyWhitespace(" "), true, 'Expected true as the result, the result was: ' + isOnlyWhitespace(" ") );
    ok( isOnlyWhitespace(""), true, 'Expected true as the result, the result was: ' + isOnlyWhitespace("") );
    ok( isOnlyWhitespace("something"), false, 'Expected false as the result, the result was: ' + isOnlyWhitespace("something ") );
    
});