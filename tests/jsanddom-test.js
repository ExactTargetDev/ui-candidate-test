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
test( "js and dom testing", 10, function() {
    ok( reverseString( 'Subscribers rock' ), 'The reverse string "kcor srebircsbuS"', 'Expected "kcor srebircsbuS" as the result, the result was: ' + reverseString( 'Subscribers rock' ) );
    ok( findMinValue( [10, 5, 1, 15] ), 'Min value 1 from 1[10, 5, 1, 15]', 'Expected 1 as the result, the result was: ' + findMinValue( [10, 5, 1, 15] ) );
    ok( findDistinctValues( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ), 'Expected [-1.1, 0.18, 1, 12, 20, 3, 5, 7, Infinity]', 'Expected [-1.1, 0.18, 1, 12, 20, 3, 5, 7, Infinity] as the result, the result was: ' + findDistinctValues( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ) );
    ok( removeFruits( ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana'] ), 'Expected ["apple", "kiwi", "orange", "plum", "strawberry"]', 'Expected ["apple", "kiwi", "orange", "plum", "strawberry"] as the result, the result was: ' + removeFruits( ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana'] ) );
    ok( pushOntoArray( [1, 2, 3, 4, 5], 6 ), 'Expected [1, 2, 3, 4, 5, 6]', 'Expected [1, 2, 3, 4, 5, 6] as the result, the result was: ' + pushOntoArray( [1, 2, 3, 4, 5], 6 ) );
    ok( pushOntoArray( [1, 2, 3, 4, 5], [7, 8, 9] ), 'Expected [1, 2, 3, 4, 5, 6, 7, 8, 9]', 'Expected [1, 2, 3, 4, 5, 6, 7, 8, 9] as the result, the result was: ' + pushOntoArray( [1, 2, 3, 4, 5], [7, 8, 9] ) );
    ok( splitListStrUsingComma( 'The, quick, brown, fox jumped over' ), 'Expected ["The", " quick", " brown", " fox jumped over"]', 'Expected ["The", " quick", " brown", " fox jumped over"] as the result, the result was: ' + splitListStrUsingComma( 'The, quick, brown, fox jumped over' ) );
    ok( splitListStrUsingComma( '' ), 'Expected empty array', 'Expected empty array as the result, the result was: ' + splitListStrUsingComma( '' ) );
	ok( sum( 1, 1, 2, 3, 5, 7 ), 'Expected 19', 'Expected 19 as the result, the result was: ' + sum( 1, 1, 2, 3, 5, 7 ) );
	ok( isOnlyWhitespace( 'Subscribers rock' ), 'Expected true', 'Expected true as the result, the result was: ' + isOnlyWhitespace( 'Subscribers rock' ) );
});