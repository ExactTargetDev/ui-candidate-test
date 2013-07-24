	 // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         var holdString = '';
		 for(var i = str.length; i > 0; i--){
			holdString += str[i];
		 }
		 return holdString;
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
		values.sort(function(a,b){return a-b});
		return values[0];
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
        var distinctVals = new Array();
		for(var i = 0; i < values.length; i++){
			if(distinctVals.indexOf(values[i]) == -1)
				distinctVals.push(values[i]);
		}
		return distinctVals;
     }
	
	// GIVE IE8 indexOf function for arrays
	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function(value, offset){
			for (var i = (offset || 0), j = this.length; i < j; i++) {
				if (this[i] === value) { return i; }
			}
			return -1;
		}

	}
	 

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         // FILL THIS IN
		 var output ='';
		 for(var i = 1; i <= 100; i++){
			if(i % 3 == 0)
				output += 'Fizz';
			if(i % 5 == 0)
				output += 'Buzz';
			if(i % 3 != 0 && i % 5 != 0)
				output = i;
			
			console.log(output);
			output='';
		 }
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         // FILL THIS IN
		 var holdArray = new Array();
		 for(var i = 0; i < fruits.length; i++){
			if(fruitsToRemove.indexOf(fruits[i]) == -1)
				holdArray.push(fruits[i]);
		 }
		 return holdArray;
		 
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         // FILL THIS IN
		 if(typeof(toPush) == 'array'){
			for(var i = 0; i < toPush.length; i++){
				array.push(toPush[i])
			}
		 }else{
			array.push(toPush);
		 }
		 
		 return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         // FILL THIS IN
		 return sourceStr.split(',');
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         // FILL THIS IN
		 var returnSum = 0;
		 for(var a = 0; a < arguments.length; a++){
			returnSum += arguments[a];
		 }
		 return returnSum;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         // FILL THIS IN
		 var returnVal = true;
		 var whitespaceRegEx = /(\s)/;
		 var a = 0
		
		 while(a < sourceStr.length && returnVal){
			returnVal = whitespaceRegEx.test(sourceStr[a]);
			a++;
		 }
		 return returnVal;
     }

     // write an example of a javascript closure
	function closureFunc(){
		var num = 88;
		var pointer = function(){ alert(num); };
		return pointer;
	}
	
     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
	var people = {
		'people' : [
			{'firstName' : 'Jeremy', 'lastName' : 'Barngrover', 'city': 'Indianapolis', 'state': 'Indiana', 'zip' : 46268, 'phone':[ {'home': '(317) 555-1235', 'work' : '(317) 555-1236', 'mobile' : '(317) 555-1234'}]},
			{'firstName' : 'John', 'lastName' : 'Doe', 'city': 'Indianapolis', 'state': 'Indiana', 'zip' : 46268, 'phone':[ {'home': '(317) 555-9235', 'work' : '(317) 555-9236', 'mobile' : '(317) 555-9234'}]}
		]
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
	function DataTable(){
		var columns = new Array();
		var rows = new Array();
		this.addColumns = function(){
			for(var a =0; a < arguments.length; a++)
				columns.push(arguments[a]);
		}
		this.addRow = function(){
			rows.push(arguments);
		}
		this.getData = function(){
			var returnHold = '{"data":[';
			for(var r = 0; r < rows.length; r++){
				var row = rows[r];
				var temp = '{';
				for(var c = 0; c < columns.length; c++){
					temp += '"' + columns[c] + '":"' + row[c] + '",';
				}
				temp = temp.substring(0,temp.length - 1);
				temp += '},'
				returnHold += temp;
			}
			returnHold = returnHold.substring(0, returnHold.length -1);
			returnHold += ']}';			
			return JSON.parse(returnHold); 
		}
		
	}
	
	
	var table1 = new DataTable();
	table1.addColumns('column1', 'column2', 'column3');
	table1.addRow('value1A', 'value1B', 'value1C');
	table1.addRow('value2A', 'value2B', 'value2C');
	console.log(table1.getData());
	
	$(document).ready(function(){
     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
		var sel = '<select id="div1Select"><option value="test-1">Test 1</option><option value="test-2">Test 2</option><option value="test-3">Test 3</option></select><input type="button" value="click" id="div1Click" />';
		$('#div1').append(sel);
		$('#div1Click').live('click', function(){
			var $this = $('#div1Select option:selected');
			console.log('Name : ' + $this.html() + ' | ' +'Value : ' + $this.val());
		});
		
     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
		var anchor1 = $('.link');
		var anchor2 = $('#fix > a:eq(0)');
		var anchor3 = $('body .bar .link');
		var anchor4 = $('a[href=#]');
		var anchor5 = $('#fix.bar a.link');
		
     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
		var myArray = new Array();
		for(var a = 1; a <=5; a++){
			myArray.push('Item '+a);
		}
		for(var i = 0; i < myArray.length; i++){
			$('ul#list1').append('<li>' + myArray[i] + '</li>');
		}

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
		for(var z = 0; z < 10; z++){
			var temp = '<label><input name="checkbox'+z+'" class="checkme" type="checkbox" /> Checkbox '+z+'</label>';
			$('#foobar').append(temp);
		}
		$('#foobar').append("<a class='checkall' href='#'>Check All</a>");
		$('#foobar').append("<a class='uncheckall' href='#'>Uncheck All</a>");
		$('#foobar .checkall').live('click', function(e){
			e.preventDefault();
			$('#foobar input').each(function(){$(this).attr('checked', true);})
		});
		$('#foobar .uncheckall').live('click', function(e){
			e.preventDefault();
			$('#foobar input').each(function(){$(this).attr('checked', false);})
		});
	});