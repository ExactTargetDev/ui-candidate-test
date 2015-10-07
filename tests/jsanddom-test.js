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
test( "reverseString", 3, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'reverseString is a function if this passes' ); 

    // Make sure the result from the divide function is valid
    // ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
    ok( reverseString( "this" ), "siht", 'Expected siht as the result, the result was: ' + reverseString( "this" ) );
    ok( reverseString( "Ty" ), "yT", 'Expected yT as the result, the result was: ' + reverseString( "Ty" ) );
});

module('Find min value Unit Test');
test( "findMinValue", 3, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'findMinValue is a function if this passes' ); 

    // Make sure the result from the divide function is valid
    // ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
    var info = [3,23,54,1,400];
    ok( findMinValue(info), 1, 'Expected 1 as the result, the result was: ' + findMinValue( info ) );
    var info2 = [54,400,23,43,37];
    ok( findMinValue(info2), 23, 'Expected 23 as the result, the result was: ' + findMinValue( info2 ) );
});

module('findDistinctValues Unit Test');
test( "findDistinctValues", 2, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'findMinValue is a function if this passes' ); 

    var info = [17,17,17,1,3,4,"test","test","test"];
    ok( findDistinctValues(info), [17,1,3,4,"test"], 'Expected [17,1,3,4,"test"] as the result, the result was: ' + findDistinctValues( info ) );
});

