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
module( "Utility Functions" );
test("reverseString", function() {
  equal(reverseString("Subscribers rock"), "kcor srebircsbuS", "String should be reversed");
});

test("findMinValue", function() {
  equal(findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]), -1.1, "Should return minimum value");
});

test("findDistinctValues", function() {
  deepEqual(findDistinctValues([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]), [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity], "Should return unique values");
});

test("fizzBuzzHelper", function() {
  deepEqual(fizzBuzzHelper(15), [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"], "Should return 'Fizz' for multiples of 3, 'Buzz' for multiples of 5, and 'FizzBuzz' for multiples of both 3 and 5");
});

test("removeFruits", function() {
  deepEqual(removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana']), ['apple', 'orange', 'kiwi', 'plum', 'strawberry'], "Array should not contain 'pear' or 'banana'");
});

test("pushOntoArray", function() {
  var array = [1,2,3,4,5];
  pushOntoArray(array, 6);
  deepEqual(array, [1,2,3,4,5,6], "Should add a single value to array");
  pushOntoArray(array, [7,8,9]);
  deepEqual(array, [1,2,3,4,5,6,7,8,9], "Should add a array's elements to array");
});

test("splitListStrUsingComma", function() {
  var splitStrings = splitListStrUsingComma('The, quick, brown, fox jumped over');
  deepEqual(splitStrings, ['The', ' quick', ' brown', ' fox jumped over'], "Should split on comma");
  deepEqual(splitListStrUsingComma(''), [], "Should return empty array for empty string");
});

test("sum", function() {
  equal(sum(1, 1, 2, 3, 5, 7), 19, "Should return sum of arguments");
});

test("isOnlyWhitespace", function() {
  ok(isOnlyWhitespace('\t \n '), "Should return true if string contains only whitespace");
  equal(isOnlyWhitespace('   test   '), false, "Should return false if string containers nonwhitespace character");
});

module( "DataTable" );
test("getData", function() {
  var dt = new DataTable();
  deepEqual(dt.getData(), [], "new DataTable should have empty data");
  dt.addColumns('column1', 'column2', 'column3');
  dt.addRow('value1A', 'value1B', 'value1C');
  deepEqual(dt.getData(), [
    { 
      'column1' : 'value1A',
      'column2' : 'value1B',
      'column3' : 'value1C'
    }
  ], "Should return one row");

  dt.addRow('value2A', 'value2B', 'value2C');
  deepEqual(dt.getData(), [
    { 
      'column1' : 'value1A',
      'column2' : 'value1B',
      'column3' : 'value1C'
    },
    {
      'column1' : 'value2A',
      'column2' : 'value2B',
      'column3' : 'value2C'
    }
  ], "Should return two rows");
});
