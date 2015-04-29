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

test( "reverse string Test", function() {
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 

    equal(reverseString('Subscribers rock'), 'kcor srebircsbuS', 'The result was: ' + reverseString('Subscribers rock') );
});


test( "findMinValue Test", function() {
    var testData = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];

    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 

    equal(findMinValue(testData), -1.1, 'Expected -1.1 as the result, the result was: ' + findMinValue(testData) );
});


test( "findDistinctValues Test", function() {
    var testData = [3, -1.1, 12, Infinity, Infinity, 'test', 'test', 0.18, -1.1, 12];
    var result = [3, -1.1, 12, Infinity, 'test', 0.18];

    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 

    deepEqual(findDistinctValues(testData), result, 'The result was: ' + findDistinctValues(testData) );
});


test( "remove fruits Test", function() {
    var testData = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
    var remove = ['pear', 'banana'];
    var result = ['apple', 'orange', 'kiwi', 'plum', 'strawberry'];

    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' ); 

    //change the original array
    removeFruits(testData, remove);

    deepEqual(testData, result, 'The result was: ' + testData );
});

test( "push to array Test", function() {

    var array = [1, 2, 3, 4, 5];
    var pushValue = 6;
    var pushArray = [7, 8, 9];

    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' ); 

    //change the original array
    pushOntoArray(array, 6);
    deepEqual(array, [1,2,3,4,5,6], 'The first push result was: ' + array );

    pushOntoArray(array, pushArray);
    deepEqual(array, [1,2,3,4,5,6,7,8,9], 'The second push result was: ' + array);

});
