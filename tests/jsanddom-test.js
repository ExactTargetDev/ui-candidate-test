/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "divide test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    ok( divide(4,2),2,'Expected 2 as the result, the result was: ' +divide(4,2));
});


/********************************
Please create your tests below...
********************************/
test( "Reverse String ", function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

    // Make sure the result from the reverseString function is valid
    ok( reverseString('Subscribers rock'), 'kcor srebircsbuS', 'Expected "kcor srebircsbuS" as the result, the result was: ' + reverseString('Subscribers rock') );
});

test( "Minimum Value ", function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

    // Make sure the result from the reverseString function is valid
    ok( findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]), -1.1, 'Expected -1.1 as the result, the result was: ' + findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]) );
});

test( "Distinct Values", function() {
    // Verify the method exists
    equal( typeof findDistinct, 'function', 'Must contain a findDistinctValues function' );

    // Make sure the result from the reverseString function is valid
    ok( findDistinct([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]), [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, 0.18], 'Expected [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, 0.18] as the result, the result was: ' + findDistinct([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]) );
});
test( "Remove Fruits ", function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );

    // Make sure the result from the reverseString function is valid
    ok( removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'],['pear', 'banana']),
        ['apple', 'orange', 'kiwi', 'plum', 'strawberry'], "Expected ['apple', 'orange', 'kiwi', 'plum', 'strawberry'] as the result, the result was: " + removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'],['pear', 'banana']) );
});
test( "Push Onto Array", function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' );

    // Make sure the result from the reverseString function is valid
    ok( pushOntoArray([1, 2, 3, 4, 5],[7, 8, 9]),[1, 2, 3, 4, 5, 7, 8, 9], "Expected [1, 2, 3, 4, 5, 7, 8, 9] as the result, the result was: " + pushOntoArray([1, 2, 3, 4, 5],[7, 8, 9]));
});

test( "SplitUsingComa ", function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' );

    // Make sure the result from the reverseString function is valid
    ok( splitListStrUsingComma('The, quick, brown, fox jumped over'),['The', 'quick', 'brown', 'fox jumped over'], "Expected ['The', 'quick', 'brown', 'fox jumped over'] as the result, the result was: " + splitListStrUsingComma('The, quick, brown, fox jumped over'));
});

test( "Sum of no's", function() {
    // Verify the method exists
    equal( typeof abc, 'function', 'Must contain a Sum function' );

    // Make sure the result from the reverseString function is valid
    ok( abc(1, 1, 2, 3, 5, 7),19, "Expected 19 as the result, the result was: " + abc(1, 1, 2, 3, 5, 7));
});

test( "White Space in string", function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' );

    // Make sure the result from the reverseString function is valid
    ok( isOnlyWhitespace(''), true, "Expected true as the result, the result was: " + isOnlyWhitespace(''));
});
test( "Closure test", 2, function() {
    // Verify the method exists
    equal( typeof sampleclosure, 'function', 'Must contain a sampleclosure function' ); 

    // Our test string
    var test_string = 'hello world,welcome';
    ok( sampleclosure(), test_string, 'Expected strings to have same values' );
});
// Create JSON 
test( "JSON test", function() {
    // Verify the method exists
    equal( typeof sample_json, 'function', 'Must contain a sample_json function' ); 

    // Our JSON object
    var sample2 = sample_json();
    
    // test to make sure we can drill down to each part successfully
    ok( sample2.person[0].firstName, 'john', 'Object should equal john' );
    ok( sample2.person[1].phoneNumbers.work, '5104567897', 'Object should equal 5104567897' );
});
// Create DataTable Test
test( "DataTable test", 4, function() {
   
    // Our new object
    var mytable = new Dtable;
    mytable.addColumns('column1', 'column2', 'column3'); // add our columns
    mytable.addRow('A1', 'A2', 'A3'); // add a row
    mytable.addRow('B1', 'B2', 'B3'); // add a 2nd row
    sample_json = mytable.getData();
    
    // tests for json was successful
    ok( sample_json[0].column1, 'A1', 'Object should equal A1' );
    ok( sample_json[1].column3, 'B3', 'Object should equal B3' );
    
    // test that the rows and columns properties are private
    var rows = mytable.rows;
    var columns = mytable.columns;
    ok( (typeof rows == 'undefined'), true, 'Object should be undefined' );
    ok( (typeof columns == 'undefined'), true, 'Object should be undefined' );
}); 
