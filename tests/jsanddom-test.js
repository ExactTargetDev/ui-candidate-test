/********************************
Unit Test Example
********************************/
/* module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
}); */
/********************************
Please create your tests below...
********************************/

/* QUnit Tests for "ui-candidate-test" JavaScript */

/************************************************
 * Unit Test Module for reverseString( string ) *
 * **********************************************/

module( "Reverse String Unit Test");
test( "Reverse String Test", function (){
    // 'reverseString' exists and is of type 'function'
   equal( typeof reverseString, 'function', 'Must contain function "reverseString"' );
   
   // method 'reverseString' must take argument string "Subscribers rock" and return "kcor srebircsbuS"
   equal( reverseString( 'Subscribers rock' ), 'kcor srebircsbuS', 'Expected "kcor srebircsbuS" as the result. The result was: ' + reverseString('Subscribers rock') );

});

/************************************************
 * Unit Test Module for findMinValue( values )  *
 * **********************************************/

module( "Find Minimum Value Unit Test");
test( "Find Minimum Value Test", function(){
   
   // Define array of numerical values to test method against. Note, including
   // numerical values with and without decimal values, and with positive and negative values
   var test_values = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
   
   // 'findMinValue' exists and is of type 'function'
   equal( typeof findMinValue, 'function', 'Must contain function "findMinValue"' );
   
   // Assert that findMinValues returns lowest number from array, which is -0.0143
   deepEqual( findMinValue( test_values ), -1.1, 'Expected -1.1 as the result. The result was ' + findMinValue( test_values ) );
   
});

/*****************************************************
 * Unit Test Module for findDistinctValues( values ) *
 * ***************************************************/

module( "Find Distinct Values Unit Test");
test( "Find Distinct Values Test", function(){
   
   // Define array containing both duplicate and unique values
   var test_values = [ 1, 1, 2, 3, 5, 7 ];
   
   // 'findDistinctValues' exists and is of type 'function'
   equal( typeof findDistinctValues, 'function', 'Must contain function "findDistinctValues"');
   
   // Assert that when passed 'test_values' as an argument, that items from that
   // array only appear once in the returned array
   deepEqual( findDistinctValues( test_values ), [ 1, 2, 3, 5, 7 ],
        'Expected Array: [ 1, 2, 3, 5, 7 ] to be returned. The result was ' + findDistinctValues( test_values ) );

});

/*****************************************************
 * Unit Test Module for doFizzBuzz( values )         *
 * ***************************************************/

module( "Do 'FizzBuzz' Unit Test");
test ( "Do 'FizzBuzz' Test", function(){
    
    // 'doFizzBuzz' exists and is of type 'function'
    equal( typeof doFizzBuzz, 'function', 'Must contain function "doFizzBuzz"');
    
    // Assert that doFizzBuzz returns an array containing 100 items
    var array_result = doFizzBuzz();
    equal ( array_result.length, 100, 'Expected an Array of length: 100. The result was ' + array_result.length );
    
    var arr_multiples_of_only_three = [];
    var arr_multiples_of_only_five = [];
    var arr_multiples_of_only_fifteen = []; // For 3 and 5
    var arr_multiples_of_neither_three_or_five = [];
    
    for ( var i=1; i<101; ++i) {
        if ( i%3===0 && i%5!=0 ) {
            arr_multiples_of_only_three.push(i);
        }
        else if ( i%5===0 && i%3!=0 ) {
            arr_multiples_of_only_five.push(i);
        }
        else if ( i%15===0 ) {
            arr_multiples_of_only_fifteen.push(i);
        }
        else
        {
            arr_multiples_of_neither_three_or_five.push(i);
        }
    }

    // Assert that every (index + 1) in the Array that is a multiple of 3
    // (and not also 5) is 'Fizz'.
    var multiples_of_three_are_fizz = true;
 
    for ( var i=0;i<arr_multiples_of_only_three.length;++i ) {  
        if ( array_result[ arr_multiples_of_only_three[ i ] - 1] != 'Fizz' ) {
            multiples_of_three_are_fizz = false;
            break;
        }
    };

    equal(multiples_of_three_are_fizz, true, 'Expected that multiples of only 3 are marked as "Fizz". The result was: ' + multiples_of_three_are_fizz);
    
    // Assert that every (index + 1) in the Array that is a multiple of 5
    // (and not also 3) is 'Buzz'.
    
    var multiples_of_five_are_buzz = true;
    
    for ( var i=0;i<arr_multiples_of_only_five.length;++i ) {  
        if ( array_result[ arr_multiples_of_only_five[ i ] - 1] != 'Buzz' ) {
            multiples_of_five_are_buzz = false;
            
            break;
        }
    };
    equal( multiples_of_five_are_buzz, true, 'Expected that multiples of only 5 are marked as "Buzz". The result was: ' + multiples_of_five_are_buzz);

    // Assert that every (index + 1) in the Array that is a multiple of 15
    // is 'FizzBuzz'.
    
    var multiples_of_fifteen_are_fizzbuzz = true;
    
    for ( var i=0;i<arr_multiples_of_only_fifteen.length;++i ) {  
        if ( array_result[ arr_multiples_of_only_fifteen[ i ] - 1] != 'FizzBuzz' ) {
            multiples_of_fifteen_are_fizzbuzz = false;
            
            break;
        }
    };
    equal( multiples_of_fifteen_are_fizzbuzz, true, 'Expected that multiples of both 3 and 5 are marked as "FizzBuzz". The result was: ' + multiples_of_fifteen_are_fizzbuzz);

    var other_multiples_are_integers = true;
    
    for ( var i=0;i<arr_multiples_of_neither_three_or_five;++i ) {  
        if ( array_result[ arr_multiples_of_neither_three_or_five[ i ] - 1] != arr_multiples_of_neither_three_or_five[ i ] ) {
            other_multiples_are_integers = false;
            
            break;
        }
    };
    equal( other_multiples_are_integers, true, 'Expected that multiples of neither 3 nor 5 are Integers. The result was: ' + other_multiples_are_integers);

    
});


