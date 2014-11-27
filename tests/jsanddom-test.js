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
 Test 1 - Reverse String
 ********************************/
test( "Reverse String", 2, function() {
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

    ok( reverseString('mystring'), 'gnirtsym', 'Expected gnirtsym as  the result, the result was: ' + reverseString('mystring'));
});

/********************************
 Test 2 - Min Value of Array
 ********************************/
test( "Minimum Value of Array ", 2, function() {
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

    var arr = [8,4,7,34,6,7];

    ok( findMinValue(arr), 4, 'Expected 4 as the result, the result was: ' + findMinValue(arr));
});


/********************************
 Test 3 - Distinct Value
 ********************************/
test( "Distinct Value of Array", 2, function() {
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );

    var arr = [7,4,7,7];

    ok( findDistinctValues(arr), 4, 'Expected 4 as the result, the result was: ' + findDistinctValues(arr));
});

/********************************
 Test 4 - Fizz Buzz
 ********************************/
test( "Fizz Buzz Multiples", 2, function() {
    equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' );

    ok( doFizzBuzz(), 'The result was: ' + doFizzBuzz());
});


/********************************
 Test 5 - Fruits To Remove
 ********************************/
test( "Fruits To Remove", 2, function() {
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );

    var fruits = ['Banana', 'Apple', 'Peach', 'Orange'];
    var fruitsToRemove = 'Orange';

    ok( removeFruits(fruits, fruitsToRemove), 'Expected Banana, Apple, Peach as the result, The result was: ' + removeFruits(fruits, fruitsToRemove));
});

/********************************
 Test 6 - To Push Array
 ********************************/
test( "To Push Array", 2, function() {
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' );
    var array = [1,2,3],
        toPush = [4,5,6];

    ok( pushOntoArray(array, toPush), 'Expected 1,2,3,4,5,6 as the result, The result was: ' + pushOntoArray(array, toPush));
});

/********************************
 Test 7 - Split String
 ********************************/
test( "Split String", 2, function() {
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' );
    var str = 'I am splitting, this string';

    ok( splitListStrUsingComma(str), 'Expected as "this string", The result was: ' + splitListStrUsingComma(str));
});

/********************************
 Test 8 - Sum Of All Arguements
 ********************************/
test( "Sum Of All Arguements ", 2, function() {
    equal( typeof sum, 'function', 'Must contain a sum function' );
    var one = 1,
        two = 2,
        three = 3;

    ok( sum(one, two, three), 6, 'Expected as 6, The result was: ' + sum(one, two, three));
});

/********************************
 Test 9 - Check Whitespace
 ********************************/
test( "Check Whitespace", 2, function() {
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' );
    var str = '';

    ok( isOnlyWhitespace(str), false, 'Expected as false, The result was: ' +  isOnlyWhitespace(str));
});

/********************************
 Test Closure
 ********************************/
test( "Check Closure", 2, function() {
    equal( typeof outerFunc, 'function', 'Must contain a outerFunc function' );
    var str = '';

    ok( outerFunc(), 3, 'Expected as false, The result was: ' +  outerFunc());
});