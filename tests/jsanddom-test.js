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

test("Reverse String",2,function(){
	// does exist specified method?
	equal( typeof reverseString, 'function', 'Must contain a reverseString function')
	// Make sure the result from the reverseString function is valid
	ok( reverseString(unitTestJson.a), 2, 'Expected "kcor srebircsbuS" as the result, the result was: ' + reverseString("US") );
});


test("Find Minimum Value",2,function(){
	// does exist specified method?
	equal( typeof findMinValue, 'function', 'Must contain a findMinValue function')
	// Make sure the result from the findMinValue function is valid
	ok(findMinValue(unitTestJson.b), -1.1 , 'Expected -1.1 as the result, the result was: ' + findMinValue(unitTestJson.b) );
});


test("Find Distinct Values",2,function(){
	// does exist specified method?
	equal( typeof reverseString, 'function', 'Must contain a findDistinctValues function')
	// Make sure the result from the findDistinctValues function is valid
	ok( findDistinctValues(unitTestJson.j), 2, 'Expected "[1, 2, 3, 5, 7]" as the result, the result was: ' + findDistinctValues(unitTestJson.j) );
});

test( "do Fizz Buzz Task", 2, function() {
    // does exist specified method?
    equal( typeof doFizzBuzz, 'function', 'Must contain doFizzBuzz function' );
    // Make sure the result from the doFizzBuzz function is valid
    ok( doFizzBuzz(), true,
        'Expected true the result was: ' + doFizzBuzz());
});

test( "Remove Fruits", 2, function() {
    // does exist specified method?
    equal( typeof removeFruits, 'function', 'Must contain removeFruits function' );
    // Make sure the result from the removeFruits function is valid
    ok( removeFruits(unitTestJson.c,unitTestJson.d),
        ["apple", "orange", "kiwi", "strawberry"],
        'Expected [apple, orange,kiwi,pear, plum, strawberry] as the result, the result was: ' +
        removeFruits(unitTestJson.c,unitTestJson.d));
});

test( "push on to Array", 2, function() {
    // does exist specified method?
    equal( typeof pushOntoArray, 'function', 'Must contain pushOntoArray function' );
    // Make sure the result from the pushOntoArray function is valid
    ok(pushOntoArray(unitTestJson.e,unitTestJson.f), [1, 2, 3, 4, 5, 6],
        'Expected 1, 2, 3, 4, 5, 6 as the result, the result was: ' + pushOntoArray(unitTestJson.e,unitTestJson.f));
});

test( "Split List String Using Comma - v1", 2, function() {
    // does exist specified method?
    equal( typeof splitListStrUsingComma, 'function', 'Must contain splitListStrUsingComma function' );
    // Make sure the result from the splitListStrUsingComma function is valid
    ok(splitListStrUsingComma('I,would,like,to,join,with,you'), ['I','would','like','to','join','with','you'],
        'Expected "[\'I\',\'would\',\'like\',\'to\',\'join\',\'with\',\'you\']" the result was: '
        + splitListStrUsingComma('I,would,like,to,join,with,you'));
});

test( "Split List String Using Comma - v2", 2, function() {
     // does exist specified method?
    equal( typeof splitListStrUsingComma, 'function', 'Must contain splitListStrUsingComma function' );
    // Make sure the result from the splitListStrUsingComma function is valid
    ok( splitListStrUsingComma(unitTestJson.i), [], 'Expected [] as the result, the result was: ' + splitListStrUsingComma(''));
});

test( "isOnlyWhitespace", 2, function() {
    // does exist specified method?
    equal( typeof isOnlyWhitespace, 'function', 'Must contain isOnlyWhitespace function' );
    // Make sure the result from the divide function is valid
    ok( isOnlyWhitespace(unitTestJson.k), true, 'Expected true as the result, the result was: ' + isOnlyWhitespace(' '));
});



test( "getJSON from data table plugin - v1", 2, function() {
    // does exist specified method?
    equal( typeof $$, 'object', 'Must contain $$.getData function' );
    // Make sure the result from the $$.getData function is valid
    ok( $$.getData(), '{"rows":[],"columns":[]}',
        'Expected {"rows":[],"columns":[]} as the result, the result was: ' + $$.getData() );
});

test( "getJSON from data table plugin - v2", 2, function() {
    // does exist specified method?
    equal( typeof  $$, 'object', 'Must contain $$.getData  function' );
    // Make sure the result from the divide function is valid
    $$.addColumns(['col1','col2']);
    $$.addRow(['col1','col2']);
    ok( $$.getData(), '{"rows":{"col1":"col1","col2":"col2"},"columns":["col1","col2"]}',
        'Expected {"rows":{"col1":"col1","col2":"col2"},"columns":["col1","col2"]} as the result, the result was: ' + $$.getData());
});

test( "toJSON clousure", 2, function() {
    // does exist specified method?
    equal( typeof toJSON, 'function', 'Must contain toJSON function' );
    // Make sure the result from the toJSON function is valid
    ok(toJSON(), '[{"firstName":"Liza","lastName":"Zinto","city":"United States","state":"CA","zip":"90032","phone":["+918870324564","+919025990532"]},{"firstName":"Philp","lastName":"Parker","city":"United States","state":"SF","zip":"90031","phone":["+918870324564","+919025990532"]},{"firstName":"Alex","lastName":"Kolonitsky","city":"Russiya","state":"Minsty","zip":"092092","phone":["+918870324564","+919025990532"]}]', 'Expected true as the result, the result was: ' + toJSON());
});