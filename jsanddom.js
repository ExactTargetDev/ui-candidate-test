     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         // FILL THIS IN
		  var tmp = '';
		  for (var i = str.length - 1; i >= 0; i--)
			tmp += str[i];
		  return tmp;
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         // FILL THIS IN
		 var minVal = values[0];
		 for (var i = 1; i < values.length; i++)
			minVal = Math.min(minVal,values[i]);
		return minVal;
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         // FILL THIS IN
		 var uniVal = [];
		 for (var i = 0; i < values.length; i++){
			if(uniVal.indexOf(values[i])=== -1)
			uniVal.push(values[i]);
		 }
		 return uniVal;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         // FILL THIS IN
		 for(var i=1; i<=100; i++){
			if(i%3==0 && i%5==0){
			console.log('FizzBuzz');
			}
			else if(i%3==0){
			console.log('Fizz');
			}
			else if(i%5==0){
			console.log('Buzz');
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
		 for(var i=0;i<fruitsToRemove.length;i++){
			var tmp = fruits.indexOf(fruitsToRemove[i]);
			fruits.splice(tmp,1);
		 }
		 return fruits;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         // FILL THIS IN
		 if(typeof toPush == 'object'){
			//array= array.concat(toPush);
			array.push.apply(array, toPush);
		 }else{
			array.push(toPush);
		 }
		 return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         // FILL THIS IN
		 return sourceStr.split(",");;
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         // FILL THIS IN
		 var sum = 0;
		for (var i=0; i < arguments.length; i++) {
			sum += arguments[i];
		}
		return sum;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         // FILL THIS IN
		 if(sourceStr.trim()=="" && sourceStr.length>0){
			return true;
		 }
		 else{
			return false;
		 }
     }

     // write an example of a javascript closure
		var fruits = ["Apple","Banana","Orange"];
		function closureFun(addFruit){
			if(checkUnique()){
				fruits.push(addFruit);
				
			}else{
			
			}
			function checkUnique(){
				return fruits.indexOf(addFruit) > 0 ? false : true;
			}
			return fruits;
		}
		
     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
		var people = {"People":[{"firstName":"John", 
					   "lastName":"Doe" , 
					   "city":"Columbus" , 
					   "state":"Indiana", 
					   "zip":"47201", 
					   "phone":{"home":"123","work":"456","mobile":"789"}
					   },
					 {"firstName":"Jenny", 
					  "lastName":"Doe" , 
					  "city":"Columbus" , 
					  "state":"Indiana", 
					  "zip":"47201", 
					  "phone":{"home":"123","work":"456","mobile":"789"}
					 }]};

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
			var DataTable = {columns:['column1','column2','column3'],
							rows:[{'value1A','value1B','value1C'},{'value2A','value2B','value2C'}],
							addRows:function(value){
								return this.rows.push(value);
							},
							addColumns:function(value){
								return this.columns.push(value);
							},
							getData:function(){
								return this;
							}
							};

			
			
			
			
     
		function myFunction(){
			console.log('Name:'+$('#dropid option:selected').attr('name')+' Value:'+$('#dropid option:selected').val());
		}
    

    
		$(document).ready(function() {
		
			// within div1, programatically create a
			// SELECT element (with multiple items) and a button.
			// when the button is clicked write out the name and value of the selected item to the console.
			
				
			var tmp_html = '<select name="dropdown" id="dropid">';
				tmp_html+= '<option name="fruitName" value="fruitVal">Fruits</option>';
				tmp_html+= '<option name="snackName" value="snackVal">Snacks</option>';
				tmp_html+= '<option name="drinkName" value="drinkVal">Drinks</option>';
				tmp_html+= '<option name="chipName" value="chipVal">Chips</option>';
				tmp_html+= '<select>';
				tmp_html+= '<button id="select" onclick="myFunction()">Submit</button>';
			
				$('#div1').append(tmp_html);
				
				
			
			
			// Write 5 different jQuery selectors to retrieve the
			// sample anchor in the markup below.
			var type1 = $('.link').html();
			var type2 = $('div > div > a').html();
			var type3 = $('#fizz > a').html();
			var type4 = $("[href='#']").html();
			var type5 = $('#foo > #fizz > a').html();
			var type6 = $('.bar > .buzz > a').html();
	
	
			 // Programatically create an array with 5 items.  Create a list item for each item in the array
			// and add the list items to the unordered list with an id of "list1".
			var items = ["Fruits",
						"Veggies",
						"Pulses",
						"Snacks",
						"Drinks"];
			var tmp = "";
			for(i=0;i<items.length;i++){
				tmp+="<li>"+items[i]+"</li>";
			}
			$('#list1').append(tmp);
			 // Use javascript to add a list of checkboxes and 2 links
			// to the div with an id of "foobar"
			// When the first link is clicked, all the checkboxes should be checked (i.e. check all)
			// When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
			var list = ["Apples","Bananas","Oranges","Mangoes"];
			var html = "";
			for(i=0;i<list.length;i++){
			 html+='<input type="checkbox" name="fruits" value="'+list[i]+'">'+list[i]+'</input>';
			 }
			 html+='<br/><a id="check" href="#">Check all</a>  <a id="uncheck" href="#">Uncheck all</a>';
			 $('#foobar').append(html);
			 
			 $('#check').click(function() {
				 $('#foobar').find('input[name="fruits"]').prop('checked', true);
			 });
			 $('#uncheck').click(function() {
				 $('#foobar').find('input[name="fruits"]').prop('checked', false);
			 });
		});
			
