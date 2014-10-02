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

//PLEASE ONLY FOR THOSE WITH A SENSE OF HUMOR :)

module( "Reversatator" );
test( "Reversing a string.", 2, function() {
	// Verify the method exists
	equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

	// Make sure the result from reverseString is valid
	ok( reverseString( 'Christopher_Obigho' ), 'ohgibO_rehpotsirhC', 'Expected ohgibO_rehpotsirhC as the result, the result was: ' + reverseString( 'Christopher_Obigho' ) );
});

module( "Find that Min" );
test( "Computing the MIN value in array.", 2, function() {
	// Verify the method exists
	equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

	// Make sure the result from findMinValue is valid
	ok( findMinValue( [7,2,3,4,8,9,6] ), 2, 'Expected 0 as the result, the result was: ' + findMinValue( [7,2,3,4,8,9,6] ) );
});

module( "Distinctanator" );
test( "Can you say SHOW ME THE DISTINCT value :)", 2, function() {
	// Verify the method exists
	equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );

	// Make sure the result from findDistinctValues is valid
	ok( findDistinctValues( [0,1,2,3,4,5,6,7,8,9,0] ), [0], 'Expected [0] as the result, the result was: ' + findDistinctValues( [7,-1,9,1,8,5] ) );
});

module( "Scotty beam me FizzBuzz up" );
test( "How did the FizzBuzz work", 2, function() {
	// Verify the method exists
	equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' );

	// Make sure the return value from doFizzBuzz is valid
	ok( !doFizzBuzz(), 'Expected no returned result, the result was: ' + doFizzBuzz() );
});

module( "Less Duplicator" );
test( "Chop Chop that Duplicate from first array", 2, function() {
	// Verify the method exists
	equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );

	// Make sure the result from removeFruits is valid
	deepEqual( removeFruits( ['bigbang', 'sheldon', 'penny', 'howard', 'raj', 'amy', 'bernadette', 'leonard', 'stuart'], ['stuart', 'bigbang'] ), ['sheldon', 'penny', 'howard', 'raj', 'amy', 'bernadette', 'leonard'], 'Expected [\'sheldon\', \'penny\', \'howard\', \'raj\', \'amy\, \'bernadette\, \'leonard\'] as the result, the result was: ' + removeFruits( ['bigbang', 'sheldon', 'penny', 'howard', 'raj', 'amy', 'bernadette', 'leonard', 'stuart'], ['stuart', 'bigbang'] ) );
});

module( "Ass Appender" );
test( "Append to the ass of an Array", 2, function() {
	// Verify the method exists
	equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' );

	// Make sure the result from pushOntoArray is valid
	deepEqual( pushOntoArray( [0, 9, 8, 7, 6, 5, 4, 3, 2, 1], 0 ), [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 'Expected [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0] as the result, the result was: ' + pushOntoArray( [0, 9, 8, 7, 6, 5, 4, 3, 2, 1], 0 ) );
});

module( "The String Splitter" );
test( "Split that string with a comma", 2, function() {
	// Verify the method exists
	equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' );

	// Make sure the result from splitListStrUsingComma is valid
	deepEqual( splitListStrUsingComma( 'What happens in vegas, stays in vegas' ), ['What happens in vegas', 'stays in vegas'], 'Expected [\'What happens in vegas\', \'stays in vegas\'] as the result, the result was: ' + splitListStrUsingComma( 'What happens in vegas, stays in vegas' ) );
});

module( "Whitespace only!" );
test( "Hmm only Whitespace please", 3, function() {
	// Verify the method exists
	equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' );

	// Make sure the result from isOnlyWhitespace is valid
	equal( isOnlyWhitespace( ' ' ), true, 'Expected true as the result, the result was: ' + isOnlyWhitespace( ' ' ) );
	equal( isOnlyWhitespace( 'ShatIsThePastTenseOfShit' ), false, 'Expected false as the result, the result was: ' + isOnlyWhitespace( 'ShatIsThePastTenseOfShit' ) );
});

module( "Me Closure" );
test( "Can I log me Closure", 2, function() {
	// Verify the method exists
	equal( typeof addNum, 'function', 'Must contain a addNum function' );

	// Make sure the result from addNum is valid
	ok( addNum( 5 ), 15, 'Expected 15 as the result, the result was: ' + addNum( 5 ) );
});

module( "JSON Test" );
test( "Testing me JSON structure", 1, function() {
	var people = '{ "person":[  {  "first":"Naruto","last":"Uzumaki","city":"Las Vegas","state":"NV","zip":89138,"phone":{  "home":7028219999,"work":7028218521, "mobile":9999999999 } } ]}';
	// Make sure me JSON is valid.
	equal( isJSON( people ), true,'Expected true as the result, the result was: ' + isJSON( people ) );
});
