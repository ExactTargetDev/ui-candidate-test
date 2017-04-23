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

QUnit.test( "Remove Fruits Test", function(assert) {
    fruits = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry']
    fruitsToRemove = ['pear', 'banana']
    arr = ["apple", "orange", "kiwi", "plum", "strawberry"]

    assert.equal( typeof removeFruits, 'function', 'Must contain a remove fruits function' );

    assert.ok( removeFruits(fruits, fruitsToRemove), arr, 'Expected ["apple", "orange", "kiwi", "plum", "strawberry"] as the result, the result was: ' + removeFruits(fruits, fruitsToRemove) );
});

QUnit.test( "Push Onto Array Test", function(assert) {
    array = [1, 2, 3, 4, 5]
    toPush = 6
    toPushAgain = [7, 8, 9]

    assert.equal( typeof pushOntoArray, 'function', 'Must contain a push onto array function' );

    assert.ok( pushOntoArray(array, toPush), [1, 2, 3, 4, 5, 6], 'Expected [1, 2, 3, 4, 5, 6] as the result, the result was: ' + pushOntoArray(array, toPush) );

    assert.ok( pushOntoArray(array, toPushAgain), [1, 2, 3, 4, 5, 7, 8, 9], 'Expected [1, 2, 3, 4, 5, 7, 8, 9] as the result, the result was: ' + pushOntoArray(array, toPushAgain) );
});

QUnit.test( "Split String Test", function(assert) {
    sourceStr = 'The, quick, brown, fox jumped over'
    sourceStrTwo = ''

    assert.equal( typeof splitListStrUsingComma, 'function', 'Must contain a split string function' );

    assert.ok( splitListStrUsingComma(sourceStr), ["The", " quick", " brown", " fox jumped over"], 'Expected ["The", " quick", " brown", " fox jumped over"] as the result, the result was: ' + splitListStrUsingComma(sourceStr) );

    assert.ok( splitListStrUsingComma(sourceStr), '', 'Expected [] as the result, the result was: ' + splitListStrUsingComma(sourceStr) );
});

QUnit.test( "Sum Test", function(assert) {
    assert.equal( typeof sum, 'function', 'Must contain a sum function' );

    assert.ok( sum(1, 1, 2, 3, 5, 7), 19, 'Expected 19 as the result, the result was: ' + sum(1, 1, 2, 3, 5, 7) );
});

QUnit.test( "Is Only Whitespace Test", function(assert) {
    sourceStr = '      '
    assert.equal( typeof isOnlyWhitespace, 'function', 'Must contain a whitespace function' );

    assert.ok( isOnlyWhitespace(sourceStr), true, 'Expected true as the result, the result was: ' + isOnlyWhitespace(sourceStr) );
});

QUnit.module( "JS Closure Test" );
QUnit.test( "Closure Test", function(assert) {
    myLike = likes()
    myOtherLike = likes()

    assert.equal( typeof likes, 'function', 'Must contain a likes function' );

    assert.ok( myLike('sparkles'), 'demetra likes sparkles', 'Expected demetra likes sparkles as the result, the result was: ' + myLike('sparkles') );

    assert.ok( myOtherLike('glitter'), 'demetra likes glitter', 'Expected demetra likes glitter as the result, the result was: ' + myOtherLike('glitter') );
});