/******************************************
 * Unit Test Module for fruitsToRemove()  *
 * ****************************************/

module( "Remove Fruits from Array Unit Test");
test ( "Remove Fruits from Array Test", function(){
   
   // "fruitsToRemove must exist and be of type "function"
   equal(typeof removeFruits, 'function', 'Must contain function "removeFruits"');
   
   // Define test array "fruits", and "fruitsToRemove"
   var fruits = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
   var fruitsToRemove = ['pear', 'banana'];
   
   deepEqual(removeFruits(fruits, fruitsToRemove), ['apple', 'orange', 'kiwi', 'plum', 'strawberry'], 'Expected result to be ["apple", "orange", "kiwi", "plum", "strawberry"]. The result was ' + removeFruits(fruits, fruitsToRemove) );
   
});


module( "Push onto Array Unit Test");
test( "Push onto Array Test", function(){
    // "pushOntoArray" must exist and be of type "function"
    equal(typeof pushOntoArray, 'function', 'Must contain function "pushOntoArray"');
    
    // Test with "array" = [1, 2, 3, 4, 5]
    
    // Test with "toPush" = 6
    
    deepEqual(pushOntoArray([1, 2, 3, 4, 5], 6), [1, 2, 3, 4, 5, 6], 'Expected result to be [1, 2, 3, 4, 5, 6]. The result was ' + pushOntoArray([1, 2, 3, 4, 5], 6) );
    
    // Test with "toPush" = [7, 8, 9]
    
    deepEqual(pushOntoArray([1, 2, 3, 4, 5], [7, 8, 9]), [1, 2, 3, 4, 5, 7, 8, 9], 'Expected results to be [1, 2, 3, 4, 5, 6, 7, 8, 9]. The result was ' + pushOntoArray([1, 2, 3, 4, 5], [7, 8, 9]) );

});

    

/***********************************************
 * Unit Test Module for sum( arg1, arg2, ... ) *
 * *********************************************/

module( "Sum Unit Test");
test ( "Sum Test", function(){
    
    // "sum" must exist and be of type "fuction"
    equal(typeof sum, 'function', 'Must contain function "sum"');
    
    // "sum" can take any number of arguments, so, assuming no arguments are passed,
    // "sum" should return 0
    
    equal( sum(), 0, 'Expected "sum", called with no arguments, returns 0. The result was ' + sum() );
    
    // "sum" called with a single argument should simply return the argument
    
    equal( sum(4), 4, 'Expected "sum", called with a single argument of 4, to return 4. The result was ' + sum(4) );
    
    // "sum" called with 2 or more arguments should return the sum of those arguments
    
    equal( sum(0, 1, 1, 2, 3, 5), 12, 'Expected sum of 0, 1, 1, 2, 3, 5 to be 12. The result was ' + sum(0, 1, 1, 2, 3, 5) );
    
});
