/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 )== 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/
test( "String Reverse Test", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 

    // Make sure the result from the reverseString function is valid
    ok( reverseString( 'Santosh Rangam' ) == 'magnaR hsotnaS', 'Expected magnaR hsotnaS as the result, the result was: ' + reverseString( 'Santosh Rangam' ) );
	//console.log(reverseString( 'Santosh Rangam' ));
});

test( "findMinValue Test", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 

    // Make sure the result from the findMinValue function is valid
    ok( findMinValue( [10,3,5,9,2,1] ) == 1, 'Expected 1 as the result, the result was: ' + findMinValue( [10,3,5,9,2,1] ) );
	//console.log(findMinValue( [10,3,5,9,2,1] ));
});

test( "findDistinctValues Test", 2, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 

    // Make sure the result from the findDistinctValues function is valid
    ok( findDistinctValues( [10,3,5,9,3,1] ).toString() == '10,3,5,9,1', 'Expected 10,3,5,9,1 as the result, the result was: ' + findDistinctValues( [10,3,5,9,3,1] ) );
	//console.log(findDistinctValues( [10,3,5,9,3,1] ));
});

test( "doFizzBuzz Test", 1, function() {
    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' ); 

    // Make sure the result from the doFizzBuzz function is valid
    //ok( doFizzBuzz( ), ' ', 'Expected  as the result, the result was: ' + doFizzBuzz(  ) );
	//console.log(doFizzBuzz(  ));
});

test( "removeFruits Test", 2, function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' ); 

    // Make sure the result from the removeFruits function is valid
    ok( removeFruits(["Banana", "Orange", "Apple", "Mango"],["Orange","Mango"] ).toString()== 'Banana,Apple', 'Expected  as the result, the result was: ' + removeFruits(["Banana", "Orange", "Apple", "Mango"],["Orange","Mango"]  ) );
	//console.log(removeFruits(["Banana", "Orange", "Apple", "Mango"],["Orange","Mango"]  ));
});

test( "pushOntoArray Test", 3, function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' ); 

    // Make sure the result from the pushOntoArray function is valid
    ok( pushOntoArray(["Banana", "Orange", "Apple", "Mango"],["Grape","Pineapple"] ).toString()== 'Banana,Orange,Apple,Mango,Grape,Pineapple', 'Expected  as the result, the result was: ' + pushOntoArray(["Banana", "Orange", "Apple", "Mango"],["Grape","Pineapple"]  ) );
	//console.log(removeFruits(["Banana", "Orange", "Apple", "Mango"],["Orange","Mango"]  ));
	
	ok( pushOntoArray(["Banana", "Orange", "Apple", "Mango"],"Grape" ).toString()== 'Banana,Orange,Apple,Mango,Grape', 'Expected  as the result, the result was: ' + pushOntoArray(["Banana", "Orange", "Apple", "Mango"],"Grape"  ) );
});

test( "splitListStrUsingComma Test", 3, function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' ); 

    // Make sure the result from the splitListStrUsingComma function is valid
    ok( splitListStrUsingComma("Banana,Orange,Apple,Mango").toString() == 'Banana,Orange,Apple,Mango', 'Expected  as the result, the result was: ' + splitListStrUsingComma("Banana,Orange,Apple,Mango") );
	
	ok( splitListStrUsingComma("").toString() == '', 'Expected  as the result, the result was: ' + splitListStrUsingComma("") );
});

test( "sum Test", 4, function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' ); 

    // Make sure the result from the sum function is valid
    ok( sum(25,15) == 40, 'Expected  as the result, the result was: ' + sum(25,15) );
	
	ok( sum(25,15,10) == 50, 'Expected  as the result, the result was: ' + sum(25,15,10) );
	
	ok( sum(25) == 25, 'Expected  as the result, the result was: ' + sum(25) );
});

test( "isOnlyWhitespace Test", 4, function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' ); 

    // Make sure the result from the isOnlyWhitespace function is valid
    ok( isOnlyWhitespace("") == false, 'Expected  as the result, the result was: ' + isOnlyWhitespace("") );
	
	ok( isOnlyWhitespace("  ") == true, 'Expected  as the result, the result was: ' + isOnlyWhitespace("  ") );
	
	ok( isOnlyWhitespace("H l o") == false, 'Expected  as the result, the result was: ' + isOnlyWhitespace("H l o") );
});

test( "closureFun Test", 2, function() {
    // Verify the method exists
    equal( typeof closureFun, 'function', 'Must contain a closureFun function' ); 

    // Make sure the result from the closureFun function is valid
    ok( closureFun("Grapes").toString() == 'Apple,Banana,Orange,Grapes', 'Expected  as the result, the result was: ' + closureFun("Grapes") );
});
