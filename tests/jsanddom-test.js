/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, expectedResultText(2, divide(4,2)));
});
/********************************
Please create your tests below...
********************************/

module( "String Operations" );
test("Reverse String", function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

    // Verify provided simple string reverse case
    equal( reverseString( 'Subscribers rock'  ), 'kcor srebircsbuS', expectedResultText('kcor srebircsbuS', reverseString('Subscribers rock')));

    // Verify empty string case
    equal( reverseString( ''  ), '', expectedResultText('', reverseString('')));

    // Verify no string case
    equal( reverseString( null ), undefined, expectedResultText(undefined, reverseString(null)));

    // Verify single character Unicode case
    equal( reverseString( 'hello \u035d sir' ), 'ris \u035d olleh', expectedResultText('ris \u035d olleh', reverseString('hello \u035d sir')));
    // Verify failure of combination unicode case (breve)
    notEqual( reverseString( 'hello \u041E \u0306 sir' ), 'ris \u041E \u0306 olleh', expectedResultText('ris \u041E \u0306 olleh', reverseString('hello \u041E \u0306 sir')));
});

test("Split String with Comma", function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' );

    // Verify provided simple no comma string case
    deepEqual( splitListStrUsingComma( 'Subscribers rock'  ), ['Subscribers rock'], expectedResultText(['Subscribers rock'], splitListStrUsingComma('Subscribers rock')));

    // Verify provided multi-comma string case
    deepEqual( splitListStrUsingComma('The, quick, brown, fox jumped over'), ['The', ' quick', ' brown', ' fox jumped over'], expectedResultText(['The', ' quick', ' brown', ' fox jumped over'], splitListStrUsingComma('The, quick, brown, fox jumped over')));

    // Verify empty string case
    deepEqual( splitListStrUsingComma(''), [], expectedResultText([], splitListStrUsingComma('')));

    // Verify not-a-string case
    deepEqual( splitListStrUsingComma(42), [], expectedResultText([], splitListStrUsingComma(42)));

    // Verify null case
    deepEqual( splitListStrUsingComma(null), [], expectedResultText([], splitListStrUsingComma(null)));
});

test("Is Only Whitespace", function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' );

    // Verify simple empty string case return true
    ok( isOnlyWhitespace(''), expectedResultText(true, isOnlyWhitespace('')));

    // Verify returns false with letters in a string
    notOk( isOnlyWhitespace('Subscribers rock'), expectedResultText(false, isOnlyWhitespace('Subscribers rock')));

    // Verify returns true with only spaces and tabs in a string
    ok( isOnlyWhitespace('        '), expectedResultText(true, isOnlyWhitespace('        ')));

    // Verify returns true with only spaces, tabs, and line breaks in a string
    ok( isOnlyWhitespace('   \n     '), expectedResultText(true, isOnlyWhitespace('   \n     ')));

    // Verify returns false with null argument
    notOk( isOnlyWhitespace(null), expectedResultText(false, isOnlyWhitespace(null)));

    // Verify returns false with no argument
    notOk( isOnlyWhitespace(), expectedResultText(false, isOnlyWhitespace()));

    // Verify returns false with non-string argument
    notOk( isOnlyWhitespace(42), expectedResultText(false, isOnlyWhitespace(42)));
});

module( "Array Operations" );
test("Find Min Value", function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

    // Verify simple full array case
    equal( findMinValue([2,4,7,11,1,14]), 1, expectedResultText(1, findMinValue([2,4,7,11,1,14])));

    // Verify negative number case
    equal( findMinValue([2,4,7,-11,1,14]), -11, expectedResultText(-11, findMinValue([2,4,7,-11,1,14])));

    // Verify missing value array case
    equal( findMinValue([2,null,7,11,null,14]), 2, expectedResultText(2, findMinValue([2,null,7,11,null,14])));

    // Verify some values not number array case
    equal( findMinValue([2,'i\'m a string',7,11,{hello: true},14]), 2, expectedResultText(2, findMinValue([2,null,7,11,null,14])));

    // Verify decimal value array case
    equal( findMinValue([2,0.1,7,11,4.6,14]), 0.1, expectedResultText(0.1, findMinValue([2,0.1,7,11,4.6,14])));

    // Verify null argument handling
    equal( findMinValue(null), undefined, expectedResultText(undefined, findMinValue(null)));

    // Verify non-array case
    equal( findMinValue('not an array'), undefined, expectedResultText(undefined, findMinValue('not an array')));
});

