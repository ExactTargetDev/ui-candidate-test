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
	var testArr = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
	expect(2);

	equal(typeof findMinValue, 'function', 'Must contain a findMinValue function');
	equal( findMinValue(testArr), -1.1, 'Expecting min value: ' + findMinValue(testArr));
});

test('findDistinctValues', function () {
	var testArr = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
	var resultArr = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity];
	expect(2);

	equal(typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function');
	deepEqual( findDistinctValues(testArr), resultArr, 'Expecting distinct values: ' + findDistinctValues(testArr));
});

test('doFizzBuzz', function () {
	expect(2);

	equal(typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function');
	equal( doFizzBuzz(15), '12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz', 'Expecting fizzbuzzlike string: ' + doFizzBuzz(15));
});

test('removeFruits', function () {
	var fruits = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
	var fruitsToRemove = ['pear', 'banana','notindurr'];
	expect(2);

	equal(typeof removeFruits, 'function', 'Must contain a removeFruits function');
	deepEqual( removeFruits(fruits, fruitsToRemove), ['apple', 'orange', 'kiwi', 'plum', 'strawberry'], 'Expecting array with removed fruits: ' + removeFruits(fruits, fruitsToRemove));
});

test('pushOntoArray', function () {
	var originArray = [1, 2, 3, 4, 5];
	var singleEl = 6;
	var arrayToPush = [7, 8, 9];
	expect(3);

	equal(typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function');
	deepEqual( pushOntoArray(originArray, singleEl), [1, 2, 3, 4, 5, 6], 'Expecting single element pushed');
	deepEqual( pushOntoArray(originArray, arrayToPush), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Expectin array elements pushed');
});