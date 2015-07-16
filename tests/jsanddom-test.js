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

(function() {
    module('Test function');
    test('String reversion function test', function() {
        // Verify the method exists
        testMethodsExistence('reverseString');

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
        testMethodsExistence('findMinValue');

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
        testMethodsExistence('findDistinctValues');

        // Verify function logic
        deepEqual(findDistinctValues([1, 2, 3, 3, 3]), [1, 2, 3], 'Have to filter out the duplicated elements (case 1)');
        deepEqual(findDistinctValues([1, 1, 1, 1]), [1], 'Have to filter out the duplicated elements (case 2)');
        deepEqual(findDistinctValues([1, '1']), [1, '1'], 'Have to correctly handle the same values of different types');

        deepEqual(findDistinctValues([1, '1']), [1, '1'], 'Have to correctly handle empty arrays');
    });

    test('FizzBuzz function test', function() {
        // Verify the method exists
        testMethodsExistence('doFizzBuzz', 'getFizzBuzzSequence');

        // Verify function logic
        deepEqual(getFizzBuzzSequence(), [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz", "Fizz", 52, 53, "Fizz", "Buzz", 56, "Fizz", 58, 59, "FizzBuzz", 61, 62, "Fizz", 64, "Buzz", "Fizz", 67, 68, "Fizz", "Buzz", 71, "Fizz", 73, 74, "FizzBuzz", 76, 77, "Fizz", 79, "Buzz", "Fizz", 82, 83, "Fizz", "Buzz", 86, "Fizz", 88, 89, "FizzBuzz", 91, 92, "Fizz", 94, "Buzz", "Fizz", 97, 98, "Fizz", "Buzz"], 'Have to generate proper FizzBuzz sequence');
    });

    test('Fruits removal function test', function() {
        // Verify the method exists
        testMethodsExistence('removeFruits');

        // Verify function logic
        deepEqual(removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana']), ['apple', 'orange', 'kiwi', 'plum', 'strawberry'], 'Have to remove specified fruits');
        deepEqual(removeFruits(['apple', 'banana', 'banana', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana']), ['apple', 'orange', 'kiwi', 'plum', 'strawberry'], 'Have to remove all duplicated fruits');
        deepEqual(removeFruits(['banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['apple', 'pear', 'banana']), ['orange', 'kiwi', 'plum', 'strawberry'], 'Have to ignore fruits to remove which are absent in fruits set');

        deepEqual(removeFruits([], ['pear', 'banana']), [], 'Have to correctly handle empty array for fruits argument');
        deepEqual(removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], []), ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], 'Have to correctly handle empty array for fruitsToRemove argument');
    });

    test('Array push function test', function() {
        // Verify the method exists
        testMethodsExistence('pushOntoArray');

        // Verify function logic
        deepEqual(pushOntoArray(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], 'pear'), ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry', 'pear'], 'Have to push one element');
        deepEqual(pushOntoArray(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana']), ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry', 'pear', 'banana'], 'Have to push all elements from array');
    });

    test('String split function test', function() {
        // Verify the method exists
        testMethodsExistence('splitListStrUsingComma');

        // Verify function logic
        deepEqual(splitListStrUsingComma('The, quick, brown, fox jumped over'), ['The', ' quick', ' brown', ' fox jumped over'], 'Have to split string (case 1)');
        deepEqual(splitListStrUsingComma('The quick brown fox jumped over'), ['The quick brown fox jumped over'], 'Have to split string (case 2)');
        deepEqual(splitListStrUsingComma(''), [], 'Have to produce empty array in case when string is empty');
    });

    test('Sum function test', function() {
        // Verify the method exists
        testMethodsExistence('sum');

        // Verify function logic
        equal(sum(1, 1, 2, 3, 5, 7), 19, 'Have to sum all provided numbers (case 1)');
        equal(sum(0, 0, 0), 0, 'Have to sum all provided numbers (case 2)');
        equal(sum(5), 5, 'Have to sum all provided numbers (case 3)');
    });

    test('Whitespaces function test', function() {
        // Verify the method exists
        testMethodsExistence('isOnlyWhitespace');

        // Verify function logic
        ok(isOnlyWhitespace('The quick brown fox jumped over'), 'Have to success on normal string');
        notOk(isOnlyWhitespace(''), 'Have to fail on empty string');
        notOk(isOnlyWhitespace('              '), 'Have to fail on blank string');
    });

    function testMethodsExistence() {
        for (var i = 0, length = arguments.length; i < length; i++) {
            ok(typeof window[arguments[i]] === 'function', String.format('Must contain a "{0}" function', arguments[i]));
        }
    }
})();