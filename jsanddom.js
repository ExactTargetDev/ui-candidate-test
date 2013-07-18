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
		 return Math.min.apply(Math, values);
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values, qty) {
		values.sort();
        for(var i = 1; i < values.length; ){
            if(values[i-1] == values[i]){
                values.splice(i - (qty - 1 || 0), (qty || 1));
            } else {
                i++;
            }
        }
        return values;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         if(typeof console === 'object'){
			for(var i = 1, temp; i < 101; i++){
				temp = i;
				if(i % 3 == 0 && i % 5 == 0) temp = 'FizzBuzz';
				else if(i % 3 == 0) temp = 'Fizz';
				else if(i % 5 == 0) temp = 'Buzz';
				console.log(temp);
			}
		 }
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         return findDistinctValues(fruits.concat(fruitsToRemove), 2);
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
		 array.push[typeof toPush === 'object' ? 'apply' : 'call'](array, toPush);
         return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         return sourceStr != '' ? sourceStr.split(',') : [];
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
		for (var i = 0, sum = 0, l = arguments.length; i < l; i++) {
			sum += arguments[i];
		}
		return sum;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         return /\s/.test(sourceStr);
     }

     // write an example of a javascript closure
	 var incCalls = (function(){
		var calls = 0;
		return function(){
			console.log(++calls);
		}
	 })();

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
	 [
		{
			"firstName": "first name",
			"lastName": "last name",
			"city": "City",
			"state": "Some state",
			"zip": "12345",
			"phones": {
				"home": "+123456",
				"work": "+234567",
				"mobile": "+3456789"
			}
		},
		{
			"firstName": "first name",
			"lastName": "last name",
			"city": "City",
			"state": "Some state",
			"zip": "12345",
			"phones": {
				"home": "+123456",
				"work": "+234567",
				"mobile": "+3456789"
			}
		},
		{
			"firstName": "first name",
			"lastName": "last name",
			"city": "City",
			"state": "Some state",
			"zip": "12345",
			"phones": {
				"home": "+123456",
				"work": "+234567",
				"mobile": "+3456789"
			}
		}
	 ];


     // Create a javascript object (DataTable) with the following:
     // A private columns property (string array)
     // A private rows property (string array)
     // A public method addRows that adds an item to the rows array
     // A public method addColumns that adds an item to the columns array
     // A public method getData tthat returns the a json object representation of the DataTable
     // Note: the row object should be a hash of the column name and row item value
     // Example:
     // .addColumns('column1', 'column2', 'column3');
     // .addRow('value1A', 'value1B', 'value1C');
     // .addRow('value2A', 'value2B', 'value2C');
	 var DataTable = (function(){
		var rows = [],
			columns = [];
			
		return {
			addRows: function(){
				rows.push.apply(rows, arguments);
			},
			addColumns: function(){
				columns.push.apply(columns, arguments);
			},
			getData: function(){
				return {
					"rows": rows,
					"columns": columns
				}
			}
		};
	 })();

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
	function createSelectAndButton(){
		jQuery('#div1').append(
			jQuery(	'<select id="select" multiple>'+
					'<option value="item 1">Item 1</option>' +
					'<option value="item 2">Item 2</option>' +
					'<option value="item 3">Item 3</option>' +
					'</select>'),
			jQuery('<button>Selected value</button>').on('click', function(e){
				jQuery('#select option:selected').each(function(){
					console.log('Selected, value =', this.value, ', text =', this.text);
				});
				e.preventDefault;
			})
		 );
	}
	
     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
	 function getAnchore(){
		console.log('1.', jQuery('#fizz a.link').attr('href'));
		console.log('2.', jQuery('a.link:eq(0)').attr('href'));
		console.log('3.', jQuery('a').filter('.link').attr('href'));
		console.log('4.', jQuery('.bar .buzz a.link').attr('href'));
		console.log('5.', jQuery('#fizz a').filter('.link').attr('href'));
	 }

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
	 function createListItems(){
		var list = jQuery('#list1'),
			arr = [];
			
		for(var i = 0; i < 5; i++){
			arr.push('List item ' + i);
		}
		
		jQuery.each(arr, function(ind, item){
			list.append(jQuery('<li>' + item + '</li>'));
		});
	 }

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
	 function toggleCheck(){
		var fooBar = jQuery('#foobar');
		
		fooBar.append(
			jQuery(	'<div class="control">' +
						'<a href="#" class="check">Check All</a>' + 
						'<a href="#" class="uncheck">Uncheck All</a>' + 
					'</div>').on('click', '.check, .uncheck', function(e){
						if(e.target.className == 'check'){
							fooBar.find('input:checkbox').attr('checked', true);
						}
						else if(e.target.className == 'uncheck'){
							fooBar.find('input:checkbox').attr('checked', false)
						}
						
						e.preventDefault();
					})
		);
		
		for(var i = 0; i < 10; i++){
			var name = 'item' + i;
			jQuery(	'<div class="row">' +
						'<label for="' + name + '">' + name + '</label>' + 
						'<input type="checkbox" id="' + name + '" name="' + name + '" />' + 
					'</div>')
					.appendTo(fooBar);
		}
	 }

	 jQuery(function(){
		createSelectAndButton();
		getAnchore();
		createListItems();
		toggleCheck();
	 });