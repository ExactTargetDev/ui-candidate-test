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

module( "nmhai3's unit testing" );

test( "reverseString of exacttarget should return tegrattcaxe", function() {
	equal( typeof reverseString, 'function', 'reverseString function must exist' );
	
	equal( reverseString("exacttarget"),  "tegrattcaxe");
});

test( "findMinValue of [1 2 3] should return 1", function() {
	equal( typeof findMinValue, 'function', 'findMinValue function must exist' );
	equal( findMinValue([1,2,3]), 1);
});

test( "findDistinctValues of [1,2,2,3,3,3] should return [1,2,3]", function() {
	equal( typeof findDistinctValues, 'function', 'findDistinctValues function must exist' );
	deepEqual( findDistinctValues([1,2,2,3,3,3]), [1,2,3]);
	notDeepEqual( findDistinctValues([1,2,2,3,3,3]), [1,3,2], "negative testing, just curious");
});

test( "doFizzBuzz testing", function() {
	equal( typeof doFizzBuzz, 'function', 'doFizzBuzz function must exist' );
	var expected = "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz 31 32 Fizz 34 Buzz Fizz 37 38 Fizz Buzz 41 Fizz 43 44 FizzBuzz 46 47 Fizz 49 Buzz Fizz 52 53 Fizz Buzz 56 Fizz 58 59 FizzBuzz 61 62 Fizz 64 Buzz Fizz 67 68 Fizz Buzz 71 Fizz 73 74 FizzBuzz 76 77 Fizz 79 Buzz Fizz 82 83 Fizz Buzz 86 Fizz 88 89 FizzBuzz 91 92 Fizz 94 Buzz Fizz 97 98 Fizz Buzz";
	equal( doFizzBuzz(), expected);
});

test( "removeFruits testing", function() {
	equal( typeof removeFruits, 'function', 'removeFruits function must exist' );

	var fruits = ["apple", "orange", "apple", "mango", "pineapple", "cherry", "banana","kiwi", "kiwi"];
	var fruitsToRemove = ["apple","pineapple","kiwi"];
	
	var expected = ["orange","mango","cherry","banana"]
	deepEqual(removeFruits(fruits, fruitsToRemove), expected);
});

test( "pushOntoArray testing", function() {
	equal( typeof pushOntoArray, 'function', 'pushOntoArray function must exist' );

	var dogs = ["rin tin tin", "yeller", "clifford"];
	var myDog = "lucy";
	var moreDogs = ["benji", "shadow", "scooby"];
	
	deepEqual( pushOntoArray(dogs, myDog), ["rin tin tin", "yeller", "clifford", "lucy"], "pushing string to array" );
	deepEqual( pushOntoArray(dogs, moreDogs), ["rin tin tin", "yeller", "clifford", "lucy", "benji", "shadow", "scooby"], "pushing array onto array");
});