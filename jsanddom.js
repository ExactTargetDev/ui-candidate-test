// Example unit test function
function divide( a, b ) {
	// To see the test pass, uncomment the following line
	return a / b;
};

// Write a function that takes a single argument (a string) and returns the string reversed.
function reverseString(str) {
	return str.split("").reverse().join("");
};

// Write a function that takes an array of numbers and returns the minimum value
function findMinValue(values) {
	return Math.min.apply(false,values);
};

// Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
function findDistinctValues(values) {
	var dvalue = values.slice();
	for (var c = 0; c < dvalue.length; c++) {
		if (dvalue.indexOf( dvalue[c], c+1) !== -1) {
			dvalue.splice(c, 1);
			c--;
		};
	};
	return dvalue;
};

// Write a function that logs the numbers from 1 to 100 to the console.
// For multiples of three print "Fizz" instead of the number.
// For multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
function doFizzBuzz() {
	for (var c = 1; c <= 100; c++) {
		if (c%3 === 0 && c%5 === 0) {
			console.log('FizzBuzz');
		} else if (c%5 === 0) {
			console.log('Buzz');
		} else if (c%3 === 0) {
			console.log('Fizz');
		} else {
			console.log(c);
		};
	};
};

// You have a master array of strings, where each element is a fruit name.
// You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
// For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
// Write the function that will remove the values contained in fruitsToRemove from the array fruits.
function removeFruits(fruits, fruitsToRemove) {
	for (var c = 0; c < fruits.length; c++) {
		if(fruitsToRemove.indexOf(fruits[c]) !== -1) {
			fruits.splice(c, 1);
			c--;
		};
	};
	return fruits;
};

// Write a function to push either a simple value or an array of values onto a specified array.
// For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
// If toPush is a simple value, it should be pushed onto array as an element.
// If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
function pushOntoArray(array, toPush) {

	if (Array.isArray(toPush)) {
		array = array.concat(toPush);
	} else {
		array.push(toPush);
	};
	return array;
};

// Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
function splitListStrUsingComma(sourceStr) {
	if (sourceStr) {
		return sourceStr.split(', ');
	};
	return [];
};

// Write a function that will take any number of arguments and return their sum
function sum() {
	var nsum = 0;
	for (var c = 0; c < arguments.length; c++) {
	  nsum += arguments[c];
	};
	return nsum;
};

// Write a function that will return true if a specified string consists of only whitespace.
function isOnlyWhitespace(sourceStr) {
	return !(/\S/).test(sourceStr);
};

// write an example of a javascript closure
var num = 10;
function addNum(myNum){ 
	return num + myNum; 
};
console.log( addNum(5) == 15, "Adding two numbers together, one from a closure." );


// define a json object that represents a collection of people.
// each person should have the following properties
// - first name
// - last name
// - city
// - state
// - zip
// - a collection of phone numbers (home, work, mobile)
var people = { 
   "person":[  
	  {  
		 "first":"Naruto",
		 "last":"Uzumaki",
		 "city":"Las Vegas",
		 "state":"NV",
		 "zip":89138,
		 "phone":{  
			   "home":7028219999,
			   "work":7028218521,
			   "mobile":9999999999
		 }
	  },
	  {  
		 "first":"Kirito",
		 "last":"Miasaki",
		 "city":"Las Vegas",
		 "state":"NV",
		 "zip":89131,
		 "phone":{    
			   "home":7029999999,
			   "work":7028218521,
			   "mobile":9999999999
		 }
	  }
   ]
};

