/********************************
 Unit Test Example
 ********************************/
module("Travis Hubbard's Testathon");
var testVal, expectedVal, result;

test("divide()", 2, function(assert) {
    // Verify the method exists
    assert.equal(typeof divide, 'function', 'Must contain a divide function');

    // Make sure the result from the divide function is valid
    assert.ok(divide(4, 2), 2, 'Expected 2 as the result, the result was: ' + divide(4, 2));
});
/********************************
 Please create your tests below...
 ********************************/
test("reverseString()", 2, function(assert) {
    // Verify the method exists
    assert.equal(typeof reverseString, 'function', 'Must contain a reverseString function');

    testVal = 'AbcDeFg';
    expectedVal = 'gFeDcbA';
    result = reverseString(testVal);
    // Make sure the result from the divide function is valid
    assert.equal(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);
});

test("findMinValue()", 2, function(assert) {
    // Verify the method exists
    assert.equal(typeof findMinValue, 'function', 'Must contain a findMinValue function');

    testVal = [8, 4, 165.3, 9, 2];
    expectedVal = 2;
    result = findMinValue(testVal);
    // Make sure the result from the divide function is valid
    assert.equal(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);
});

test("findDistinctValues()", 2, function(assert) {
    // Verify the method exists
    assert.equal(typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function');

    testVal = [1, 2, 4, 3, 2, 1];
    expectedVal = [1, 2, 4, 3];
    result = findDistinctValues(testVal);
    // Make sure the result from the divide function is valid
    assert.deepEqual(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);
});

test("doFizzBuzz()", 1, function(assert) {
    // Verify the method exists
    assert.equal(typeof reverseString, 'function', 'Must contain a doFizzBuzz function');

    doFizzBuzz();
});

test("removeFruits()", 2, function(assert) {
    // Verify the method exists
    assert.equal(typeof findDistinctValues, 'function', 'Must contain a removeFruits function');

    testVal = ['Boysenberry', 'Dragonfruit', 'Huckleberry', 'Lychee', 'Purple Mangosteen'];
    var removeVals = ['Lychee', 'Purple Mangosteen'];
    expectedVal = ['Boysenberry', 'Dragonfruit', 'Huckleberry'];
    result = removeFruits(testVal, removeVals);
    // Make sure the result from the divide function is valid
    assert.deepEqual(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);
});

test("pushOntoArray()", 3, function(assert) {
    // Verify the method exists
    assert.equal(typeof reverseString, 'function', 'Must contain a pushOntoArray function');

    var initialArr = ['Ingress', 'Captain', 'Potato', 4], toPush = 'FAJITAS';
    expectedVal = ['Ingress', 'Captain', 'Potato', 4, 'FAJITAS'];
    result = pushOntoArray(initialArr, toPush);
    // Make sure the result from the divide function is valid
    assert.deepEqual(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);

    initialArr = ['Ingress', 'Captain', 'Potato', 4];
    toPush = ['FAJITAS', 'salsa', 'SunKing Osiris'];
    expectedVal = ['Ingress', 'Captain', 'Potato', 4, 'FAJITAS', 'salsa', 'SunKing Osiris'];
    result = pushOntoArray(initialArr, toPush);
    // Make sure the result from the divide function is valid
    assert.deepEqual(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);
});

test("splitListStrUsingComma()", 3, function(assert) {
    // Verify the method exists
    assert.equal(typeof findDistinctValues, 'function', 'Must contain a splitListStrUsingComma function');

    testVal = 'The, quick, brown, fox jumped over';
    expectedVal = ['The', 'quick', 'brown', 'fox jumped over'];
    result = splitListStrUsingComma(testVal);
    // Make sure the result from the divide function is valid
    assert.deepEqual(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);

    testVal = '';
    expectedVal = [''];
    result = reverseString(testVal);
    // Make sure the result from the divide function is valid
    assert.deepEqual(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);
});

test("sum()", 4, function(assert) {
    // Verify the method exists
    assert.equal(typeof reverseString, 'function', 'Must contain a sum function');

    expectedVal = 6;
    result = sum(1, 2, 3);
    // Make sure the result from the divide function is valid
    assert.equal(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);

    expectedVal = -40;
    result = sum(10, -50);
    // Make sure the result from the divide function is valid
    assert.equal(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);

    expectedVal = 10;
    result = sum(10);
    // Make sure the result from the divide function is valid
    assert.equal(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);
});

test("isOnlyWhitespace()", 3, function(assert) {
    // Verify the method exists
    assert.equal(typeof reverseString, 'function', 'Must contain a isOnlyWhitespace function');

    testVal = 'Hello There!';
    expectedVal = false;
    result = isOnlyWhitespace(testVal);
    // Make sure the result from the divide function is valid
    assert.equal(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);

    testVal = '       ';
    expectedVal = true;
    result = isOnlyWhitespace(testVal);
    // Make sure the result from the divide function is valid
    assert.equal(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);
});
