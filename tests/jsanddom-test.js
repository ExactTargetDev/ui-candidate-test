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
test('Reverse Test', 2, function(){
    equal( typeof reverseString, 'function', 'Must contain a reverseString function');

    ok(reverseString('hello?'), '?olleh', 'Expected ?olleh as the result, the result was: ' + reverseString('hello?'));
});

test('Get minimum values', 2, function(){
    equal(typeof findMinValue, 'function', 'Must contain a findMinValue function');

    var array = [1, 2, 3, 4, 6, 7];

    ok(findMinValue(array), 1, 'Expected 1 as the result, the result was: ' + findMinValue(array));
});

test('Get distinct values', 2, function(){
    equal(typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function');

    var dupArray = ['test', 'test1', 'test2', 'test'];

    var filter = ['test', 'test1', 'test2'];
    ok(findDistinctValues(dupArray), filter, 'Expected "test", "test1", "test2", the result was ' + findDistinctValues(dupArray));
});

test('Do FizzBuzz', 4, function(){
    equal(typeof doFizzBuzz, 'function', 'Must contain a FizzBuzz Function');

    ok(doFizzBuzz(), 'Fizz', 'Expected Fizz, the result was ' + doFizzBuzz());

    ok(doFizzBuzz(), 'Buzz', 'Expected Buzz, the result was ' + doFizzBuzz());

    ok(doFizzBuzz(), 'FizzBuzz', 'Expected FizzBuzz the result was ' + doFizzBuzz());
});

test('Remove Fruits', 2, function(){
    equal(typeof removeFruits, 'function', 'Must contain a removeFruits function');

    var fruits = ['pinapple', 'apple', 'grapes', 'kiwi', 'lemon', 'orange'];
    var fruitsToRemove = ['pinappe', 'kiwi', 'lemon'];

    var expect = ['apple', 'grapes', 'orange'];
    ok(removeFruits(fruits, fruitsToRemove), expect, 'Expected ' + expect + ', the result was ' + removeFruits(fruits, fruitsToRemove));
});

test('Push Onto Array', 2, function(){
    equal(typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function');

    var array = [0, 1, 2];
    var expect1 = [0, 1, 2, 4];

    ok(pushOntoArray(array, 4), expect1, 'Expected ' + expect1 + ', the result was ' + pushOntoArray(array, 4));
});

test('Split List String Using Comma', 3, function(){
   equal(typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function');

    ok(splitListStrUsingComma('hello'), 'h,e,l,l,o', 'Expected h,e,l,l,o , the result was ' + splitListStrUsingComma('hello'));

    ok(splitListStrUsingComma(''), '[]', 'Expected [] , the result was ' + splitListStrUsingComma(''));
});

test('Should add up the sum', 2, function(){
    equal(typeof sum, 'function', 'Must contain a sum function');

    ok(sum(1, 4, 6, 10), 21, 'Expected 21, the result was ' + sum(1, 4, 6, 10));
});

test('Is only whitespace', 2, function(){
    equal(typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function');

    ok(isOnlyWhitespace('   '), true, 'Expected true, the result was ' + isOnlyWhitespace(''));
});

test('It should make green', 2, function(){
    equal(typeof makeColor, 'function', 'Must contain a makeColor function');

    ok(makeColor('green'), true, 'Expected true, the result was ' + makeColor('green'));
});