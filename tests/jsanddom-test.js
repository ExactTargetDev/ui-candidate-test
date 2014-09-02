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
module( "Sam's Unit Tests");
test("reverseString function", function() {
	expect(2);
	
	// verify reverseString() exists
	equal( typeof reverseString, 'function', 'reverseString() calls reverseString function' );
    
    // verify the result from the reverseString funtion is valid
	equal( reverseString( 'Subscribers rock' ), "kcor srebircsbuS", "Expected: 'kcor srebircsbuS' the result was: " +  reverseString( 'Subscribers rock' ) );
});

test( "findMinValue function", function() {
	expect(2);

	// verify findMinValue() exists
	equal( typeof findMinValue, 'function', 'findMinValue() is a function' );

	// verify the result equals -1.1
	equal( findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]), -1.1, 'Expected: -1.1, the result was: ' + findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]) );
});

test( "findDistinctValues function", function() {
	expect(2);

	// verify findDistinctValues() exists
	equal( typeof findDistinctValues, 'function', 'findDistinctValues() is a function');

	// verify the result removes distinct values from an array
	deepEqual( findDistinctValues([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]), [3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity], 'Expected: [3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity], the result was: ' + findDistinctValues([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]));
})

test( "doFizzBuzz function", function() {
	expect(2);

	// verify doFizzBuzz exists
	equal( typeof doFizzBuzz, 'function', 'doFizzBuzz() is a function');

	// uses a crazy long string to print out 'Fizz' when 3, 'Buzz' when 5, 'FizzBuzz' when 3 & 5
	equal( doFizzBuzz(), "12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz1617Fizz19BuzzFizz2223FizzBuzz26Fizz2829FizzBuzz3132Fizz34BuzzFizz3738FizzBuzz41Fizz4344FizzBuzz4647Fizz49BuzzFizz5253FizzBuzz56Fizz5859FizzBuzz6162Fizz64BuzzFizz6768FizzBuzz71Fizz7374FizzBuzz7677Fizz79BuzzFizz8283FizzBuzz86Fizz8889FizzBuzz9192Fizz94BuzzFizz9798FizzBuzz", "Expected 12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz1617Fizz19BuzzFizz2223FizzBuzz26Fizz2829FizzBuzz3132Fizz34BuzzFizz3738FizzBuzz41Fizz4344FizzBuzz4647Fizz49BuzzFizz5253FizzBuzz56Fizz5859FizzBuzz6162Fizz64BuzzFizz6768FizzBuzz71Fizz7374FizzBuzz7677Fizz79BuzzFizz8283FizzBuzz86Fizz8889FizzBuzz9192Fizz94BuzzFizz9798FizzBuzz as the result, the result was: " + doFizzBuzz() );
});

test( "removeFruits function", function(){
	expect(2);

	// verify removeFruits() exists
	equal( typeof removeFruits, 'function', 'removeFruits() is a function');

	// verify that one array is removed from the other
	deepEqual( removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana']), ["apple", "orange", "kiwi", "plum", "strawberry"], 'Expected: ["apple", "orange", "kiwi", "plum", "strawberry"], the result was: ' + removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana']) );
});

test( "pushOntoArray function", function() {
	expect(3);

	// verify pushOntoArray() exists
	equal( typeof pushOntoArray, 'function', 'pushOntoArray() is a function' );

	// verify pushing a simple value onto the array
	deepEqual( pushOntoArray( [1, 2, 3, 4, 5], 6 ), [1, 2, 3, 4, 5, 6], 'Expected: [1, 2, 3, 4, 5, 6], the result was: ' + pushOntoArray( [1, 2, 3, 4, 5], 6 ) );

	// verify pushing an array onto the target array
	deepEqual( pushOntoArray( [1, 2, 3, 4, 5], [7, 8, 9] ), [1, 2, 3, 4, 5, 7, 8, 9], 'Expected: [1, 2, 3, 4, 5, 7, 8, 9], the result was: ' + pushOntoArray( [1, 2, 3, 4, 5], [7, 8, 9] ) );
});

test( "splitListStrUsingComma function", function(){
	expect(3);

	// verify splitListStrUsingComma() exists
	equal( typeof splitListStrUsingComma, 'function', 'splitListStrUsingComma() is a function' );

	// verify if the argument is an empty string, it will return an empty array
	deepEqual( splitListStrUsingComma(''), [], 'Expected: [], the result was: ' + splitListStrUsingComma('') );

	// verify the string is split correctly
	deepEqual( splitListStrUsingComma('The, quick, brown, fox jumped over'), ["The", " quick", " brown", " fox jumped over"], 'Expected: ["The", " quick", " brown", " fox jumped over"], the result was ' + splitListStrUsingComma('The, quick, brown, fox jumped over') );
});

test( "sum function", function() {
	expect(2);

	// verify sum() exists
	equal( typeof sum, 'function', 'sum() is a function' );

	// verify the method will take any number of arguments
	equal( sum(1, 1, 2, 3, 5, 7), 19, 'Expected: 19, the result was ' + sum(1, 1, 2, 3, 5, 7) );
});

test( "isOnlyWhitespace", function() {
	expect(3);

	// verify isOnlyWhitespace() exists
	equal( typeof sum, 'function', 'isOnlyWhitespace() is a function' );

	// verify returns TRUE if string contains ONLY whitepace
	ok( isOnlyWhitespace('   '), true, 'Expected: true, the result was ' + isOnlyWhitespace('   ') );

	// verify returns FALSE if string contains whitepace. NOTE: using  *!* the not operator
	ok( !isOnlyWhitespace('  sam i am  '), false, 'Expected: false, the result was ' + isOnlyWhitespace('  sam i am  ') );
});