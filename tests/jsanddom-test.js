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
test( "sum Test",function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' ); 
    ok(sum(4,7), 11, 'the result was: ' + sum(4,7));
    ok(sum(4,7,2,12), 25, 'the result was: ' + sum(4,7,2,12));
    ok(sum(6,5,9,18,42), 80, 'the result was: ' + sum(6,5,9,18,42));
});

test( "reverseString Test",function() {  
	equal( typeof reverseString, 'function', 'Must contain a reverseString function' );   
	ok(reverseString('kumar'), 'ramuk', 'the result was: ' + reverseString('kumar') );  
	ok(reverseString('testing'), 'gnitset', 'the result was: ' + reverseString('testing') ); 
});  
test( "findMinValue Test",function() {  

	equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );   
	ok(findMinValue([53,87,12,53]), 12, 'the result was: ' + findMinValue([53,87,12,53]) );  
});  

test( "findDistinctValues Test",function() {  
 
	equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );   
 	ok(findDistinctValues(["apple", "orange", "apple", "banana"]), ["apple", "orange", "banana"], 'the result was: ' + findDistinctValues(["apple", "orange", "apple", "banana"]) );  
 });  

test( "doFizzBuzz Test",function() {  

	equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' );   
	ok(doFizzBuzz(), true, 'the result was: ' + doFizzBuzz());  
 });  


test( "removeFruits Test",function() {  

	equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );   
	ok(removeFruits(["apple", "orange", "banana", "grapes", "mango"], ["apple","mango"]), 'the result was: ' + removeFruits(["apple", "orange", "banana", "grapes", "mango"])  );
 });  

test( "closureFunc Test",function() {

    equal( typeof closureFunc, 'function', 'Must contain a closureFunc function' ); 
    ok(closureFunc(), 1, 'the result was: ' + closureFunc());
    ok(closureFunc(), 2, 'the result was: ' + closureFunc());
    ok(closureFunc(), 3, 'the result was: ' + closureFunc());
});
