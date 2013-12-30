     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
		if (typeof(str) === 'string') {
			return str.split('').reverse().join('');
		} else {
			throw 'Value is not a string.'
		}
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {	 
        var min = Math.min.apply(Math, array);
		if (min === 'NaN') {
			throw 'Value contains a non-number.';
		} else if (min === 'undefined') {
			throw 'Value is empty';
		} else {
			return min;
		}
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
		function onlyUnique(value, index, self) { 
			return self.indexOf(value) === index;
		}	 
		return values.filter( onlyUnique );
		//$.unique(values);
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
        for(var i=1;i<101;i++) {
			var j = i%3, k = i%5;			
			console.log(!(j+k)?'FizzBuzz':(!j?'Fizz':(!k?'Buzz':i)));
		}
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
        var j = fruitsToRemove.length;
		for(var i=0;i<j;i++) {
			fruits.splice(fruits.indexOf(fruitsToRemove[i]),1);
		}
		return fruits;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
		return $.isArray(toPush) ? array.concat(toPush) : array.push(toPush);
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
        return sourceStr===''?[]:sourceStr.split(',');
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
		var sum=0,j=arguments.length;
        for(var i=0;i<j;i++) {
			sum+=arguments[i];
		}
		return sum;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
        return (sourceStr.length > 0) && (sourceStr.replace(/ /g,'') === '');
     }

     // write an example of a javascript closure
	function closureExample() {
		var abc = 123;
		function closure() {
			return abc;
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
	 var people = [{"firstName":"","lastName":"","city":"","state":"","zip":"","phone":[{"home":"","work":"","mobile":""}]}];


     // Create a javascript object (DataTable) with the following:
     // A private columns property (string array)
     // A private rows property (string array)
     // A public method addRows that adds an item to the rows array
     // A public method addColumns that adds an item to the columns array
     // A public method getData that returns the a json object representation of the DataTable
     // Note: the row object should be a hash of the column name and row item value
     // Example:
	 /*
     DataTable.addColumns('A','B','C');
     DataTable.addRows('value1A', 'value1B', 'value1C');
     DataTable.addRows('value2A', 'value2B', 'value2C');
	 */
	 var DataTable = function(){
		var columns = [], //column names 'A','B','C',etc.
			rows = []; //2d array of values
		
		return {
			addRows: function() {				
				var j = arguments.length,
					clen = columns.length,
					row = [];
				for(var i=0;i<j;i++) {
					if (i<clen) { //don't add more column values than the table knows about.
						row.push(arguments[i]);
					} else {
						break;
					}
				}	
				rows.push(row);				
			},
			addColumns: function() {
				var j=arguments.length;
				for(var i=0;i<j;i++) {
					if (typeof(arguments[i]) === 'string') {
						columns.push(arguments[i]);
					} else {
						throw 'Value must be a string';
					}
				}
			},
			getData: function() {
				var o=[], rlen = rows.length, clen = columns.length;
				for(var i=0;i<rlen;i++) {
					var r = {};
					for(var j=0;j<clen;j++) {
						r[(i+1)+columns[j]] = rows[i][j]; //ex. r.1A = value;						
					}
					o.push(r);
				}			
				return o;
			}
		};
	 }();
	 

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
	 var str = '';
	 for(var i=0;i<5;i++) {
		str += '<option value="'+i+'">'+(i+1)+'</option>';
	 }
	 $('#div1').append('<select id="myselect">'+str+'</select>');	 
	 $('#div1').append('<button id="btn">Click</button>');	 
	 $('#btn').on('click', function() {
		console.log('Name: ' + $('#myselect').find(":selected").text() + ' Value: ' + $('#myselect').val());
	 });		 
	 
	 
	 

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
	 /*
	<div id="foo" class="bar" style="margin-top:10px;">
	  <div id="fizz" class="buzz">
	    <a class="link" href="#">sample anchor</a>
	  </div>
	</div>
	 */
	 $('a');
	 $('#fizz a');
	 $('#foo a');
	 $('.buzz a');
	 $('.link');
	  
	 

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
	 var a = ['1','2','3','4','5'], alen = a.length, ulStr = '';
	 for(var i=0;i<alen;i++) {
		ulStr += '<li>' + a[i] + '</li>';
	 }
	 $('#list1').append(ulStr);
	 
	 

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
	var str = '';
	for(var i=0;i<5;i++) {
		str += '<input type="checkbox" class="chk_group" value="value"'+i+' />Value '+i+'<br />';
	}
	$('#foobar').append(str);
	$('#foobar').append('<a id="checkAll" href="#">Check All</a>');
	$('#foobar').append('<a id="uncheckAll" href="#">Uncheck All</a>');
	$('#checkAll').on('click', function() {
		$('.chk_group').prop('checked',true);
	});
	$('#uncheckAll').on('click', function() {
		$('.chk_group').prop('checked',false);
	});	
