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


test( "push Onto Array", function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Push onto an array function' );
    
    //Original array
    var array = [1, 2, 3, 4, 5];
    
    //Add a single element 
    ok(pushOntoArray(array,6),"Add a single element");
    
    //Add multiple elements from another array
    ok(pushOntoArray(array,[7, 8, 9]),"Add multiple elements from another array");
    
});


test( "split List String Using Comma ", function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Split string function' );
    
    var testStr = "The, quick, brown, fox jumped over";
    
    //Split content by comma 
    ok(splitListStrUsingComma(testStr),"Split content by comma");
    
    //return empty array 
    ok(splitListStrUsingComma(''),"Return empty array ");

});


test( "The sum of any", function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Return the sum of the arguments' );
    
    // Find all numbers and add each to the total
    equal(sum(1, 1, 2, 3, 5, 7),19,'Expected 19 as the results, the result was: ' + sum(1, 1, 2, 3, 5, 7));
});


test( "Only White Space", function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Return true function' );
    
    // Return true if only whitespace is given
    equal(isOnlyWhitespace(' '),true,'Expected true as the results, the result was: ' + isOnlyWhitespace(' '));
});


test( "Javascript closure", function() {
    // Verify the method exists
    equal( typeof noise, 'function', 'Must have closure function' );
    var mynoise = noise("BANG!!");
    equal(mynoise(120),"That was a loud BANG!!, it registered almost 120 decibels.","Expected string as the results, the result was: "+mynoise(120))
    
});


test( "DataTable", function() {
    // Verify the method exists
    equal( typeof datatable, 'function', 'Must have function' );
    
    // Create new object
    var myObj = new datatable();
    
    ok(myObj.addColumns("firstname","lastname","city","state","zip"),'Add Columns: "firstname","lastname","city","state","zip"')
    ok(myObj.addRow({"firstname":"Matthew","lastname":"wells","city":"Downer Grove","state":"IL","zip":"60515"}),"Add First Row Content")
    ok(myObj.addRow({"firstname":"Bob","lastname":"Smith","city":"Aurora","state":"IL","zip":"60502"}),"Add Second Row Content")
    ok(myObj.getData(),"Return the data in a JSON format");

});