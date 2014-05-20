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
module( "Reverse String" );
test( "Reverse String", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 

    // Make sure the result from the function is valid
    equal( reverseString( 'Subscribers rock' ), 'kcor srebircsbuS', 'Expected kcor srebircsbuS as the result, the result was: ' 
      + reverseString('Subscribers rock') );
});

module( "Find Min Value" );
test( "Find Minimum Value", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 

    // Make sure the result from the function is valid
    equal( findMinValue( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ), -1.1, 'Expected -1.1 as the result, the result was: ' + findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]) );
});

module( "Find Distinct Values" );
test( "Find Distinct Values", 3, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 

    // Make sure the result from the function is valid (numbers)
    deepEqual( findDistinctValues( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ), [3, 5, 7, 20, 0.18, 01, -1.1, 12, Infinity], 'Expected [3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity] as the result, the result was: ' + findDistinctValues([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]) );

    // Make sure the result from the function is valid (strings)
    deepEqual( findDistinctValues( ['apple', 'banana', 'orange', 'banana', 'pear', 'apple', 'strawberry'] ), ['apple', 'banana', 'orange', 'pear', 'strawberry'], 'Expected ["apple", "banana", "orange", "pear", "strawberry"] as the result, the result was: ' + findDistinctValues(['apple', 'banana', 'orange', 'banana', 'pear', 'apple', 'strawberry']) );    
});
