/********************************
Unit Test Example
********************************/
/*
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
*/

// helper function
function isArray(val) {
	// since typeof [] == "object", have to get a bit trickier
	// this call returns "[object Array]"
	return (Object.prototype.toString.call([]) == Object.prototype.toString.call(val));
};

/********************************
Please create your tests below...
********************************/

module( 'Reverse String Tests' );
test( 'Basic Test: String of letters', 9, function() {

	ok( 'reverseString' in window, 'reverseString() found.' );
	
	function runTests(inStr, outStr)
	{
		var output = reverseString(inStr);
		
		equal( typeof output, 'string', 'Expected type a string to be returned, got: ' + typeof output );
		equal( output,  outStr, 'Expected "' + outStr + '", got "' + output + '"');
	}
	
	// test letters...
	runTests('gfedcba', 'abcdefg');
	runTests('abcdefg', 'gfedcba');
	
	// a string of numbers...
	runTests('12345', '54321');
	
	// letters, spaces, punctuation
	runTests('The "quick" brown fox...', '...xof nworb "kciuq" ehT');
	
});



module('Find minimum value in array of numbers');
test( 'Basic Tests', 7, function() {
	
	ok( 'findMinValue' in window, 'findMinValue() found.' );
	
	// make it easier to run a few similar tests in a row...
	function runTest(inputArray, expectedOutput)
	{
		var output = findMinValue(inputArray);
		
		equal( typeof output, 'number', 'Expected type "number" to be returned, got: ' + typeof output );
		equal( output,  expectedOutput, 'Expected "' + expectedOutput + '", got "' + output + '"');
	}
	
	// sorted array, asc & desc
	runTest([1,2,3,4,5], 1);
	runTest([5,4,3,2,1], 1);
	
	// array of random numbers
	runTest([1024,60,50,75,99,42,184], 42);
	
});



module('Find unique values in an array');
test( 'Basic Tests', 7, function() {
	
	ok( 'findDistinctValues' in window, 'findDistinctValues() found.' );
	
	// make it easier to run a few similar tests in a row...
	function runTest(inputArray, expectedOutput)
	{
		var output = findDistinctValues(inputArray);
		
		ok( isArray(output), 'Expected returned value to be an array: ' + isArray(output).toString() );
		deepEqual( output,  expectedOutput, 'Expected [' + expectedOutput.join(', ') + '], got [' + output.join(', ') + ']');
	}
	
	// all the same value
	runTest([1,1,1,1,1], [1]);
	
	// all different values
	runTest([1,2,3,4,5], [1,2,3,4,5]);
	
	// mix of unique & repeated values
	runTest([1,1,1,2,3,4,4,5,"Javascript","Javascript","Javascript",10,"?!"], [1,2,3,4,5,"Javascript",10,"?!"]);
	
});



module('FizzBuzz');
test( 'Basic Tests', 1, function() {

	ok( 'doFizzBuzz' in window, 'doFizzBuzz() found.' );

});



module('Remove value from an array');
test( 'Basic Tests', 7, function() {
	
	ok( 'removeFruits' in window, 'removeFruits() found.' );
	
	// make it easier to run a few similar tests in a row...
	function runTest(inputArray, removeArray, expectedOutput)
	{
		var output = removeFruits(inputArray, removeArray);
		
		ok( isArray(output), 'Expected returned value to be an array: ' + isArray(output).toString() );
		deepEqual( output,  expectedOutput, 'Expected [' + expectedOutput.join(', ') + '], got [' + output.join(', ') + ']');
	}
	
	// remove one item
	runTest(["Apple", "Orange", "Grape", "Pear", "Plum"], ["Orange"], ["Apple", "Grape", "Pear", "Plum"]);
	
	// remove three
	runTest(["Apple", "Orange", "Grape", "Pear", "Plum"], ["Pear", "Orange", "Apple"], ["Grape", "Plum"]);

	// remove three, one item in remove array does not exist in original array
	runTest(["Apple", "Orange", "Grape", "Pear", "Plum"], ["Pear", "Orange", "Blackberry"], ["Apple", "Grape", "Plum"]);
	
});



module('Push onto an array');
test( 'Basic Tests', 5, function() {
	
	ok( 'pushOntoArray' in window, 'pushOntoArray() found.' );
	
	// make it easier to run a few similar tests in a row...
	function runTest(inputArray, toPush, expectedOutput)
	{
		var originalArrayLength = inputArray.length,
			numOfItemsToPush = (isArray(toPush)) ? toPush.length:1,
			expectedArrayLength = originalArrayLength + numOfItemsToPush;
		
		pushOntoArray(inputArray, toPush);
		
		equal( inputArray.length, expectedArrayLength, 'New expected length of array is '+expectedArrayLength+', got: ' + inputArray.length.toString() );
		deepEqual( inputArray,  expectedOutput, 'Expected [' + expectedOutput.join(', ') + '], got [' + inputArray.join(', ') + ']');
	}
	
	// start out with an array
	var inputArray = [42, "So long"];
	
	// test pushing a single item
	runTest( inputArray, 256, [42, "So long", 256] );
	
	// test pushing an array
	runTest( inputArray, ["Thanks", 4096, 5, Math.PI], [42, "So long", 256, "Thanks", 4096, 5, Math.PI] );
	
});



