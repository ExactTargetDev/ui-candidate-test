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
module( "Matt Vrtis Unit Test" );
test( "Reverse String", 1, function() {
    // Verify the method exists
    //equal( typeof reverseString, 'function', 'Must reverse a string' );

    // Make sure the result from the divide function is valid
    equal(reverseString('Never odd or even.'), '.neve ro ddo reveN', 'passes: Never odd or even reversed is .neve ro ddo reveN');
});

test( "return min value", 3, function() {
	var one = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
	var two = [1, 2, 3, 4, 5];
	var three  = [7, 8, 9];
    
    equal(findMinValue(one), -1.1, 'passes: -1.1 is the lowest value in '+one.toString());
    equal(findMinValue(two), 1, 'passes: 1 is the lowest value in '+two.toString());
    equal(findMinValue(three), 7, 'passes: 7 is the lowest value in '+three.toString());
});

test( "Find Distinct Values, remove duplicates", 2, function() {
	var one = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
	var two = ['apple', 'pear', 'plum','pear', 'plum'];
    deepEqual(findDistinctValues(one),[3, 5, 7, 20, 0.18, 01, -1.1, 12, Infinity]  , 'passes: '+findDistinctValues(one).toString()+' are the distinct values in '+one.toString());
    deepEqual(findDistinctValues(two),['apple', 'pear', 'plum']  , 'passes: '+findDistinctValues(two).toString()+' are the distinct values in '+two.toString());
});