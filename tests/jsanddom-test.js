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
module( "UI Test" );
test ( "Reverse String Test", 2, function() {

  equal( typeof reverseString, 'function',
    'Must contain a reverseString funciton' );
  
  ok( reverseString('Subscribers rock'), 'kcor srebircsbuS',
    'Expected "kcor srebircsbuS" as the result; the result was: ' +
      reverseString('Subscribers rock') );

});

test ( "Find Minimum Value Test", 2, function() {

  equal( typeof findMinValue, 'function',
    'Must contain a findMinValue funciton' );
  
  ok( findMinValue([3, 5, 7, 20, .18, 01, 
                    -1.1, 12, Infinity, Infinity, 
                    0.18, -1.1, 12]), -1.1,
    'Expected -1.1 as the result; the result was: ' +
      findMinValue([3, 5, 7, 20, .18, 01, 
                    -1.1, 12, Infinity, Infinity, 
                    0.18, -1.1, 12]) );

});

test ( "Find Distinct Values Test", 2, function() {

  equal( typeof findDistinctValues, 'function',
    'Must contain a findDistinctValues funciton' );
  
  ok( findDistinctValues([3, 5, 7, 20, .18, 01, 
                          -1.1, 12, Infinity, Infinity, 
                          0.18, -1.1, 12]),
      [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity],
    'Expected [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity]' +
      ' as the result; the result was: ' +
      findDistinctValues([3, 5, 7, 20, .18, 01, 
                          -1.1, 12, Infinity, Infinity, 
                          0.18, -1.1, 12]) );

});

test ( "Remove Fruits Test", 2, function() {

  equal( typeof removeFruits, 'function',
    'Must contain a removeFruits funciton' );
  
  ok( removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear',
                    'plum', 'strawberry'], ['pear', 'banana']),
    ['apple', 'orange', 'kiwi', 'plum', 'strawberry'],
    'Expected ["apple", "orange", "kiwi", "plum", "strawberry"]' +
      ' as the result; the result was: ' +
      removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear',
                    'plum', 'strawberry'], ['pear', 'banana']) );

});

test ( "Push Onto Array Test", 3, function() {

  equal( typeof pushOntoArray, 'function',
    'Must contain a pushOntoArray funciton' );
  
  ok( pushOntoArray([1, 2, 3, 4, 5], 6),
    [1, 2, 3, 4, 5, 6],
    'Expected [1, 2, 3, 4, 5, 6] as the result; the result was: ' +
      pushOntoArray([1, 2, 3, 4, 5], 6) );
      
  ok( pushOntoArray([1, 2, 3, 4, 5], [7, 8, 9]),
    [1, 2, 3, 4, 5, 7, 8, 9],
    'Expected [1, 2, 3, 4, 5, 7, 8, 9] as the result; the result was: ' +
      pushOntoArray([1, 2, 3, 4, 5], [7, 8, 9]) );

});

test ( "Split List String Using Comma Test", 3, function() {

  equal( typeof splitListStrUsingComma, 'function',
    'Must contain a splitListStrUsingComma funciton' );
  
  ok( splitListStrUsingComma('The, quick, brown, fox jumped over'),
    ["The", "quick", "brown", "fox jumped over"],
    'Expected ["The", "quick", "brown", "fox jumped over"] as the result;' +
      ' the result was: ' +
      splitListStrUsingComma('The, quick, brown, fox jumped over') );
      
  ok( splitListStrUsingComma(''),[],
    'Expected empty array as the result; the result was: ' +
      splitListStrUsingComma('') );

});

test ( "Sum Test", 2, function() {

  equal( typeof sum, 'function',
    'Must contain a sum function' );
    
  ok( sum(1, 1, 2, 3, 5, 7), 19,
    'Expected 19 as the result; the result was: ' +
    sum(1, 1, 2, 3, 5, 7) );

});