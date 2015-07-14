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
module( "Basic Function Tests ");
test(" Reverse String Test ", function(assert) {
	//Verify the method exists
	equal(typeof reverseString, 'function', 'Must contain a reverseString function');

	//Make sure the results is expected.
	var string = reverseString('Subscribers rock');
	var expectedString = 'kcor srebircsbuS';

	assert.equal(string, expectedString, "Reverse string worked as expected. ");
})