/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
	// Verify the method exists
	equal( typeof divide, 'function', 'Must contain a divide function' );

	// Make sure the result from the divide function is valid
	equal( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/

module( "JS and DOM tests" );
test( "Reverse a String", 2, function() {
	// Verify the method exists
	equal( typeof reverseString, 'function', 'Must contain a string reversal function' );

	equal( reverseString( 'Subscribers rock' ), 'kcor srebircsbuS',
		'Expected kcor srebircbus as the result, the result was: ' + reverseString( 'Subscribers rock' ) );
});

test( "Find minimum value", 4, function() {
	// Verify the method exists
	equal( typeof findMinValue, 'function', 'Must contain a minimum value function' );

	equal( findMinValue( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ), '-1.1',
			'Expected -1.1 as the result, the result was: ' +
			findMinValue( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ) );

	// empty array
	equal( findMinValue( [] ), undefined,
		'Expected undefined as the result, the result was: ' + findMinValue( [] ) );

	// uses negative infinity in input
	equal( findMinValue( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, -Infinity, 0.18, -1.1, 12] ), '-Infinity',
			'Expected -1.1 as the result, the result was: ' +
			findMinValue( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ) );
});

test( "Find distinct values (remove duplicates)", 3, function() {
	// Verify the method exists
	equal( typeof findDistinctValues, 'function', 'Must contain a distinct value function' );

	// testing for numbers
	deepEqual( findDistinctValues( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ),
		[3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity],
		'Expected [3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity] as the result, the result was: ' +
		findDistinctValues( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ) );

	// testing for strings
	deepEqual( findDistinctValues( ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry',
									'pear', 'banana', 'banana', 'orange', 'kiwi', 'pear'] ),
		['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'],
		'Expected [3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity] as the result, the result was: ' +
		findDistinctValues( ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry',
									'pear', 'banana', 'banana', 'orange', 'kiwi', 'pear'] ) );

});

test( "Output Fizz when 3 and Buzz when 5", 2, function() {
    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'Must contain a Fizzbuzz function' );

    equal( doFizzBuzz(), '12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz1617Fizz19BuzzFizz2223FizzBuzz26Fizz2829FizzBuzz3132Fizz34BuzzFizz3738FizzBuzz41Fizz4344FizzBuzz4647Fizz49BuzzFizz5253FizzBuzz56Fizz5859FizzBuzz6162Fizz64BuzzFizz6768FizzBuzz71Fizz7374FizzBuzz7677Fizz79BuzzFizz8283FizzBuzz86Fizz8889FizzBuzz9192Fizz94BuzzFizz9798FizzBuzz', 'Expected 12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz1617Fizz19BuzzFizz2223FizzBuzz26Fizz2829FizzBuzz3132Fizz34BuzzFizz3738FizzBuzz41Fizz4344FizzBuzz4647Fizz49BuzzFizz5253FizzBuzz56Fizz5859FizzBuzz6162Fizz64BuzzFizz6768FizzBuzz71Fizz7374FizzBuzz7677Fizz79BuzzFizz8283FizzBuzz86Fizz8889FizzBuzz9192Fizz94BuzzFizz9798FizzBuzz as the result, the result was: ' + doFizzBuzz() );
});