test("Find Distinct Values", function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );

    // Verify provided duplicates test case
    deepEqual( findDistinctValues([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]), [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity], expectedResultText([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity], findDistinctValues([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12])));

    // Verify simple full number array case
    deepEqual( findDistinctValues([2,4,7,2,7,5]), [2,4,7,5], expectedResultText([2,4,7,5], findDistinctValues([2,4,7,2,7,5])));

    // Verify mixed object type case
    deepEqual( findDistinctValues([2,{hello:true},'hi',null,2,null,7,undefined, {hello: 'true'}, {hello: true},'hi','terra']), [2,{hello:true},'hi',null,7,undefined,{hello:'true'},'terra'], expectedResultText([2,{hello:true},'hi',null,7,undefined,{hello:'true'},'terra'], findDistinctValues([2,{hello:true},'hi',null,2,null,7,undefined,{hello: 'true'}, {hello: true},'hi','terra'])));

    // Verify null argument handling
    equal( findDistinctValues(null), undefined, expectedResultText(undefined, findDistinctValues(null)));

    // Verify non-array case
    equal( findDistinctValues('not an array'), undefined, expectedResultText(undefined, findDistinctValues('not an array')));
});

test("Remove Fruits", function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );

    // Verify provided fruit string test case
    deepEqual( removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana']), ['apple', 'orange', 'kiwi', 'plum', 'strawberry'], expectedResultText(['apple', 'orange', 'kiwi', 'plum', 'strawberry'], removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana'])));

    // Verify null first argument handling
    equal( removeFruits(null, ['banana', 'pear']), undefined, expectedResultText(undefined, removeFruits(null, ['banana', 'pear']))); 

    // Verify null second argument handling
    deepEqual( removeFruits(['banana', 'pear'], null), ['banana', 'pear'], expectedResultText(['banana', 'pear'], removeFruits(['banana', 'pear'], null))); 

    // Verify we keep non-removed duplicates
    deepEqual( removeFruits(['pear','banana', 'pear'], ['banana']), ['pear', 'pear'], expectedResultText(['pear', 'pear'], removeFruits(['pear', 'banana', 'pear'], null))); 

    // Verify that numbers are basically fruits
    deepEqual( removeFruits([1,2,3,4,5,6], [2,4,6]), [1,3,5], expectedResultText([1,3,5], removeFruits([1,2,3,4,5,6], [2,4,6]))); 

    // Verfify deep compare removal of objects (also a type of fruit)
    deepEqual( removeFruits([{hello:true}, {hello:false}, {bob:true}, {bob:false, x:true}, {bob:false}], [{hello:false}, {bob:false}]), [{hello:true}, {bob:true}, {bob:false, x:true}], expectedResultText([{hello:true}, {bob:true}, {bob:false, x:true}],removeFruits([{hello:true}, {hello:false}, {bob:true}, {bob:false, x:true}, {bob:false}],[{hello:false}, {bob:false}])));
});

