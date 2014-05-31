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

test('reverseString', function () {
	expect(3);
	equal(typeof reverseString, 'function', 'Must contain a reverseString function');
	ok( reverseString('creatovisguru'), 'urugsivotaerc', 'Expecting a reversed string: ' + reverseString('creatovisguru'));
	ok( reverseString('Subscribers rock'), 'kcor srebircsbuS', 'Expecting a reversed string: ' + reverseString('Subscribers rock'));
});

test('findMinValue', function () {
	expect(2);
	var testArr = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
	equal(typeof findMinValue, 'function', 'Must contain a findMinValue function');
	equal( findMinValue(testArr), -1.1, 'Expecting min value: ' + findMinValue(testArr));
});

test('findDistinctValues', function () {
	expect(2);
	var testArr = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
	var resultArr = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity];
	equal(typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function');
	deepEqual( findDistinctValues(testArr), resultArr, 'Expecting min value: ' + findDistinctValues(testArr));
});