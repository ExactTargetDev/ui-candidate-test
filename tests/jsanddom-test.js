/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
// test( "Example Test", 2, function() {
//     // Verify the method exists
//     equal( typeof divide, 'function', 'Must contain a divide function' ); 

//     // Make sure the result from the divide function is valid
//     ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
// });
/********************************
Please create your tests below...
********************************/

module('Reverse String Tests');
test('reverseString()', function(){
    equal(reverseString('Hello'), 'olleH', 'This is Hello reversed.');
    equal(reverseString('olleH'), 'Hello', 'This is a reversed reverse test.');
    equal(reverseString('Subscribers rock'), 'kcor srebircsbuS', 'Subscribers <3');
    equal(reverseString(null), '', 'This is a null test.');
    equal(reverseString(undefined), '', 'This is an undefined test.');
});

module('Min Value');
test('findMinValue()', function(){
	equal(findMinValue([3,5,2,1,40]), 1, 'Find minimum base.');
	equal(findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]), -1.1, 'ET sample data.');
});

module('Distinct');
test('findDistinctValues()', function(){
	ok(findDistinctValues([1,1,2,3,4,4]),[1,2,3,4], 'Remove the dupes!');

});

module('Fruits to Remove');
test('removeFruits()', function(){
	ok(removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'],['pear', 'banana']), 
					['apple', 'orange', 'kiwi', 'plum'], 'Remove dupe fruits.');
});

module('Sum n Numbers');
test('sum()', function(){
	equal(sum(1, 1, 2, 3, 5, 7), 19, 'ET test #1.');	
});

module('Push on to Array');
test('pushOntoArray()', function(){
    ok(pushOntoArray([1,2], 3), [1,2,3], 'Add single value to array.');
    //deepEqual(pushOntoArray([1,2], [3,4]), [1,2,3,4], 'Concat arrays');
    ok(pushOntoArray(null, 1), [1], 'Add value to null.');
    ok(pushOntoArray(undefined, [3,3,2]), 'Add array to undefined.');
    //deepEqual(pushOntoArray([1,2,3,4,5], 6), [1,2,3,4,5,6], 'ET test 1.');
});

// module('splitListStrUsingComma');
// test('splitListStrUsingComma()', function(){
// 	equal(splitListStrUsingComma('The, quick, brown, fox jumped over'), 'The, quick, brown, fox, jumped, over', 'ET test 1' );
// });
