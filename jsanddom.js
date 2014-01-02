 // Example unit test function
 var divide = function ( a, b ) {
	// To see the test pass, uncomment the following line
	return a / b;
 };

 // Write a function that takes a single argument (a string) and returns the string reversed.
var reverseString = function (str) {
	return str.split("").reverse().join("");
};

 // Write a function that takes an array of numbers and returns the minimum value
var findMinValue = function (values) {
	return Math.min.apply(Math, values);
};

 // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
var findDistinctValues = function (values) {
	var arrayUniques = [];

	$.each(values, function (i, e) {
		if($.inArray(e, arrayUniques) < 0) {
		arrayUniques.push(e);
		}
	});

	return arrayUniques;
};

 // Write a function that logs the numbers from 1 to 100 to the console.
 // For multiples of three print "Fizz" instead of the number.
 // For multiples of five print "Buzz".
 // For numbers which are multiples of both three and five print "FizzBuzz".
 var doFizzBuzz = function () {
	for (var i = 1; i <= 100; i++) {
		if (i%3 === 0) {
			console.log("Fizz");
		}
		else if (i%5 === 0) {
			console.log("Buzz");
		}
		else if ((i%3 === 0) && (i%5 === 0)) {
			console.log("FizzBuzz");
		}
		else {
			console.log(i);
		}
	}
 };

 // You have a master array of strings, where each element is a fruit name.
 // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
 // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
 // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
 var removeFruits = function (fruits, fruitsToRemove) {
	for (var i = 0; i < fruits.length; i++) {
		if ($.inArray(fruits[i], fruitsToRemove) >= 0){
			fruits.splice(i, 1);
			i--;
		}
	}

	return fruits;
 };

 // Write a function to push either a simple value or an array of values onto a specified array.
 // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
 // If toPush is a simple value, it should be pushed onto array as an element.
 // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
 var pushOntoArray = function (array, toPush) {
	if (typeof toPush === "object" && toPush.length > 1) {
		for (var i = 0; i < toPush.length; i++) {
			array.push(toPush[i]);
		}
	}
	else {
		array.push(toPush);
	}

	return array;
 };

 // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
 var splitListStrUsingComma = function (sourceStr) {
	// This only checks if the argument is a string and is not whitespace (empty)
	if (typeof sourceStr === "string" && sourceStr.trim() !== "") {
		return sourceStr.split(",");
	}
	
	return [];	
 }; 

 // Write a function that will take any number of arguments and return their sum
var sum = function () {
	var argLength = arguments.length; 
	var sumOfArgs = 0;

	// Check that arguments were passed in to avoid error
	if (argLength > 0) {
		var i = 0;
		while (i < argLength) {
			// Check that the arguments passed in are numbers or can be parsed into a number
			if (!isNaN(arguments[i])) {
				sumOfArgs += parseInt(arguments[i], 10);
			}
			i++;
		}
	}
	
	return sumOfArgs;
};

 // Write a function that will return true if a specified string consists of only whitespace.
 var isOnlyWhitespace = function (sourceStr) {
	// Check to make sure the argument is a string to avoid error
	if (typeof sourceStr === "string" && sourceStr.trim() === "") {
		return true;
	}
	 
	return false;
 };

 // write an example of a javascript closure
(function () {
	// code here
}());

 // define a json object that represents a collection of people.
 // each person should have the following properties
 // - first name
 // - last name
 // - city
 // - state
 // - zip
 // - a collection of phone numbers (home, work, mobile)
