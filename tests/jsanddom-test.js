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
	ok(findDistinctValues(['apple', 'apple', 'orange', 'kiwi', 'pear', 'plum', 'strawberry']),
						  ['apple', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], 'Remove the dupe fruits!');

});