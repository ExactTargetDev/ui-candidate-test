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
module( "Reverse String Test" );
test( "Reverse String Test", 2, function() {
    // Verify the method exists
    equal( typeof String, 'function', 'Must reverse a string' ); 

    // Make sure the result from the divide function is valid
    ok( reverseString("Subscribers rock"), "kcor srebircsbuS", 'Expected dkcor srebircsbuS as the result, the result was: ' + reverseString( "Subscribers rock") );
});

module( "Find Min Number Test" );
test( "Find Min Number Test", 2, function() {
    // Verify the method exists
    equal( typeof Number, 'function', 'Must find the smallest number' ); 
        
    var nums = [12, 5, 7, 16];
    // Make sure the result from the divide function is valid
    ok( findMinValue(nums), 5, 'Expected 5 as the result, the result was: ' + findMinValue(nums) );
});
