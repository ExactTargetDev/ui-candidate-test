/********************************
Unit Test Example
********************************/
QUnit.module( "Example Unit Test" );
QUnit.test( "Example Test", function(assert) {
    // Verify the method exists
    assert.equal( typeof divide, 'function', 'Must contain a divide function' );

    // Make sure the result from the divide function is valid
    assert.ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/

QUnit.test( "reverseString test", function(assert) {
    assert.equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

    assert.ok( reverseString("Hello"), "olleH", "Expected olleH as the result, the result was: " + reverseString("Hello"))
})

QUnit.test( "findMinValue test", function(assert) {
  assert.equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

  assert.ok( findMinValue([8,3,2,4,5]), 2, "Expected 2 as the result, the result was: " + findMinValue([8,3,2,4,5]))
})

QUnit.test( "findDistinctValues test", function(assert) {
  assert.equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );

  assert.ok( findDistinctValues([8,5,3,3,2,4,4,5]), [8,5,3,2,4,5], "Expected [8,5,3,2,4,5] as the result, the result was: " + findDistinctValues([8,5,3,3,2,4,4,5]))
})
// 
