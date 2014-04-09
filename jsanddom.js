     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
	 
		var reverse = '';
		for (i = str.length - 1; i >= 0; i--)
			reverse += str[i];
			
		return reverse;
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
		
		var min = values[0];
		for (i = 0; i < values.length; i++) {
			if (values[i] < min) min = values[i];
		}
			
		return min;
		
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
		var distinct = [];
		
		for (i = 0; i < values.length; i++) {
			if (distinct.indexOf(values[i]) === -1) distinct.push(values[i])
		}
		
		return distinct;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
		//i'm going to return the fizzbuzz string instead of console.log for unit testing purpose
		//changing the requirement, sorry!
		
		var strFizzBuzz = '';
		for (i = 1; i <= 100; i++) {
			if (i % 3 == 0 && i % 5 == 0) strFizzBuzz += " FizzBuzz";
			else if (i % 3 == 0) strFizzBuzz += " Fizz";
			else if (i % 5 == 0) strFizzBuzz += " Buzz";
			else strFizzBuzz += (i == 1) ? i : " " + i;
		}
		console.log(strFizzBuzz);  //compromise? we good?
		return strFizzBuzz;
		
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         for (i = 0; i < fruitsToRemove.length ; i++) {
			do {
				var foundIndex = fruits.indexOf(fruitsToRemove[i]);
				if (foundIndex != -1) fruits.splice(foundIndex, 1);
			}
			while (foundIndex != -1);
		 }
		 return fruits;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
		if (Array.isArray(toPush)) {
			for (i = 0; i < toPush.length; i++)
				array.push(toPush[i]);
		}
		else {
			array.push(toPush);
		}
		return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         
		 //return sourceStr.split(",");  	//honestly, this would work for me
											//i prefer to leverage the time and sweat of past developers before me,
											//and i hope i don't insult them with my version of the 'wheel'.
											
		var strArray = []
		if (sourceStr.length == 0) return strArray;
		do {
			var commaIndex = sourceStr.indexOf(",");
			if (commaIndex != -1) {
				var leadingStr = sourceStr.substr(0, commaIndex);
				strArray.push(leadingStr);
				sourceStr = sourceStr.substr(commaIndex + 1);
			}
		} while (commaIndex != -1);
		strArray.push(sourceStr);
	
		return strArray;
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
		var sum = 0;
		for (i = 0; i < arguments.length; i++ ) {
			sum += arguments[i];
		}
		return sum;
			
	 }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         var regex = /\S+/;
		 return !regex.test(sourceStr);
     }

     // write an example of a javascript closure
	 
	 var namespacingViaClosure = (function() {
		function privateMethod() { return "private" }
		return {
			publicMethod: function() { return "public"; },
			publicMethodCallingPrivateMethod: function() { return privateMethod(); }
		}
	 })();

	 
     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
	 
	 var peopleCollection = 
	 {
		people: 
		[
			{
				firstName: "bob",
				lastName: "saget",
				city: "Los Angeles",
				state: "CA",
				zip: "12345",
				phone: 
				[
					{
						type: "home",
						number: "111-222-3333"
					},
					{
						type: "mobile",
						number: "111-222-4444"
					},
					{
						type: "work",
						number: "111-222-5555"
					}				
				]
			},
			{
				firstName: "johnny",
				lastName: "cash",
				city: "Nashville",
				state: "TN",
				zip: "55555",
				phone: 
				[
					{
						type: "home",
						number: "555-222-3333"
					},
					{
						type: "mobile",
						number: "555-222-4444"
					},
					{
						type: "work",
						number: "555-222-5555"
					}			
				]
			}
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
	 
	var DataTable = function() {
		var data = {
			columns: [],
			rows: []
		}
		
		this.getData = function() {
			return JSON.stringify(data);
		}
		
		this.addRows = function() {
			var newRow = [];
			for (var i = 0; i < arguments.length; i++) {
				newRow.push(arguments[i]);
			}
			data.rows.push(newRow);
			return this;
		}
		
		this.addColumns = function() {
			for (var i = 0; i < arguments.length; i++)
				data.columns.push(arguments[i]);
			return this;
		}
	
	};
	 	 

	 
	 

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
