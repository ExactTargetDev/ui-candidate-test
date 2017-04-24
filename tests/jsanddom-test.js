/********************************
Unit Test Example
********************************/
QUnit.module( "Example Unit Test" );
QUnit.test( "Example Test", function( assert ) {
    // Verify the method exists
   assert.equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    assert.ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/

QUnit.test( "Reverse String", function( assert ) {
    assert.equal( typeof reverseString, 'function', 'Must contain a reverse function' ); 
    assert.ok( reverseString( "This is fun" ), "nuf si sihT", 'Expected "nuf si sihT" as the result, the result was: ' + reverseString( "This is fun" ) );
});

QUnit.test( "Find Minimum Value", function( assert ) {
    assert.equal( typeof findMinValue, 'function', 'Must contain a Math.min function' ); 
    assert.ok( findMinValue( 3, 6, 9), 3, 'Expected 3 as the result, the result was: ' + findMinValue( 3, 6, 9) );
});

QUnit.test( "Remove Duplicate Values", function( assert ) {
    assert.equal( typeof findDistinctValues, 'function', 'Must contain a filter function' ); 
    assert.ok( findDistinctValues( 3, 6, 6, 9, 9), ( 3, 6, 9 ), 'Expected ( 3, 6, 9 ) as the result, the result was: ' + findDistinctValues( 3, 6, 9) );
});