function isJSON(people) {
	try {
		JSON.parse(people);
	} catch (e) {
		return false;
	};
	return true;
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
function fireUpDiv1() {
	var columns = ["Age", "Sex", "Height", "Size"];
	var rows = ["22", "Male", "6'5", "9inches"];
	function addRows() {
		rows.push("New Row");
	};
	function addColumns() {
		columns.push("New Column");
	};
	function getData(columnsResult)
	{
		var jsonData = {};
		columnsResult.forEach(function(column) 
		{
			var columnName = column.metadata.colName;
			jsonData[columnName] = column.value;
		});
		viewData.employees.push(jsonData);
	};
};

// within div1, programatically create a
// SELECT element (with multiple items) and a button.
// when the button is clicked write out the name and value of the selected item to the console.
function fireUpDiv1() {
	var div1 = document.getElementById("div1");
	var myGames = ["COD GHOSTS","COD MW3","BAD COMPANY","SPLINTER CELL","CIVILIZATION"];
	var games = document.createElement("select");
	games.id = "meGame";
	for ( var c = 0; c < myGames.length; c++ ){
		var option = document.createElement("option");
		option.value = myGames[c];
		option.text = myGames[c];
		games.appendChild(option);
	};
	
	var consoleClicker = document.createElement("Button");
	consoleClicker.innerHTML = "Chris's Games";
	consoleClicker.onclick = function(){
		var element = document.getElementById("meGame");
		var text =  element.options[element.selectedIndex].text;
		var value = element.options[element.selectedIndex].value;
		console.log(" Name: "+ text + " Value: " + value);
	};
	div1.appendChild(games);
	div1.appendChild(consoleClicker);
};

// Write 5 different jQuery selectors to retrieve the
// sample anchor in the markup below.
//Is this missing a sample anchor for selection? Either way I can retrieve say <a class="shatter" alt="The Shatter is here">The shatter shat a brick</a> with
$(".shatter")
$("a.shatter")
$("a[class$='shatter']")
$("a[alt$='The Shatter is here']")
$("a:contains('The shatter shat a brick')")



// Programatically create an array with 5 items.  Create a list item for each item in the array
// and add the list items to the unordered list with an id of "list1".
function dynaList() {
	var bigbangfolks = ["bigbang", "sheldon", "penny", "howard", "raj", "amy", "bernadette", "leonard", "stuart"];
	var list1 = document.getElementById("list1");
	for( c = 0; c < bigbangfolks.length; c++ ){
		var lister = document.createElement('li');
		lister.innerHTML = bigbangfolks[c];
		list1.appendChild(lister);
	};
};

// Use javascript to add a list of checkboxes and 2 links
// to the div with an id of "foobar"
// When the first link is clicked, all the checkboxes should be checked (i.e. check all)
// When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)	
function dynaListDeux() {
	var foobar = document.getElementById("foobar");
	var check_boxes = ["BigBang", "Sheldon", "Penny", "Howard", "Raj", "Amy", "Bernadette", "Leonard", "Stuart"];
	for( c = 0; c < check_boxes.length; c++ ){
		var checker = document.createElement('input');
		checker.type = 'checkbox';
		checker.id = check_boxes[c];
		checker.value = check_boxes[c];
		checker.tag="timeTag";
		var labels = document.createElement('label');
		labels.innerHTML = check_boxes[c]+"</br>";
		foobar.appendChild(checker);
		foobar.appendChild(labels);
	};
	
	var checklink = document.createElement('a');
	var checklinkText = document.createTextNode("CHECK ALL");
	var unchecklink = document.createElement('a');
	var unchecklinkText = document.createTextNode("UNCHECK ALL");
	
	checklink.href="#";
	checklink.appendChild(checklinkText);
	checklink.onclick = function () {
	var check = document.getElementsByTagName('input');
		for( var c = 0; c < check.length; c++ ){
			if(check[c].type == 'checkbox')
			check[c].checked=true;
		};
	};
	
	unchecklink.href = "#";
	unchecklink.appendChild(unchecklinkText);
	unchecklink.onclick = function () {
	var check = document.getElementsByTagName('input');
		for(var c = 0; c < check.length; c++ ){
			if(check[c].type == 'checkbox')		
				check[c].checked=false;
		};
	};	 
	
	foobar.appendChild(checklink);
	foobar.appendChild(unchecklink);
};