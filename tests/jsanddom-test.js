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

    assert.equal( reverseString("Hello"), "olleH", "Expected olleH as the result, the result was: " + reverseString("Hello"))
})

QUnit.test( "findMinValue test", function(assert) {
  assert.equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

  assert.equal( findMinValue([8,3,2,4,5]), 2, "Expected 2 as the result, the result was: " + findMinValue([8,3,2,4,5]))
})

QUnit.test( "findDistinctValues test", function(assert) {
  assert.equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );

  assert.equal( findDistinctValues([8,5,3,3,2,4,4,5]), "8 5 3 2 4", "Expected 8 5 3 2 4 as the result, the result was: " + findDistinctValues([8,5,3,3,2,4,4,5]))
})

QUnit.module( "FIZZBUZZ" );
QUnit.test( "doFizzBuzz test", function(assert) {
  assert.equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' );

  assert.equal( doFizzBuzz(), "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz 31 32 Fizz 34 Buzz Fizz 37 38 Fizz Buzz 41 Fizz 43 44 FizzBuzz 46 47 Fizz 49 Buzz Fizz 52 53 Fizz Buzz 56 Fizz 58 59 FizzBuzz 61 62 Fizz 64 Buzz Fizz 67 68 Fizz Buzz 71 Fizz 73 74 FizzBuzz 76 77 Fizz 79 Buzz Fizz 82 83 Fizz Buzz 86 Fizz 88 89 FizzBuzz 91 92 Fizz 94 Buzz Fizz 97 98 Fizz Buzz", "Expected a better answer as the result, the result was: " + doFizzBuzz())
  })

QUnit.test( "removeFruits test", function(assert) {
  assert.equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );

  assert.ok( removeFruits([8,5,3,3,2,4,4,5]), [8,5,3,2,4,5], "Expected [8,5,3,2,4,5] as the result, the result was: " + removeFruits([8,5,3,3,2,4,4,5]))
})
