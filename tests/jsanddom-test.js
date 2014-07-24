/********************************
Unit Test Example
********************************/
module("Travis Hubbard's Testathon");

test( "divide()", 2, function(assert) {
    // Verify the method exists
    assert.equal(typeof divide, 'function', 'Must contain a divide function');

    // Make sure the result from the divide function is valid
    assert.ok(divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide(4, 2));
});
/********************************
Please create your tests below...
********************************/
