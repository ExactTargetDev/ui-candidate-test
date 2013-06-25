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

/* QUnit Tests for "ui-candidate-test" JavaScript */

/************************************************
 * Unit Test for method reverseString( string ) *
 * **********************************************/

module( "Reverse String Unit Test");
test( "Reverse String Test", "esreveR", function (){
    // function reverseString exists and is of type 'function'
   equal( typeof reverseString, 'function', 'Must contain function "reverseString"' );
   
   ok( reverseString( 'Reverse' ), 'esreveR', 'Expected "esreveR" as the result. The result was: ' + reverseString('esreveR') );
});


