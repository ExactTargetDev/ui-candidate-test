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


test( "Reverse String", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverse function' );
    
    var teststr = "Subscribers rock";
    
    // Make sure the results equal a reverse of the given string and output the string
    equal(reverseString(teststr),'kcor srebircsbuS', 'Expected "kcor srebircsbuS" as the results, the result was: ' + reverseString(teststr));

});

test( "Find Minimum Value", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Find the minimum value function' );
    
    // Array of test data
    var testarray = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
    
    // Locate the minium value and return
    equal( findMinValue(testarray), '-1.1', 'Expected -1.1 as the results, the result was: ' + findMinValue(testarray) );
    
});


test( "Find Distinct Values ", 2, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Find the distinct values function' );
    
    // Array of test data
    var testarray = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
    
    // Locate the distinct values in the test
    ok( findDistinctValues(testarray), '-1.1,0.18,1,12,20,3,5,7,Infinity', 'Expected -1.1,0.18,1,12,20,3,5,7,Infinity as the results, the result was: ' + findDistinctValues(testarray) );
    
});


test( "Do Fizz Buzz", function() {
    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'Find the multiples of function' );
    
    ok(doFizzBuzz(),"FizzBuzz results to console");
});


test( "Remove Fruits ", 2, function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Find the distinct values function' );
    
    // Array of test data
    var fruits = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry']
    var fruitsToRemove = ['pear', 'banana'];
    
    // Locate the distinct values in the test
    ok( removeFruits(fruits, fruitsToRemove), '["apple","orange","kiwi","plum","strawberry"]', 'Expected ["apple","orange","kiwi","plum","strawberry"] as the results, the result was: ' + removeFruits(fruits, fruitsToRemove) );
    
});

