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

/********************************
 Reverse String
 ********************************/
test( "Reverse String", 2, function() {
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

    ok( reverseString("reverse this!"), "!siht esrever", 'Expected !siht esrever as the result, the result was: ' + reverseString("reverse this!"));
});

/********************************
 Minimun Value
 ********************************/
test( "Minimum Value", 2, function() {
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

    ok( findMinValue([1,2,3,4,5]), 1, 'Expected 1 as the result, the result was: ' + findMinValue([1,2,3,4,5]));
});

/********************************
 Distinct Values
 ********************************/
test( "Destinct Values", 2, function() {
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );

    ok( findDistinctValues([1,1,3,1,1]), 3, 'Expected 3 as the result, the result was: ' + findDistinctValues([1,1,3,1,1]));
});

/********************************
 Fizz Buzz
 ********************************/
test( "Fizz Buzz Multiples", 2, function() {
    equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' );

    ok( doFizzBuzz(), 'The result was: ' + doFizzBuzz());
});

/********************************
 Removing Fruit
 ********************************/
test( "Removes Fruit", 2, function() {
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );

    var fruits = ['Banana', 'Apple', 'Peach', 'Orange'];
    var fruitsToRemove = ['Orange','Apple'];

    ok( removeFruits(fruits, fruitsToRemove), 'Expected Banana,Peach as the result, The result was: ' + removeFruits(fruits, fruitsToRemove));
});


/********************************
 To Push Array
 ********************************/
test( "To Push Array", 2, function() {
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' );
    var array = [1,2,3],
        toPush = [4,5,6];

    ok( pushOntoArray(array, toPush), 'Expected 1,2,3,4,5,6 as the result, The result was: ' + pushOntoArray(array, toPush));
});

/********************************
 Split String
 ********************************/
test( "Split String", 2, function() {
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' );
    var str = 'I am splitting, this string';

    ok( splitListStrUsingComma(str), 'Expected as "this string", The result was: ' + splitListStrUsingComma(str));
});

/********************************
 Sum Of All Arguements
 ********************************/
test( "Sum Of All Arguements ", 2, function() {
    equal( typeof sum, 'function', 'Must contain a sum function' );

    ok( sum(1,2,3), 6, 'Expected as 6, The result was: ' + sum(1,2,3));
});

/********************************
 Check Whitespace
 ********************************/
test( "Check Whitespace", 2, function() {
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' );
    var str = '    ';

    ok( isOnlyWhitespace(str), true, 'Expected as true, The result was: ' +  isOnlyWhitespace(str));
});

/********************************
 Test Closure
 ********************************/
test( "Check Closure", 2, function() {
    equal( typeof outerFunc, 'function', 'Must contain a outerFunc function' );

    ok( outerFunc(1,2), 3, 'Expected as false, The result was: ' +  outerFunc(1,2));
});
