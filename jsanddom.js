     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
		for (var i = str.length - 1, o = ''; i >= 0; o += str[i--]) { }
		return o;
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
		 return Math.min.apply(Math, (values));
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
		var uniqueArray = values.filter(function(elem, pos) {
			return values.indexOf(elem) == pos;
		}); 
		return uniqueArray;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
		for (i=1; i<=100; i+=1) {		
			if(((i % 5) == 0)&&((i % 3) == 0)){
				console.log("FizzBuzz");
			}else if((i % 5) == 0){
				console.log("Buzz");			
			}else if((i % 3) == 0){
				console.log("Fizz");
			}else{
				console.log(i);
			}
		}
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
		var arrayLength = fruitsToRemove.length;
		for (var p = 0; p < arrayLength; p++) {
			var i = fruits.indexOf(fruitsToRemove[p]);
			if(i != -1) {
				fruits.splice(i, 1);
			}
		}
		return fruits;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
		if (toPush instanceof Array) {
			var arrayLength = toPush.length;
			for (var p = 0; p < arrayLength; p++) {
			array.push(toPush[p]);
			}
		} else {
			array.push(toPush);
		}
		return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
		var stringarray = sourceStr.split(",");
		return stringarray;
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
		var totalval = 0;
		for (var i = 0, j = arguments.length; i < j; i++){
			totalval += arguments[i] 
		}
		return totalval;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
		var checkstring = sourceStr.replace(/^\s+|\s+$/g, ''); 
		if (checkstring.length == 0) 
		{ 
			return true;
		} else { 
			return false;
		} 
     }

     // write an example of a javascript closure
	function closure() {
    var parentname = "Darth";
    function parentName() {
        console.log("My parent's name is: " + parentname);
    }
    parentName();    
	}


     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     
     var text = '{ "people" : [' +
	'{ "firstName":"Max" , "lastName":"Headroom" , "city":"Boston" , "state":"MA" , "zip":"00000" , "phone": ["3175551212","3175551313","3175551414"]},' +
	'{ "firstName":"Princess" , "lastName":"Bubblegum" , "city":"Candy Kingdom" , "state":"AL" , "zip":"77777" , "phone": ["7775551212","7775551313","7775551414"]},' +
	'{ "firstName":"Clutch" , "lastName":"Powers" , "city":"Rev City" , "state":"HW" , "zip":"99999" , "phone": ["9995551212","9995551313","9995551414"]}' +
	']}';

//for testing
/*
	var obj = JSON.parse(text);  
	console.log(obj.people[1].firstName + " " + obj.people[1].lastName + " <br />" + obj.people[1].city + ", " + obj.people[1].state + ", " + obj.people[1].zip + " <br />" + obj.people[1].phone[0] + ", " + obj.people[1].phone[1] + ", " + obj.people[1].phone[2]);
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
     
//NOTE: Confused by this question, skipping for now.

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
     document.getElementById("div1").innerHTML = "<select id='selectatronic'></select><button id='report'>report</button>";
		var select = document.getElementById("selectatronic");
		var options = ["one", "two", "three", "four", "five"];
		for(var i = 0; i < options.length; i++) {
			var opt = options[i];
			var el = document.createElement("option");
			el.textContent = opt;
			el.value = opt;
			select.appendChild(el);
		}
		document.getElementById("report").onclick=function(){
		    var x = document.getElementById("selectatronic").value;
			console.log(x);
		};
		

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.

//commented to prevent interference, as jQuery is not being included.
/*
	$( ".link" );
	$( "div.buzz > a" );
	$( "a" );
	$( "a:first-of-type" );
	$( "div a.link" );
*/
     

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
	var listed = ["fruit", "vegetables", "non-fruit", "non-vegetables", "other"];
	var arrayLength = listed.length;
	for (var p = 0; p < arrayLength; p++) {
		 if(!listbits){
			 var listbits = "<li>" + listed[p] + "</li>"; 			 
		 }else{
			 var listbits = listbits + "<li>" + listed[p] + "</li>";
		 }
		document.getElementById("list1").innerHTML = listbits;
	}

     

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
	var checks = ["one", "two", "three", "four", "five"];
	var arrayLength = checks.length;
	for (var t = 0; t < arrayLength; t++) {
		if(!checklist){
			var checklist = "<li><input type='checkbox' id='check_" + t + "'> " + checks[t] + "</li>"; 			 
		}else{
			var checklist = checklist + "<li><input type='checkbox' id='check_" + t + "'> " + checks[t] + "</li>";
		}
	}
	var checklist = checklist + "<a id='allchecks' href='#'>ALL</a> ";
	var checklist = checklist + "<a id='nochecks' href='#'>NONE</a>";
	document.getElementById("foobar").innerHTML = checklist;
	document.getElementById("allchecks").onclick=function(){
		event.preventDefault();
		for (i = 0; i<5; i++) {
			document.getElementById('check_'+i).checked = true;
		} 	
	};
	document.getElementById("nochecks").onclick=function(){
		event.preventDefault();
		for (i = 0; i<5; i++) {
			document.getElementById('check_'+i).checked = false;
		}
	};
