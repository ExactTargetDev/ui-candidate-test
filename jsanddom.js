     // Example unit test function
     function divide( a, b ) {

        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {

        // Declare empty string to hold reverse ordered string
         var strOutput = '';

         // Test for undefined or empty strings
         if ( str === undefined || str === '' ) {
            return '';
         }

         // iterate through the string characters backwardly
         for (var i = str.length - 1; i>= 0; i--) {

            // Concantenate character at index value to string
            strOutput += str.charAt(i);
         }

         return strOutput;
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {

         // Check for non-numeric array values
         for (var i = 0; i < values.length - 1; i++) {

            if (! (!isNaN(parseFloat(values[i])) && isFinite(values[i]))  ) {

                // If a non-numeric value is in the array, then throw an error
                throw 'Invalid array, all values must be numeric.';
            }
         }

         // Sort array values into ascending order
         values.sort();

         // Pluck out the first element
         return values[0];
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {

        // Declare an array and initialize it with elements copied from 'values'
         var cloneArray = values.slice(0);

         // Select an element in the array
         for (var i = 0;  i < (cloneArray.length - 1) ; i++) {

            // Searh through other elements in the array, starting from the end
            for (var j = (cloneArray.length - 1); j > i; j--) {

                // Test for same value
                if ( cloneArray[i] === cloneArray[j] ) {

                    // Remove item from array
                    cloneArray.splice(j, 1);    
                } 
            } 
         }

         // Return distinct values of the clone array
         return cloneArray;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
        // Declare constants number list
        var START = 1;
        var END = 100; 

        // Create an array of objects for the multiples an their text
        var multiples = [
            {divisor: 3, sometext: 'Fizz'},
            {divisor: 5, sometext: 'Buzz'},       
        ];

 
        // Iterate through number list
        for (var i = START; i <= END ; i++) {
            // Create an empty variable for ouput string
            var ouput = '';
 
            // iterate through each item of multiples 
            for (var j= 0; j <= multiples.length - 1; j++ ) {

                // Check if a number in list is divisible by an item in 'multiples'
                if(i % multiples[j].divisor == 0) {

                    // Append text to string
                    ouput += multiples[j].sometext;
                }
            }

            // Check for empty string (which means, list number not divisible 
            // by any divisors in the multiples object)
            if ( !ouput ) {
                ouput += i;
            }

            // Print string to console
            console.log(ouput);
        }

     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
       

         // Select an element in the array
         for (var i = fruits.length - 1;  i >= 0  ; i--) {

            // Iterate through fruits to remove 
            for (var j = 0; j < fruitsToRemove.length;  j++ ) {

                // Test for same value
                if ( fruits[i] === fruitsToRemove[j] ) {
                    
                    // Remove item from array
                    fruits.splice(i, 1);    
                } 
            } 
         }

         // Return remaining fruits in form of a reference
         //return fruits;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         

         // Check datatype of 'toPush'
         if (Object.prototype.toString.call( toPush ) === '[object Array]') {

            // Iterate through the 'toPush' array
            for(var i = 0; i < toPush.length; i++) {

                // Append 'toPush' elements onto the end of 'array'
                array.push(toPush[i]);
            }

         } else {

            // Append 'toPush' as a single value onto the end of 'array'
            array.push(toPush);

         }

     }

     // Given a string, sourceStr, write some code that will split this string using 
     // comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {

        // Check 'sourceStr' is  empty
         if ( sourceStr ) { // if not empty...

            // Split a comma delimited string into an array
            return sourceStr.split(',');

         } else { // if empty...

            // return empty array object
            return [];
         }
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         var total = 0;

         for(var i = 0; i < arguments.length; i++) {

            // Check argument value is numeric
            if ( (!isNaN(parseFloat(arguments[i])) && isFinite(arguments[i])) ) {

                // Add to total
                total += sum.arguments[i];
            }
         }

         return total;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {

        // Declare a variable to whole a pattern to detect non-whitespaces
        var pattern = /\S/m;

        return !(pattern.test(sourceStr));
     }

     // write an example of a javascript closure

     // Create function that returns a reference
     function outerFunction(value1){
        
        return function innerFunction(value2) {
            return value1 * value2;
        }
 
     }
     // Setup multiplication functions
     var multiplesOf3 = outerFunction(3);
     var multiplesOf5 = outerFunction(5);

     // Display factors of multiples

     // Closure Test -- value1 = 3, value2 = 5: 15
     console.log('Closure Test -- value1 = 3, value2 = 5: ' + multiplesOf3(5)); 

     // Closure Test -- value1 = 3, value2 = 8: 24
     console.log('Closure Test -- value1 = 3, value2 = 8: ' + multiplesOf3(8));

     // Closure Test -- value1 = 5, value2 = 6: 30
     console.log('Closure Test -- value1 = 5, value2 = 6: ' + multiplesOf5(6)); 

     // Closure Test -- value1 = 5, value2 = 9: 45
     console.log('Closure Test -- value1 = 5, value2 = 9: ' + multiplesOf5(9)); 


     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)

    var collectionObj = { 
        people : [
            {
                firstname: "George",
                lastname: "Washington",
                city: "Alexandria",
                state: "VA",
                zip: "12345",
                phone: {
                    home: "123-456-1111",
                    work: "123-456-2222",
                    mobile: "123-456-3333"
                }
            },

            {
                firstname: "George H. W.",
                lastname: "Bush",
                city: "Austin",
                state: "TX",
                zip: "323232",
                phone: {
                    home: "123-456-4444",
                    work: "123-456-5555",
                    mobile: "123-456-6666"
                }
            },  

             {
                firstname: "George W.",
                lastname: "Washington",
                city: "Midland",
                state: "TX",
                zip: "353535",
                phone: {
                    home: "123-456-7777",
                    work: "123-456-8888",
                    mobile: "123-456-9999"
                }
            }            
        ]
    };

     console.log('Json Object Test: ' + JSON.stringify(collectionObj));

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
        var _columns = []; // List of column names
        var _rows = []; // List of row objects

        // add new column to data table
        this.addColumns = function () {

            // Iterate through argument list
            for(var i = 0; i < arguments.length; i++){

                // Add argument element to columns array
                _columns.push(this.addColumns.arguments[i]);
            }

            return this;
        };

        // Add new row to data table. The number of arguments in the addRow 
        // function must match the number of columns
        this.addRow = function () {

            // Declare a row object to hold hash for column (key), row data (value)
            var rowObj = {};

            // Check for existence of elements in the columns array
            if ( _columns.length <= 0 ) {
                throw 'DataTable requires at least one column before adding new row.';
            }

            // Check number of arguments matches column count
            if ( _columns.length !== arguments.length ) {
                throw 'The number of arguments does not match the number of columns.';
            }

            // Iterate through argument list
            for (var i = 0; i < arguments.length; i++) {

                // Add argument element to row object with corresponding column name as key
                rowObj[_columns[i]] = this.addRow.arguments[i];
            }

            // Add row object to array
            _rows.push(rowObj);

            return this;
        };

        // Returns a JSON object
        this.getData = function () {

            // return databale object as JSON
            return {datatable : _rows};
        };

        return this;
    }

    // Declare DataTable
    var testDataTable = new DataTable();

    // Add table data
    testDataTable.addColumns('col1', 'col2', 'col3')
        .addRow( 'a', 'b', 'c')
        .addRow('d', 'e', 'f')
        .addRow('g', 'h', 'i')
        .addRow('j', 'k', 'l');


    // 
    var tableData = testDataTable.getData();
    console.log("DataTable: " + JSON.stringify(tableData));

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.

     function selectTest() {
         var $div1 = document.getElementById('div1');
         var selectElem = document.createElement('select');
         var buttonElem = document.createElement('input');
         var numOfItems = 5;


         if ( typeof($div1) !== 'undefined' && $div1 !== null ) {

             // Setup select element
             selectElem.id = 'itemList';

             // Build options
             for(var i = 1; i <= numOfItems; i++) {
                    // Create an 'option' node
                    var optionNode = document.createElement('option');

                    // Set attributes
                    optionNode.text = 'Item #' + i;
                    optionNode.value =  i;

                    // Add option to select element
                    selectElem.add(optionNode, null);
             }

             // Append select element to div
             $div1.appendChild(selectElem);

             // Setup button
             buttonElem.id = 'btnShowItem';
             buttonElem.type = 'button';
             buttonElem.value = 'Show Item';

             // Attach event listener to button
             // Check browser support for adding event listeners
            if (buttonElem.addEventListener) {  

                // W3C DOM
                buttonElem.addEventListener('click', showClicked, false);

            } else if (buttonElem.attachEvent) { 

                // IE DOM
                buttonElem.attachEvent('onclick', showClicked);

            } else { 

                // No much to do
                buttonElem['click'] = showClicked;
            }


             // Create an event listener for the button
             function showClicked(event){
                var item;


                // Grab text of selected item
                item = selectElem.options[selectElem.selectedIndex];
                
                // Display value and text of selected item to console
                console.log('SELECT Element: Item selected (value, text) - ' + item.value + ', ' + item.text);
             }

             // Append button to div tag
             $div1.appendChild(buttonElem);

        }
    }
 



     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.

        $( document ).ready( function () {
            var $fizz = document.getElementById('fizz');
            var $jquerySelectors = [];
            

            if( typeof($fizz) !== 'undefined' && $fizz !== null ) {
                // 5 ways to grab the sample anchor tag, given the html structure: 

                //  a.link
                $jquerySelectors[0] = $('a.link')[0];

                // #fizz a:first
                $jquerySelectors[1] = $('#fizz a:first')[0];

                // div#fizz.buzz a:first
                $jquerySelectors[2] = $('div#fizz.buzz a:first')[0];

                // #fizz a[class=link]
                $jquerySelectors[3] = $('#fizz a[class=link]')[0];

                // .buzz > a.link
                $jquerySelectors[4] = $('.buzz > a.link')[0];
              
                for ( var i = 0; i < $jquerySelectors.length; i++ ) {
                    console.log('JQUERY selector: ' + $jquerySelectors[i].innerHTML );
                }
            }
        });


     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
     function listItemTest() {
        // Declare list item array
         var itemList = ['alpha', 'beta', 'gamma', 'delta'];

         // Grab unordered list list1
         var $list1 = document.getElementById('list1');

         //Check if list1 exists in the DOM
         if ( typeof($list1) !== 'undefined' && $list1 !== null ) {

            // Iterate through list item array
             for(var i = 0; i < itemList.length; i++){

                // Create a LI node
                var $li= document.createElement('li');

                // Inject list item into LI
                $li.innerHTML = itemList[i];

                // Append LI as a child node onto list1
                $list1.appendChild($li);
             }            
        }
    }


     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)

     $(document).ready( function () {

        // Declare variables
        var $foobar = $('#foobar');
        var markup = '';
        var TOTAL_CHECKBOXES = 10;

        // Create list of check boxes
        for (var i = 1; i <= TOTAL_CHECKBOXES; i++) {

            // Create markup for checkbox
            markup += '<input type="checkbox" id="ch'+ i + '" /> Option # '+ i + '<br />';

        }

        // Create link tags
        markup += '<a id="checkAll" class="checkboxToggle" href="#">Check All</a> | ';
        markup += '<a id="unCheckAll" class="checkboxToggle" href="#">Uncheck All</a>';

        // Append markup to foobar div
        $foobar.append(markup);

        // Setup event handler for checkAll
        $('#checkAll').click( function (event) {

           // e = $.event.fix(e);
            // Stop link from loading page
            event.preventDefault();

            // Grab all unchecked checkboxes 
            $('#foobar :checkbox:not(:checked)').each( function () {

                // Set checked property to true
                 this.checked = true;
            });
        });

        // Setup event handler for unCheckAll
        $('#unCheckAll').click( function (event) {

            // Stop link from loading page
            event.preventDefault();

            // Grab all checked checkboxes 
            $('#foobar :checkbox:checked').each( function () {

                // Set checked property to false
                 this.checked = false;
            });
        });

     }); // end document ready


// On window load...

 // Check browser support for adding event listeners
if ( window.addEventListener ) { 

    // W3C DOM
    window.addEventListener('load', init, false);

} else if ( window.attachEvent ) { 

    // IE DOM
    window.attachEvent('load', init);

} else { 

    // No much to do
    window['load'] = init;
}

// Init functions to execute when windoww loads
function init(event) {

    // Invoke FizzBuzz Test
    doFizzBuzz();

    // Invoke SELECT test
    selectTest();

    // Invoke List item test
    listItemTest();
}

