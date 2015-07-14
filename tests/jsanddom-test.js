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
test('Reverse string function test', function() {
    // Verify the method exists
    equal(typeof reverseString, 'function', 'Must contain a "reverseString" function');

    function testReverseString(expected, result) {
        equal(result, expected, String.format('Expected "{0}" as the result, the result was: {1}', expected, result));
    }

    // Verify function logic
    testReverseString('hgfedcba', reverseString('abcdefgh'));
    testReverseString('0987654321', reverseString('1234567890'));
});
