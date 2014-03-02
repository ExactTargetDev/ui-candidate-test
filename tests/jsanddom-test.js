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
module( "Reverse" );
test( "Reverse string unit test", 2, function () {
     equal( typeof reverseString, 'function', "Must contain a reverse string function" );
		 ok( reverseString('abcd'), 'dcba', "Expected dcba as the result, the result was " + reverseString('abcd') );
});
module( "findMinValue" );
test( "find min value unit test", 5, function () {
     equal( typeof findMinValue , 'function', "Must contain a findMinValue function" );
		 equal( findMinValue([-2, 1, 2]), -2, "Expected min value to be -2, it was " + findMinValue([-2, 1, 2]) );
		 equal( findMinValue([0, -1, 2]), -1, "Expected min value to be -1, it was " + findMinValue([0, -1, 2]) );
		 equal( findMinValue([2, 1, 0]), 0, "Expected min value to be 0, it was " + findMinValue([2, 1, 0]) );
		 equal( findMinValue([3, 2, 1]), 1, "Expected min value to be 1, it was " + findMinValue([3, 2, 1]) );
});
module( "findDistinctValues" );
test( "find distinct values unit test", 6, function () {
     equal( typeof findDistinctValues , 'function', "Must contain a findDistinctValues function" );
		 deepEqual( findDistinctValues([1, 1, 1]), [1], "Expected distinct to be just [1]" );
		 deepEqual( findDistinctValues([1, 2, 2]), [1,2], "Expected distinct to be just [1,2]" );
		 deepEqual( findDistinctValues([1, 1, 2]), [1,2], "Expected distinct to be just [1,2]" );
		 deepEqual( findDistinctValues([1, 3, 2]), [1,2,3], "Expected distinct to be just [1,2,3]" );
		 deepEqual( findDistinctValues([0, 1, 1]), [0,1], "Expected distinct to be just [0,1]" );
});
module( "doFizzBuzz" );
test( "do fizz buzz unit test", 201, function () {
     equal( typeof doFizzBuzz , 'function', "will log to the console" );
		 var origlog = console.log;
		 var last = 0;
		 console.log = function (str) {
		   var number = parseInt(str);
       if (isNaN(number)) {
         last = last + 1;
         if ( last % 3 ) ok( ! str.match(/^Fizz/), last + " not by three and doesn't fizz " );
         else ok( str.match(/^Fizz/), last + " divisible by three and has fizz" );
         if ( last % 5 ) ok( ! str.match(/Buzz$/), last + " not by five and doesn't buzz" );
         else  ok( str.match(/Buzz$/), last + " divisible by five and has buzz" );
       } else {
         last = number;
         ok( number % 5, number + ' is a number, is not divisible by 5' );
         ok( number % 3, number + ' is a number, is not divisible by 3' );
       }
		 };
     doFizzBuzz();
		 console.log = origlog;
});
module( "removeFruits" );
//     function removeFruits(fruits, fruitsToRemove) {
test( "do remove fruits unit test", 8, function () {
     equal( typeof removeFruits , 'function', "can remove fruits" );
     deepEqual( removeFruits(['apple', 'orange', 'durian', 'tomato'], ['durian'] ), ['apple', 'orange', 'tomato'], "will remove single from end" );
     deepEqual( removeFruits(['apple', 'orange', 'durian', 'tomato'], ['tomato'] ), ['apple', 'orange', 'durian'], "will remove single from middle" );
     deepEqual( removeFruits(['apple', 'orange', 'durian', 'tomato'], ['apple'] ), ['orange', 'durian', 'tomato'], "will remove single from begin" );
     deepEqual( removeFruits(['apple', 'orange', 'durian', 'tomato'], ['apple', 'apple'] ), ['orange', 'durian', 'tomato'], "will remove single when double removed" );
     deepEqual( removeFruits(['apple', 'orange', 'apple', 'durian', 'apple', 'tomato'], ['apple'] ), ['orange', 'durian', 'tomato'], "will remove all when multiple occurences" );
     deepEqual( removeFruits(['apple', 'orange', 'durian', 'tomato'], ['durian', 'tomato'] ), ['apple', 'orange'], "will remove multiple disparate" );
     deepEqual( removeFruits(['apple', 'orange', 'durian', 'tomato'], ['cherry'] ), ['apple', 'orange', 'durian', 'tomato'], "won't remove any if no match" );
});

module( "pushOntoArray" );
//     function pushOntoArray(array, toPush) {
test( "do push onto array unit test", 5, function () {
     equal( typeof pushOntoArray, 'function', "can push onto array" );
     var beforeArray = ['apple', 'orange', 'durian', 'tomato']
     deepEqual( pushOntoArray( beforeArray , ['cherry'] ), ['apple', 'orange', 'durian', 'tomato', 'cherry'], "adds an array's values onto the original array" );
     beforeArray.forEach( function (item) {
       if (item == 'cherry') ok( 1, "new item is present in original array" );
     } );
     deepEqual( pushOntoArray(['apple', 'orange', 'durian', 'tomato'], 'cherry' ), ['apple', 'orange', 'durian', 'tomato', 'cherry'], "adds an Simple value's value onto the original array" );
     beforeArray.forEach( function (item) {
       if (item == 'cherry') ok( 1, "new item is present in original array" );
     } );
});



module( "splitListStrUsingComma" );
//     function splitListStrUsingComma(sourceStr) {
test( "do split list string using comma test", 3, function () {
     equal( typeof splitListStrUsingComma, 'function', "can split string on comma" );
     deepEqual( splitListStrUsingComma( '"The time has come," the Walrus said, "To talk of many things: Of shoes--and ships--and sealing-wax-- Of cabbages--and kings--"' ), ['"The time has come','" the Walrus said',' "To talk of many things: Of shoes--and ships--and sealing-wax-- Of cabbages--and kings--"'], "splits on commas when present" );
     deepEqual( splitListStrUsingComma( 'And why the sea is boiling hot-- And whether pigs have wings."' ), [], "empty array with no commas" );
});


module( "sum" );
//     function sum() {
test( "do sum unit test", 8, function () {
     equal( typeof sum, 'function', "can sum" );
     equal( sum( 1, 2, 3 ), 6 , 'three arguments' );
     equal( sum( 1, 2, 3, 4, 5, 6 ), 21 , '6 arguments' );
     equal( sum( 6 ), 6, '1 argument' );
     equal( sum( ), undefined, '0 arguments' );
     equal( sum( '' ), '', '0 arguments' );
     equal( sum( 1, 2, 3, 4, 5, 6, 'dog' ), '21dog' , '7 arguments with string' );
     equal( sum( 1, 2, 'cat', 4, 5, 6, 'dog' ), '3cat456dog' , '7 arguments with a couple of strings' );
});




module( "isOnlyWhiteSpace" );
//     function isOnlyWhitespace(sourceStr) {
test( "do is only whitespace unit test", 3, function () {
     equal( typeof isOnlyWhitespace, 'function', "can isOnlyWhitespace" );
     ok( isOnlyWhitespace(' \t\r\n\f'), 'all the whitespace is whitespace' );
     ok( !isOnlyWhitespace(' \t.\r\n\f'), 'all the whitespace is whitespace, but a period isnt' );
});




module( "tellMeLater (closure)" );
//     function isOnlyWhitespace(sourceStr) {
test( "do closure unit test", 3, function () {
     equal( typeof tellMeLater, 'function', "can tellMeLater" );
     equal( typeof tellMeLater('secret'), 'function', "returns a function" );
     equal( tellMeLater('secret')(), 'secret', "knows what I told it" );
});




