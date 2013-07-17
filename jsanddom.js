     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        //return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         return str.split('').reverse().join('');
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         return Math.min.apply(null, values);
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
	 
         var retArray = [];
		
		// cache values.length to avoid a lookup penalty every loop
		for (var i=0, cnt=values.length; i < cnt; i++)
		 {
			if (retArray.indexOf( values[i] ) < 0)
				retArray.push(values[i]);
		 }
		 return retArray;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
	 
        for (var i=1, str=null; i <= 100; i++)
		{
			// clear out tmp var before use
			str = '';
			
			if ( i%3 == 0 )
				str += 'Fizz';
			
			if ( i%5 == 0 )
				str += 'Buzz';
			
			if ( str.length == 0 )
				str = i.toString();
			
			console.log(str);
		}
		 
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         
		 var retArray = [];
		 for (var i=0, cnt=fruits.length; i < cnt; i++)
		 {
			if ( fruitsToRemove.indexOf(fruits[i]) < 0 )
				retArray.push( fruits[i] );
		 }
		 
		 return retArray;
		 
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
		
		// type checking for an array, as suggested by ecma docs:
        var isArray = function (val) {
				// since typeof [] == "object", have to get a bit trickier...
				// (this call returns "[object Array]")
				return (Object.prototype.toString.call([]) == Object.prototype.toString.call(val));
			};
		
		
		// if single value, wrap in array so we can call .push() in a single place in this func
		if ( !isArray(toPush) )
			toPush = [toPush];
		
		for (var i=0,cnt=toPush.length; i < cnt; i++)
		{
			array.push( toPush[i] );
		}
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         var retVal = null;
		 if (0 == sourceStr.length)
			retVal = [];
		else
			retVal = sourceStr.split(',');
		
		return retVal;
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
		var total = 0;
        for (var i=0, cnt=arguments.length; i < cnt; i++)
			total += arguments[i];
		
		return total;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         return (sourceStr.search(/^\s+$/) == 0);
     }

     // write an example of a javascript closure
		// the document title will be logged to the console
	 function closureExample() {
		var documentTitle = document.querySelector('title').textContent,
			callback = function(e) {
				console.log( 'closureExample(): ' + documentTitle );
			};
		
		window.addEventListener('click', callback, false);
	 }
	 closureExample();

	 
     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
	 var peopleCollection = {
		// personID 21
		'21': {
			'firstName': 'Chester',
			'lastName': 'Arthur',
			'city': 'Fairfield',
			'state': 'Vermont',
			'zip': '05455',
			'phone': {
				'home': '123-456-7890',
				'work': '321-654-0987',
				'mobile': '456-789-0123'
			}
		},
		// personID 22
		'22': {
			'firstName': 'Grover',
			'lastName': 'Cleveland',
			'city': 'Caldwell',
			'state': 'New Jersey',
			'zip': '07007',
			'phone': {
				'home': '654-987-3210',
				'work': '789-012-3456',
				'mobile': '987-210-6543'
			}
		},
		// personID 23
		'23': {
			'firstName': 'Benjamin',
			'lastName': 'Harrison',
			'city': 'North Bend',
			'state': 'Ohio',
			'zip': '45052',
			'phone': {
				'home': '111-222-3333',
				'work': '444-555-6666',
				'mobile': '777-888-9999'
			}
		}
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
	Example usage:
	
	 var dt = new DataTable();
	 dt.addColumns('A', 'B', 'C');
	 dt.addRow('1', '2', '3');
	 dt.addRow('4', '5', '6');
	 dt.addRow('7', '8', '9');
	 
	 console.log( dt.getData() );
	*/
	 var DataTable = function() {
		// constructor

		// don't want these to be accessible outside the object
		var columns = [],
			rows = [];
		
		// in order to make the row/col arrays private, bind at creation
		this.addColumns = this._addItems.bind(this, columns);
		this.addRow     = this._addItems.bind(this, rows);
		this.getData    = this._getData.bind(this, columns, rows);
	 };

	 // used by .addRows() and .addColumns()
	 DataTable.prototype._addItems = function(arr /*, item, item, item, ... */){
		for (var i=1, cnt=arguments.length; i < cnt; i++) {
			arr.push(arguments[i]);
		}
	 };

	// used by .getData()
	 DataTable.prototype._getData = function(columns, rows){
		// build json response
		// ex: {'col1': 'first name', 'col2': 'last name', ...}
		
		var returnJSON = {},
			numColumns = columns.length;
		for (var i=0, rowCnt=Math.min(rows.length/numColumns); i < rowCnt; i++)
		{
			returnJSON[i] = {};
			for (var j=0, colCnt=columns.length; j < colCnt; j++)
			{
				returnJSON[i][ columns[j] ] = rows[(i*numColumns) + j];
			}
		}
		return returnJSON;
	 };

	 
	 
     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
	 function createSelectInDiv1()
	 {
		var container = document.getElementById('div1'),
			selectBox = document.createElement('select'),
			optionsToCreate = {
				'Foo': 'bar',
				'Marco': 'polo',
				'Life, The Universe, Everything': '42'
			},
			theButton = document.createElement('button'),
			theButtonClickHandler = function(e){
				e.preventDefault();
				
				var selectedOption = selectBox.options[ selectBox.selectedIndex ];
				
				console.log('Selected option === Name: "' + selectedOption.textContent + '", Value: "'+selectedOption.value+'"');
			};
		
		// don't try to run if we're not on the page with #div1
		if (!container)
			return;
		
		// first, create the options and add to the select
		for (var name in optionsToCreate)
		{
			// create option, text node for label
			var opt = document.createElement('option'),
				txt = document.createTextNode( name );
			
			// set val, label
			opt.setAttribute('value', optionsToCreate[name]);
			opt.appendChild( txt );
			
			// add to select
			selectBox.appendChild( opt );
		}
		
		// next, attach click handler for the button
		theButton.appendChild( document.createTextNode('Send To Console') );
		theButton.addEventListener('click', theButtonClickHandler, false);
		
		// finally, add this stuff to the page
		container.appendChild(selectBox);
		container.appendChild(theButton);
	 }
	 createSelectInDiv1();
	 
	 

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
	 
	 // Answers:
	 // $('a.link')
	 // $('#fizz a')
	 // $('#fizz .link')
	 //	$('.bar .link')
	 // $('.buzz > a')

	 
     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
	 function createListItems(numItemsToGenerate) {
	 
		var items = [],
			theUL = document.getElementById('list1');
		
		// dont' run this if we don't have our container
		if (!theUL)
			return;
		
		// programmatically create an array:
		for (var i=0; i < numItemsToGenerate; i++)
		{
			items.push(
				// generate some random values
				Math.floor(Math.random() * 10000)
			);
		}
		
		// now, create list item for each item in the array
		for (var i=0, cnt=items.length; i < cnt; i++)
		{
			var theLI = document.createElement('li'),
				innerText = document.createTextNode(items[i]);
			
			theLI.appendChild(innerText);
			theUL.appendChild(theLI);
		}
	 }
	 createListItems(5);

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
	 
	 function addCheckboxPortionOfTest()
	 {
		var container = document.getElementById('foobar'),
			theUL = document.createElement('ul'),
		
			checkAllLink = document.createElement('a'),
			uncheckAllLink = document.createElement('a'),
			checkLinksClickHandler = function(check, e){
				e.preventDefault();
				
				var chkboxes=theUL.querySelectorAll('input[type=checkbox]');
				for (var i=0, cnt=chkboxes.length; i < cnt; i++)
				{
					if (check)
						chkboxes[i].setAttribute('checked', true);
					else
						chkboxes[i].removeAttribute('checked');
				}
			};
		
		// require the container to continue
		if (!container)
			return;
		
		// create a bunch of checkboxes, with <label>s and accompanying text
		// add them to the newly created <ul>
		for (var i=1; i <= 10; i++)
		{
			var chkbox = document.createElement('input'),
				label = document.createElement('label'),
				txt = document.createTextNode( 'Checkbox #' + i ),
				theLI = document.createElement('li');
			
			// set up the checkbox
			chkbox.setAttribute('type', 'checkbox');
			chkbox.setAttribute('value', i);
			chkbox.setAttribute('name', 'chkbox['+i+']');
			
			label.appendChild( chkbox );
			label.appendChild( txt );
			
			theLI.appendChild( label );
			theUL.appendChild( theLI );
		}
		
		// add the ul to the specified div
		container.appendChild( theUL );
		
		// set up the un/check all links
		checkAllLink.appendChild( document.createTextNode('Check All') );
		checkAllLink.setAttribute('href', '#');
		checkAllLink.addEventListener('click', checkLinksClickHandler.bind(checkAllLink, true), false);
		
		uncheckAllLink.appendChild( document.createTextNode('Uncheck All') );
		uncheckAllLink.setAttribute('href', '#');
		uncheckAllLink.addEventListener('click', checkLinksClickHandler.bind(uncheckAllLink, false), false);
		
		// and add them
		container.appendChild( checkAllLink );
		container.appendChild( document.createElement('br') );
		container.appendChild( uncheckAllLink );
	 }
	 addCheckboxPortionOfTest();