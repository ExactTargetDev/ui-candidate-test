     
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
         var minValue = values[0];
         for(var i = 1; i < values.length; i++){
	         if(values[i] < minValue){
		         minValue = values[i];
	         }
         }
         return minValue;
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         var tempVals = [];
         for (var i = 0; i < values.length; i++){
	         if(tempVals.indexOf(values[i]) == -1){
		         tempVals.push(values[i]);
	         }
         }
         return tempVals;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
     	for(var i = 1; i <= 100; i++){
		     	if ((i % 3 == 0) && (i % 5 == 0)){
		     		console.log("FizzBuzz");
			 	} else if (i % 5 == 0){
			 		console.log("Buzz");
			 	} else if (i % 3 == 0){
			 		console.log("Fizz");
			 	} else { 
			 		console.log(i);
			 	}
	     }
     }
     

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         for(var i = 0; i < fruits.length; i++){
	         for(j = 0; j < fruitsToRemove.length; j++){
		         if(fruitsToRemove[j] == fruits[i]){
			         fruits.splice(i, 1);
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
         if(typeof toPush != 'object'){
	         array.push(toPush);
         }else{
	         for(var i = 0; i < toPush.length; i++){
		         array.push(toPush[i]);
	         }
         }
         return array;
         
         
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         var splitStrings = sourceStr.split(", ");
         return splitStrings;
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         var total = 0;
         for (var i = 0; i < arguments.length; i++){
	         total += arguments[i];
         }
         return total;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         if(sourceStr.trim() == ""){
	         return true;
         } else {
	         return false;
         }
     }

     // write an example of a javascript closure
     function helloWorld(name) {
	     var hello = "Hello World and Hello " + name + "!";
	     var alertTheWorld = function(){ console.log(hello); }
	     return alertTheWorld;
     }
     
     log = helloWorld("Reid");
     log();

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     
     var person = [
		     {	
			     "firstName":"Reid", 
			     "lastName":"Bishop", 
			     "city":"Winona Lake", 
			     "state":"IN", 
			     "zip": 46590, 
			     "phoneNumbers":{
			     	"home":5743723035,
			     	"work":7652855095,
			     	"cell":5745278811
				 }
		     },
		     {	
			     "firstName":"John", 
			     "lastName":"Doe", 
			     "city":"Fishers", 
			     "state":"IN", 
			     "zip": 46037, 
			     "phoneNumbers":{
			     	"home":3179920143,
			     	"work":3173948219,
			     	"cell":3172430592
				 }
		     },
		     {	
			     "firstName":"Maggie", 
			     "lastName":"Smith", 
			     "city":"Muncie", 
			     "state":"IN", 
			     "zip": 47304, 
			     "phoneNumbers":{
			     	"home":7652345039,
			     	"work":7652855095,
			     	"cell":7652105320
				 }
		     }
	 ];


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
	     columns = ['year', 'month'];
	     rows = [[2014, 3], [2014, 2]];
	     this.addColumns = addColumns;
	     function addColumns(){
	     	for (var i = 0; i < arguments.length; i++){
	        	columns.push(arguments[i]);
			}
	     }
	     this.addRows = addRows;
	     function addRows(rowValues){
		     rows.push(rowValues);
	     }
	     this.getData = getData;
	     function getData(){
		     var data = [];
		     for(var i = 0; i < rows.length; i++){
		     	for(var j = 0; j < columns.length; j++){
			     	data.push(columns[j] + "#" + rows[i][j]);
		     	}
			 }
		     json = JSON.stringify(data)
		     console.log(json);
		     return json;

	     }
     }
     
     var test = new DataTable();
     test.addRows([2013,4]);
     test.getData();
     

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
     $(document).ready(function (){
	     $("#div1").append($("<select></select>").attr("id","names"));
	     $("#div1").append($("<button></button>").attr("id", "output").text('Output to Console'));
	     options = ['Reid', 'George', 'Sally', 'Sam', 'Henry'];
		 valueOfOptions = 0;
	     $.each(options, function(i, option){
		     $("#names").append("<option value = " + valueOfOptions + ">" + option +"</option>");
		     valueOfOptions++;
	     })
	     $("#output").click(function(){
	     	$("#names option").each(function(){
		 		console.log($(this).text() + " has the value of " + $(this).val()); 
		 	});
	     });
	     
    

	     // Write 5 different jQuery selectors to retrieve the
	     // sample anchor in the markup below.
	     $(".link").click(function(){
		    console.log("first selector works");
	     });
	     $("a").click(function(){
		     console.log("second selector works");
	     })
	     $("#fizz a").click(function(){
		     console.log("third selector works");
	     });
	     $("#foo div a").click(function(){
		     console.log("fourth selector works");
	     });
	     $("div:has(div:has(a))").click(function(){
		    console.log("fifth selector works"); 
	     });
      });
     
     /*
<div id="foo" class="bar" style="margin-top:10px;">
	  <div id="fizz" class="buzz">
	    <a class="link" href="#">sample anchor</a>
	  </div>
	</div>
*/

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
