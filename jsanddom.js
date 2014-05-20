  // Example unit test function
  function divide( a, b ) {
    // To see the test pass, uncomment the following line
    return a / b;
  }

  // Write a function that takes a single argument (a string) and returns the string reversed.
  function reverseString(str) {
    // Some people don't think stringing methods like this is is pretty but it's extremely fast.
    // Faster than anything one could write from scratch.
    return str.split('').reverse().join('');
  }

  // Write a function that takes an array of numbers and returns the minimum value
  function findMinValue(values) {
    // apply takes an array of arguments as a second argument so 'values' can be passed into Math.min which takes only numbers
    return Math.min.apply(false, values);
  }

  // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
  function findDistinctValues(values) {
    // So it does not modify the input array.
    var result = values.slice();

    for (var i = 0; i < result.length; i++) {
      // the second argument of indexOf determines where to start searching.
      if (result.indexOf( result[i], i+1) !== -1) {
        // removes duplicate from array
        result.splice(i, 1);
        // steps back to compensate for changed array length and removed value.
        i--;
      }
    }

    // Speed tested against:
    // var result = [];

    // for (var i = 0; i < values.length; i++) {
    //   if ( values.indexOf(values[i]) === i ) {
    //     result.push(values[i]);
    //   }
    // }

    return result;
  }

  // Write a function that logs the numbers from 1 to 100 to the console.
  // For multiples of three print "Fizz" instead of the number.
  // For multiples of five print "Buzz".
  // For numbers which are multiples of both three and five print "FizzBuzz".
  function doFizzBuzz() {
    for (var i = 1; i <= 100; i++) {
      if (i%3 === 0 && i%5 === 0) {
        console.log('FizzBuzz');
      } else if (i%5 === 0) {
        console.log('Buzz');
      } else if (i%3 === 0) {
        console.log('Fizz');
      } else {
        console.log(i);
      }
    }
  }

  // You have a master array of strings, where each element is a fruit name.
  // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
  // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
  // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
  function removeFruits(fruits, fruitsToRemove) {
    // almost the same as findDistinctValues
    for (var i = 0; i < fruits.length; i++) {
      if(fruitsToRemove.indexOf(fruits[i]) !== -1) {
        fruits.splice(i, 1);
        i--;
      }
    }

    return fruits;
  }

  // Write a function to push either a simple value or an array of values onto a specified array.
  // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
  // If toPush is a simple value, it should be pushed onto array as an element.
  // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
  function pushOntoArray(array, toPush) {

    // typeof [] === "object", must use Array.isArray to test
    if (Array.isArray(toPush)) {
      // concat is non-mutative so the result needs to be explicitly assigned
      array = array.concat(toPush);
    } else {
      array.push(toPush);
    }

    return array;
  }

  // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
  function splitListStrUsingComma(sourceStr) {
    // '' == false
    if (sourceStr) {
      return sourceStr.split(', ');
    }

    // the only real exception
    return [];
  }

  // Write a function that will take any number of arguments and return their sum
  function sum() {
    var result = 0;

    // arguments is just an array of the arguments passed to a function... sort of. For this purpose it is.
    for (var i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }

    return result;
  }

  // Write a function that will return true if a specified string consists of only whitespace.
  function isOnlyWhitespace(sourceStr) {

    // RegExp \S matches any non-whitespace character. If it doesnt do that, we know there is nothing but whitespace.
    return !(/\S/).test(sourceStr);
  }

  // write an example of a javascript closure

  // The underscore _.after method which calls a callback only after it has been called n times:

  var after = function (n, func) {
    return function () {
      if (--n < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // ex: var threeCount = after(3, function(){ alert('threeCount called 3 times!') });

  // the 'n' variable remains accessable to the returned function
  // because they are both inside the closure created by invoking
  // the after function.


  // define a json object that represents a collection of people.
  // each person should have the following properties
  // - first name
  // - last name
  // - city
  // - state
  // - zip
  // - a collection of phone numbers (home, work, mobile)

  var people =  {people: [
                  {
                    first: 'Eric',
                    last: 'Hannum',
                    city: 'San Francisco',
                    state: 'CA',
                    zip: 94903,
                    phone: {
                      home: null, // because JSON can't hold undefined
                      work: null,
                      mobile: 4156867166
                    }
                  },
                  {
                    // ...
                  }
                ]
              };


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

  var DataTable = function () {

    // private variables
    var columns = [];
    var rows = [];

    // public methods that retain access to private variables
    this.addColumns = function () {
      // because arguments isn't REALLY an array...
      var args = Array.prototype.slice.call(arguments);

      columns = columns.concat(args);

      // pads out existing rows to fit to new columns
      for (var i = 0; i < rows.length; i++) {
        rows[i].length = columns.length;
      }
    };

    this.addRow = function () {
      if (!columns.length) {
        throw new Error('Table has no columns');
      } else if (arguments.length > columns.length) {
        throw new Error('The table only has ' + columns.length + 'columns. Add more columns to support ' + arguments.length + ' rows.');
      }

      var args = Array.prototype.slice.call(arguments);

      // pads out the rows, if needed, to fill columns
      args.length = columns.length;

      rows.push(args);
    };

    this.getData = function () {
      var result = {};

      for (var i = 0; i < rows.length; i++) {
        result[i] = {};
        for (var j = 0; j < columns.length; j++) {
          result[i][columns[j]] = rows[i][j];
        }
      }

      return result;
    };
  };

  // i'm just going to put this here:
  $(document).ready(function(){
  // within div1, programatically create a
  // SELECT element (with multiple items) and a button.
  // when the button is clicked write out the name and value of the selected item to the console.

  $('#div1').append('<select id="dropdown">' +
                      '<option name="flamingo" value="pink">Flamingo</option>' +
                      '<option name="banana" value="yellow">Banana</option>' +
                      '<option name="motorcycle" value="green">Motorcycle</option>' +
                      '<option name="moon" value="cheese">The Moon</option>' +
                    '</select>'+
                    '<button class="selectOption">Select</button>');

  $('.selectOption').click(function(e){
    var name = $('#dropdown').find(":selected").attr('name');
    var value = $('#dropdown').find(":selected").val();

    console.log(name + ': ' + value);
  });

  // Write 5 different jQuery selectors to retrieve the
  // sample anchor in the markup below.

  $('a');
  $('.link');
  $('#foo').find('a');
  $('#fizz').children();
  $('#foo').children().children();

  // Programatically create an array with 5 items.  Create a list item for each item in the array
  // and add the list items to the unordered list with an id of "list1".

  // Use javascript to add a list of checkboxes and 2 links
  // to the div with an id of "foobar"
  // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
  // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
  });