/********************************
 Unit Test Example
 ********************************/
module("Example Unit Test");
test("Example Test", 2, function() {
    // Verify the method exists
    equal(typeof divide, 'function', 'Must contain a divide function');

    // Make sure the result from the divide function is valid
    ok(divide(4, 2), 2, 'Expected 2 as the result, the result was: ' + divide(4, 2));
});
/********************************
 Please create your tests below...
 ********************************/

/* Helper format function */
String.format = function() {
    // The string containing the format items (e.g. "{0}")
    // will and always has to be the first argument.
    var theString = arguments[0];

    // start with the second argument (i = 1)
    for (var i = 1; i < arguments.length; i++) {
        // "gm" = RegEx options for Global search (more than one instance)
        // and for Multiline search
        var regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
        theString = theString.replace(regEx, arguments[i]);
    }

    return theString;
};

module('Test function');
test('String reversion function test', function() {
    // Verify the method exists
    equal(typeof reverseString, 'function', 'Must contain a "reverseString" function');

    function testReverseString(expected, result) {
        equal(result, expected, String.format('Expected "{0}" as the result, the result was: "{1}"', expected, result));
    }

    // Verify function logic
    testReverseString('hgfedcba', reverseString('abcdefgh'));
    testReverseString('0987654321', reverseString('1234567890'));

    testReverseString('', reverseString(''));
});

test('Minimal value search function test', function() {
    // Verify the method exists
    equal(typeof findMinValue, 'function', 'Must contain a "reverseString" function');

    function testFindMinValue(expected, result) {
        equal(result, expected, String.format('Expected "{0}" as the result, the result was: "{1}"', expected, result));
    }

    // Verify function logic
    testFindMinValue(-1, findMinValue([1, 2, -1]));
    testFindMinValue(1, findMinValue([1, 2, 3]));
    testFindMinValue(-3, findMinValue([-1, -2, -3]));
    testFindMinValue(-3, findMinValue([-3, -2, -1]));
    testFindMinValue(5, findMinValue([5, 5, 5]));

    testFindMinValue(undefined, findMinValue([]));
    testFindMinValue(5, findMinValue([5]));
});

test('Distinct values search function test', function() {
    // Verify the method exists
    equal(typeof findDistinctValues, 'function', 'Must contain a "findDistinctValues" function');

    // Verify function logic
    deepEqual(findDistinctValues([1, 2, 3, 3, 3]), [1, 2, 3], 'Have to filter out the duplicated elements (case 1)');
    deepEqual(findDistinctValues([1, 1, 1, 1]), [1], 'Have to filter out the duplicated elements (case 2)');
    deepEqual(findDistinctValues([1, '1']), [1, '1'], 'Have to correctly handle the same values of different types');

    deepEqual(findDistinctValues([1, '1']), [1, '1'], 'Have to correctly handle empty arrays');
});
