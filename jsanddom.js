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
		return values.reduce(function(a, b) {
			return a < b ? a : b;
		});
    }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
        return values.filter(function(v, i, a) {
			return a.indexOf(v) === i;
		});
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
		for(var i = 1; i <= 100; i++) {
			if(i % 3 === 0 && i % 5 === 0) {
				console.log("FizzBuzz");
			} else if(i % 3 === 0) {
				console.log("Fizz");
			} else if(i % 5 === 0) {
				console.log("Buzz");
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
		var re = new RegExp(fruitsToRemove.join(',|') + ',', 'g');
	
		return fruits.join().replace(re, '').split(',');
    }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
    function pushOntoArray(array, toPush) {
		if(toPush instanceof Array) {
			array.push.apply(array, toPush);
		} else {
			array.push(toPush);
		}

		return array;
    }

    // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
    function splitListStrUsingComma(sourceStr) {
        return '' === sourceStr ? [] : sourceStr.split(',');
    }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
		return [].slice.call(arguments).reduce(function(a, b) {
			return a + b;
		});
     }

    // Write a function that will return true if a specified string consists of only whitespace.
    function isOnlyWhitespace(sourceStr) {
		return /^\s*$/g.test(sourceStr);
    }

     // write an example of a javascript closure
	 function doStuff() {
		var name = "Michael";
		return {
			log: function() { console.log(name); }
		}
	 }
	 doStuff().log();
	 console.log("doStuff.name is undefined: " + (doStuff().name === undefined));

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
	 var people = [
		{ "firstName": "Daffy",
		  "lastName": "Duck",
		  "city": "Indianapolis",
		  "state": "IN",
		  "zip": "46204",
		  "phone": { "home": "317-555-1234", "work": "317-555-3322", "mobile": "" }
		},
		{ "firstName": "Wile",
		  "lastName": "Coyote",
		  "city": "Acmeville",
		  "state": "UT",
		  "zip": "66789",
		  "phone": { "home": "", "work": "1-800-ROCKETS", "mobile": "1-800-555-BEEP" }
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
	function DataTable() {
		var columns = [],
		    rows = [];
		this.addColumns = function() {
			columns.push.apply(columns, [].slice.call(arguments));
		};
		this.addRow = function() {
			var row = {};
			for(var i = 0; i < Math.min( columns.length, arguments.length); i++) {
				row[columns[i]] = arguments[i];
			};
			rows.push( row );
		};
		this.getData = function() {
			return JSON.stringify(rows);
		};
	};
	var dt = new DataTable();
	dt.addColumns('column1', 'column2', 'column3');
    dt.addRow('value1A', 'value1B', 'value1C');
    dt.addRow('value2A', 'value2B', 'value2C');
	console.log(dt.getData());

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
	$("<select/>")
	    .attr("id", "superhero")
		.append( $("<option>Batman</option>").val("batman") )
	    .append( $("<option>Superman</option>").val("superman") )
		.append( $("<option>Storm</option>").val("storm") )
		.appendTo( $("#div1") );
	$('<button type="button">Select</button>').click(function() {
		var $s = $("#superhero"),
		    el = $s.get(0),
			opt = el.options[el.selectedIndex];
		console.log( opt.value + ": " + opt.text );
	}).appendTo( $("#div1") );

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
	function printOuterHtml( $elem ) {
		console.log( $elem.clone().wrap('<div>').parent().html() );
	};
	printOuterHtml( $("#foo a") );
	printOuterHtml( $("#fizz a") );
	printOuterHtml( $(".bar .buzz .link") );
	printOuterHtml( $("a.link") );
	printOuterHtml( $("a[href=#]") );

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
	var myArray = [ "Gary Gygax", "Dave Arneson", "Monte Cook", "Bruce Cordell", "James Jacobs" ];
	$(myArray).each(function( i, a ) {
		$("<li>").text(a).appendTo( $("#list1") );
	});

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
