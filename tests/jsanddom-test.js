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
test( "reverseString Test", function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

    // Test value
    var test = "Space";

    // Make sure the result from the reverseString function is valid
    ok( reverseString(test), 'ecapS', 'Expected ecapS as the result, the result was: ' + reverseString(test) );
});

test( "findMinValue Test", function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

    // Test value
    var test = [ 99, 100, 50, 60, 10, 20, 5, 76 ];

    // Make sure the result from the findMinValue function is valid
    ok( findMinValue([ 99, 100, 50, 60, 10, 20, 5, 76 ]), 5, 'Expected 5 as the result, the result was: ' + findMinValue(test) );
});

test( "findDistinctValues Test", function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );

    // Test value
    var test = [ 1, 2, 3, 4, 4, 5, 6, 7, 8, 8, 8, 9, 10 ];

    // Make sure the result from the findDistinctValues function is valid
    ok( findDistinctValues(test), [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], 'Expected [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] as the result, the result was: ' + findDistinctValues(test) );
});

test( "doFizzBuzz Test", function() {
    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' );

    // Make sure the result from the doFizzBuzz function is valid
    ok( doFizzBuzz(), true, 'Expected true as the result, the result was: ' + doFizzBuzz() );
});

test( "removeFruits Test", function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );

    // Test values
    var test_fruits         = [ "apple", "banana", "orange", "kiwi", "cherry" ];
    var test_fruitsToRemove = [ "banana", "kiwi" ];

    // Make sure the result from the removeFruits function is valid
    ok( removeFruits(test_fruits,test_fruitsToRemove), [ "apple", "orange", "cherry" ], 'Expected [ "apple", "orange", "cherry" ] as the result, the result was: ' + removeFruits(test_fruits,test_fruitsToRemove) );
});

test( "pushOntoArray Test", function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' );

    // Test values
    var test_array  = ["Banana", "Orange", "Apple", "Mango"];
    var test_single = "Kiwi";
    var test_multi  = ["Kiwi", "Cherry", "Raspberry"];

    // Make sure the result from the pushOntoArray function is valid
    ok( pushOntoArray(test_array,test_single), [ "Banana", "Orange", "Apple", "Mango", "Kiwi" ], 'Expected [ "Banana", "Orange", "Apple", "Mango", "Kiwi" ] as the result, the result was: ' + pushOntoArray(test_array,test_single) );
    ok( pushOntoArray(test_array,test_multi), [ "Banana", "Orange", "Apple", "Mango", "Kiwi", "Cherry", "Raspberry" ], 'Expected [ "Banana", "Orange", "Apple", "Mango", "Kiwi", "Cherry", "Raspberry" ] as the result, the result was: ' + pushOntoArray(test_array,test_multi) );
});

test( "splitListStrUsingComma Test", function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' );

    // Test values
    var test_empty  = "";
    var test_string = "Producing, multiple arrays, for you, master.";

    // Make sure the result from the splitListStrUsingComma function is valid
    ok( splitListStrUsingComma(test_empty), [], 'Expected [] as the result, the result was: ' + splitListStrUsingComma(test_empty) );
    ok( splitListStrUsingComma(test_string), [ "Producing", " multiple arrays", " for you", " master." ], 'Expected [ "Producing", " multiple arrays", " for you", " master." ] as the result, the result was: ' + splitListStrUsingComma(test_string) );
});

test( "sum Test", function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' );

    // Make sure the result from the sum function is valid
    ok( sum(''), "0", 'Expected "0" as the result, the result was: ' + sum('') );
    ok( sum(1,2,3,4,5), 15, 'Expected 15 as the result, the result was: ' + sum(1,2,3,4,5) );
    ok( sum(1, 2, 3, 4, "5"), "105", 'Expected "105" as the result, the result was: ' + sum(1, 2, 3, 4, "5") );
    ok( sum(1, 2, 3, ["test", "me"], "5"), "6test,me5", 'Expected "6test,me5" as the result, the result was: ' + sum(1, 2, 3, ["test", "me"], "5") );
    ok( sum(1, 2, 3, ["test", "me"], "5"), "6test,me5", 'Expected "6test,me5" as the result, the result was: ' + sum(1, 2, 3, ["test", "me"], "5") );
    ok( sum([1,2,3,4,5]), "01,2,3,4,5", 'Expected "01,2,3,4,5" as the result, the result was: ' + sum([1,2,3,4,5]) );
});

test( "isOnlyWhitespace Test", function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' );

    // Make sure the result from the isOnlyWhitespace function is valid
    ok( isOnlyWhitespace(" "), true, 'Expected true as the result, the result was: ' + isOnlyWhitespace(" ") );
});

test( "jsClosureHello Test", function() {
    // Verify the method exists
    equal( typeof jsClosureHello, 'function', 'Must contain a jsClosureHello function' );

    // Make sure the result from the isOnlyWhitespace function is valid
    ok( jsClosureHello("Bryan"), "Welcome to the wonderful world of Javascript, Bryan!", 'Expected Welcome to the wonderful world of Javascript, Bryan!" as the result, the result was: ' + jsClosureHello("Bryan") );
});
