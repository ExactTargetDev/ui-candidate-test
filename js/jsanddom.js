// Example unit test function
function divide( a, b ) {
  // To see the test pass, uncomment the following line
  //return a / b;
}

// Write a function that takes a single argument (a string) and returns the string reversed.
function reverseString(str) {
  _.str.reverse(str);
}

// Write a function that takes an array of numbers and returns the minimum value
function findMinValue(values) {
  // FILL THIS IN
}

// Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
function findDistinctValues(values) {

  if(!(_.isArray(values) && values.length > 0)) return values;

  var HashMap = Object.create(null), distinctValues = [], n = values.length - 1;
  do {
    if (!HashMap[values[n]]) {
      HashMap[values[n]] = true;
      distinctValues.push(values[n]);
    }
  } while(n--);

  return distinctValues;
}


// Write a function that logs the numbers from 1 to 100 to the console.
// For multiples of three print "Fizz" instead of the number.
// For multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
function doFizzBuzz() {
  var num, consoleOutput,
  isMultipleOfFive = function(num) { return num%5 == 0; },
  isMultipleOfThree = function(num) { return num%3 == 0; },
  fizz = "Fizz",
  buzz = "Buzz";

  for(num = 1; num < 101; num++) {

    consoleOutput = isMultipleOfThree(num)  ? fizz : "";

    if(isMultipleOfFive) consoleOutput += buzz;

    if(consoleOutput.length == 0) consoleOutput = num;

    console.log(consoleOutput);
  }
}

// You have a master array of strings, where each element is a fruit name.
// You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
// For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
// Write the function that will remove the values contained in fruitsToRemove from the array fruits.
function removeFruits(fruits, fruitsToRemove) {

  if(!_.isArray(fruits) || fruits.length == 0 || !_.isArray(fruitsToRemove) || fruitsToRemove.length == 0) return;

  // Ensure we have a unique list to reduce large list overhead.
  var sortedDistinctFruitsToRemove = JHUtils.ascSort(findDistinctValues(fruitsToRemove)),
  n = sortedDistinctFruitsToRemove.length - 1,
  indexToRemove;

  do {
    indexToRemove = _.indexOf(fruits, sortedDistinctFruitsToRemove[n]);
    if(indexToRemove == -1) continue;

    fruits.splice(indexToRemove, 1);
  } while(n--);
}

// Write a function to push either a simple value or an array of values onto a specified array.
// For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
// If toPush is a simple value, it should be pushed onto array as an element.
// If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
function pushOntoArray(array, toPush) {
  // FILL THIS IN

  if(!_.isArray(array)) return;

  // Make sure toPush isn't an object or empty string (otherwise - nothing to do)
  if(_.isObject || _.str.isBlank(toPush)) return;

  var originalVal, n;

  if(!_.isArray(toPush)) {
    originalVal = toPush;
    toPush = [originalVal];

  } else if(toPush.length == 0) {
    return;
  }

  n = toPush.length - 1;
  do {
    array.push(toPush[n]);
  } while(n--);
}

// Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
function splitListStrUsingComma(sourceStr) {
  // FILL THIS IN
  return (_.str.isBlank(sourceStr)) ? [] : str.split(',');
}

// Write a function that will take any number of arguments and return their sum
function sum() {
  // FILL THIS IN

  var n = arguments.length - 1,
  result = 0;

  if(n == -1) return result;

  do {
    result += arguments[n];
  } while(n--);

  return sum;
}

// Write a function that will return true if a specified string consists of only whitespace.
function isOnlyWhitespace(sourceStr) {
  // FILL THIS IN
  return sourceStr.replace(new RegExp(/^\s+|\s+$/g), '').length == 0;
}

// write an example of a javascript closure
var somePublicFunction = function(someValue) {

  var somePrivateFunction = function() {
    console.log("The value (" + someValue + ") passed into somePublicFunction has been violated via closures");
  };
}

// define a json object that represents a collection of people.
// each person should have the following properties
// - first name
// - last name
// - city
// - state
// - zip
// - a collection of phone numbers (home, work, mobile)

