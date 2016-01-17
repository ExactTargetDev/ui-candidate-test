/********************************
Unit Test Example
********************************/
// module( "Example Unit Test" );
// test( "Example Test", 2, function() {
//     // Verify the method exists
//     equal( typeof divide, 'function', 'Must contain a divide function' ); 

//     // Make sure the result from the divide function is valid
//     ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
// });

/********************************
Please create your tests below...
********************************/

module( "reverseString Unit Test" );
test( "reverseString Test", function() {
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' );
    ok( reverseString("Subscribers rock"), 'Expected kcor srebircsbuS as the result, the result was: ' + reverseString("Subscribers rock") );
});

module( "findMinValue Unit Test" );
test( "findMinValue Test", function() {
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );
    ok( findMinValue([1, 10, 100]), 'Expected 1 as the result, the result was: ' + findMinValue([1, 10, 100]) );
});

module( "findDistinctValues Unit Test" );
test( "findDistinctValues Test", function() {
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );
    ok( findDistinctValues([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]), 'Expected 3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity as the result, the result was: ' + findDistinctValues([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]) );
});


// the fizz buzz test only prints to the console, as instructed in the text of the test. therefore there is not way to programmatically set assertions against this


module( "removeFruits Unit Test" );
test( "removeFruits Test", function() {
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );
    ok( removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana']), 'Expected apple,orange,kiwi,plum,strawberry as the result, the result was: ' + removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana']) );
});


module( "pushOntoArray Unit Test" );
test( "pushOntoArray Test", function() {
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' );
    ok( pushOntoArray([1, 2, 3, 4, 5], 6), 'Expected 1,2,3,4,5,6 as the result, the result was: ' + pushOntoArray([1, 2, 3, 4, 5], 6) );
    ok( pushOntoArray([1, 2, 3, 4, 5], [7, 8, 9]), 'Expected 1,2,3,4,5,7,8,9 as the result, the result was: ' + pushOntoArray([1, 2, 3, 4, 5], [7, 8, 9]) );
});


module( "splitListStrUsingComma Unit Test" );
test( "splitListStrUsingComma Test", function() {
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' );
    ok( splitListStrUsingComma('The, quick, brown, fox jumped over'), 'Expected 1 as the result, the result was: ' + splitListStrUsingComma('The, quick, brown, fox jumped over') );
    deepEqual(splitListStrUsingComma('The, quick, brown, fox jumped over'), ["The", " quick", " brown", " fox jumped over"]);
    ok( splitListStrUsingComma(''), 'Expected "" as the result, the result was: ' + splitListStrUsingComma('') );
    deepEqual(splitListStrUsingComma(''), []);
});


module( "sum Unit Test" );
test( "sum Test", function() {
    equal( typeof sum, 'function', 'Must contain a sum function' );
    ok( sum(1, 1, 2, 3, 5, 7), 'Expected 19 as the result, the result was: ' + sum(1, 1, 2, 3, 5, 7) );
});


module( "isOnlyWhitespace Unit Test" );
test( "isOnlyWhitespace Test", function() {
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' );
    ok( isOnlyWhitespace("      "), 'Expected true as the result, the result was: ' + isOnlyWhitespace("      ") );
});


module( "closure Unit Test" );
test( "closure Test", function() {
    equal( typeof meet, 'function', 'Must contain a meet function' );
    var startConvo = meet("Como esta");
    var endConvo = startConvo("I've forgotten how to speak most Spanish.");
    ok( endConvo, 'Expected "Como esta, what I\'d like to say is that I\'ve forgotten how to speak most Spanish" as the result, the result was: ' + endConvo );
});