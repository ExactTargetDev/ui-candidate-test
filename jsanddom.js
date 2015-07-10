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
     	var min_value;
         for (var iii = 0; iii < (values.length - 1); iii++){
         	min_value = (values[iii] < values[iii+1]) ? values[iii] : values[iii+1];
         }
         return min_value;
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         var distinct_array = [];
         var in_array = false;
         for (var iii = 0; iii < values.length; iii++){
         	in_array = false;
         	for (var jjj = 0; jjj < distinct_array.length; jjj++){
         		if (distinct_array[jjj] == values[iii]){
         			in_array = true;
         			break;
         		}
         	}
         	if (!in_array){
         		distinct_array.push(values[iii]);
         	}
         }
         return values;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
     	info_log = [];
         for (var iii = 1; iii < (100 + 1); iii++){
         	if (iii%5 == 0 && iii%3 == 0){
         		//console.log("FizzBuzz");
         		info_log.push("FizzBuzz");
         	} else if (iii%5 == 0){
         		//console.log("Buzz");
         		info_log.push("Buzz");
         	} else if (iii%3 == 0){
         		//console.log("Fizz");
         		info_log.push("Fizz");
         	} else {
         		//console.log(iii);
         		info_log.push(iii);
         	}
         }
         return info_log;
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         for (var iii = 0; iii < fruitsToRemove.length; iii++){
         	for (var jjj = fruits.length; jjj > -1; jjj--){
         		if (fruits[jjj] == fruitsToRemove[iii]){
         			fruits.splice(jjj, 1);
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
         if (typeof toPush == 'array'){
         	for (var iii = 0; iii < toPush.length; iii++){
         		array.push(toPush);
         	}
         } else {
         	array.push(toPush);
         }
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         var string_array = [];
         string_array = sourceStr.split(',');
         return string_array;
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         var total = 0;
         for (var iii = 0; iii < arguments.length; iii++){
         	total += arguments[iii];
         }
         return total;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         if (!String.prototype.trim) { // make sure older browsers have trim
		    (function() {
		        // Make sure we trim BOM and NBSP
		        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
		        String.prototype.trim = function() {
		            return this.replace(rtrim, '');
		        };
		    })();
		}
		if (sourceStr.trim() === ''){
			return true;
		} else {
			return false;
		}
     }

     // write an example of a javascript closure
     function closureTest(){
     	var string1 = 'This is the first half of the sentence, ';
     	
     	function innerFunction(){
     		var string2 = string1 + 'and this is the second half!';
     		return string2;
     	}
     	
     	return innerFunction();
     }

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     var people_json = {
     	"number_of_people" : 3,
     	"people" : [
     		{
     			"first_name" : "John",
     			"last_name" : "Doe",
     			"city" : "Indianapolis",
     			"state" : "Indiana",
     			"zip" : "46201",
     			"phone_numbers" : {
     				"home" : "317-555-5555",
     				"work" : "317-123-4567",
     				"mobile" : "317-765-4321"
     			}
     		},
     		{
     			"first_name" : "Jane",
     			"last_name" : "Smith",
     			"city" : "Columbus",
     			"state" : "Indiana",
     			"zip" : "47201",
     			"phone_numbers" : {
     				"home" : "812-555-5555",
     				"work" : "812-123-4567",
     				"mobile" : "812-765-4321"
     			}
     		},
     		{
     			"first_name" : "Joe",
     			"last_name" : "Schmoe",
     			"city" : "Lafayette",
     			"state" : "Indiana",
     			"zip" : "47901",
     			"phone_numbers" : {
     				"home" : "765-555-5555",
     				"work" : "765-123-4567",
     				"mobile" : "765-765-4321"
     			}
     		}
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
     
     /*
      * So ... I may be misunderstanding the question here ...
      * I have built this function so that
      * 1) You can add one or more columns with the addColumns method
      * 2) You can then add a row with the addRow method by giving a string array. 
      * Individual items in the array will be assigned to separate columns
      * 3) The getData method returns the whole table in an object, separated into rows, and then columns
      */
     var DataTable = function(){
     	var columns = [];
     	var rows = [];
     	
     	return {
     		addRow : function(){
     			var single_row = {};
     			for (var jjj = 0; jjj < arguments.length; jjj++){
     				if (columns.length > jjj){
     					single_row[columns[jjj]] = arguments[jjj];
     				}
     			}
     			rows.push(single_row);
     		},
     		addColumns : function(){
     			for (var iii = 0; iii < arguments.length; iii++){
		         	columns.push(arguments[iii]);
		         }
     		},
     		getData : function(){
     			return rows;
     		}
     	}
     };

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
     function create_select(){
     	var select_html = '<select id="my_select">';
     	select_html += '<option value="option1">Pick Me!</option>';
     	select_html += '<option value="option2">No, Pick Me!</option>';
     	select_html += '<option value="option3">Pick me instead!</option>';
     	select_html += '</select>';
     	$('#div1').append(select_html);
     	var button_html = '<input type="button" value="Show Selection in Console" onclick="console.log(\'Name: \' + $(\'#my_select option:selected\').text() + \' Value: \' + $(\'#my_select\').val())" />';
     	$('#div1').append(button_html);
     }

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
     function grab_anchor(){
     	// add an exclamation point for each time we successfully grab the anchor
     	$('a').append('!');
     	$('.link').append('!');
     	$('[href="#"]').append('!');
     	$('#fizz > *').append('!');
     	$('#foo *:not(div)').append('!');
     }

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
     function create_array(){
     	var my_array = [];
     	for (var iii = 100; iii < 600; iii = iii + 100){
     		my_array.push(iii);
     	}
     	
     	for (var jjj = 0; jjj < my_array.length; jjj++){
     		$('#list1').append('<li>'+my_array[jjj]+'</li>');
     	}
     }

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
     function add_checks_n_links(){
     	var checkbox_html = '';
     	
     	for (var iii = 0; iii < 10; iii++){
     		checkbox_html += '<input type="checkbox" id="checkbox'+iii+'" />';
     	}
     	
     	$('#foobar').append(checkbox_html);
     	
     	var link_html = '<br/><a href="#" onclick="check_all(true);return false;">Check All</a>';
     	link_html += '<br/><a href="#" onclick="check_all(false);return false;">Uncheck All</a>';
     	
     	$('#foobar').append(link_html);
     }
     
     /*
      * Function that actually does the checking/unchecking. Gets passed true to check all and false to uncheck all
      */
     function check_all(check_or_uncheck){
     	$('#foobar input[type = "checkbox"]').each(function(){
     		$(this).prop('checked', check_or_uncheck);
     	});
     }
