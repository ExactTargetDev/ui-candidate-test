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
// Reverse String Test
test( "Reverse String test", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 

    // Make sure the result of the string is backwards from original string
    ok( reverseString( "Subscribers rock" ), 'kcor srebircsbuS', 'Expected "kcor srebircsbuS" as the result, the result was: ' + reverseString( "Subscribers rock" ) );
});

// Minimum Value Test
test( "Find Minimum Value test", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 

    // Make sure the result returns the lowest value
    var min_value_test_array = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
    ok( findMinValue( min_value_test_array ), -1.1, 'Expected -1.1 as the result, the result was: ' + findMinValue( min_value_test_array ) );
});

// Distinct Values Test
test( "Find Distinct Values test", 2, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 

    // Make sure only distinct values are returned
    var distinct_value_test_array = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry', 'pear', 'banana'];
    var distinct_value_test_array2 = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
    ok( findDistinctValues( distinct_value_test_array ), distinct_value_test_array2, 'Expected arrays to have same values' );
});

// Fizz Buzz Test
test( "Fizz Buzz test", 2, function() {
    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' ); 

    // Make sure returns correct fizz buzz array
    var fizz_buzz_test_array = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz", "Fizz", 52, 53, "Fizz", "Buzz", 56, "Fizz", 58, 59, "FizzBuzz", 61, 62, "Fizz", 64, "Buzz", "Fizz", 67, 68, "Fizz", "Buzz", 71, "Fizz", 73, 74, "FizzBuzz", 76, 77, "Fizz", 79, "Buzz", "Fizz", 82, 83, "Fizz", "Buzz", 86, "Fizz", 88, 89, "FizzBuzz", 91, 92, "Fizz", 94, "Buzz", "Fizz", 97, 98, "Fizz", "Buzz"];
    
    ok( doFizzBuzz(), fizz_buzz_test_array, 'Expected arrays to have same values' );
});

// Remove Fruits Test
test( "Remove Fruits test", 2, function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' ); 

    // Make sure correct fruits are removed
    var fruits = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
    var fruitsToRemove = ['pear', 'banana'];
    var remove_fruits_control_array = ['apple', 'orange', 'kiwi', 'plum', 'strawberry'];
    ok( removeFruits(fruits, fruitsToRemove), remove_fruits_control_array, 'Expected arrays to have same values' );
});

// Push Onto Array test
test( "Push Onto Array test", 3, function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' ); 

    // Our test arrays
    var starting_push_array = [1, 2, 3, 4, 5];
	var single_number = 6;
	var pushing_array = [7, 8, 9];
	
	var step1_control = [1, 2, 3, 4, 5, 6];
	var step2_control = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	
	// Test if works with single number
	pushOntoArray[starting_push_array, single_number];
    ok( starting_push_array, step1_control, 'Expected arrays to have same values' );
    
    // Test if works with array
	pushOntoArray[starting_push_array, pushing_array];
    ok( starting_push_array, step2_control, 'Expected arrays to have same values' );
});

// Split String w/ Comma Test
test( "Split String w/ Comma test", 3, function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' ); 

    // Test strings
    var test_string1 = 'The, quick, brown, fox jumped over';
	var test_string2 = '';
	
	var test1_control = ['The', ' quick', ' brown', ' fox jumped over'];
	var test2_control = [];
	
	// first test, with full line
    ok( splitListStrUsingComma(test_string1), test1_control, 'Expected arrays to have same values' );
    
    // first test, with empty string
    ok( splitListStrUsingComma(test_string2), test2_control, 'Expected arrays to have same values' );
    
});

// Sum Test
test( "Sum test", 4, function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' ); 

	// first test, with 1 argument
    ok( sum(5), 5, 'Expected 5, sum returned ' + sum(5) );
    
    // second test, with multiple arguments
     ok( sum(1, 2, 3, 4), 10, 'Expected 10, sum returned ' + sum(1, 2, 3, 4) );
    
    // third test, with no arguments
    ok( (sum() === 0), true, 'Expected 0, sum returned ' + sum() );
});

// Whitespace Test
test( "Whitespace test", 5, function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' ); 

	// first test, positive w/ spaces
    ok( isOnlyWhitespace('    '), true, 'Expected true');
    
    // second test, positive w/ spaces and tabs
     ok( isOnlyWhitespace('  		  '), true, 'Expected true');
    
    // third test, positive w/ spaces, tabs, and carriage return
     ok( isOnlyWhitespace('  	\n	  '), true, 'Expected true');
     
     var false_answer = false;
     // negative test, negative w/ spaces, tabs, carriage return and character
     ok( !(isOnlyWhitespace('  	\n	!  ')), true, 'Expected false');
});

// Closure Test
test( "Closure test", 2, function() {
    // Verify the method exists
    equal( typeof closureTest, 'function', 'Must contain a closureTest function' ); 

    // Our test string
    var test_string = 'This is the first half of the sentence, and this is the second half!';
    ok( closureTest(), test_string, 'Expected strings to have same values' );
});

// Create JSON Test
test( "JSON test", 4, function() {
    // Verify the method exists
    equal( typeof create_json_test, 'function', 'Must contain a create_json_test function' ); 

    // Our JSON object
    var sample_json = create_json_test();
    
    // test to make sure we can drill down to each part successfully
    ok( sample_json.number_of_people, 3, 'Object should equal 3' );
    ok( sample_json.people[1].first_name, 'Jane', 'Object should equal Jane' );
    ok( sample_json.people[2].phone_numbers.work, '765-123-4567', 'Object should equal 765-123-4567' );
});

// Create DataTable Test
test( "Data Table test", 4, function() {
   
    // Our new object
    var my_data_table = new DataTable;
    my_data_table.addColumns('column1', 'column2', 'column3'); // add our columns
    my_data_table.addRow('A1', 'A2', 'A3'); // add a row
    my_data_table.addRow('B1', 'B2', 'B3'); // add a 2nd row
    sample_json = my_data_table.getData();
    
    // tests to make sure json was successful
    ok( sample_json[0].column1, 'A1', 'Object should equal A1' );
    ok( sample_json[1].column3, 'B3', 'Object should equal B3' );
    
    // test that the rows and columns properties are private
    var rows = my_data_table.rows;
    var columns = my_data_table.columns;
    ok( (typeof rows == 'undefined'), true, 'Object should be undefined' );
    ok( (typeof columns == 'undefined'), true, 'Object should be undefined' );
});