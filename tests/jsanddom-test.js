/********************************
Unit Test Example
********************************/
module("Example Unit Test");
test("Example Test", 2, function () {
    // Verify the method exists
    equal(typeof divide, 'function', 'Must contain a divide function');
    // Make sure the result from the divide function is valid
    ok(divide(4, 2), 2, 'Expected 2 as the result, the result was: ' + divide(4, 2));
});
/********************************
Please create your tests below...
********************************/
module("reverseString Test");
test("reverseString", 2, function () {
    equal(typeof reverseString, 'function', "Verify the reverseString function is present");
    ok(reverseString('example'), 'elpmaxe', 'Expected result is elpmaxe, the result was: ' + reverseString('elpmaxe'));
});


     // |=====================================================================================|


module("findMinValue Test");
test("findMinValue", 2, function () {
    equal(typeof findMinValue, 'function', 'Verify the findMinValue function is present');
    var valuez = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    ok(findMinValue(valuez) == 0, 'Expected result is 0, the result was: ' + findMinValue(valuez));
});


     // |=====================================================================================|


module("findDistinctValues Test");
test('findDistinctValues', 2, function () {
    equal(typeof findDistinctValues, 'function', 'Verify the findDistinctValues function is present');
    var valuez = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    ok(findDistinctValues(valuez), [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'Expected result is [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], the result was: ' + findMinValue(valuez));
});


     // |=====================================================================================|


// qunit-git.js:1996:13
module("doFizzBuzz Test");
test("doFizzBuzz", 2, function () {
    equal(typeof doFizzBuzz, 'function', 'Verify the doFizzBuzz function is present');
    var FizzBuzz = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz", "Fizz", 52, 53, "Fizz", "Buzz", 56, "Fizz", 58, 59, "FizzBuzz", 61, 62, "Fizz", 64, "Buzz", "Fizz", 67, 68, "Fizz", "Buzz", 71, "Fizz", 73, 74, "FizzBuzz", 76, 77, "Fizz", 79, "Buzz", "Fizz", 82, 83, "Fizz", "Buzz", 86, "Fizz", 88, 89, "FizzBuzz", 91, 92, "Fizz", 94, "Buzz", "Fizz", 97, 98, "Fizz", "Buzz"];
    ok(doFizzBuzz(FizzBuzz), FizzBuzz, 'Expect array to have same values, the result was: ' + doFizzBuzz(FizzBuzz));
});


     // |=====================================================================================|


module("removeFruits Test");
test("removeFruits", 2, function () {
    equal(typeof removeFruits, 'function', 'Verify the removeFruits function is present');
    var fruits = ['Avocado', 'Blackberries', 'Cherries', 'Dates', 'Grapefruit', 'Mango', 'Orange'];
    var fruitsToRemove = ['Grapefruit', 'Blackberries'];
    var output = ['Avocado', 'Cherries', 'Dates', 'Mango', 'Orange'];
    ok(removeFruits(fruits, fruitsToRemove), output, 'Expected array to have same values, the result was: ' + removeFruits(fruits, fruitsToRemove));
});


     // |=====================================================================================|


module("pushOntoArray Test");
test("pushOntoArray", 3, function () {
    equal(typeof pushOntoArray, 'function', 'Verify the pushOntoArray function is present');

    var pusharr = [5, 6, 7, 8, 9],
        single = 4,
        pusharr = [1, 2, 3],
        uno = [4, 5, 6, 7, 8, 9],
        dos = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    pushOntoArray[pusharr, single];
    ok(pusharr, uno, 'Expected arrays to have same values');

    pushOntoArray[pusharr, pusharr];
    ok(pusharr, dos, 'Expected arrays to have same values');
});


     // |=====================================================================================|


module("splitListStrUsingComma Test");
test("splitListStrUsingComma", 2, function () {
    equal(typeof splitListStrUsingComma, 'function', 'Verify the splitListStrUsingComma function is present');
    var asdf = 'Pack my box, with five dozen, liquor jugs';
    var qwerty = ['Pack', 'my', 'box', 'with', 'five', 'dozen', 'liquor jugs'];
    ok(splitListStrUsingComma(asdf), qwerty, "Expected ['Pack', 'my', 'box', 'with', 'five', 'dozen', 'liquor jugs'], the result was: " + splitListStrUsingComma(asdf));
});


     // |=====================================================================================|


module("sum Test");
test("sum", 2, function () {
    equal(typeof sum, 'function', 'Verify the sum function is present');
    var asdf = [1, 28];
    ok(sum(asdf), 29, 'Expected sum of 29, the result was: ' + sum(asdf));
});


     // |=====================================================================================|


module("isOnlyWhitespace Test");
test("isOnlyWhitespace", function () {
    equal(typeof isOnlyWhitespace, 'function', 'Verify the isOnlyWhitespace function is present');
    ok(isOnlyWhitespace(/\S/), true, "Expected result is to be true, the result was: " + isOnlyWhitespace(/\S/));
});
