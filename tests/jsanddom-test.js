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
module( "Reverse String Unit Test" );
test( "Reverse String", 3, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverse function' );

    // Make sure the result from the reverseString function is valid
    ok( reverseString("") === "", 'Expected "" as the result, the result was: ' + reverseString("") );

    ok( reverseString("hello world") === "dlrow olleh", 'Expected "dlrow olleh" as the result, the result was: ' + reverseString("hello world") );
});

module( "Minimum Value Unit Test" );
test( "Minimum Value", 4, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

    //empty array should return null
    ok( findMinValue([]) === null , 'Expected null as the result, the result was: ' + findMinValue([]) );

    // Make sure the result from the minimum function is valid
    ok( findMinValue([1,2,3]) == 1 , 'Expected 1 as the result, the result was: ' + findMinValue([1, 2, 3]) );

    ok( findMinValue([-1,-2,-3]) == -3 , 'Expected -3 as the result, the result was: ' + findMinValue([-1, -2, -3]) );
});

