/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    equal( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/
module( "Reverse String" );
test( "Reverse String", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 

    // Make sure the result from the function is valid
    equal( reverseString( 'Subscribers rock' ), 'kcor srebircsbuS', 'Expected kcor srebircsbuS as the result, the result was: ' 
      + reverseString('Subscribers rock') );
});

module( "Find Min Value" );
test( "Find Minimum Value", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 

    // Make sure the result from the function is valid
    equal( findMinValue( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ), -1.1, 'Expected -1.1 as the result, the result was: ' + findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]) );
});

module( "Find Distinct Values" );
test( "Find Distinct Values", 3, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 

    // Make sure the result from the function is valid (numbers)
    deepEqual( findDistinctValues( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ), [3, 5, 7, 20, 0.18, 01, -1.1, 12, Infinity], 'Expected [3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity] as the result, the result was: ' + findDistinctValues([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]) );

    // Make sure the result from the function is valid (strings)
    deepEqual( findDistinctValues( ['apple', 'banana', 'orange', 'banana', 'pear', 'apple', 'strawberry'] ), ['apple', 'banana', 'orange', 'pear', 'strawberry'], 'Expected ["apple", "banana", "orange", "pear", "strawberry"] as the result, the result was: ' + findDistinctValues(['apple', 'banana', 'orange', 'banana', 'pear', 'apple', 'strawberry']) );    
});

module( "FizzBuzz" );
test( "FizzBuzz", 2, function() {
    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' ); 

    // Make sure the result from the function is valid (first 15 numbers as a string).
    equal( doFizzBuzz(15), '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz', 'Expected  1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz as the result, the result was: ' + doFizzBuzz(15) );
   
});

module( "Remove Fruits" );
test( "Remove Fruits", 2, function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' ); 

    // Make sure the result from the function is valid
    deepEqual( removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana']), ['apple', 'orange', 'kiwi', 'plum', 'strawberry'], 
      'Expected [\'apple\', \'orange\', \'kiwi\', \'plum\', \'strawberry\'] as the result, the result was: ' + removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana']) );
   
});

module( "Push to Array" );
test( "Push to Array", 3, function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' ); 

    // Make sure the result from the function is valid. Test adding a single item.
    deepEqual( pushOntoArray(['apple', 'orange', 'kiwi', 'plum', 'strawberry'], 'banana'), ['apple', 'orange', 'kiwi', 'plum', 'strawberry', 'banana'], 
      'Expected [\'apple\', \'orange\', \'kiwi\', \'plum\', \'strawberry\', \'banana\'] as the result, the result was: ' + pushOntoArray(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], 'banana') );

    // Make sure the result from the function is valid. Test adding an array of items.
    deepEqual( pushOntoArray(['apple', 'orange', 'kiwi', 'plum', 'strawberry'], ['banana', 'pear']), ['apple', 'orange', 'kiwi', 'plum', 'strawberry', 'banana', 'pear'], 
      'Expected [\'apple\', \'orange\', \'kiwi\', \'plum\', \'strawberry\', \'banana\', \'pear\'] as the result, the result was: ' + pushOntoArray(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['banana', 'pear']) );    
});

module( "Split List Str Using Comma" );
test( "Split List Str Using Comma", 2, function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' ); 

    // Make sure the result from the function is valid. Test adding a single item.
    deepEqual( splitListStrUsingComma('The, quick, brown, fox jumped over'), ['The', 'quick', 'brown', 'fox jumped over'], 
      'Expected [\'The\', \'quick\', \'brown\', \'fox jumped over\'] as the result, the result was: ' + 
      splitListStrUsingComma('The, quick, brown, fox jumped over') );
});

module( "Sum" );
test( "Sum", 2, function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' ); 

    // Make sure the result from the function is valid. Test adding a single item.
    equal( sum(1, 2, 3, 4, 5), 15, 'Expected 15 as the result, the result was: ' + sum(1, 2, 3, 4, 5) );
});
