module( "Example Unit Test" );
test( "Example Test", 3, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    equal( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
    equal( divide( 10, 2 ), 5, 'Expected 5 as the result, the result was: ' + divide( 10, 2 ) );
});

module( "Reverse String Unit Test" );
test( "Reverse String Test", 3, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 

    // Make sure the returned string is a reverse version of argument
    equal( reverseString( "Test" ), "tseT", 'Expected "tseT" as the result, the result was: ' + reverseString( "Test" ) );
    equal( reverseString( "Test String" ), "gnirtS tseT", 'Expected "gnirtS tseT" as the result, the result was: ' + reverseString( "Test String" ) );
});

module( "Find Minimum Value Unit Test" );
test( "Find Minimum Value Test", 3, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 

    // Make sure the lowest number is returned
    equal( findMinValue( [3, 2, 5, 4, 6] ), 2, 'Expected 2 as the result, the result was: ' + findMinValue( [3, 2, 5, 4, 6] ));
    equal( findMinValue( [5, 1, 2, 7, 6] ), 1, 'Expected 1 as the result, the result was: ' + findMinValue( [5, 1, 2, 7, 6] ));
});

module( "Find Distinct Values Unit Test" );
test( "Find Distinct Values Test", 3, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 

    // Make sure the repeated number is deleted
    equal( findDistinctValues( [4, 2, 3, 4, 1] ), [1, 2, 3, 4], 'Expected [1, 2, 3, 4] as the result, the result was: ' + findDistinctValues( [4, 2, 3, 4, 1] ));
    equal( findDistinctValues( [4, 2, 3, 4, 1, 2, 5] ), [1, 2, 3, 4, 5], 'Expected [1, 2, 3, 4, 5] as the result, the result was: ' + findDistinctValues( [4, 2, 3, 4, 1, 2, 5] ));
});

module( "FizzBuzz Unit Test" );
test( "FizzBuzz Test", 2, function() {
    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'Will be done in console' );
    equal( typeof doFizzBuzz, 'function', 'Will be done in console' ); 
    
});

module( "Remove Fruits Unit Test" );
test( "Remove Fruits Test", 2, function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' ); 

    // Make sure the result from the divide function is valid
    equal( removeFruits( ["Strawberry", "Pear", "Banana", "Apple", "Apricot"], ["Pear", "Banana"] ), ["Strawberry", "Apple", "Apricot"], 'Expected ["Strawberry", "Apple", "Apricot"] as the result, the result was: ' + removeFruits( ["Strawberry", "Pear", "Banana", "Apple", "Apricot"], ["Pear", "Banana"] ));
});

module( "Push Onto Array Unit Test" );
test( "Push Onto Array Test", 3, function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' ); 

    // Make sure the result from the divide function is valid
    equal( pushOntoArray( [1, 3, 4, 5], 6 ), [1, 3, 4, 5, 6], 'Expected [1, 3, 4, 5, 6] as the result, the result was: ' + pushOntoArray( [1, 3, 4, 5], 6 ));
   
});

module( "Split List String Using Comma Unit Test" );
test( "Split List String Using Comma Test", 3, function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' ); 

    // Make sure the result from the divide function is valid
    equal( splitListStrUsingComma("This is, a test, string"), ["This is", "a test", "string"], 'Expected ["This is", "a test", "string"] as the result, the result was: ' + splitListStrUsingComma("This is, a test, string"));
    equal( splitListStrUsingComma("This is a test string"), ["This is a test string"], 'Expected ["This is a test string"] as the result, the result was: ' + splitListStrUsingComma("This is a test string"));
});

module( "Sum Unit Test" );
test( "Sum Test", 3, function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' ); 

    // Make sure the result from the divide function is valid
    equal( sum(3, 4, 3), 10, 'Expected 10 as the result, the result was: ' + sum(3, 4, 3));
    equal( sum(3, 4, 3, 5, 5), 20, 'Expected 20 as the result, the result was: ' + sum(3, 4, 3, 5, 5));
});

module( "Only Whitespace Unit Test" );
test( "Only Whitespace Test", 3, function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' ); 

    // Make sure the result from the divide function is valid
    equal( isOnlyWhitespace("   "), true, 'Expected true as the result, the result was: ' + isOnlyWhitespace("   "));
    equal( isOnlyWhitespace("he llo"), false, 'Expected false as the result, the result was: ' + isOnlyWhitespace("he llo"));
});





