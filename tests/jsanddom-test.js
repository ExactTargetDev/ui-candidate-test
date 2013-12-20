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
module( "String Reversal" );
test( "reverseString() should return the input string backwards", 1, function() {
	var mirrored = reverseString("Timperman");
	equal( mirrored, "namrepmiT", "Timperman backwards is " + mirrored );
});

module( "Arrays" );
test( "findMinValue() should return the smallest number in an array", 2, function() {
	var smallest = findMinValue([5, 3, 7, 290, -4, 4]);
	equal( smallest, -4, "The smallest item in the list is " + smallest );

	smallest = findMinValue([900, 42, 360, 100]);
	equal( smallest, 42, "The answer is " + smallest);
});
test( "findDistinctValues() should return the distinct values in an array", 3, function() {
	var unique = findDistinctValues([1, 2, 2, 3, 5, 2, 5]);
	equal( unique.length, 4, "There are 4 items in the array" );
	deepEqual( unique, [1, 2, 3, 5], "The distinct values are " + unique );

	unique = findDistinctValues([123, "123", 1, 1]);
	deepEqual( unique, [123, "123", 1], "All is equal that should be equal in " + unique);
});

module( "FizzBuzz");
test( "doFizzBuzz() should return proper fizz buzz sequence", 9, function() {
	var fizzBuzz = doFizzBuzz();
	equal(fizzBuzz.length, 100, "There are 1 to 100 in the fizz buzz");
	equal(fizzBuzz[0], 1);
	equal(fizzBuzz[1], 2);
	equal(fizzBuzz[2], "Fizz");
	equal(fizzBuzz[4], "Buzz");
	equal(fizzBuzz[14], "FizzBuzz");

	var counts = _.countBy(fizzBuzz, _.identity);
	equal(counts.Fizz, 27);
	equal(counts.Buzz, 14);
	equal(counts.FizzBuzz, 6);
});

module( "More Arrays" );
test( "removeFruits() should remove the fruits of course", 2, function() {
	var noFruit = removeFruits(["Banana", "Carrot", "Tomato"], ["Banana", "Tomato"]);
	deepEqual( noFruit, ["Carrot"], "The carrot stands alone: " + noFruit );

	noFruit = removeFruits(["Apple", "Orange", "Potato", "Celery"], ["Apple", "Orange"]);
	deepEqual( noFruit, ["Potato", "Celery"], "Only potatos and celery: " + noFruit );
});
test( "pushOntoArray() should add items to an array", 2, function() {
	var combinedArray = pushOntoArray(["Banana", "Carrot", "Tomato"], "Beet");
	deepEqual( combinedArray, ["Banana", "Carrot", "Tomato", "Beet"], "The beet joins the party: " + combinedArray );

	combinedArray = pushOntoArray(["Banana", "Carrot", "Tomato"], ["Beet", "Radish"]);
	deepEqual( combinedArray, ["Banana", "Carrot", "Tomato", "Beet", "Radish"], "The more the merrier: " + combinedArray );
});

module( "String Split");
test( "splitListStrUsingComma() should create an array of tokens delimited by a comma", function() {
	var tokens = splitListStrUsingComma("item1,item2,item3,item4");
	equal(tokens.length, 4);
	deepEqual(tokens, ["item1", "item2", "item3", "item4"]);
});
test( "splitListStrUsingComma() should return an empty array for empty string input", function() {
	deepEqual(splitListStrUsingComma(""), []);
});

module( "Sum");
test( "sum() should sum any number of elements", 2, function() {
	equal(sum(1, 2, 3, 4), 10);
	equal(sum("a", "b", "c", 1, 2, 3), "abc123");
});

module( "Whitespace");
test( "isOnlyWhitespace() should return true when there are only whitespace characters", 2, function() {
	ok( isOnlyWhitespace("            ") );
	ok( !isOnlyWhitespace("      12     4      ") );
});

module( "DataTable" );
test( "DataTable() creates a data table object", function() {
	var dt = new DataTable();
	dt.addColumns('column1', 'column2', 'column3');
    dt.addRows('value1A', 'value1B', 'value1C');
    dt.addRows('value2A', 'value2B', 'value2C');

    deepEqual(dt.getData(), {columns: ["column1", "column2", "column3"], rows: ["value1A", "value1B", "value1C", "value2A", "value2B", "value2C"]});
    ok(!_.has(dt, "_columns"), "Cannot access private columns property");
    ok(!_.has(dt, "_rows"), "Cannot access private rows property");
});

module( "DOM" );
test( "createSelectAndButton() appends select and button to div1", function() {
	createSelectAndButton();
	$("#div1 button").click();
	equal($("#div1 option").length, 4);
});