// http://jsonlint.com/
var PeopleCollection = [
  {
    "first_name": "Joe",
    "last_name": "Bob",
    "city": "Manchester",
    "state": "KY",
    "zip": "40962",
    "phone_numbers": [{
      "home": "606-598-0000",
      "work": "606-598-0001",
      "mobile": "606-598-0002"
    }]
  },
  {
    "first_name": "Jenny",
    "last_name": "Anonymous",
    "city": "Colorado Springs",
    "state": "CO",
    "zip": "80909",
    "phone_numbers": [{
      "home": "719-867-5309",
      "work": "",
      "mobile": ""
    }]
  }
];


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
(function() {

  var $scope = this,

  // A private columns property (string array)
  columns = [],

  // A private rows property (string array)
  rows = [],

  // The main DataTable 
  DataTable = function(obj) {
    if(obj instanceof DataTable) return obj;
    if (!(this instanceof DataTable)) return new DataTable(obj);

    this.DataTable = obj;
  },

  // Additional Helpers (Private)
  DEFAULT_COLUMN_VALUE = 'column',
  DEFAULT_ROW_VALUE = 'value',

  MAX_COLUMNS = 57,

  MIN_COLUMN_CHAR = "A",
  MAX_COLUMN_CHAR = "z",

  rowCount = 0,

  createColumnWithName = function(columnName) {

    columnIndex = columns.length+1;
    if(columnIndex > MAX_COLUMNS) throw "The Maximum Number of Columns have been created!  Cannot Create any new columns...";

    columns.push(columnName);
  },

  createDefaultColumnAtIndex = function(columnIndex) {

    if(columnIndex < 0) throw "Column Index must be greater than 0!";
    if(columnIndex > MAX_COLUMNS) throw "The Maximum Number of Columns have been reached!  Cannot Create any new default columns...";

    columnIndex++;

    var columnName = DEFAULT_COLUMN_VALUE + columnIndex;
    return createColumnWithName(columnName);
  },

  charFromColumnIndex = function(columnIndex) {

    if(columnIndex < 0 || columnIndex > MAX_COLUMNS) throw "A valid charForColumnIdx for columnIndex (" + columnIndex +") does not exist!";

    var columnCharCode = columnIndex + MIN_COLUMN_CHAR.charCodeAt(0);
    return String.fromCharCode(columnCharCode);
  };


  $scope.DataTable = DataTable;

  // A public method addColumns that adds an item to the columns array
  DataTable.addColumns = function() {

    var i, n = arguments.length;
    if(n == 0) throw "You cannot call addColumns without supplying a column name to add!";

    for(i = 0; i < n; i++) {
      createColumnWithName(arguments[i]);
    }
  };

  // A public method addRows that adds an item to the rows array
  DataTable.addRows = function() {

    var i, valueRowColumnHash, n = arguments.length, columnIndex;

    if(n == 0) throw "You must provide at least 1 row to use DataTable.addRows!";

    rowCount++;
    for(columnIndex = 0; columnIndex < n; columnIndex++) {

      if(!columns[columnIndex]) createDefaultColumnAtIndex(columnIndex);

      columnChar = charFromColumnIndex(columnIndex);
      if(!columnChar) break;

      valueRowColumnHash = arguments[columnIndex] + rowCount + columnChar;
      rows.push(valueRowColumnHash);
    }
  };

  // A public method getData that returns the a json object representation of the DataTable
  DataTable.getData = function() {
    var n = columns.length, x = rows.length, i, rowNameLen, hashKey, columnLetter, rowNumber,
    data = {
      columns: [],
      rows: [],
    };

    for(i = 0; i < x; i++) {
      hashKey = rows[i].slice(-2);
      data['rows'].push({
        column: hashKey.charAt(1),
        row: hashKey.charAt(0),
        value: rows[i].replace(hashKey, "")
      });
    }

    for(i = 0; i < n; i++) {
      data['columns'].push({
        title: columns[i],
        column: charFromColumnIndex(i)
      });
    }

    return data;
  };

}).call(this);


// within div1, programatically create a
// SELECT element (with multiple items) and a button.
// when the button is clicked write out the name and value of the selected item to the console.
(function($) {
  $(document).ready(function() {

    var getSelectList = function() {
      var options = ['option1','option2','option3','option4'],
      SelectList = $("<select />"),
      OptionInfo = {};

      for(i = 0; i < 4; i++) {
        OptionInfo = { 
          value: options[i], 
          text: 'Option ' + i
        };
        $("<option />", OptionInfo).appendTo(SelectList);
      }

      return SelectList;
    },

    Div1 = $("#div1"),
    SelectList = getSelectList().appendTo(Div1),
    ActionButton = $("<button>Go</button>").on("click", function() {
      console.log(SelectList.find(":selected").val());
    }).appendTo(Div1);
  });
})(jQuery);



// Write 5 different jQuery selectors to retrieve the
// sample anchor in the markup below.
var selectors = [ $("#foo a.link"), $("a.link:first"), $("#foo div a.link"), $("a:first"), $("#foo").find("a.link")];


// Programatically create an array with 5 items.  Create a list item for each item in the array
// and add the list items to the unordered list with an id of "list1".
(function($) {

  $(document).ready(function() {
    var listItems = ['listItem 1', 'listItem 2', 'listItem 3', 'listItem 4', 'listItem 5'];
    ListContainer = $("#list1");

    for(i = 0; i < 5; i++) {
       ListContainer.append('<li>' + listItems[i] + '</li>');
    }
  });
})(jQuery);



// Use javascript to add a list of checkboxes and 2 links
// to the div with an id of "foobar"
// When the first link is clicked, all the checkboxes should be checked (i.e. check all)
// When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)

(function($) {
  $(document).ready(function() {

    var i, CheckBox, 
    CheckAllLink = $('<a name="checkAll" id="checkAll" href="#">check All</a>').on('click', function() {
      $(".checkboxListItems").each(function(idx, el) {
        $(this).prop('checked', true);
      });
    }),

    UncheckAllLink = $('<a name="uncheckAll" id="uncheckAll" href="#">uncheck All</a>').on('click', function() {
      $(".checkboxListItems").each(function(idx, el) {
        $(this).prop('checked', false);
      });
    });

    $("#foobar").css({ 'margin-left':'50px'}).append(CheckAllLink, "&nbsp;&nbsp;&nbsp;", UncheckAllLink);
    for(i = 0; i < 20; i++) {
      $("#foobar").append($('<div><input type="checkbox" name="checkboxList[]" class="checkboxListItems" value="checkBoxListItem ' + i + '" /> Meh</div>'));
    }

  });
})(jQuery);
