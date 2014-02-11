/********************************
Unit Test Example
********************************/
// module( "Example Unit Test" );
// test( "Example Test", 2, function() {
//     // Verify the method exists
//     equal( typeof divide, 'function', 'Must contain a divide function' ); 

//     // Make sure the result from the divide function is valid
//     ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
// });
/********************************
Please create your tests below...
********************************/

    
    module( 'JSandDOM Tests' );
    test( 'Reverse the Given String', function () {
        equal( typeof reverseString, 'function', 'Must contain a reverseString function' );
        ok( reverseString( 'Subscribers rock' ), 'kcor srebircsbuS', 'Expected "kcor srebircsbuS", got: ' + reverseString( 'Subscribers rock' ) );
    });

    test( 'Find Min Value in Array', function () {
        equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );
        strictEqual( findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]), -1.1, 'Expected -1.1, got: ' + findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]) );
    });

    test( 'Find Distinct Values in Array', function () {
        equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );
        deepEqual( findDistinctValues(['a', 'b', 'c', 'd', 'a', 'b', 'a', 'e']), ['a', 'b', 'c', 'd', 'e'], 'Expected ["a", "b", "c", "d", "e"], got: ' + findDistinctValues(['a', 'b', 'c', 'd', 'a', 'b', 'a', 'e']) );
    });

    test( 'Do Fizz Buzz Test', function () {
        equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' );
    });

    test( 'Remove Fruits Test', function () {
        equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );
    });

    test( 'Push Value Onto Array', function () {
        var arr = [1, 2, 3, 4, 5];
        equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' );
    });

    test( 'Split List String Using Comma Test', function () {
        equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' );
        deepEqual( splitListStrUsingComma('Go easy, man'), ['Go easy', ' man'], 'Expected ["Go easy", " man"], got: ' + splitListStrUsingComma('Go easy, man') );
    });

    test( 'Find Sum of Unlimited Arguments', function () {
        equal( typeof sum, 'function', 'Must contain a sum function' );
        ok( sum(1,2,3,4,5), 15, 'Expected 15, got: ' + sum(1,2,3,4,5) );
        ok( sum(2,4,5,6,10), 27, 'Expected 27, got: ' + sum(2,4,5,6,10) );
    });

    test( 'String is Only Whitespace Test', function () {
        equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' );
        strictEqual( isOnlyWhitespace('    '), true, 'Expected (boolean) true, got: ' + isOnlyWhitespace('    ') );
        strictEqual( isOnlyWhitespace('    ;'), false, 'Expected (boolean) false, got: ' + isOnlyWhitespace('    ;') );
    });

