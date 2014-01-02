     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
     	return str.split("").reverse().join("");
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
     	return Math.min(values.toString());
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
		var distinctValues = new Array();
		var j = 0;
		for(var i = 0; i < values.length; i++){
			if(distinctValues.indexOf(values[i]) == -1){
				distinctValues[j] = values[i];
				j++;
			}
		}
		return distinctValues;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         // FILL THIS IN
         for(var i = 1; i <= 100; i++){
		 	if(i % 3 == 0 || i % 5 == 0){
				console.log("FizzBuzz");
			}
			else if(i % 3 == 0){
				console.log("Fizz");
			}
			else if(i % 5 == 0){
				console.log("Buzz");
			}
			else{
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
         for(var i = 0; i < fruitsToRemove.length; i++){
		 	if(fruits.indexOf(fruitsToRemove[i]) > -1){
				fruits.splice(fruitsToRemove[i], 1);
			}
		 }
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         // FILL THIS IN
         if(typeof toPush == "string"){
		 	array.push(toPush);
		 }
		 else{
		 	for(var i = 0; i < toPush.length; i++){
				array.push(toPush[i]);
			}
		 }
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         // FILL THIS IN
         var strArray = sourceStr.split(",");
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         // FILL THIS IN
         var sum;
         for(var i = 0; i < arguments.length; i++){
		 	sum += arguments[i];
		 }
		 return sum;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         // FILL THIS IN
         if(sourceStr.trim().length == 0){
		 	return true;
		 }
		 return false;
     }

     // write an example of a javascript closure
     function outer (arg1, arg2) {
	 	var x = "Test";
	 	function inner(){
			return x + +arg1 + arg2;
		}
	 	return inner();
	 }

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     {
		"people": [
     		{
				"first name":"Joe",
     			"last name":"Smith",
     			"city":"Louisville",
     			"state":"KY",
     			"zip":"40202",
     			"phone numbers":
     			{
					"home":443-3454,
					"work":232-2343,
					"mobile":234-5643
				}
			},
     		{
				"first name":"Bob",
				"last name":"Woods",
				"city":"Louisville",
				"state":"KY",
				"zip":"40299",
				"phone numbers":
				{
					"home":543-5454,
					"work":782-2343,
					"mobile":334-1243
				}
			},
     		{
				"first name":"Dan",
				"last name":"White",
				"city":"Louisville",
				"state":"KY",
				"zip":"40212",
				"phone numbers":
				{
					"home":343-3444,
					"work":452-2343,
					"mobile":234-5643
				}
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
    // not sure on how to do this...
    var DataTable = function (columnsArray, rowsArray){
		var columns = columnsArray;
		var rows = rowsArray;
		function addRows(rowToAdd){
			return rows.push(rowToAdd);
		}
		function addColumns(columnToAdd){
			return columns.push(columnToAdd);
		}
		function getData(){
			for(var i = 0; i < rows.length; i++){

				for(var j = 0; j < columns.length; j++){

				}

			}
		}
	}

    // within div1, programatically create a
    // SELECT element (with multiple items) and a button.
    // when the button is clicked write out the name and value of the selected item to the console.
	var div1 = document.getElementById("div1");
	var select = document.createElement("select");
	select.id = "mySelect";
	div1.appendChild(select);
	for(var i = 1; i <= 5; i ++){
	 	var option = document.createElement("option");
	 	option.text = "Option" + i;
	 	option.value = i;
	 	select.appendChild(option);
	}
	var button = document.createElement("input");
	button.setAttribute("type", "button");
	button.value = "Select";
	button.addEventListener("click", displaySelectedOptionToConsole);
	div1.appendChild(button);
	function displaySelectedOptionToConsole () {
		var selectedIndex = document.getElementById("mySelect").selectedIndex;
		var options = document.getElementById("mySelect").options;
		return console.log("Text: " + options[selectedIndex].text + " Value: " + options[selectedIndex].value);
	}



    // Write 5 different jQuery selectors to retrieve the
    // sample anchor in the markup below.
	//$(".link"), $(".buzz a"), $("#fizz a"), $(".bar a"), $("#foo a)


    // Programatically create an array with 5 items.  Create a list item for each item in the array
    // and add the list items to the unordered list with an id of "list1".
    var array = new Array();
    var unorderedList = document.getElementById("list1");
    array[0] = document.createElement("li");
    array[0].innerHTML = "One";
    array[1] = document.createElement("li");
    array[1].innerHTML = "Two";
    array[2] = document.createElement("li");
    array[2].innerHTML = "Three";
    array[3] = document.createElement("li");
    array[3].innerHTML = "Four";
    array[4] = document.createElement("li");
    array[4].innerHTML = "Five";
    for(var i = 0; i < array.length; i++){
		unorderedList.appendChild(array[i]);
	}

    // Use javascript to add a list of checkboxes and 2 links
    // to the div with an id of "foobar"
    // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
    // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
    var foobar = document.getElementById("foobar");
    for(var i = 1; i < 5; i++){
	    var checkbox = document.createElement("input");
	    checkbox.setAttribute("type", "checkbox");
		foobar.appendChild(checkbox);
	}

	var anchorCheckAll = document.createElement("a");
	anchorCheckAll.setAttribute("href", "#");
	anchorCheckAll.appendChild(document.createTextNode("Check All"));
	anchorCheckAll.addEventListener("click", CheckAll);
	foobar.appendChild(anchorCheckAll);

	var anchorUncheckAll = document.createElement("a");
	anchorUncheckAll.setAttribute("href", "#");
	anchorUncheckAll.appendChild(document.createTextNode("Uncheck All"));
	anchorUncheckAll.addEventListener("click", UnCheckAll);
	foobar.appendChild(anchorUncheckAll);
	function CheckAll() {
		var cb = new Array();
		cb = document.getElementsByTagName("input");
		for(var i = 0; i < cb.length; i++){
			if(cb[i].type == "checkbox"){
				cb[i].setAttribute("checked", "checked");
			}
		}
	}
	function UnCheckAll() {
		var cb = new Array();
		cb = document.getElementsByTagName("input");
		for(var i = 0; i < cb.length; i++){
			if(cb[i].type == "checkbox"){
				cb[i].removeAttribute("checked");
			}
		}
	}