/********************************
 Unit Test Example
 ********************************/
module("Example Unit Test", {
    // Clean up any test area changes after each test
    afterEach: function() {
        var domTestArea = document.querySelector('#dom-test-area');

        while (domTestArea.hasChildNodes()) {
            domTestArea.removeChild(domTestArea.lastChild);
        }
    }
});

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

test('findDistinctValues Test', 2, function () {
    var units = ['Marine', 'Siege Tank', 'Vulture', 'Siege Tank', 'Marine', 'Banshee'];

    equal(typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function');

    deepEqual(findDistinctValues(units), ['Marine', 'Siege Tank', 'Vulture', 'Banshee'], 'Expected [Marine, Siege Tank, Vulture, Banshee] as the result, the result was: ' + findDistinctValues(units));
});

test('doFizzBuzz Test', 2, function () {
    var mockConsole = {
        output: [],
        log: function(str) {
            this.output.push(str);
        }
    };
    var expected = [
        '3: Fizz',
        '5: Buzz',
        '6: Fizz',
        '9: Fizz',
        '10: Buzz',
        '12: Fizz',
        '15: FizzBuzz',
        '18: Fizz',
        '20: Buzz',
        '21: Fizz',
        '24: Fizz',
        '25: Buzz',
        '27: Fizz',
        '30: FizzBuzz',
        '33: Fizz',
        '35: Buzz',
        '36: Fizz',
        '39: Fizz',
        '40: Buzz',
        '42: Fizz',
        '45: FizzBuzz',
        '48: Fizz',
        '50: Buzz',
        '51: Fizz',
        '54: Fizz',
        '55: Buzz',
        '57: Fizz',
        '60: FizzBuzz',
        '63: Fizz',
        '65: Buzz',
        '66: Fizz',
        '69: Fizz',
        '70: Buzz',
        '72: Fizz',
        '75: FizzBuzz',
        '78: Fizz',
        '80: Buzz',
        '81: Fizz',
        '84: Fizz',
        '85: Buzz',
        '87: Fizz',
        '90: FizzBuzz',
        '93: Fizz',
        '95: Buzz',
        '96: Fizz',
        '99: Fizz',
        '100: Buzz',
    ];

    equal(typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function');

    doFizzBuzz(mockConsole);

    deepEqual(mockConsole.output, expected, 'Expected [' + expected.toString() + '] as the result, the result was: [' + mockConsole.output + ']');
});

test('removeFruits Test', 2, function () {
    var fruits = ['apple', 'orange', 'banana', 'kiwi'];
    var fruitsToRemove = ['orange', 'banana'];
    var expected = ['apple', 'kiwi'];

    equal(typeof removeFruits, 'function', 'Must contain a removeFruits function');

    deepEqual(removeFruits(fruits, fruitsToRemove), expected, 'Expected [' + expected.toString() + '] as the result, the result was: [' + removeFruits(fruits, fruitsToRemove) + ']');
});

test('pushOntoArray Test', 3, function () {
    equal(typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function');

    var array = [2, 4, 8];
    var toPush = 16;
    var expected = [2, 4, 8, 16];

    deepEqual(pushOntoArray(array, toPush), expected , 'A simple element can be pushed onto the array');

    array = [2, 4, 8, 16];
    toPush = [32, 64];
    expected = [2, 4, 8, 16, 32, 64];

    deepEqual(pushOntoArray(array, toPush), expected , 'An array of elements can be pushed onto the array');
});

test('splitListStrUsingComma Test', 3, function () {
    equal(typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function');

    var input = '';
    var expected = [];

    deepEqual(splitListStrUsingComma(input), expected , 'An empty string will return an empty array');

    input = 'Terran,Zerg';
    expected = ['Terran', 'Zerg'];

    deepEqual(splitListStrUsingComma(input), expected , 'A comma-delimited string will return an array of elements');
});

test('sum Test', 2, function () {
    equal(typeof sum, 'function', 'Must contain a sum function');

    var expected = 16 + 32 + 64;

    equal(sum(16, 32, 64), expected , 'A list of arguments will return their summed value');
});

test('isOnlyWhitespace Test', 4, function () {
    equal(typeof sum, 'function', 'Must contain a isOnlyWhitespace function');

    ok(isOnlyWhitespace('\n\t '), 'A string of only whitespace will return true');

    ok(isOnlyWhitespace(''), 'An empty string will return true');

    notOk(isOnlyWhitespace(' + '), 'A string with any non-whitespace character will return false');
});

test('getHelloFunc Test', 2, function () {
    equal(typeof getHelloFunc, 'function', 'Must contain a getHelloFunc function');

    var sayHelloToRinoa = getHelloFunc('Rinoa');

    equal(sayHelloToRinoa(), 'Hello, Rinoa', 'Supplied name must be used in the returned closure');
});

test('DataTable Test', 3, function () {
    equal(typeof DataTable, 'function', 'Must contain a DataTable function');

    var table = new DataTable;
    table.addColumns('first_name', 'last_name');
    table.addRow('Harry', 'Truman');

    var expected = [{ first_name: 'Harry', last_name: 'Truman' }];

    deepEqual(table.getData(), expected, 'getData must returned an array of key/value rows');

    table.addColumns('religion');
    table.addRow('John', 'Kennedy', 'Catholic');

    expected = [
        { first_name: 'Harry', last_name: 'Truman', religion: undefined },
        { first_name: 'John', last_name: 'Kennedy', religion: 'Catholic' },
    ];

    deepEqual(table.getData(), expected, 'Rows with missing values should returned undefined');
});

test('createSelectAndButton Test', 3, function () {
    var mockConsole = {
        output: '',
        log: function(output) {
            this.output = output;
        }
    };

    equal(typeof createSelectAndButton, 'function', 'Must contain a createSelectAndButton function');

    // Create container in dom and invoke function
    $('#dom-test-area').append('<div id="div1">');
    createSelectAndButton(mockConsole);

    equal($('#div1 option').length, 3, 'Must create three fruity options');

    $('#div1 button')[0].click();  // Trigger click
    equal(mockConsole.output, 'Selected value: Apples', 'Must output the selected value to the console');
});
