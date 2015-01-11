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
module( "Reverse String Unit Test" );
test( "Reverse String", 3, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverse function' );

    // Make sure the result from the reverseString function is valid
    ok( reverseString("") === "", 'Expected "" as the result, the result was: ' + reverseString("") );

    ok( reverseString("hello world") === "dlrow olleh", 'Expected "dlrow olleh" as the result, the result was: ' + reverseString("hello world") );
});

module( "Minimum Value Unit Test" );
test( "Minimum Value", 4, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

    //empty array should return null
    ok( findMinValue([]) === null , 'Expected null as the result, the result was: ' + findMinValue([]) );

    // Make sure the result from the minimum function is valid
    ok( findMinValue([1,2,3]) == 1 , 'Expected 1 as the result, the result was: ' + findMinValue([1, 2, 3]) );

    ok( findMinValue([-1,-2,-3]) == -3 , 'Expected -3 as the result, the result was: ' + findMinValue([-1, -2, -3]) );
});

module( "Unique Array Unit Test" );
QUnit.test( "Find Distinct Values Test", 4, function(assert) {
    // Verify the method exists
    assert.equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );

    //empty array should return null
    assert.deepEqual( findDistinctValues([]), [] , 'Expected empty array as the result, the result was: ' + findDistinctValues([]) );

    // Make sure the result from the minimum function is valid
    assert.deepEqual( findDistinctValues([1,2,3,2,3]), [1,2,3] , 'Expected [1,2,3] as the result, the result was: ' + findDistinctValues([1, 2, 3, 2, 3]) );

    assert.deepEqual( findDistinctValues([6,7]), [6,7] , 'Expected [6,7] as the result, the result was: ' + findDistinctValues([6,7]) );
});

module( "FizzBuzz Unit Test" );
QUnit.test( "Find Distinct Values Test", 2, function(assert) {
    // Verify the method exists
    assert.equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' );

    assert.equal( doFizzBuzz(), undefined , 'Expected undefined as the return type, the return was: ' + doFizzBuzz() );
});

module( "Remove Fruits Unit Test" );
QUnit.test( "Remove Fruits Test", 4, function(assert) {
    // Verify the method exists
    assert.equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );

    //empty array should return null
    assert.deepEqual( removeFruits(["apple", "banana", "mango"]), ["apple", "banana", "mango"] , 'Expected fruits array to remain the same, the result was: ' + removeFruits(["apple", "banana", "mango"]) );

    // Make sure the result from the minimum function is valid
    assert.deepEqual( removeFruits(["apple", "banana", "mango"], ["mango"]), ["apple", "banana"] , 'Expected ["apple", "banana"] as the result, the result was: ' + removeFruits(["apple", "banana", "mango"], ["mango"]) );

    assert.equal( removeFruits([6,7,8], [1]), undefined , 'Expected undefined for non strings, the result was: ' + removeFruits([6,7], [6]) );
});

module( "Push Onto Array Unit Test" );
QUnit.test( "PushOnto Array Test", 3, function(assert) {
    // Verify the method exists
    assert.equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' );

    //empty array should return null
    assert.deepEqual( pushOntoArray(["apple", "banana", "mango"],[1,2]), ["apple", "banana", "mango", 1, 2] , 'Expected ["apple", "banana", "mango", 1, 2], the result was: ' + pushOntoArray(["apple", "banana", "mango"],[1,2]) );

    // Make sure the result from the minimum function is valid
    assert.deepEqual( pushOntoArray(["a", "b", "c"], "d"), ["a", "b", "c", "d"] , 'Expected ["a", "b", "c", "d"] as the result, the result was: ' + pushOntoArray(["a", "b", "c"], "d") );

});