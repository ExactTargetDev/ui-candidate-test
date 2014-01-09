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
reverseString(str)
********************************/

module( "reverseString Test" );
test ("Reverse String", 2, function() {

		//Verify the method exists
		equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

		// Make sure the result from the reverseString function is valid
		ok( reverseString( "Hadoop" ), "poodaH", 'Expected "poodaH" as the result, the result was: ' + reverseString("Hello") );
});

