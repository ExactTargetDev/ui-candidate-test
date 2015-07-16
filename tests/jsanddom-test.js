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

//module( "Salesforce UI Candidate Test Unit Testing" );
module( "Function That Returns String Reversed" );
test( "Test reverseString with Valid arg", function(){

});

test( "Test reverseString with no args", function(){

});

test( "Test reverseString with no args", function(){
	
});

module("Functtion That Finds Min Value in Array");
test( "Test findMinValue with Valid args", function(){

});

test( "Test findMinValue with no args", function(){

});

test( "Test findMinValue with invalid args", function(){

});