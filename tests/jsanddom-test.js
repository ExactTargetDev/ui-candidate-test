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
module("My Tests");
test("Reverse string", 4, function() {
    equal(typeof reverseString, 'function', 'Must conatin a reverseString function');
    ok (reverseString('reverseString'), 'gnirtSesrever', 'Expected gnirtSesrever as the result; actual result: '+reverseString('reverseString'));
    equal(reverseString(null), null, 'Expected null; actual result: '+reverseString(null));
    equal(reverseString(undefined), null, 'Expected undefined; actual result: '+reverseString(undefined));
});

test("Min value", function() {
   equal (findMinValue(null), null);
   equal (findMinValue(undefined), undefined);
   equal (findMinValue([]), null);
   equal (findMinValue([1,2,3]), 1);
   equal (findMinValue([1,-2,3]), -2);
});

test("Distinct values", function() {
   equal(findDistinctValues(undefined), undefined);
   equal(findDistinctValues(null), null);
   var emptyArray = [];
   equal(findDistinctValues(emptyArray), emptyArray);
   deepEqual(findDistinctValues([1,1,2]), [1,2]);
   deepEqual(findDistinctValues([2,1,2,2,1,1,2]), [2,1]);
});

//doFizzBuzz();

test("Variable arguments", function() {
   equal(sum(1, 2, 3), 6);
   equal(sum(), 0);
   equal(sum('1', '2', '3'), '123');
});

test("Whitespace", function() {
   equal(isOnlyWhitespace('     '), true);
   equal(isOnlyWhitespace('   1 '), false);
});
