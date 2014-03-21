// array map function that lets array outputs be shorter than inputs by
// collapsing nulls
  Array.prototype.mapShort = function(fun /*, thisArg */)
  {
    "use strict";

    if (this === void 0 || this === null)
      throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function")
      throw new TypeError();

    var res = new Array();
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++)
    {
      // NOTE: Absolute correctness would demand Object.defineProperty
      //       be used.  But this method is fairly new, and failure is
      //       possible only if Object.prototype or Array.prototype
      //       has a property |i| (very unlikely), so use a less-correct
      //       but more portable alternative.
      if (i in t)
        var r = fun.call(thisArg, t[i], i, t);
        if ( r === null ) r;
        else res.push(r);
    }

    return res;
  };

     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         // FILL THIS IN
         return str.split('').reverse().join('');
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
       var min = values.shift();
       while (values.length > 0) {
         if (min > values[0]) min = values.shift();
         else values.shift();
       }
       return min;
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         var hash = {};
         values.forEach( function (item) { hash[item] = 1 } );
         return Object.keys(hash).sort().map( function (str) { return parseFloat(str) } );
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         var soda = Array.apply(0, Array(100)).map(function (x, y) { return y + 1; });  // [1, 2, 3, ...]
         soda.forEach(function ( value ) {
           var string = '';
           if ( 0 == (value % 3) ) string += 'Fizz';
           if ( 0 == (value % 5) ) string += 'Buzz';
           if ( string.length == 0 ) string += value;
           console.log(string);
         } );

     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         var index = {};
         fruitsToRemove.forEach( function (item) { index[item] = true } );
         return fruits.mapShort( function (fruit) {
           if (index[fruit]) return null;
           return fruit;
         } );
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         if( Object.prototype.toString.call( toPush ) === '[object Array]' ) {
           toPush.forEach(function (item) { array.push(item) } );
         } else {
           array.push(toPush);
         }
         return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
       if (! sourceStr.match(/,/) ) return [];
       return sourceStr.split(/,/);
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
       var args = Array.prototype.slice.call(arguments);
       var sum = args.shift();
       args.forEach(function (value) {
          sum += value;
       } );
       return sum;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         return sourceStr.match(/^\s+$/);
     }

     // write an example of a javascript closure
     function tellMeLater (what) {
       return function () {
         return what;
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

    // WARNING: Assuming that you mean to create a javascript object of pure
    // properties as can be expressed in json, as the concept of a 'json
    // object' is rather vague and imprecise.  Its either a javascript object
    // or a json string, not a json object.
     var peopleCollection =
      [ { "first name": "Zane"
        , "last name": "Underfoot"
        , "city": "Tumbledown"
        , "state": "Alert"
        , "zip": "Squirrel"
        , "phoneNumbers":
          { "home": "5554443333"
          , "work": "4443332222"
          , "mobile": "3332221111"
          }
        }
      , { "first name": "Banshee"
        , "last name": "Underfoot"
        , "city": "Desert Rainbow"
        , "state": "Vigilant"
        , "zip": "Cat"
        , "phoneNumbers":
          { "home": "5554443333"
          , "work": "4443332222"
          , "mobile": "3332221111"
          }
        }
      , { "first name": "Akando"
        , "last name": "Underfoot"
        , "city": "White Stone"
        , "state": "Confused"
        , "zip": "Ball"
        , "phoneNumbers":
          { "home": "5554443333"
          , "work": "4443332222"
          , "mobile": "3332221111"
          }
        }
      ];



     // Create a javascript object (DataTable) with the following:
     function DataTable () {
     // A private columns property (string array)
       var columns = [];
     // A private rows property (string array)
       var rows = [];
     // A public method addRows that adds an item to the rows array
       this.addRows = function () {
         var row = [];
         for (var index = 0; index < arguments.length ; index ++) {
            row.push(arguments[index]);
         }
         rows.push(row);
         return this;
       };
     // A public method addColumns that adds an item to the columns array
       this.addColumns = function () {
         for (var index = 0; index < arguments.length ; index ++) {
            columns.push(arguments[index]);
         }
         return this;
       };
     // A public method getData that returns the a json object representation of the DataTable
       this.getData = function (item) {
         return rows.map( function (row) {
           var rowObject = {};
           columns.forEach( function (item, index) {
             rowObject[item] = row[index];
           } );
           return rowObject;
         } );
       };
     }
     // Note: the row object should be a hash of the column name and row item value
     // Example:
     // .addColumns('column1', 'column2', 'column3');
     // .addRow('value1A', 'value1B', 'value1C');
     // .addRow('value2A', 'value2B', 'value2C');


     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
     var select = document.createElement('select');
     var soda = Array.apply(0, Array(10)).map(function (x, y) { return y + 1; });  // [1, 2, 3, ...]
     soda.forEach( function (item) {
       var option = select.appendChild(document.createElement('option'));
       option.setAttribute('value', item);
       option.appendChild(document.createTextNode('Name of ' + item));
     } );
     var div = document.getElementById('div1');
     if (div) {
       div.appendChild(select);
       var button = document.createElement('button');
       div.appendChild(button);
       button.appendChild(document.createTextNode("Read Selection"));
       button.addEventListener('click', function (e) {
         console.log("value set to " + select.value);
         var list = select.getElementsByTagName('option');
         for (var i = 0; i < list.length; ++i) {
           if (list[i].getAttribute('value') == select.value) console.log("name is" + list[i].text);
         }
       } );
     }

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
// requires jquery making this code untestable under current library choices
// each would evaluate to the anchor element given the markup
//$("div div a");
//$("a.link");
//$("div#foo div#fizz a.link");
//$("div#foo.bar div#fizz.buzz a.link");
//$("div.bar > a");

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
var array = [];
array.push("an item");
array.push("another item");
array.push("yet another item");
array.push("still another item");
array.push("finally the last item");
var list = document.getElementById('list1');
if (list) {
  array.forEach( function (item) {
    list1.appendChild(document.createElement('li')).appendChild(document.createTextNode(item));
  } );
}

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
var div = document.getElementById('foobar');
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
if (div) {
var all = div.appendChild(document.createElement('a'));
all.setAttribute('href', '#');
all.appendChild(document.createTextNode('All'));
all.addEventListener('click', function (e) {
  var checkboxes = document.getElementById('checkform').elements;
  for (var k = 0; k < checkboxes.length; ++k) {
    if (checkboxes[k].getAttribute('type') == 'checkbox') checkboxes[k].checked = true;
  }
} );
div.appendChild(document.createElement('br'));
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
var none = div.appendChild(document.createElement('a'));
none.setAttribute('href', '#');
none.appendChild(document.createTextNode('None'));
none.addEventListener('click', function (e) {
  var checkboxes = document.getElementById('checkform').elements;
  for (var k = 0; k < checkboxes.length; ++k) {
    if (checkboxes[k].getAttribute('type') == 'checkbox') checkboxes[k].checked = false;
  }
} );

var form = div.appendChild(document.createElement('form'));
form.id = 'checkform';
var list = form.appendChild(document.createElement('ol'));
list.id = "checklist";
var soda = Array.apply(0, Array(10)).map(function (x, y) { return y + 1; });  // [1, 2, 3, ...]
soda.forEach( function (item) {
  var checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('value', item);
  checkbox.checked = false;
  list.appendChild(document.createElement('li')).appendChild(checkbox);
} );
}

