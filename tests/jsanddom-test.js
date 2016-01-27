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
test( "sum Test",function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' ); 
    ok(sum(4,7,2,12), 25, 'the result was: ' + sum(4,7,2,12));
    ok(sum(6,5,9,18,42), 80, 'the result was: ' + sum(6,5,9,18,42));
});
