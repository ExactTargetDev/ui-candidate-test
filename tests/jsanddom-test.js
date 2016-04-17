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

module("reverseString");
test("Reverse String unit test", 5, function () {
  equal(typeof reverseString, 'function', "Must contain a reverse string function");
  equal(reverseString("1234"), "4321", "Expected 1234 to return 4321");
  equal(reverseString("straw"), "warts", "Expected straw to return warts");
  notEqual(reverseString(""), "something else", "Expected the empty string to NOT return the string something else");
  equal(reverseString("Subscribers rock"), "kcor srebircsbuS", "Expected Subscribers rock to return kcor srebircsbuS");
});

module("findMinValue");
test("Find numeric minimum values", 7, function () {
  equal(findMinValue([1, 2]), 1, "Expected the min value of 1,2 to be 1");
  equal(findMinValue([1, -2]), -2, "Expected the min value of 1,-2 to be -2");
  equal(findMinValue([5, 5]), 5, "Expected the min value of 5,5 to be 5");
  equal(findMinValue([0, 5]), 0, "Expected the min value of 0,5 to be 0");
  equal(findMinValue([3.14, 8776464]), 3.14, "Expected the min value of 3.14,8776464 to be 3.14");
  equal(findMinValue([2, 5, 7, 11]), 2, "Expected the min value of 2,5,7,11 to be 2");
  equal(findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]), -1.1, "Expected the min vlue of [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] to be -1.1");
});

module("findDistictValues");
test("Find distict values in an array", 2, function () {
  equal(typeof findDistinctValues, "function", "Must contain the findDistinctValues function");
  deepEqual(findDistinctValues([8, 0, 2, 4, 5, 1, 1, 2, 2, 6, 1]), [8, 0, 2, 4, 5, 1, 6]);
});

module("fizzBuzz");
test("Make sure FizzBuzz function works", 0, function () {

});

module("removeFruits");
test("Remove fruits from an array", 2, function () {
  equal(typeof removeFruits, "function", "Must contain the removeFruits function");
  equal(removeFruits(['apple', 'pear'], ['pear']), 'apple', "must return apple");
});

module("pushOntoArray");
test("Push values onto an array", 3, function () {
  equal(typeof pushOntoArray, "function", "Mush contain the pushOntoArray function");
  deepEqual(pushOntoArray([1, 2, 3, 4, 5], [7, 8, 9]), [1, 2, 3, 4, 5, 7, 8, 9], "must add 7 8 9 to the array");
  deepEqual(pushOntoArray([1, 2, 3, 4, 5], 6), [1, 2, 3, 4, 5, 6], "must add 6 to the array");
});


module("isOnlyWhitespace");
test("Test to see if string has only white spaces", 4, function () {
  equal(isOnlyWhitespace('    '), true, "a string of white spaces returns true");
  equal(isOnlyWhitespace('asdf'), false, "a string of no spaces returns false");
  equal(isOnlyWhitespace('asdf  d  d'), false, "a string of mixed space and nonspace returns false");
  equal(isOnlyWhitespace(''), false, "an empty string returns false");
});
