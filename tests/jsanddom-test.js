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
module( "Reverse String" );
test( "Reverse String Test", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 

    // Make sure the result from the divide function is valid
    ok( reverseString( 'Subscribers rock' ), 'kcor srebircsbuS', 'Expected "kcor srebircsbuS" as the result, the result was: ' +  reverseString( 'kcor srebircsbuS' ) );
});

module( "Find Min Value" );
test( "Find Min Value Test", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 

    // Make sure the result from the divide function is valid
    ok( findMinValue( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ),  -1.1, 'Expected -1.1 as the result, the result was: ' +   findMinValue( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ) );
});

module( "Find Distinct Values" );
test( "Find Distinct Values Test", 2, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 

    // Make sure the result from the divide function is valid
    ok( findDistinctValues( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ), [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity], 'Expected "[3, 5, 7, 20, .18, 01, -1.1, 12, Infinity]" as the result, the result was: ' +  findDistinctValues( [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12] ) );
});

module( "Remove Fruits" );
test( "Remove Fruits Test", 2, function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a findDistinctValues function' ); 

    // Make sure the result from the divide function is valid
	var fruits = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
	var fruitsToRemove = ['pear', 'banana'];
    ok( removeFruits( fruits, fruitsToRemove ), ['apple', 'orange', 'kiwi', 'plum', 'strawberry'], 'Expected "["apple", "orange", "kiwi", "plum", "strawberry"]" as the result, the result was: ' +  removeFruits( fruits, fruitsToRemove ));
});