var jsonObj = {
	"FirstName": "Tanya",
	"LastName": "Leithoff",
	"City": "Fishers",
	"State": "IN",
	"Zip": "46067",
	"PhoneNumbers":	{
			"Home": "317-888-1374",
			"Work": "317-589-2653",
			"Mobile": "317-698-4724"
		}
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
var dataTable = function () {
	var rows = [];
	var columns = [];
	
    return{
		addRows: function () {
				var rowsLength = arguments.length; 
				var i = 0;
				while (i < rowsLength) {
					rows.push(arguments[i]);
					i++;
				}
		},
		addColumns: function () {
				var columnsLength = arguments.length; 
				var i = 0;
				while (i < columnsLength) {
					columns.push(arguments[i]);
					i++;
				}
		},
		getData: function () {
			var data = {	 
				rows: rows,
				columns: columns
			};
			
			return JSON.stringify(data);
		}
	}
};

 // within div1, programatically create a
 // SELECT element (with multiple items) and a button.
 // when the button is clicked write out the name and value of the selected item to the console.
 var createSelectListAndOutput = function () {
	var select = document.createElement("select");
	select.setAttribute("id", "mySelect");

	var fruit = [{text: 'orange', val: 'fruit1'}, {text: 'apple', val: 'fruit2'}, {text: 'pear', val: 'fruit3'}, {text: 'grape', val: 'fruit4'}, {text: 'melon', val: 'fruit5'}, {text: 'strawberry', val: 'fruit6'}];

	for (var i = 0; i < fruit.length; i++) {
		$(select).append(new Option(fruit[i].text, fruit[i].val, false, false));
	}

	var button = document.createElement('input');
	button.setAttribute('type', 'button');
	button.setAttribute('id', 'myButton');
	button.setAttribute('value', 'submit');

	$('#div1').append(select);
	$('#div1').append(button);

	$('#myButton').on('click', function () {
		var value = $('#mySelect').val();
		console.log('value: ', $('#mySelect').val());
		console.log('text: ', $('#mySelect option[value="' + value + '"]').text());
	});
};

 // Write 5 different jQuery selectors to retrieve the
 // sample anchor in the markup below.
 var sampleAnchorSelectors = function () {
	 $('.link');
	 $('#fizz a');
	 $('#foo #fizz a');
	 $('#fizz .link');
	 $('#foo #fizz .link'); 
 };

 // Programatically create an array with 5 items.  Create a list item for each item in the array
 // and add the list items to the unordered list with an id of "list1".
 var createList = function () {
	var stuff = ["butterfly", "dragonfly", "lady bug", "moth", "grasshopper"];
	var output = "";

	for (var i = 0; i < stuff.length; i++) {
		output += "<li>" + stuff[i] + "</li>";

		} 

	$('#list1').append(output);
 };

 // Use javascript to add a list of checkboxes and 2 links
 // to the div with an id of "foobar"
 // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
 // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
 var createCheckboxesAndFunctionality = function () {
	var checkbox1 = document.createElement('input');
	checkbox1.setAttribute('name', 'myCheckboxes');
	checkbox1.setAttribute('type', 'checkbox');

	var checkbox2 = document.createElement('input');
	checkbox2.setAttribute('name', 'myCheckboxes');
	checkbox2.setAttribute('type', 'checkbox');

	var checkbox3 = document.createElement('input');
	checkbox3.setAttribute('name', 'myCheckboxes');
	checkbox3.setAttribute('type', 'checkbox');

	var link1 = document.createElement('a');
	link1.setAttribute('id', 'link1');
	link1.setAttribute('href', '');
	$(link1).text('Check all checkboxes');

	var link2 = document.createElement('a');
	link2.setAttribute('id', 'link2');
	link2.setAttribute('href', '');
	$(link2).text('Uncheck');

	$('#foobar').html(checkbox1).append(checkbox2).append(checkbox3).append('<br />', link1).append('<br />', link2);

	$('#link1').on('click', function (e) {
		e.preventDefault();
		$('input[name="myCheckboxes"]').prop('checked', true);
	});

	$('#link2').on('click', function (e) {
		e.preventDefault();
		$('input[name="myCheckboxes"]').prop('checked', false);
	}); 
 };

$(document).ready(function () {
	createSelectListAndOutput();
	createList();
	createCheckboxesAndFunctionality();
});

 