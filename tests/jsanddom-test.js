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
	deepEqual( pushOntoArray(originArray, arrayToPush), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Expecting array elements pushed');
});

test('splitListStrUsingComma', function () {
	var testString = 'The, quick, brown, fox jumped over';
	var empty = '';
	expect(3);

	equal(typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function');
	deepEqual( splitListStrUsingComma(testString), ['The', 'quick', 'brown', 'fox jumped over'], 'Expecting trimmed elements');
	deepEqual( splitListStrUsingComma(empty), [], 'Expecting empty array');
});

test('sum', function () {
	expect(2);

	equal(typeof sum, 'function', 'Must contain a sum function');
	equal( sum(1, 1, 2, 3, 5, 7), 19, 'Expecting a sum of 19');
});

test('isOnlyWhitespace', function () {
	expect(4);

	equal(typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function');
	equal( isOnlyWhitespace('clearlythisisa string ya know'), false, 'Expecting false');
	equal( isOnlyWhitespace(''), true, 'Expecting true');
	equal( isOnlyWhitespace('          '), true, 'Expecting true');
});

test('closure', function () {
	expect(5);

	equal(typeof EC, 'object', 'Make sure module exists');
	equal(typeof EC.getDatingProfile, 'function', 'Make sure publicly defined fn is there');
	equal( EC.getDatingProfile(), 'I like: computers, and dislike: humans, just kidding.', 'Expecting a bad joke');
	equal( EC.likes, undefined, 'Expecting undefined when addressing a priv variable');
	equal( EC.dislikes, undefined, 'Expecting undefined when addressing a priv variable');
});

test('json', function () {
	var success = true;
	expect(4);

	equal(typeof json, 'object', 'Make sure json exists');
	try {
		JSON.stringify(json);
	} catch (err){
		success = false;
	}

	equal(success, true, 'Expecting stringify to succeed = well formatted json');
	equal(json.people.length, 4, 'Expecting 4 people');
	equal(json.people[0].firstName, 'Ted', 'Expecting first person to be named Ted');
});

test('datatable', function () {
	expect(11);

	equal(typeof DataTable, 'object', 'Make sure json exists');
	equal(typeof DataTable.addColumns, 'function', 'Make sure publicly defined fn is there');
	equal(typeof DataTable.addRows, 'function', 'Make sure publicly defined fn is there');
	equal(typeof DataTable.getData, 'function', 'Make sure publicly defined fn is there');
	equal( EC.columns, undefined, 'Expecting undefined when addressing a priv variable');
	equal( EC.rows, undefined, 'Expecting undefined when addressing a priv variable');
	DataTable.addColumns('Name', 'Craft', 'Likes', 'Dislikes');
	DataTable.addRows('Joe', 'Farmer', 'Potatoes', 'City Slickers');
	DataTable.addRows('Foe', 'Fighter', 'Winning', 'Losing');
	DataTable.addRows('Roe', 'Fisher', 'Shiny Things', 'Being Eaten');
	var table = DataTable.getData();
	equal(Object.keys(table).length, 3, 'Number of rows should be 3');
	equal(table.Row1.Name, 'Joe', 'His name is Joe');
	equal(table.Row1.Craft, 'Farmer', 'His name is Joe');
	equal(table.Row1.Likes, 'Potatoes', 'His name is Joe');
	equal(table.Row1.Dislikes, 'City Slickers', 'His name is Joe');

});