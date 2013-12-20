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
module( "String Reversal" );
test( "reverseString() should return the input string backwards", 1, function() {
	var mirrored = reverseString("Timperman");
	equal( mirrored, "namrepmiT", "Timperman backwards is " + mirrored );
});

module( "Arrays" );
test( "findMinValue() should return the smallest number in an array", 2, function() {
	var smallest = findMinValue([5, 3, 7, 290, -4, 4]);
	equal( smallest, -4, "The smallest item in the list is " + smallest );

	smallest = findMinValue([900, 42, 360, 100]);
	equal( smallest, 42, "The answer is " + smallest);
});
test( "findDistinctValues() should return the distinct values in an array", 3, function() {
	var unique = findDistinctValues([1, 2, 2, 3, 5, 2, 5]);
	equal( unique.length, 4, "There are 4 items in the array" );
	deepEqual( unique, [1, 2, 3, 5], "The distinct values are " + unique );

	unique = findDistinctValues([123, "123", 1, 1]);
	deepEqual( unique, [123, "123", 1], "All is equal that should be equal in " + unique);
});