     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
        var length = str.length;
        var	j = 0;
        var arr = [];

        for (var i = 0; i < length; i++){
        	arr[i] = str.charAt(i);
        }
        arr.reverse().join();
        return arr;
    }

	// Write a function that takes an array of numbers and returns the minimum value
	function findMinValue(values) {
		var minsofar = values[0];
		for (var i=0; i < values.length; i++) {
			if (i < minsofar){
				minsofar = i;
			}
		}
		return minsofar;
	}

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         // FILL THIS IN
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         for (var i =1; i <=100; i++){
         	if (i % 3 == 0){
         		console.log("Fizz");
         	}
         	if (i % 5 == 0){
         		console.log("Buzz");
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
         // ftr pear cherry
         // fruits apple, pear peach cherry 
		var i=0,
			j=0;

			for (i=0; i<fruitsToRemove.length; i++) {
				for (j=0; j<fruits.length; j++) {
					if (fruits[j] === fruitsToRemove[i]) {
						fruits.splice(j,1);
					}
				}
			}
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         // Array.prototype.isArray = true;

         if (toPush.isArray){
         	array.push([toPush]);
         } else {
         	array.push(toPush);
         }
         return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         var separator = ",";
         var arr = [];
         if (sourceStr == 0) {
         	arr = [];
         } else {}
         arr = sourceStr.split(separator);
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         // FILL THIS IN
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
     	var i = 0;
     	var l = isOnlyWhitespace.length;

     	for (i=0; i<l; i++){
     		if (sourcestr[i] != " "){
     			return false;
     		}
     		return true;
     	}
     }

     // write an example of a javascript closure

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     /* Json object
    {
    	"first_name": "value",
    	"last_name": "value",
    	"city": "value",
    	"state": "value",
    	"zip": "value",
    	"phone_numbers": [
    		"home": 1234561234,
    		"work": 1234561234,
    		"mobile": "1234561234
    		] 
    }
    */

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
