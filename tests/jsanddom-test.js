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

module("Reverse String");
test("Reverse String Test", function() {

   equal( typeof reverseString, 'function', "Must contain a function that reverses a string");

   equal( reverseString('Subscribers rock'), "kcor srebircsbuS", "Expected kcor srebircsbuS as the result, the result was:" + reverseString('Subscribers rock'));
});

module("Find Min. Value");
test("Find Min Value Test", function() {

    equal( typeof  findMinValue, 'function', 'Must find the min value of an array of numbers');

    equal( findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]), -1.1, 'Expect -1.1 to be the min value, the result was:'+ findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]));
});

module("Find Distinct Values");
test("Retrieve Unique Values Test", function() {

    equal( typeof findDistinctValues, 'function', 'Must find unique values from array');

    deepEqual( findDistinctValues([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]), [3, 5, 7, 20,.18, 01, -1.1, 12, Infinity],'Expect the array to be [1, 2, 3, 4, 5], the result was:' + findDistinctValues([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]));
});

module("Remove pesky fruits");
test('Get rid of some fruits test', function() {
    equal(typeof  removeFruits, 'function', " Remove fruits that shouldn't belong in array");

    deepEqual( removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana']),
        ['apple', 'orange', 'kiwi', 'plum', 'strawberry'],
        'Expect that pear and banana have been removed from the first array, the result was') + removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana']);
});

module("Push Value onto Array");
test('Push values into Array', function() {
   equal( typeof  pushOntoArray, 'function', 'Push array into another array');

    ok(pushOntoArray([1, 2, 3, 4, 5], [7, 8, 9]),
        [1, 2, 3, 4, 5, 7, 8, 9],
        "Expect new array to be [1, 2, 3, 4, 5, 7, 8, 9], the result was:" + pushOntoArray([1, 2, 3, 4, 5], [7, 8, 9]));

    equal( typeof  pushOntoArray, 'function', 'Push value into array');

    deepEqual(pushOntoArray([1, 2, 3, 4, 5], 6),
        [1,2,3,4,5,6],
        'Expect new array to be [1, 2, 3, 4, 5, 6], the result was:' + pushOntoArray([1, 2, 3, 4, 5], 6));
});

module("Split String by comma");
test('Split a string using a comma as delimiter', function() {

    equal( typeof splitListStrUsingComma, 'function', 'Split a string using comma as delimiter');

    deepEqual(splitListStrUsingComma('The, quick, brown, fox jumped over'),
        ["The", " quick", " brown", " fox jumped over"],
    'Expect the returned string to be ["The", " quick", " brown", " fox jumped over"], the result was: '+ splitListStrUsingComma('The, quick, brown, fox jumped over'));

    equal( typeof splitListStrUsingComma, 'function', 'Split a string using comma as delimiter with an empty string');

    equal(splitListStrUsingComma(''), '', 'Expect an empty array to be returned with an empty string, the result was:' + splitListStrUsingComma(''));
});

module('Return sum');
test('Return sum test', function() {

    equal( typeof sum, 'function', 'Return the sum of values');

    equal(sum(1, 1, 2, 3, 5, 7), 19, 'Expect the sum to be 19, the result was: '+ sum(1, 1, 2, 3, 5, 7));

});

module('Check whitespace');
test('Check for whitespace', function() {

    equal(typeof isOnlyWhitespace, 'function', 'Check for whitespace');

    equal(isOnlyWhitespace(''), true, 'Expect true, result was: '+ isOnlyWhitespace(''));


});
