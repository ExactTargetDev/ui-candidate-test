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

//QUnit.test( "Reversing a string", function( assert ){
//    assert.equal( reverseString('tac'), 'cat', '"tac" returned "cat"' );
//    assert.equal( reverseString('woem'), 'meow', '"woem" returned "meow"' );
//    assert.equal( reverseString('esarhP tseT'), 'Test Phrase', '"esarhP tseT" returned "Test Phrase"' );
//    assert.equal( reverseString('taco'), 'ocat', '"taco" returned "ocat' );
//});

//test( "Reversing a string", function(){
//    equal( reverseString('tac'), 'cat', '"tac" returned "cat"' );
//    equal( reverseString('woem'), 'meow', '"woem" returned "meow"' );
//    equal( reverseString('esarhP tseT'), 'Test Phrase', '"esarhP tseT" returned "Test Phrase"' );
//    equal( reverseString('taco'), 'ocat', '"taco" returned "ocat' );
//});