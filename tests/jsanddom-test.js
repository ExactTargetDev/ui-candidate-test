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
    ok( reverseString( 'The quick brown fox' ), 'xof nworb kciuq ehT', 'Expected "xof nworb kciuq ehT" as the result, the result was: ' +  reverseString( 'A quick brown fox' ) );
});

module( "Find Min Value" );
test( "Find Min Value Test", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 

    // Make sure the result from the divide function is valid
    ok( findMinValue( [1, 2, -1, -6, Infinity, 5, 100.0, -6.1, 0, -6, -12] ),  -12, 'Expected -12 as the result, the result was: ' +   findMinValue( [1, 2, -1, -6, Infinity, 5, 100.0, -6.1, 0, -6, -12] ) );
});

module( "Find Distinct Values" );
test( "Find Distinct Values Test", 2, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 

    // Make sure the result from the divide function is valid
    ok( findDistinctValues( [1, 2, 1, -6, Infinity, 5, 100.0, -6.1, 0, -6, -12, -12, Infinity] ), [1, 2, -6, Infinity, 5, 100.0, -6.1, 0, -12], 'Expected "[1, 2, -6, Infinity, 5, 100.0, -6.1, 0, -12]" as the result, the result was: ' +  findDistinctValues( [1, 2, 1, -6, Infinity, 5, 100.0, -6.1, 0, -6, -12, -12, Infinity] ) );
});

module( "Remove Fruits" );
test( "Remove Fruits Test", 2, function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' ); 

    // Make sure the result from the divide function is valid
	var fruits = ['apple', 'banana', 'grapes', 'strawberry', 'pear'];
	var fruitsToRemove = ['pear', 'banana'];
    ok( removeFruits( fruits, fruitsToRemove ), ['apple', 'grapes', 'strawberry'], 'Expected "["apple", "grapes", "strawberry"]" as the result, the result was: ' +  removeFruits( fruits, fruitsToRemove ));
});

module( "Push onto Array" );
test( "Push onto Array Test", 3, function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' ); 

    // Make sure the result from the divide function is valid
	var array = [1, 2, 3, 4, 5];
	var pushArray = [7, 8];
	var pushItem = 6;
    ok( pushOntoArray( array, pushitem ), [1, 2, 3, 4, 5, 6], 'Expected "[1, 2, 3, 4, 5, 6]" as the result, the result was: ' +  pushOntoArray( array1, item ));
    ok( pushOntoArray( array, pushArray ), [1, 2, 3, 4, 5, 7, 8,], 'Expected "[1, 2, 3, 4, 5, 7, 8]" as the result, the result was: ' +  pushOntoArray( array1, array2));
});

module( "Split String" );
test( "Push onto Array Test", 2, function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' ); 

    // Make sure the result from the divide function is valid
	var string = 'The, quick, brown, fox';
    ok( splitListStrUsingComma( str ), ['The', ' quick', ' brown', ' fox'], 'Expected "["The", " quick", " brown", " fox"]" as the result, the result was: ' +  splitListStrUsingComma( str ));
    
});
