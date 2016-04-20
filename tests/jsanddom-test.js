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
module( "Sam's Function Tests" );
test( "String reverse",  function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 

    // Make sure the result from the stringreverse function is valid

    //create some variables for easy testing plug and play
    var originalString = 'Subscribers rock'
    var reverse = reverseString(originalString);
    equal( reverseString( originalString ), reverse, 'Expected ' + reverse +' as the result, the result was: ' + reverseString(originalString) );
    //use a simple string to test and not variables, just to make sure
    equal(reverseString('aabbcc'), 'ccbbaa', 'Expected ccbbaa as the result, the result was: ' + reverseString('aabbcc'));
});

test( "Smallest Value",  function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 

    // Make sure the result from the findMinValue function is valid
    var args = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
    var smallArgs = Math.min(...args);
    equal( findMinValue(args), smallArgs, 'Expected ' + smallArgs +  ' as the result, the result was: ' + findMinValue(args) );
    equal( findMinValue([1, 2, 3, 4, 5]), 1, 'Expected 1 as the result, the result was: ' + findMinValue([1, 2, 3, 4, 5]) );

    
});

test( "Distinct Values",  function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 

    // Make sure the result from the findMinValue function is valid
    var args = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
    deepEqual( findDistinctValues(args), [3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity], 'Expected 3,5,7,20,0.18,1,1.1,12, Infinity as the result, the result was: ' + findDistinctValues(args) );
    deepEqual( findDistinctValues([1, 1, 2, 3, 4, 5]), [1 ,2, 3, 4, 5], 'Expected 1,2,3,4,5 as the result, the result was: ' + findDistinctValues([1, 1, 2, 3, 4, 5]) );

    
});
