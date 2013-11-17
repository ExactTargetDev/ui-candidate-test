// Example unit test function
function divide(a, b) {
	// To see the test pass, uncomment the following line
	//return a / b;
}

// Write a function that takes a single argument (a string) and returns the string reversed.
function reverseString(str) {

	// FILL THIS IN
	var revStr = "";
	for (var i = str.length; (i - 1) >= 0; i--) {
		revStr += str.substr(i - 1, 1);
	}
	$("#results").append(revStr);
}

// Write a function that takes an array of numbers and returns the minimum value
function findMinValue(values) {
	var minValueResult = values.sort().shift();

	return minValueResult;
}

// Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
function findDistinctValues(values) {
	var collectionOfUniques = [];
	for (var v = 0; v <= values.length - 1; v++) {
		if (collectionOfUniques.indexOf(values[v]) < 0) {
			collectionOfUniques.push(values[v]);
		}

	}
	return collectionOfUniques;
}

// Write a function that logs the numbers from 1 to 100 to the console.
// For multiples of three print "Fizz" instead of the number.
// For multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
function doFizzBuzz() {
	var i = 1;
	while (i <= 100) {

		if ((i % 3) == 0 && (i % 5) == 0) {
			console.log("FizzBuzz");
		} else if ((i % 3) == 0) {
			console.log("Fizz");
		} else if ((i % 5) == 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}

		i++;

	}

}

// You have a master array of strings, where each element is a fruit name.
// You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
// For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
// Write the function that will remove the values contained in fruitsToRemove from the array fruits.
function removeFruits(fruits, fruitsToRemove) {
	var returnItem = fruits;
	for (var j = 0; j <= fruitsToRemove.length; j++) {

		var findIt = fruits.indexOf(fruitsToRemove[j]);
		if (findIt >= 0) {
			returnItem.splice(findIt, 1);
		}
	}
	var placeholder = "";
	return returnItem;
}

// Write a function to push either a simple value or an array of values onto a specified array.
// For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
// If toPush is a simple value, it should be pushed onto array as an element.
// If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
function pushOntoArray(array, toPush) {
	if (toPush.isArray) {

		array.concat(toPush);
	} else {
		array.push(toPush);
	}
	var checker = array;
	var placeholder = "";
	return array;
}

// Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
function splitListStrUsingComma(sourceStr) {
	var returnString = [];
	if (sourceStr.length > 0) {
		returnString = sourceStr.split(",");
	}
	return returnString;
}

// Write a function that will take any number of arguments and return their sum
function sum() {
	var returnSum = 0;
	
	for(var item in arguments){
		returnSum += parseInt(item);
	}
	return returnSum;
}

// Write a function that will return true if a specified string consists of only whitespace.
function isOnlyWhitespace(sourceStr) {
	var itemCriteria = /[\d*\w*]/g;
	var itemFound = sourceStr.match(itemCriteria);
	if (itemFound){
		return false;
	} else{
		return true;
	}
}

// write an example of a javascript closure
function callIt(itemValue){
		var item = itemValue;
		alert(item);
	};
	callIt(itemValue);

// define a json object that represents a collection of people.
// each person should have the following properties
// - first name
// - last name
// - city
// - state
// - zip
// - a collection of phone numbers (home, work, mobile)
var peopleColl = {
	person1:{
		firstName: "John",
		lastName: "Doe",
		city: "NoWhereFast",
		state: "XX",
		zip: "00110",
		phoneNumbers: [{home:111-111-1111,work:222-222-2222,mobile:333-333-3333}]
	},
	person2:{
			firstName: "Jane",
		lastName: "Doe",
		city: "NoWhereFast",
		state: "XX",
		zip: "00110",
		phoneNumbers: [{home:222-222-2222,work:333-333-3333, mobile:444-444-4444}]
	},
	person3:{
			firstName: "John, Jr",
		lastName: "Doe",
		city: "NoWhereFast",
		state: "XX",
		zip: "00110",
		phoneNumbers: [{home:333-333-3333, work:444-444-4444,mobile:555-555-5555}]
	}
	
};


I have used jQuery Datatables in the past for significantly easier tasks.
I do not have the knowledge and have not seen where I could set the private/public attributes.
This task below is beyond my abilities, with my understanding of the questions.

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
