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

/********************************
 Test 1 - Reverse String
 ********************************/
test( "Reverse String", 2, function() {
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

    ok( reverseString('mystring'), 'gnirtsym', 'Expected gnirtsym as  the result, the result was: ' + reverseString('mystring'));
});

/********************************
 Test 2 - Min Value of Array
 ********************************/
test( "Minimum Value of Array ", 2, function() {
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

    var arr = [8,4,7,34,6,7];

    ok( findMinValue(arr), 4, 'Expected 4 as the result, the result was: ' + findMinValue(arr));
});
