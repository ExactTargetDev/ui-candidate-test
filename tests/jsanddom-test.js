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

QUnit.test( "reverseString", function(assert) {
    // Verify the method exists
    assert.equal( typeof reverseString, 'function', 'Must contain a reverse function' ); 

    // Make sure the result from the divide function is valid
      assert.ok( reverseString( "hello" ), "olleh", 'Expected "olleh" as the result, the result was: ' + reverseString( "hello") );
});