module('Split string by commas');
test( 'Basic Tests', 9, function() {
	
	ok( 'splitListStrUsingComma' in window, 'splitListStrUsingComma() found.' );
	
	// make it easier to run a few similar tests in a row...
	function runTest(inputString, expectedOutput)
	{
		var output = splitListStrUsingComma(inputString);
		
		ok( isArray(output), 'Expected returned value to be an array: ' + isArray(output).toString() );
		deepEqual( output,  expectedOutput, 'Expected [' + expectedOutput.join(', ') + '], got [' + output.join(', ') + ']');
	}
	
	// general tests with numbers, letters, words, other punc
	runTest('1,2,3', ['1','2','3']);
	runTest('Javascript, jQuery, prototype', ['Javascript',' jQuery',' prototype']);
	runTest('?,/,!,a,b,c, ,42', ['?','/','!','a','b','c',' ','42']);
	
	// special case of empty string
	runTest('', []);
	
});



module('Sum arbitrary number of arguments passed to a function');
test( 'Basic Tests', 9, function() {
	
	ok( 'sum' in window, 'sum() found.' );
	
	// make it easier to run a few similar tests in a row...
	function runTest(funcArguments, expectedOutput)
	{
		var output = sum.apply(null, funcArguments),
			outputType = typeof output;
		
		equal( outputType, 'number', 'Expected returned value to be of type "number", got: ' + outputType );
		equal( output,  expectedOutput, 'Expected (' + funcArguments.join(' + ') + ') = ' + expectedOutput + ', got: ' + output);
	}
	
	// general test of a 1/multiple args
	runTest([1], 1);
	runTest([1,2,3], 6);
	runTest([1,2,3,2,1,10], 19);
	runTest([1,1,1,-1,1,2,-1,1,1,0,1,3], 10);
	
});



module('Check if string is only whitespace');
test( 'Basic Tests', 15, function() {
	
	ok( 'isOnlyWhitespace' in window, 'isOnlyWhitespace() found.' );
	
	// make it easier to run a few similar tests in a row...
	function runTest(inStr, expectedOutput)
	{
		var output = isOnlyWhitespace(inStr),
			outputType = typeof output;
		
		equal( outputType, 'boolean', 'Expected returned value to be of type "boolean", got: ' + outputType );
		equal( output,  expectedOutput, 'Expected ' + expectedOutput.toString() + ', got: ' + output.toString());
	}
	
	// general test of various strings
	runTest('', false);
	runTest(' ', true);
	runTest('asdf', false);
	runTest('     ', true);
	runTest('	', true);
	runTest("\n\t\n", true);
	runTest("\nasdf\n", false);
	
});




module('DataTable tests');
test( 'Testing if initializied correctly', 5, function() {
	
	ok( 'DataTable' in window, 'DataTable found.' );
	
	var dt = null,
		createdWithoutError = true;

	try {
		dt = new DataTable();
	} catch (err) {
		createdWithoutError = false;
	}
	
	ok( createdWithoutError, 'DataTable object created successfully.' );
	
	ok( 'addColumns' in dt, 'DataTable.addColumns() bound successfully.' );
	ok( 'addRow' in dt, 'DataTable.addRow() bound successfully.' );
	ok( 'getData' in dt, 'DataTable.getData() bound successfully.' );
	
});
test( 'Testing write capability', 2, function() {
		
	var dt = new DataTable(),
		addedColumnsSuccessfully = true,
		addedRowsSuccessfully = true;
	
	try {
		dt.addColumns('A', 'B', 'C');
	} catch (err) {
		addedColumnsSuccessfully = false;
	}
	
	ok( addedColumnsSuccessfully, 'DataTable.addColumns() called successfully.' );
	
	try {
		dt.addRow('1', '2', '3');
	} catch (err) {
		addedRowsSuccessfully = false;
	}
	
	ok( addedRowsSuccessfully, 'DataTable.addRow() called successfully.' );
	
});
test( 'Testing read capability', 10, function() {
		
	var dt = new DataTable(),
		gotDataSuccessfully = true;
	
	dt.addColumns('A', 'B', 'C');
	dt.addRow('1', '2', '3');
	dt.addRow('4', '5', '6');
	dt.addRow('7', '8', '9');
	
	var output = null;
	try {
		output = dt.getData();
	} catch (err) {
		gotDataSuccessfully = false;
	}
	
	ok( gotDataSuccessfully, 'DataTable.getData() called successfully.' );
	
	equal( output[0]['A'], '1', 'Expected [Row0,ColA] = 1, got: ' + output[0]['A']);
	equal( output[0]['B'], '2', 'Expected [Row0,ColB] = 2, got: ' + output[0]['B']);
	equal( output[0]['C'], '3', 'Expected [Row0,ColC] = 3, got: ' + output[0]['C']);
	
	equal( output[1]['A'], '4', 'Expected [Row1,ColA] = 4, got: ' + output[1]['A']);
	equal( output[1]['B'], '5', 'Expected [Row1,ColB] = 5, got: ' + output[1]['B']);
	equal( output[1]['C'], '6', 'Expected [Row1,ColC] = 6, got: ' + output[1]['C']);
	
	equal( output[2]['A'], '7', 'Expected [Row2,ColA] = 7, got: ' + output[2]['A']);
	equal( output[2]['B'], '8', 'Expected [Row2,ColB] = 8, got: ' + output[2]['B']);
	equal( output[2]['C'], '9', 'Expected [Row2,ColC] = 9, got: ' + output[2]['C']);
});