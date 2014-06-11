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
module( "Reverse String Test" );
test( "Reverse String Test", 2, function() {
    // Verify the method exists
    equal( typeof String, 'function', 'Must reverse a string' ); 

    // Make sure the result from the divide function is valid
    ok( reverseString("Subscribers rock"), "kcor srebircsbuS", 'Expected dkcor srebircsbuS as the result, the result was: ' + reverseString( "Subscribers rock") );
});

module( "Find Min Number Test" );
test( "Find Min Number Test", 2, function() {
    // Verify the method exists
    equal( typeof Number, 'function', 'Must find the smallest number' ); 
        
    var nums = [12, 5, 7, 16];
    // Make sure the result from the function is valid
    ok( findMinValue(nums), 5, 'Expected 5 as the result, the result was: ' + findMinValue(nums) );
});

module( "Find Unique values in array" );
test( "Find Unique values in array", 2, function() {
    // Verify the method exists
    equal( typeof String, 'function', 'Must find unique values in an array' ); 
        
    var values = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
    // Make sure the result from the function is valid
    ok( findDistinctValues(values), [3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity], 'Expected [3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity] as the result, the result was: ' + findDistinctValues(values) );
});

module( "modulo function for fizz buzz" );
test( "modulo function for fizz buzz", 2, function() {
    // Verify the method exists
    equal( typeof String, 'function', 'must write fizz for multiples of 3, buzz for 5, and fizzbuzz for 3 and 5' ); 
        
    // Make sure the result from the function is valid
    ok( doFizzBuzz(), '1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,17,Fizz,19,Buzz,', 'Expected 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,17,Fizz,19,Buzz, as the result, the result was: ' + doFizzBuzz() );
});
