/********************************
Unit Test Example
********************************/

module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
	// >>>>> this example was wrong.  I changed below - "divide(4,2), 2,"  to "divide(4,2) == 2," 
    ok( divide( 4, 2 ) == 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/

// fix IE8 console problem  ///////
if(!window.console) {console = {log: function() {}} };////////////////////////////////////

test('reverse string', 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 
	
	ok( reverseString('abcd') == 'dcba', 'Expected dcba as the result, the result was '+reverseString('abcd'));
});
								   
								 
test('find min value', 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 
	
	ok( findMinValue([40,28,9,320,46]) == 9, 'Expected 9 as the result, the result was '+findMinValue([40,28,9,320,46]) );
});

test('return distinct values', 2, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 
    
    ok( JSON.stringify(findDistinctValues(['a',3,1,1,'a','bad',34,1,54,28,'bad',54])) == JSON.stringify([1,28,3,34,54,'a','bad']), 
    'Expected [1,28,3,34,54,a,bad] as the result, the result was '+findMinValue(['a',3,1,1,'a','bad',34,1,54,28,'bad',54]) );
});
 

test('print divisible by 3 and 5', 2, function() {
    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' ); 
    
    var f = doFizzBuzz();
    ok( f[2] == 'Fizz' && f[4] == 'Buzz' && f[14] == 'FizzBuzz' && f[7] == 8 && f.length == 100, 
    'Expected true as the result, the result was false');
});


test('remove fruits', 3, function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' ); 
    
    var f = removeFruits(['apple', 'orange', 'grapes', 'melon'],['grapes','lemon', 'orange']);
    ok(f.length == 2 && $.inArray('apple',f) >= 0 && $.inArray('melon',f) >= 0,
       'Expected true as the result, the result was false');
    
    ok(removeFruits('apple', ['apple']) == false,
      'Expected  false, the result was not false');
});

test('push onto array', 3, function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' ); 
    
    var array = ['apple', 'orange', 'grapes'];
    pushOntoArray(array, ['fig','melon'])
    ok(JSON.stringify(array) == JSON.stringify(['apple', 'orange', 'grapes','fig','melon']),
       'Expected true as the result, the result was false');
   
    pushOntoArray(array, 'cranberry');
    ok(JSON.stringify(array) == JSON.stringify(['apple', 'orange', 'grapes','fig','melon','cranberry']),
      'Expected  true, the result was false');
});




