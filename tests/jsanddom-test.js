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
test( "reverseString", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain reverseString function' );
    // Make sure the result from the divide function is valid
    ok( reverseString('Subscribers rock'), 'kcor srebircsbuS', 'Expected "'
    + reverseString('Subscribers rock')  + '" as the result, the result was: ' + reverseString('Subscribers rock') );
});

test( "findMinValue", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

    // Make sure the result from the divide function is valid
    ok( findMinValue([3, 5, 7, 20, .18, '01', -1.1, 12, 'Infinity', 'Infinity', 0.18, -1.1, 12]), -1.1,
        'Expected -1.1 as the result, the result was: '
        + findMinValue([3, 5, 7, 20, .18, '01', -1.1, 12, 'Infinity', 'Infinity', 0.18, -1.1, 12]) );
});

test( "findDistinctValues", 2, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain findDistinctValues function' );
    // Make sure the result from the divide function is valid
    ok( findDistinctValues([1, 2, 2, 3, 4, 5]), [1, 2, 3, 4, 5],
        'Expected [1, 2, 3, 4, 5] as the result, the result was: ' +  findDistinctValues([1, 2, 2, 3, 4, 5]));
});

test( "doFizzBuzz", 2, function() {
    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'Must contain doFizzBuzz function' );
    // Make sure the result from the divide function is valid
    ok( doFizzBuzz(), 1,
        'Expected 1 as the result, the result was: ' + doFizzBuzz() );
});

test( "removeFruits", 2, function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain removeFruits function' );
    // Make sure the result from the divide function is valid
    ok( removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana']),
        ['apple','orange','kiwi','pear', 'plum', 'strawberry'],
        'Expected [apple, orange,kiwi,pear, plum, strawberry] as the result, the result was: ' +
        removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana']) );
});

test( "pushOntoArray", 2, function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain pushOntoArray function' );
    // Make sure the result from the divide function is valid
    ok( pushOntoArray([1, 2, 3, 4, 5], 6), [1, 2, 3, 4, 5, 6],
        'Expected 1, 2, 3, 4, 5, 6 as the result, the result was: ' + pushOntoArray([1, 2, 3, 4, 5], 6), [1, 2, 3, 4, 5, 6] );
});

test( "pushOntoArray", 2, function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain pushOntoArray function' );
    // Make sure the result from the divide function is valid
    ok( pushOntoArray([1, 2, 3, 4, 5], [7, 8, 9]), [1, 2, 3, 4, 5, 7, 8, 9],
        'Expected 1, 2, 3, 4, 5, 7, 8, 9 as the result, the result was: ' + pushOntoArray([1, 2, 3, 4, 5], [7, 8, 9]));
});

test( "splitListStrUsingComma", 2, function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain splitListStrUsingComma function' );
    // Make sure the result from the divide function is valid
    ok( splitListStrUsingComma('The, quick, brown, fox jumped over'), ['The', 'quick', 'brown', 'fox jumped over'],
        'Expected The, quick, brown, fox jumped over as the result, the result was: '
        + splitListStrUsingComma('The, quick, brown, fox jumped over'));
});

test( "splitListStrUsingComma", 2, function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain splitListStrUsingComma function' );
    // Make sure the result from the divide function is valid
    ok( splitListStrUsingComma(''), [], 'Expected [] as the result, the result was: ' + splitListStrUsingComma(''));
});

test( "isOnlyWhitespace", 2, function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain isOnlyWhitespace function' );
    // Make sure the result from the divide function is valid
    ok( isOnlyWhitespace(' '), true, 'Expected true as the result, the result was: ' + isOnlyWhitespace(' '));
});

test( "DataTable.GetData", 2, function() {
    // Verify the method exists
    equal( typeof DataTable, 'function', 'Must contain DataTable function' );
    // Make sure the result from the divide function is valid
    var newTable = new DataTable();
    ok( newTable.getData(), '{"rows":[],"columns":[]}',
        'Expected {"rows":[],"columns":[]} as the result, the result was: ' + newTable.getData() );
});

test( "DataTable.GetData", 2, function() {
    // Verify the method exists
    equal( typeof DataTable, 'function', 'Must contain DataTable function' );
    // Make sure the result from the divide function is valid
    var newTable = new DataTable();
    newTable.addColumns('column1', 'column2', 'column3');
    ok( newTable.getData(), '{"rows":[],"columns":["column1", "column2", "column3"]}',
        'Expected {"rows":[],"columns":["column1", "column2", "column3"]} as the result, the result was: ' + newTable.getData() );
});

test( "DataTable.GetData", 2, function() {
    // Verify the method exists
    equal( typeof DataTable, 'function', 'Must contain DataTable function' );
    // Make sure the result from the divide function is valid
    var newTable = new DataTable();
    newTable.addRows('value1A', 'value1B', 'value1C');
    ok( newTable.getData(), '{"rows":[{"column1":"value1A", "column2":"value1B", "column3":"value1C"}],"columns":["column1", "column2", "column3"]}',
        'Expected {"rows":[{"column1":"value1A", "column2":"value1B", "column3":"value1C"}],"columns":["column1", "column2", "column3"]} as the result, the result was: ' + newTable.getData() );
});