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

//this is the first time I've ever used qunit, forgive me if i'm not following stardard practices and good conventions.
//for unit testing, my world before has only been mstests with the moq framework.

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

test( "splitListStrUsingComma testing", function() {
	equal( typeof splitListStrUsingComma, 'function', 'splitListStrUsingComma function must exist' );
	var sauces = "leet,pwn,fail";
	deepEqual( splitListStrUsingComma(sauces), ["leet", "pwn", "fail"]);
});

test( "sum testing", function() {
	equal( typeof sum, 'function', 'sum function must exist' );
	equal( sum(1,2,3), 6, "1 2 3");
	equal( sum(2, Math.PI), 2 + Math.PI, "2 and Pi");
	equal( sum(1,1,.50,.50,.25,.10,.10,.05), 3.50, "$3.50");
});

test( "isOnlyWhitespace testing", function() {
	equal( typeof isOnlyWhitespace, 'function', 'isOnlyWhitespace function must exist' );
	
	var space = " ";
	var spaceAndWord = " word";
	var tab = "	";
	var tabAndWord = "	word";
	
	ok( isOnlyWhitespace(space), "space only");
	ok( isOnlyWhitespace(spaceAndWord) === false, "space and word");
	ok( isOnlyWhitespace(tab), "tab only");
	ok( isOnlyWhitespace(tabAndWord) === false, "tab and word");
});

test( "namespacingViaClosure testing", function() {
	equal( typeof namespacingViaClosure, 'object', 'namespacingViaClosure namespace must exist' );
	
	ok( namespacingViaClosure.privateMethod == undefined );
	equal( namespacingViaClosure.publicMethod(), "public");
	equal( namespacingViaClosure.publicMethodCallingPrivateMethod(), "private");
	
});

test( "peopleCollection object testing", function() {
	equal( typeof peopleCollection, "object", 'peopleCollection object must exists');
	
	
	equal( peopleCollection.people[0].firstName, "bob");
	equal( peopleCollection.people[0].lastName, "saget");
	equal( peopleCollection.people[0].city, "Los Angeles");
	equal( peopleCollection.people[0].state, "CA");
	equal( peopleCollection.people[0].zip, "12345");
	equal( peopleCollection.people[0].phone[0].type, "home");
	equal( peopleCollection.people[0].phone[0].number, "111-222-3333");
	equal( peopleCollection.people[0].phone[1].type, "mobile");
	equal( peopleCollection.people[0].phone[1].number, "111-222-4444");
	equal( peopleCollection.people[0].phone[2].type, "work");
	equal( peopleCollection.people[0].phone[2].number, "111-222-5555");
	
	equal( peopleCollection.people[1].firstName, "johnny");
	equal( peopleCollection.people[1].lastName, "cash");
	equal( peopleCollection.people[1].city, "Nashville");
	equal( peopleCollection.people[1].state, "TN");
	equal( peopleCollection.people[1].zip, "55555");
	equal( peopleCollection.people[1].phone[0].type, "home");
	equal( peopleCollection.people[1].phone[0].number, "555-222-3333");
	equal( peopleCollection.people[1].phone[1].type, "mobile");
	equal( peopleCollection.people[1].phone[1].number, "555-222-4444");
	equal( peopleCollection.people[1].phone[2].type, "work");
	equal( peopleCollection.people[1].phone[2].number, "555-222-5555");
	
});

test( "DataTable object testing", function() {
	equal( typeof DataTable, "function", 'DataTable object must exists');
	
	throws( function() { DataTable().data; }, "assert that accessing the data publicly throws an error" );
	
 	var dt = new DataTable()
		.addColumns("column1", "column2", "column3")
		.addRows("value1A", "value1B", "value1C")
		.addRows("value2A", "value2B", "value2C")
		.addRows("value3A", "value3B", "value3C");
	
	var expectedJSON = '{"columns":["column1","column2","column3"],"rows":[["value1A","value1B","value1C"],["value2A","value2B","value2C"],["value3A","value3B","value3C"]]}';
	deepEqual( dt.getData(), expectedJSON, "getData returns expected json string" );
	
});


