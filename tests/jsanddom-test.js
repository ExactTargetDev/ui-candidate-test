/********************************
 Unit Test Example
 ********************************/
module("Example Unit Test");
test("Example Test", 2, function () {
    // Verify the method exists
    equal(typeof divide, 'function', 'Must contain a divide function');

    // Make sure the result from the divide function is valid
    equal(divide(4, 2), 2, 'Expected 2 as the result, the result was: ' + divide(4, 2));
});
/********************************
 Please create your tests below...
 ********************************/

test('reverseString Test', 2, function () {
    equal(typeof reverseString, 'function', 'Must contain a reverseString function');

    equal(reverseString('Felicia Winters'), 'sretniW aicileF', 'Expected \'sretniW aicileF\' as the result, the result was: ' + reverseString('Felicia Winters'));
});

test('findMinValue Test', 2, function () {
    equal(typeof findMinValue, 'function', 'Must contain a findMinValue function');

    equal(findMinValue([64, -128, 256]), -128, 'Expected -128 as the result, the result was: ' + findMinValue([64, -128, 256]));
});
