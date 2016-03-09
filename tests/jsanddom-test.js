/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, expectedResultText(2, divide(4,2)));
});
/********************************
Please create your tests below...
********************************/

test("Reverse String", function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

    // Verify simple string reverse case
    equal( reverseString( 'hello world'  ), 'dlrow olleh', expectedResultText('dlrow olleh', reverseString('hello world')));

    // Verify empty string case
    equal( reverseString( ''  ), '', expectedResultText('', reverseString('')));

    // Verify no string case
    equal( reverseString( null ), undefined, expectedResultText(undefined, reverseString(null)));

    // Verify single character Unicode case
    equal( reverseString( 'hello \u035d sir' ), 'ris \u035d olleh', expectedResultText('ris \u035d olleh', reverseString('hello \u035d sir')));
    // Verify failure of combination unicode case (breve)
    notEqual( reverseString( 'hello \u041E \u0306 sir' ), 'ris \u041E \u0306 olleh', expectedResultText('ris \u041E \u0306 olleh', reverseString('hello \u041E \u0306 sir')));
});

test("Find Min Value", function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

    // Verify simple full array case
    equal( findMinValue([2,4,7,11,1,14]), 1, expectedResultText(1, findMinValue([2,4,7,11,1,14])));

    // Verify negative number case
    equal( findMinValue([2,4,7,-11,1,14]), -11, expectedResultText(-11, findMinValue([2,4,7,-11,1,14])));

    // Verify missing value array case
    equal( findMinValue([2,null,7,11,null,14]), 2, expectedResultText(2, findMinValue([2,null,7,11,null,14])));

    // Verify some values not number array case
    equal( findMinValue([2,'i\'m a string',7,11,{hello: true},14]), 2, expectedResultText(2, findMinValue([2,null,7,11,null,14])));

    // Verify decimal value array case
    equal( findMinValue([2,0.1,7,11,4.6,14]), 0.1, expectedResultText(0.1, findMinValue([2,0.1,7,11,4.6,14])));

    // Verify null argument handling
    equal( findMinValue(null), undefined, expectedResultText(undefined, findMinValue(null)));

    // Verify non-array case
    equal( findMinValue('not an array'), undefined, expectedResultText(undefined, findMinValue('not an array')));
});

test("Find Distinct Values", function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );

    // Verify simple full number array case
    deepEqual( findDistinctValues([2,4,7,2,7,5]), [2,4,7,5], expectedResultText([2,4,7,5], findDistinctValues([2,4,7,2,7,5])));

    // Verify mixed object type case
    deepEqual( findDistinctValues([2,{hello:true},'hi',null,2,null,7,undefined, {hello: 'true'}, {hello: true},'hi','terra']), [2,{hello:true},'hi',null,7,undefined,{hello:'true'},'terra'], expectedResultText([2,{hello:true},'hi',null,7,undefined,{hello:'true'},'terra'], findDistinctValues([2,{hello:true},'hi',null,2,null,7,undefined,{hello: 'true'}, {hello: true},'hi','terra'])));

    // Verify null argument handling
    deepEqual( findDistinctValues(null), undefined, expectedResultText(undefined, findDistinctValues(null)));

    // Verify non-array case
    equal( findDistinctValues('not an array'), undefined, expectedResultText(undefined, findDistinctValues('not an array')));
});
