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
(function () {
    
    module( 'JSandDOM Tests' );
    test( 'Reverse the Given String', function () {
        equal( typeof reverseString, 'function', 'Must contain a reverseString function' );
        strictEqual( reverseString( 'Subscribers rock' ), 'kcor srebircsbuS', 'Expected "kcor srebircsbuS", got: ' + reverseString( 'string' ) );
    });

    test( 'Find Min Value in Array', function () {

    });

    test( 'Find Distinct Value in Array', function () {
        
    });

    test( 'Do Fizz Buzz Test', function () {
        
    });

    test( 'Remove Fruits Test', function () {
        
    });

    test( 'Push Value Onto Array', function () {
        
    });

    test( 'Split List String Using Comma Test', function () {
        
    });

    test( 'Find Sum of Unlimited Arguments', function () {

    });

    test( 'String is Only Whitespace Test', function () {
        
    });

});