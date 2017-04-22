/********************************
Unit Test Example
********************************/
QUnit.module( "Example Unit Test" );
QUnit.test( "Example Test", function(assert) {
    // Verify the method exists
    assert.equal( typeof divide, 'function', 'Must contain a divide function' );

    // Make sure the result from the divide function is valid
    assert.ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/
QUnit.module( "Function Tests" );
QUnit.test( "Reverse String Test", function(assert) {
    assert.equal( typeof reverseString, 'function', 'Must contain a reverse string function' );

    assert.ok( reverseString('Subscribers rock'), 'kcor srebircsbuS', 'Expected kcor srebircsbuS as the result, the result was: ' + reverseString('Subscribers rock') );
});

QUnit.test( "Minimum Value Test", function(assert) {
    arr = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]
    assert.equal( typeof findMinValue, 'function', 'Must contain a minimum value function' );

    assert.ok( findMinValue(arr), -1.1, 'Expected -1.1 as the result, the result was: ' + findMinValue(arr) );
});

QUnit.test( "Distinct Values Test", function(assert) {
    arr = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]
    assert.equal( typeof findDistinctValues, 'function', 'Must contain a distinct values function' );

    assert.ok( findDistinctValues(arr), [3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity], 'Expected [3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity] as the result, the result was: ' + findDistinctValues(arr) );
});

QUnit.test( "FizzBuzz Test", function(assert) {
    assert.equal( typeof doFizzBuzz, 'function', 'Must contain a FizzBuzz function' );

    assert.ok( doFizzBuzz().length, 100, 'Expected 100 as the result, the result was: ' + doFizzBuzz().length );

    assert.ok( doFizzBuzz(2), 'Fizz', 'Expected Fizz as the result, the result was: ' + doFizzBuzz(2) );

    assert.ok( doFizzBuzz(14), 'FizzBuzz', 'Expected FizzBuzz as the result, the result was: ' + doFizzBuzz(14) );

    assert.ok( doFizzBuzz(19), 'Buzz', 'Expected Buzz as the result, the result was: ' + doFizzBuzz(19) );

    assert.ok( doFizzBuzz(25), 26, 'Expected 26 as the result, the result was: ' + doFizzBuzz(25) );
});