test("Push Onto Array", function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' );

    // Verify simple provided single element case
    deepEqual( pushOntoArray([1,2,3,4,5], 6), [1,2,3,4,5,6], expectedResultText([1,2,3,4,5,6], pushOntoArray([1,2,3,4,5], 6)));

    // Verify simple provided array element case
    deepEqual( pushOntoArray([1,2,3,4,5], [7,8,9]), [1,2,3,4,5,7,8,9], expectedResultText([1,2,3,4,5,7,8,9], pushOntoArray([1,2,3,4,5], [7,8,9])));

    // Verify null first argument case
    equal( pushOntoArray(null, [6,7,8]), undefined, expectedResultText(undefined, pushOntoArray(null, [6,7,8])));

    // Verify null second argument case
    deepEqual( pushOntoArray([6,7,8], null), [6,7,8,null], expectedResultText([6,7,8,null], pushOntoArray([6,7,8], null)));

    // Verify falsy second arugment case
    deepEqual( pushOntoArray([6,7,8], false), [6,7,8, false], expectedResultText([6,7,8,false], pushOntoArray([6,7,8], false)));
});

module( "Misc Operations" );
test("FizzBuzz", function() {
    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' );

    // Verify the function runs without exceptions
    ok( doFizzBuzz() );
});

test("Sum", function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' );

    // Verify provided simple full number list
    equal( sum(1,1,2,3,5,7), 19, expectedResultText(19, sum(1,1,2,3,5,7)));

    // Verify argument list with an undefined argument
    equal( sum(1,undefined,2,3), 6, expectedResultText(6, sum(1,undefined,2,3)));

    // Verify calling with empty argument list
    equal( sum(), 0, expectedResultText(0, sum()));

    // Verify argument list with decimal arguments
    equal( sum(1.3,2.4,3.3), 7, expectedResultText(7, sum(1.3,2.4,3.3)));

    // Verify argument list with negative arguments
    equal( sum(1.3,2.4,-3.3, -1), -.6, expectedResultText(-.6, sum(1.3,2.4,-3.3,-1)));

    // Verify string argument is ignored
    equal( sum(1,'3',2,3), 6, expectedResultText(6, sum(1,'3',2,3)));
});

test("Closure", function() {
    // Verify the method exists
    equal( typeof closed, 'function', 'Must contain a closed function' );

    // Start first closure
    var closureFunction = closed();
    var callResult = closureFunction();

    equal(callResult, 1, expectedResultText(1, callResult));
    callResult = closureFunction();
    equal(callResult, 2, expectedResultText(2, callResult));
    callResult = closureFunction();
    equal(callResult, 3, expectedResultText(3, callResult));

    // Start second closure
    var newClosureFunction = closed();
    callResult = newClosureFunction();

    equal(callResult, 1, expectedResultText(1, callResult));
    callResult = newClosureFunction();
    equal(callResult, 2, expectedResultText(2, callResult));
    callResult = newClosureFunction();
    equal(callResult, 3, expectedResultText(3, callResult));

    // Show first closure still has state
    callResult = closureFunction();
    equal(callResult, 4, expectedResultText(4, callResult));

});

test("People", function() {
    // Verify the method exists
    equal( typeof Person, 'function', 'Must contain a Person constructor function' );

    // Verify people were constructed
    equal(people['Mike'].lastName, 'Wazowski', expectedResultText('Wazowski', people['Mike'].lastName));

    // Verify phone prop access
    equal(people['Tip'].phoneNumbers.cellPhone, '555-887-9573', expectedResultText('555-887-9573', people['Tip'].phoneNumbers.cellPhone));
});

test("Data Table", function() {
    // Verify the method exists
    equal( typeof DataTable, 'function', 'Must contain a DataTable constructor function' );

    var dataTable = new DataTable(); 
    dataTable.addColumns('column1', 'column2', 'column3');
    dataTable.addRow('value1A', 'value1B', 'value1C');
    dataTable.addRow('value2A', 'value2B', 'value2C');

    var data = dataTable.getData();

    // Check a single row1 value
    equal(data.row1.column1, 'value1A', expectedResultText('value1A', data.row1.column1));

    // Check the full second row
    deepEqual(data.row2, {column1: 'value2A', column2:'value2B', column3: 'value2C'}, expectedResultText({column1: 'value2A', column2:'value2B', column3: 'value2C'}, data.row2));
});