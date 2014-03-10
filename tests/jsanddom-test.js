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
module("String Reverse Unit Test");
test("String Reverse Test", 2, function(){
	equal( typeof reverseString, 'function', 'Must contain reverseString function');
	ok( reverseString('Subscribers rock'),"kcor srebircsbuS", "Expected deiR as result, test result was: " + reverseString('Subscribers rock'));
});

module("Minimum Value Unit Test");
test("Minimum Value Test", 2, function(){
	equal( typeof findMinValue, 'function', 'Must contain findMinValue function');
	var x = [3, 4, 6, 1, 2, 9, 7, 4, 5];
	ok( findMinValue(x), 1, "Expected 1 as result, test result was: " + findMinValue(x));
	
});

module("Distinct Values Unit Test");
test("Distinct Values Test", 2, function(){
	equal( typeof findDistinctValues, 'function', 'Must contain findDistinctVaulues function');
	var x = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
	ok( findDistinctValues(x), [3, 5, 7, 20, 01], "Expected [3, 5, 7, 20, 01], test result was: " + findDistinctValues(x));
});

module("Remove Fruit Unit Test");
test("Remove Fruit Test", 2, function(){
	equal( typeof removeFruits, 'function', 'Must contain removeFruits function');
	var x = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
	var y = ['pear', 'banana'];
	ok( removeFruits(x, y), ['apple', 'orange', 'kiwi', 'plum', 'strawberry'], "Expected ['apple', 'orange', 'kiwi', 'plum', 'strawberry'], test result was: " + removeFruits(x, y));
});

module("Push Onto Array Unit Test");
test("Push Onto Array Test", 3, function(){
	equal( typeof pushOntoArray, 'function', 'Must contain pushOntoArray function');
	var x = [1, 2, 3, 4, 5];
	var y = 6;
	var z = [7, 8, 9];
	ok ( pushOntoArray(x, y), [1, 2, 3, 4, 5, 6], "Expected [1, 2, 3, 4, 5, 6], test result was: " + pushOntoArray(x, y));
	ok ( pushOntoArray(x, z), [1, 2, 3, 4, 5, 7, 8, 9], "Expected [1, 2, 3, 4, 5, 7, 8, 9], test result was: " + pushOntoArray(x, z));

});

module("Split Strings Using Commas Unit Test");
test("Split String Test", 2, function(){
	equal ( typeof splitListStrUsingComma, 'function', 'Must contain splitListStrUsingComma function');
	ok ( splitListStrUsingComma('The, quick, brown, fox jumped over'), ['The', 'quick', 'brown', 'fox jumped over'], "Expected ['The', 'quick', 'brown', 'fox jumped over'], test result was: " + splitListStrUsingComma('The, quick, brown, fox jumped over'));
});

module("Sum Unit Test");
test("Sum Test", 2, function(){
	equal( typeof sum, 'function', 'Must contain sum function');
	ok( sum(1, 1, 2, 3, 5, 7), 19, "Expected 19, test result was: " + sum(1, 1, 2, 3, 5, 7));
});
