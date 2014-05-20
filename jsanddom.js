// Example unit test function
function divide( a, b ) {
  // To see the test pass, uncomment the following line
  return a / b;
}

// Write a function that takes a single argument (a string) and returns the string reversed.
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Write a function that takes an array of numbers and returns the minimum value
function findMinValue(values) {
  var result = values.sort(function(a,b){
    return a - b;
  });
  return result[0];
}

// Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
function findDistinctValues(values) {
  var result = [];
  for(var i = 0; i < values.length; i++){
    if(result.indexOf(values[i]) === -1){
      result.push(values[i]);
    }
  }
  return result;  
}

// Write a function that logs the numbers from 1 to 100 to the console.
// For multiples of three print "Fizz" instead of the number.
// For multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".

// This version of the function is to enable a unit test to be written 
function doFizzBuzz(max) {
  var counter = 1;
  var result = '';
  while(counter <= max){
    if(counter % 15 === 0){
      result += 'FizzBuzz ';
    }else if(counter % 5 === 0){
      result += 'Buzz ';
    }else if(counter % 3 === 0){
      result += 'Fizz ';
    }else {
      result += counter + " ";
    }
    counter++
  }
  return result.trim(); 
}

// This version answers the specification written 
// function doFizzBuzz() {
//   var counter = 1;
//   while(counter <= 100){
//     if(counter % 15 === 0){
//       console.log('FizzBuzz');
//     }else if(counter % 5 === 0){
//       console.log('Buzz');
//     }else if(counter % 3 === 0){
//       console.log('Fizz');
//     }else {
//       console.log(counter);
//     }
//     counter++
//   }
// }


// You have a master array of strings, where each element is a fruit name.
// You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
// For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
// Write the function that will remove the values contained in fruitsToRemove from the array fruits.
function removeFruits(fruits, fruitsToRemove) {
  var result = [];
  fruits.forEach(function(item){
    if(fruitsToRemove.indexOf(item) === -1){
      result.push(item);
    }
  })
  return result;
}

// Write a function to push either a simple value or an array of values onto a specified array.
// For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
// If toPush is a simple value, it should be pushed onto array as an element.
// If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
function pushOntoArray(array, toPush) {
  if(Array.isArray(toPush)){
    toPush.forEach(function(item){
      array.push(item);
    })
  }else{
    array.push(toPush);
  }
  return array;
}

// Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
function splitListStrUsingComma(sourceStr) {
  if(sourceStr === ''){
    return [];
  }else{
    var result = sourceStr.split(',');
    return result.map(function(item){
      return item.trim();
    });
  }
}

// Write a function that will take any number of arguments and return their sum
function sum() {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function(previousVal, currentVal){
    return previousVal + currentVal
  })
}

// Write a function that will return true if a specified string consists of only whitespace.
function isOnlyWhitespace(sourceStr) {
  var re = /\s/;
  for(var i = 0; i < sourceStr.length; i++){
    if(re.test(sourceStr[i]) === false){
      return false;
    }
  }
  return true;
}

// write an example of a javascript closure
function greeting(person){
  var name = person;
  function speak(){
    return "Hello, " + name;
  }
  return speak();
};

// define a json object that represents a collection of people.
// each person should have the following properties
// - first name
// - last name
// - city
// - state
// - zip
// - a collection of phone numbers (home, work, mobile)
{
  "people": [
    {
      "firstName": "Ben",
      "lastName": "Stone",
      "city": "San Francisco",
      "state": "CA",
      "zip": "94107"
      "phone": [
        { "home": "917-650-0327"},
        { "work": "212-224-3599"},
        { "mobile": "955-555-5454" }
      ]
    },
    {
      "firstName": "Alyssa",
      "lastName": "Stone",
      "city": "San Francisco",
      "state": "CA",
      "zip": "94107"
      "phone": [
        { "home": "646-650-6464"},
        { "work": "212-224-3590"},
        { "mobile": "875-555-5454" }
      ]
    },
    {
      "firstName": "Sharon",
      "lastName": "Stone",
      "city": "Los Angeles",
      "state": "CA",
      "zip": "87902"
      "phone": [
        { "home": "456-650-4567"},
        { "work": "123-456-7890"},
        { "mobile": "888-555-5432" }
      ]
    },
  ]
}


// Create a javascript object (DataTable) with the following:
// A private columns property (string array)
// A private rows property (string array)
// A public method addRows that adds an item to the rows array
// A public method addColumns that adds an item to the columns array
// A public method getData that returns the a json object representation of the DataTable
// Note: the row object should be a hash of the column name and row item value
// Example:
// .addColumns('column1', 'column2', 'column3');
// .addRow('value1A', 'value1B', 'value1C');
// .addRow('value2A', 'value2B', 'value2C');

// within div1, programatically create a
// SELECT element (with multiple items) and a button.
// when the button is clicked write out the name and value of the selected item to the console.

// Write 5 different jQuery selectors to retrieve the
// sample anchor in the markup below.

// Programatically create an array with 5 items.  Create a list item for each item in the array
// and add the list items to the unordered list with an id of "list1".

// Use javascript to add a list of checkboxes and 2 links
// to the div with an id of "foobar"
// When the first link is clicked, all the checkboxes should be checked (i.e. check all)
// When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
