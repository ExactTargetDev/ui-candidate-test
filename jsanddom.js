     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
	return (str.length > 0)
		? str.slice(str.length - 1, str.length) + reverseString(str.slice(0, -1))
		: str;
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
	    return Math.min.apply(Math, values);
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
     	var distinct = [];

     	for( var i = 0; i < values.length; ++i ) {
     		if(distinct.indexOf(values[i]) < 0) {
     			distinct.push(values[i]);
     		}
     	}

     	return distinct;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
          var fizzBuzz = [];

     	for( var i = 1; i <= 100; ++i ) {

     		var output = '';

     		if( i % 3 === 0 ) {
     			output = 'Fizz';
     		}

     		if( i % 5 === 0 ) {
     			output += 'Buzz';
     		}
     		
     		if( output.length === 0 ) {
     			output = i;
     		}

     		fizzBuzz.push(output);
     	}

          console.dir(fizzBuzz);

          return fizzBuzz;
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         // FILL THIS IN
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         // FILL THIS IN
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         return (sourceStr.length > 0)
                    ? sourceStr.split(',')
                    : [];
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
     	var args = [].slice.call(arguments),
     	    sum = 0;

     	for(var i=0; i < args.length; ++i) {
     		sum += args[i];
     	}

     	return sum;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     // NOTE: An empty string is not considered whitespace in this implementation.
     function isOnlyWhitespace(sourceStr) {
	    return sourceStr !== '' && sourceStr.length !== sourceStr.split(' ').length;
     }

     // write an example of a javascript closure

     var X = (function(val1, val2, val3) {
          // Private method (in closure)
          var _add = function(a, b) {
               return a + b;
          };

          // Private value (in closure)
          var _x = _add(val1, _add(val2, val3)), 
               _y = 2;

		// Private method (in closure)
		var _get_x = function () {
			return _x;
		};
		
          // Return object, exposing specific methods and properties
		return {
			// Return public alias to "_add"
			add : _add,
			// Return public alias to "_get_x"
			get_x : this._get_x, 
			// Return public alias to property "_y"
			y : this._y
		};
     })(1, 2, 3);

     // X.get_x(); // returns 6
     // X.y; // 2
     // X.add(1, 2); // returns 3

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     
     var peopleJSON = [
          {
               "firstName" : "Justin",
               "lastName" : "Evans",
               "city" : "Indianapolis",
               "state" : {
                    "name" : "Indiana",
                    "abbr" : "IN"
               },
               "zip" : "46219",
               "phone" : {
                    "home" : "317-555-1234",
                    "work" : "317-555-6195",
                    "mobile" : "773-555-4321"
               }
          },
          {
               "firstName" : "Jason",
               "lastName" : "Edwards",
               "city" : "Chicago",
               "state" : {
                    "name" : "Illinois",
                    "abbr" : "IL"
               },
               "zip" : "60640",
               "phone" : {
                    "home" : "312-555-1234",
                    "work" : "847-555-1111",
                    "mobile" : "773-555-4321"
               }
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
     
     var DataTable = (function(){

          var  _columns = [],
               _rows = [];

          var _addColumns = function() {
               var args = [].slice.call(arguments);

               for(var i=0; i<args.length; ++i)
               {
                    _columns.push(args[i]);
                    _rows[args[i]] = []; // Initialize array of row items for each column
               }

               return _columns;
          };

          var _addRow = function() {
               var args = [].slice.call(arguments);

               for(var i=0; i<args.length; ++i)
               {
                    _rows[_columns[i]].push(args[i]);
               }
          };

          var _getData = function() {
               return _rows; // GET JSON
          };

          return {
               addColumns : _addColumns,
               addRow : _addRow,
               getData : _getData
          };
     })();

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
