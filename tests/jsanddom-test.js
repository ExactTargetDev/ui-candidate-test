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

module( "Reverse String" );
test( "Reverse String", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a string' ); 

    // check to make sure answer is correct.
    ok( reverseString( 'Hello World' ), 2, 'Expected "World Hello" as the result, the result was: ' + reverseString( 'Hello World' ) );
});

module( "Find Lowest Value" );
test( "Find Lowest Value", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a string' ); 
	
	var $values = [4,6,8,3,2,1];
    // check to make sure answer is correct.
    ok( findMinValue( $values ), 2, 'Expected 1 as the result, the result was: ' + findMinValue( $values ) );
});

module( "Remove Duplicates" );
test( "Remove Duplicates", 2, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a string' ); 
	var $values = [1,2,3,4,5,1,6,7,8,4,8,9];
	
    // check to make sure answer is correct.
    ok( findDistinctValues( $values ), 2, 'Expected 1,2,3,4,5,6,7,8,9 as the result, the result was: ' + findDistinctValues( $values ) );
    console.log('Old:' + $values + ' ; New: ' + findDistinctValues( $values ));
});


