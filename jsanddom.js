/*Function for IE8-9 and older browsers*/
function typeofconsole(data){
     if(typeof console === "undefined"){
         alert(data);
     }else{
         console.log(data);
     }
}


     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         str = str.split('').reverse().join('');
         return str;
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         // Run .Sort on the array and return the first value
         values = values.sort();
         return values[0];
     
     }
     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         var distinct = [];
         values = values.sort(); 
         for(var i=0;i<values.length;i++){
             //if the first value is not the same as the next add to the array
             if(values[i]!=values[i+1]){
	             distinct.push(values[i]);
             }
         }
         
         typeofconsole(distinct);
         
         return distinct;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         for(var i=1;i<=100;i++){
	         if(i%3==0||i%5==0){
	             if(i%3==0&&i%5==0){
		             typeofconsole("FizzBuzz")
	             }else{
	                 if(i%3==0){
		                 typeofconsole("Fizz")
	                 }
	                 if(i%5==0){
	                     typeofconsole("Buzz");
	                 }
	             }
	         }else{
		         typeofconsole(i);
	         }
         }
         return 'FizzBuzz:ok';
     }


     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         var distinct = [];
         // intirate through the first array 
         for(var i=0;i<fruits.length;i++){
             // If the same value is not in the first array and is in the second add it to the distinct array 
             if($.inArray(fruits[i],fruitsToRemove)<0){
	            distinct.push(fruits[i]);
             }
         }
         typeofconsole(distinct);
         return distinct;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         if($.isArray(toPush)){
	         for(var i=0;i<toPush.length;i++){
		         array.push(toPush[i]);
	         }	         
         }else{
		     array.push(toPush);
		 }
         typeofconsole(array);
         return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         try{
             var testStr = sourceStr.split(',');
         }catch(err){
	         var testStr = [];    
         }
         return testStr;
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         var total = 0;
         for(var i=0;i<arguments.length;i++){
	        if(typeof arguments[i] == 'number'){
		        total = total + arguments[i];
	        }
         }
         return total;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         var regex = /^\s+$/
         typeofconsole(regex.test(sourceStr));
         return regex.test(sourceStr);
         
     }

     // write an example of a javascript closure
     function noise(noise){ 
         var sound = "That was a loud ";
         function decibels(num){
             return sound + noise + ", it registered almost " + num + " decibels.";
         } 
         return decibels; 
     }

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     var json = {
      "response":{
      "personnel":[
	     	{
		        "firstname":"Bob",
		        "lastname":"Smith",
		        "city":"Aurora",
		        "state":"IL",
		        "zip":"60502",
		        "phone":[
		           {
		           "home":"630-555-9087",
		           "work":"630-555-2689",
		           "mobile":"630-555-0056"
		           }
		        ]
 	         },
		     {
		        "firstname":"Matthew",
		        "lastname":"Wells",
		        "city":"Downers Grove",
		        "state":"IL",
		        "zip":"60515",
		        "phone":[
		           {
		           "home":"630-555-9087",
		           "work":"630-555-2689",
		           "mobile":"815-988-7231"
		           }
		        ]
 	         }
		
          ]
        }
     }
     // json.response.personnel[0].xxxxx
 
     
     
     


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

     var datatable = function(){
	     var row=[];
	     var columns=[];
	     var rownum = 0;
	     this.addRow = function(hash){ 
	         row[rownum] = [];
		     for(var i=0;i<=columns.length-1;i++){
		         row[rownum][columns[i]]=hash[columns[i]];
		     }
		     rownum++;
		     return true;
	     }
	     this.addColumns = function(){
	         for(var i=0;i<=arguments.length-1;i++){
		         if($.inArray(arguments[i],columns)<0){
		             columns.push(arguments[i]);
		         }
	         }
	         return true;
	     }
	     this.getData = function(){
              var json = {"response":{"personnel":[
              ]}};
              
		     for(var e=0;e<=row.length-1;e++){
		         var datarow = json.response.personnel[e] = {}
		         for(var i=0;i<=columns.length-1;i++){
		             datarow[columns[i]] = row[e][columns[i]];   
		         }
		     }
		     typeofconsole(json);
		     return json;
	     }
	     
	     
     }
     
     


     
     

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
     function createselect(theid){
         var ele = {"cat":"Cat","dog":"Dog","mouse":"Mouse"};

         var html = '<select id="'+theid+'">';
         for(var key in ele){
	          html += '<option value="'+key+'">'+ele[key]+'</option>';
         }
         html += '</select>';
         html += '<input type="button" value="Push" onclick="writetoconsole('+theid+')"  />';
	     $('#div1').html(html);
     }
     
     function writetoconsole(theid){
	     typeofconsole($(theid).val())
     }

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
     $('body #foo #fizz a');
     $('body #fizz a');
     $('#foo #fizz a');
     $('#fizz a');
     $('.buzz a');


     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
     var arraytest = function(){
         var anArray = [];
	     for(var i=0;i<=4;i++){
		     anArray.push('<li>'+(3*i)+'</li>');
	     }
	     for(var i=0;i<anArray.length;i++){
		     $('#list1').append(anArray[i])
	     }
     }
     arraytest()

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
     var checktest = {
         create:function(){
            var html = '<input type="checkbox" name="firstname" value="Matt">My name is Matt<br>';
            html += '<input type="checkbox" name="firstname" value="Bob">My name is Bob<br>';
            html += '<input type="checkbox" name="firstname" value="Frank">My name is Frank<br>';
            html += '<a href="#" onclick="checktest.checkuncheck(true); return false;">Check All</a><br>';
            html += '<a href="#" onclick="checktest.checkuncheck(false); return false;">UnCheck All</a>';
	        $('#foobar').html(html);
	     },
	     checkuncheck:function(check){
		     $("#foobar input").each(function(){
			     $(this).attr('checked', check);
		     });
	     }
     }
     checktest.create()
     
