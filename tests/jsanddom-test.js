/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, expectedResultText(2, divide(4,2)));
});
/********************************
Please create your tests below...
********************************/

test("Reverse String", function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

    // Verify simple string reverse case
    equal( reverseString( 'hello world'  ), 'dlrow olleh', expectedResultText('dlrow olleh', reverseString('hello world')));

    // Verify empty string case
    equal( reverseString( ''  ), '', expectedResultText('', reverseString('')));

    // Verify no string case
    equal( reverseString( null ), undefined, expectedResultText(undefined, reverseString(null)));

    // Verify single character Unicode case
    equal( reverseString( 'hello \u035d sir' ), 'ris \u035d olleh', expectedResultText('ris \u035d olleh', reverseString('hello \u035d sir')));
    // Verify failure of combination unicode case (breve)
    notEqual( reverseString( 'hello \u041E \u0306 sir' ), 'ris \u041E \u0306 olleh', expectedResultText('ris \u041E \u0306 olleh', reverseString('hello \u041E \u0306 sir')));
});
