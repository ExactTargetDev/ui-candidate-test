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
module( "Sam Kligerman's Unit Tests ");

test("reverseString function", 2, function(){
	// verify reverseString() exists
	equal( typeof reverseString, 'function', 'reverseString() calls reverseString function' );
	
	var result = reverseString('The, quick, brown, fox jumped over', function(str) {
		return reverseString();
	});
     
	equal(result, "revo depmuj xof ,nworb ,kciuq ,ehT", "string successfully reversed" );

});