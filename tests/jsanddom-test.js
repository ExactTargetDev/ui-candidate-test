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