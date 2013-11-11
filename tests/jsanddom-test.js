/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
	// Verify the method exists
	equal( typeof divide, 'function', 'Must contain a divide function' );

	// Make sure the result from the divide function is valid
	equal( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/

module( "JS and DOM tests" );
test( "Reverse a String", 2, function() {
	// Verify the method exists
	equal( typeof reverseString, 'function', 'Must contain a string reversal function' );

	equal( reverseString( 'Subscribers rock' ), 'kcor srebircsbuS',
		'Expected kcor srebircbus as the result, the result was: ' + reverseString( 'Subscribers rock' ) );
});

test( "Find minimum value", 4, function() {
	// Verify the method exists
	equal( typeof findMinValue, 'function', 'Must contain a minimum value function' );

	equal( findMinValue( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ), '-1.1', 
			'Expected -1.1 as the result, the result was: ' + 
			findMinValue( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ) );

	// empty array
	equal( findMinValue( [] ), undefined, 
		'Expected undefined as the result, the result was: ' + findMinValue( [] ) );
	
	// uses negative infinity in input
	equal( findMinValue( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, -Infinity, 0.18, -1.1, 12] ), '-Infinity', 
			'Expected -1.1 as the result, the result was: ' + 
			findMinValue( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ) );
});

test( "Find distinct values (remove duplicates)", 3, function() {
	// Verify the method exists
	equal( typeof findDistinctValues, 'function', 'Must contain a distinct value function' );

	// testing for numbers
	deepEqual( findDistinctValues( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ), 
		[3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity],
		'Expected [3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity] as the result, the result was: ' + 
		findDistinctValues( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ) );

	// testing for strings
	deepEqual( findDistinctValues( ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry', 
									'pear', 'banana', 'banana', 'orange', 'kiwi', 'pear'] ), 
		['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'],
		'Expected [3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity] as the result, the result was: ' + 
		findDistinctValues( ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry', 
									'pear', 'banana', 'banana', 'orange', 'kiwi', 'pear'] ) );

});
