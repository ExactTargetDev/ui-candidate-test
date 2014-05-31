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

test('Reverse String', function () {
	expect(3);
	equal(typeof reverseString, 'function', 'Must contain a reverseString function');
	ok( reverseString('creatovisguru'), 'urugsivotaerc', 'Expecting a reversed string: ' + reverseString('creatovisguru'));
	ok( reverseString('Subscribers rock'), 'kcor srebircsbuS', 'Expecting a reversed string: ' + reverseString('Subscribers rock'));
});