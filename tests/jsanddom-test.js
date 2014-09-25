/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
	ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
	//ok( divide( 4, 2 )==2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/

/********************************
Reverse String Unit Test
********************************/
module( "reverseString Unit Test" );
test( "reverseString", 2, function(){
	// Verify the method exists
	equal( typeof reverseString, 'function', 'Must contain a reverseString function' );
	
	// Make sure the result of the test is correctly reversed
	ok( reverseString("ABC")=="CBA", 'Expected "CBA" as the result, the result was: '+ reverseString("ABC") );
});

/********************************
findMinValue Unit Test
********************************/
module( "findMinValue Unit Test" );
test( "findMinValue", 2, function(){
	// Verify the method exists
	equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );
	var testArray=[8,15,4,16,23,42];
	// Make sure the result of the test is the minimum value
	ok( findMinValue(testArray)==4, 'Expected 4 as the result, the result was: '+ findMinValue(testArray) );
});

/********************************
findDistinctValues Unit Test
********************************/
module( "findDistinctValues Unit Test" );
test( "findDistinctValues", 2, function(){
	// Verify the method exists
	equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );
	var tArrayA=[5,10,5,20,23,23,32,10,6,5,90];
	var tArrayB=[5,10,20,23,32,6,90];
	// Make sure the result of the test is the minimum value
    deepEqual( findDistinctValues(tArrayA), tArrayB, 'Expected '+tArrayB+' as the result, the result was: ' + findDistinctValues(tArrayA) );	
	//ok( findDistinctValues(tArrayA).equals(tArrayB), 'Expected '+tArrayB+' as the result, the result was: '+ findDistinctValues(tArrayA) );
});

/********************************
doFizzBuzz Unit Test
********************************/
module( "doFizzBuzz Unit Test" );
test( "doFizzBuzz", 1, function(){
	// Verify the method exists
	equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' );
	// Call doFizzBuzz and check the results. I do not know how to do a unit test for a console log
	doFizzBuzz();
});

/********************************
removeFruits Unit Test
********************************/
module( "removeFruits Unit Test" );
test( "removeFruits", 2, function(){
	// Verify the method exists
	equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );

	var fruits=["Apple","Banana","Tomato"];
	var fruitsToRemove=["Tomato"];
	var fruitResult=["Apple", "Banana"];
	// Make sure the result of the test is the minimum value
	deepEqual( removeFruits(fruits,fruitsToRemove), fruitResult,'Expected '+fruitResult+' as the result, the result was: ' + fruits);
});

/********************************
pushOntoArray Unit Test
********************************/
module( "pushOntoArray Unit Test" );
test( "pushOntoArray", 3, function(){
	// Verify the method exists
	equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' );


	// Test passing an array as 2nd parameter
	var expectedResult=["Apple","Banana","Tomato"];
	var toPushArray=["Tomato"];
	var array=["Apple", "Banana"];
	// ?When passing an array had to add array= to have array be the updated array
	deepEqual( array=pushOntoArray(array,toPushArray), expectedResult,'Expected '+expectedResult+' as the result, the result was: ' + array);
	
	// Test passing a value as 2nd parameter
	var toPush="Pineapple";
	expectedResult=["Apple","Banana","Tomato","Pineapple"];
	// ?When passing a value array is the updated array correctly 
	deepEqual( pushOntoArray(array,toPush), expectedResult,'Expected '+expectedResult+' as the result, the result was: ' + array);

});