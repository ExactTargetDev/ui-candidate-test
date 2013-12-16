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

module( "Problem #1" );
test( "Problem #1", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 

    // Make sure the result is valid
    ok( reverseString("abcd"), "dcba", 'Expected dcba as the result, the result was: ' + reverseString("abcd") );
});

module( "Problem #2" );
test( "Problem #2", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 
	
	// Make sure the result is valid
    ok( findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]), -1.1, 'Expected -1.1 as the result, the result was: ' + findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]) );
});




module( "Problem #3" );
test( "Problem #3", 2, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 

    // Make sure the result is valid
	var values = new Array();
	values = [1,1,2,3,3,3,3];
	
    ok( findDistinctValues(values), [1,2,3], 'Expected 1,2,3 as the result, the result was: ' +  findDistinctValues(values));
});