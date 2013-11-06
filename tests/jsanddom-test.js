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


test( "Reverse String", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverse function' );
    
    var teststr = "Subscribers rock";
    
    // Make sure the results equal a reverse of the given string and output the string
    equal(reverseString(teststr),'kcor srebircsbuS', 'Expected "kcor srebircsbuS" as the results, the result was: ' + reverseString(teststr));

});

test( "Find Minimum Value", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Find the minimum value function' );
    
    // Array of test data
    var testarray = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
    
    equal( findMinValue(testarray), '-1.1', 'Expected -1.1 as the results, the result was: ' + findMinValue(testarray) );
    
});