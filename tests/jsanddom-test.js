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

/********************************
To Reverse the Input String
*********************************/
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Should reverse the input String' );

    // Make sure the result from the divide function is valid
   // ok( reverseString('exact'),'tcaxe' , 'Expected tcaxe as the result, the result was: ' + reverseString('exact') );
    ok( reverseString('Subscribers rock'),'kcor srebircsbuS' , 'Expected kcor srebircsbuS as the result, the result was: ' + reverseString('Subscribers rock'));
});

/**********************************
 To find Minimum value in the array
 *********************************/
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Minimum value in the array' );

    // Make sure the result from the divide function is valid
    ok( findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]),-1.1 , 'Expected -1.1 as the result, the result was: ' +findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]) );
});

/**********************************
 To find distinct values in an array
 *********************************/
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Distinct values in an array' );

    // Make sure the result from the divide function is valid
    ok( findDistinctValues([1,5,7,3,5,1,3]),[1,5,7,3] , 'Expected [1,5,7,3] as the result, the result was: ' + findDistinctValues([1,5,7,3,5,1,3]) );
});

/****************************************
 To remove elements from array to another
 ***************************************/
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'removing array value from another array' );

    // Make sure the result from the divide function is valid
    ok( removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'],['pear', 'banana']),['apple', 'orange', 'kiwi', 'plum', 'strawberry'] , 'Expected [apple,orange,kiwi, plum, strawberry] as the result, the result was: ' +  removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'],['pear', 'banana']));
});

/****************************************
 To push new elements in an array:  test 1
 ***************************************/
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'To push a number 6' );

    // Make sure the result from the divide function is valid
    ok( pushOntoArray([1, 2, 3, 4, 5],6),[1, 2, 3, 4, 5, 6] , 'Expected [1, 2, 3, 4, 5, 6] as the result, the result was: ' +pushOntoArray([1, 2, 3, 4, 5],6));
});

/****************************************
 To push new elements in an array:  test 2
 ***************************************/
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'To push a array [7, 8, 9]' );

    // Make sure the result from the divide function is valid
    ok( pushOntoArray([1, 2, 3, 4, 5],[7, 8, 9]),[1, 2, 3, 4, 5, 7, 8, 9] , 'Expected [1, 2, 3, 4, 5, 7, 8, 9] as the result, the result was: ' +pushOntoArray([1, 2, 3, 4, 5],[7, 8, 9]));
});

/*****************************************************
 To split string using comma as your delimiter : test 1
 ****************************************************/
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'To split empty string' );

    // Make sure the result from the divide function is valid
    ok( splitListStrUsingComma(''),[] , 'Expected [] as the result, the result was: ' +splitListStrUsingComma(''));
});

/*****************************************************
 To split string using comma as your delimiter : test 1
 ****************************************************/
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'To split string The, quick, brown, fox jumped over' );

    // Make sure the result from the divide function is valid
    ok( splitListStrUsingComma('The, quick, brown, fox jumped over'),['The', ' quick', ' brown', ' fox jumped over'] , 'Expected [The,  quick,  brown,  fox jumped over] as the result, the result was: ' +splitListStrUsingComma('The, quick, brown, fox jumped over'));
});

/*****************************************************
 To sum all arguments value
 ****************************************************/
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'To sum all arguments value' );

    // Make sure the result from the divide function is valid
    ok( sum(1, 1, 2, 3, 5, 7),19 , 'Expected 19 as the result, the result was: ' +sum(1, 1, 2, 3, 5, 7));
});

