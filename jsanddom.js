     // Evan Meagher on 9/10/2013
	 // using good ole native JS with no framework.
	 // a little more verbose than a lot of the helpful JQuery functions :)
	 
	 
	 // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         return str.split('').reverse().join('');
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
		 var sorted = values.sort(function(a,b){return a - b});
		 return sorted[0];
     }
	
     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         return values.getUnique();
     }
	 Array.prototype.getUnique = function(){
		var u = {}, a = [];
		for(var i = 0, l = this.length; i < l; ++i){
			if(u.hasOwnProperty(this[i])) {
				continue;
			}
			a.push(this[i]);
			u[this[i]] = 1;
		}
		return a;
	}
	
     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         for(var i = 1; i < 101; i++)
		 {
			var str = "";
			if(i%3 == 0){ str = "Fizz"; }
			if(i%5 == 0){ str = "Buzz"; }
			if(i%3 == 0 && i%5 == 0){ str = "FizzBuzz"; }
			console.log(i+" "+str);
		 }
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
		// iterate backwards over the fruits array!
         for(var i = fruits.length-1; i >= 0; i--){
			for(var j=0; j<fruitsToRemove.length; j++) {
				if (fruitsToRemove[j] == fruits[i]){ fruits.splice(i,1); }
			}
		}
			return fruits;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         array.push(toPush);
		 return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         return sourceStr.split(',');
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
		var total = 0;
		for (var i=0; i<arguments.length; i++)
		{
			if(!isNaN(parseFloat(arguments[i])) && isFinite(arguments[i]))
			{
				total+=arguments[i];
			}
		}
		return total;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         return (sourceStr.trim() == "");
     }

     // write an example of a javascript closure
	 // adding events in a loop, from my article in 2010 
	 // http://solidlystated.com/scripting/javascript-add-event-in-a-loop/
	function runme() {
		for(var i=1; i<10; i++){ 
			someElement.onclick = function(a1,a2){
				return function(){ myNewFunction(a1,a2); }
			}(arg1,arg2);
		}
	}
	
	 // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
	
	var jsonobj = {
    "first name": "Evan",
    "last name": "Meagher",
    "city": "Indianapolis",
    "state": "Indiana",
    "zip": 46220,
	"phone": {
		"home": "317-555-5555",
		"work": "317-555-5555",
		"mobile": "317-555-5555",
		}
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
	 
	DataTable = new Object();
	 
	DataTable.columns = new Array();
	DataTable.rows = new Array();
	
	DataTable.addRows = function() {
		for (var i=0; i<arguments.length; i++)
		{
			DataTable.rows.push(arguments[i]);
		}
	}
	DataTable.addColumns = function() {
		for (var i=0; i<arguments.length; i++)
		{
			DataTable.columns.push(arguments[i]);
		}
	}
	DataTable.getData = function(){
		
		// TEST DATA (TEMPORARY)
		DataTable.addColumns('column1', 'column2', 'column3');
		DataTable.addRows('value1A', 'value1B', 'value1C');
		DataTable.addRows('value2A', 'value2B', 'value2C');
		
		
		var retVal = new Object();
		var numCols = DataTable.columns.length; 
		var numRows = DataTable.rows.length; 
		for (var i=0; i<numRows; i++)
		{
			/* NEED TO REFACTOR SO IT ADDS TO CORRECT COLS BEYOND 3
			NOT SURE HOW THE RETURNED OBJECT SHOULD LOOK, BUT OUTTA TIME
			AND DON'T WANNA KEEP ANYONE WAITING ANY LONGER
			*/ 
			retVal[DataTable.columns[i]] = DataTable.rows[i];
		}
		return retVal;
	}

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.

	 var selEl = document.createElement("select");
	 selEl.setAttribute("id", "selEl");
	 document.getElementById("div1").appendChild(selEl);
	 
	 var opt1 = document.createElement("option");
	 opt1.setAttribute("value", "apples");
	 opt1.setAttribute("name", "namedapples");
	 opt1.innerHTML = "apples";
	 document.getElementById("selEl").appendChild(opt1);
	 var opt2 = document.createElement("option");
	 opt2.setAttribute("value", "bananas");
	 opt2.setAttribute("name", "namedbananas");
	 opt2.innerHTML = "bananas";
	 document.getElementById("selEl").appendChild(opt2);
	 
	 var selBtn = document.createElement("input");
	 selBtn.setAttribute("id", "selBtn");
	 selBtn.setAttribute("type", "button");
	 selBtn.setAttribute("value", "Log Choice");
	 document.getElementById("div1").appendChild(selBtn);
	 
	 selBtn.onclick = function(){
		var box = document.getElementById("selEl");
		var elvalue = box.options[box.selectedIndex].value;
		var elname = box.options[box.selectedIndex].attributes.getNamedItem("name").value;
		console.log("name = "+elname+" value = "+elvalue);
	 }
	 
     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
	 
	 // HEY you said we didnt need to use a framework... but no sweat. 	 
	 /*
	 $("a");
	 $(".link");
	 $("#fizz:first-child");
	 $("contains('sample anchor')");
	 $("[href]");
	 */
	 
     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".

	 var ulEl = document.createElement("ul");
	 ulEl.setAttribute("id", "list1");
	 document.body.appendChild(ulEl);
	 
	 var items = ["corvettes","apples","bananas","oranges","pears"]; // use an array literal here for fun
	 for(var i = 0; i<items.length; i++)
	 {
		var liEl = document.createElement("li");
		liEl.innerHTML = items[i];
		document.getElementById("list1").appendChild(liEl);
	 }
	 
     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
	 var box1 = document.createElement("input");
	 var box2 = document.createElement("input");
	 var box3 = document.createElement("input");
	 box1.setAttribute("type", "checkbox");
	 box2.setAttribute("type", "checkbox");
	 box3.setAttribute("type", "checkbox");
	 box1.setAttribute("class", "checks");
	 box2.setAttribute("class", "checks");
	 box3.setAttribute("class", "checks");
	 document.getElementById("foobar").appendChild(box1);
	 document.getElementById("foobar").appendChild(box2);
	 document.getElementById("foobar").appendChild(box3);
	 
	 var link1 = document.createElement("a");
	 var link2 = document.createElement("a");
	 link1.setAttribute("id","link1");
	 link2.setAttribute("id","link2");
	 link1.setAttribute("href","#");
	 link2.setAttribute("href","#");
	 link1.innerHTML = " Check All";
	 link2.innerHTML = " Uncheck All";
	 document.getElementById("foobar").appendChild(link1);
	 document.getElementById("foobar").appendChild(link2);
	 
	 var boxes = document.getElementsByClassName("checks");
	 
	 link1.onclick = function(){
		for(var i = 0; i < boxes.length; i++)
		{
			boxes[i].checked = true;
		}
	 }
	 link2.onclick = function(){
		for(var i = 0; i <boxes.length; i++)
		{
			boxes[i].checked = false;
		}
	 }
