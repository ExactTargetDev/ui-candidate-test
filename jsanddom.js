     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         // FILL THIS IN
		 
		str_reversed = "";
		
		for(i = 0; i <= str.length; i++){
		
			str_reversed += str.charAt(str.length - i);
			
		}
		
		return str_reversed;
		
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         // FILL THIS IN
		
		var minimum_value = new Array();
		
		minimum_value =  values[0];
		
		for(i = 0; i < values.length; i++) {
		
			if(values[i] < minimum_value){
			
				minimum_value = values[i];
				
			}
			
		}
		
		return minimum_value;
		
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         // FILL THIS IN
		
		
		var distinct_values = new Array();
		
		// Add first item to our new list of distinct values
		distinct_values = [values[0]];
		
		// Loop through old list
		for(i = 0; i < values.length; i++) {
			
			// Assume this item isn't in the new list yet
			exists = false;
			
			// Check this assumption
			for(x = 0; x < distinct_values.length; x++) {
			
				// If the item is in the list, change flag
				if(values[i] == distinct_values[x]){
					exists = true;
				}
				
			}
			
			// If our original assumption was correct add item to new list
			if (exists == false){
				distinct_values[distinct_values.length] = values[i];
			}

		}
		
		return distinct_values;
		
		
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         // FILL THIS IN
		
		for(i = 1; i <= 100; i++){
			if(i%3 == 0){
				if(i%5 == 0){
					console.log("FizzBuzz");
				}
				else{
					console.log("Fizz");
				}
			}
			else if (i%5 == 0){
				console.log("Buzz");
			}
			else {
				console.log(i);
			}
		 }
		 
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         // FILL THIS IN
		 
		for(i = 0; i < fruitsToRemove.length; i++) {
			
			for(x = 0; x < fruits.length; x++) {
			
				if(fruits[x] == fruitsToRemove[i]){
					
					fruits[x] = "";
					
				}

			}

		}
		
		return fruits;
		
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         // FILL THIS IN
		 
		 //  Array.isArray() is not natively available in IE < 9
		if(!Array.isArray) {
			Array.isArray = function (vArg) {
				return Object.prototype.toString.call(vArg) === "[object Array]";
			};
		}
		
		
		// Is toPush an array?
		if(Array.isArray(toPush)){
			// If so iterate through items and push them onto array
			for(i = 0; i < toPush.length; i++) {
				array.push(toPush[i]);
			}
		 }
		 // toPush is not an array
		 else{
			// Push toPush onto array
			array.push(toPush)
		 }
		 
		 
		 return array;
		 
		 
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         // FILL THIS IN
		 
		 if(sourceStr == ""){
			return empty_array = [];
		 }
		 else{
			// Return string as array splitted at the commas
			return sourceStr.split(",")
		 }
		 
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         // FILL THIS IN
		 
		result = 0;
		
		for(i = 0; i < arguments.length; i++) {
			result += arguments[i];
		}
			
		return result;
		
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         // FILL THIS IN
		 
		is_white_space = "";
		 
		if(sourceStr.length > 0){
			is_white_space = true;
			for(i = 0; i < sourceStr.length; i++) {
				if(sourceStr[i] != " "){
					is_white_space = false;
				}
			}
		}
		else {
			// sourceStr isn't even a char long
			is_white_space = false;
		}
		
		if(is_white_space == true){
			return true;
		}
		
		
     }

     // write an example of a javascript closure
	 
	 function add_one(x){
		var y = x + 1;
		var inner = function(){ 
			console.log(y);
		}
		// return the function so we can access the local variable 'y'
		return inner; 
	 }
	 
	 var doit = add_one(5);
	 
	 doit();
	 
	 

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
	
	var people = {
		'first_name': '',
		'last_name': '',
		'city': '',
		'state': '',
		'zip': '',
		'phone_home': '',
		'phone_work': '',
		'phone_mobile': ''
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
