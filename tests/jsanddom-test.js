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
QUnit.module( "Function Tests" );
QUnit.test( "Reverse String Test", function(assert) {
    assert.equal( typeof reverseString, 'function', 'Must contain a reverse string function' );

    assert.ok( reverseString('Subscribers rock'), 'kcor srebircsbuS', 'Expected kcor srebircsbuS as the result, the result was: ' + reverseString('Subscribers rock') );
});