test( "Remove fruits", 2, function() {
	// Verify the method exists
	equal( typeof removeFruits, 'function', 'Must contain a remove fruits function' );

	deepEqual( removeFruits( ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana'] ), 
		['apple', 'orange', 'kiwi', 'plum', 'strawberry'],
		"Expected ['apple', 'orange', 'kiwi', 'plum', 'strawberry'] as the result, the result was: " + 
	    removeFruits( ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana'] ) );
});


test( "Push value or array onto array", 3, function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a push on to array function' );

    deepEqual( pushOntoArray( [1, 2, 3, 4, 5], 6 ), [1, 2, 3, 4, 5, 6],
		'Expected [1, 2, 3, 4, 5, 6] as the result, the result was: ' + pushOntoArray( [1, 2, 3, 4, 5], 6 ) );

	deepEqual( pushOntoArray( [1, 2, 3, 4, 5], [7, 8, 9] ), [1, 2, 3, 4, 5, 7, 8, 9],
		'Expected [1, 2, 3, 4, 5, 7, 8, 9] as the result, the result was: ' + pushOntoArray( [1, 2, 3, 4, 5], [7, 8, 9] ) );
});


test( "Split string using commas", 3, function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a split string using commas function' );

    deepEqual( splitListStrUsingComma( 'The, quick, brown, fox jumped over'), ['The', ' quick', ' brown', ' fox jumped over'],
		"Expected ['The', 'quick', 'brown', 'fox jumped over'] as the result, the result was: " + splitListStrUsingComma( 'The, quick, brown, fox jumped over') );

	deepEqual( splitListStrUsingComma( '' ), [],
		'Expected empty string as the result, the result was: ' + splitListStrUsingComma( '' ) );
});


test( "Take sum of any number of arguments", 2, function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' );

    equal( sum( 1, 1, 2, 3, 5, 7 ), 19,
		"Expected 19 as the result, the result was: " + sum( 1, 1, 2, 3, 5, 7 ) );

});


test( "Test if a specified string consists of only whitespace", 3, function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a is only whitespace function' );

    equal( isOnlyWhitespace( '            ' ), true,
		"Expected true as the result, the result was: " + isOnlyWhitespace( '            ' ) );

    equal( isOnlyWhitespace( '    Hi Alex        ' ), false,
	"Expected true as the result, the result was: " + isOnlyWhitespace( '    Hi Alex        ' ) );

});


test( "Illsutrate closure", 3, function() {
    // Verify the method exists
    equal( typeof whoIsAlex, 'object', 'Must contain a whoIsAlex object' );

    equal( whoIsAlex.getIdentity(), 'A man',
		"Expected true as the result, the result was: " + whoIsAlex.getIdentity() );

	whoIsAlex.setIdentity('A legend');
	equal( whoIsAlex.getIdentity(), 'A legend',
		"Expected true as the result, the result was: " + whoIsAlex.getIdentity() );

});

test( "Data Table", 3, function() {
    // Verify the method exists
    equal( typeof DataTable, 'function', 'Must contain a datatable function' );

	dataTable.addColumns('column1', 'column2', 'column3');
	dataTable.addRow('value1A', 'value1B', 'value1C');
	dataTable.addRow('value2A', 'value2B', 'value2C');

    equal( dataTable.getData() , '[{\"column1\":\"value1A\",\"column2\":\"value1B\",\"column3\":\"value1C\"},{\"column1\":\"value2A\",\"column2\":\"value2B\",\"column3\":\"value2C\"}]',
		"Expected [{\"column1\":\"value1A\",\"column2\":\"value1B\",\"column3\":\"value1C\"},{\"column1\":\"value2A\",\"column2\":\"value2B\",\"column3\":\"value2C\"}] as the result, the result was: " + dataTable.getData() );

    // add a fourth column
	dataTable.addColumns('column4');
	dataTable.addRow('value3A', 'value3B', 'value3C', 'value3D');

    equal( dataTable.getData() , '[{\"column1\":\"value1A\",\"column2\":\"value1B\",\"column3\":\"value1C\"},{\"column1\":\"value2A\",\"column2\":\"value2B\",\"column3\":\"value2C\"},{\"column1\":\"value3A\",\"column2\":\"value3B\",\"column3\":\"value3C\",\"column4\":\"value3D\"}]',
	"Expected [{\"column1\":\"value1A\",\"column2\":\"value1B\",\"column3\":\"value1C\"},{\"column1\":\"value2A\",\"column2\":\"value2B\",\"column3\":\"value2C\"}] as the result, the result was: " + dataTable.getData() );

});

// console.log(  );
// console.log( dataTable.addRow('value1A', 'value1B', 'value1C') );
// console.log( dataTable.addRow('value2A', 'value2B', 'value2C') );

// console.log( dataTable.getData() );