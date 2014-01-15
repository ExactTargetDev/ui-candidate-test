
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
         return Math.min.apply(Math, values);
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         uniques = new Array();
         $.each(values, function(index, val) {
            if($.inArray(val, uniques) === -1) {
                uniques.push(val);
            }
         });
         return uniques;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         for( var i=1; i <= 100; i++ ) {
             var print = '';
             if( i%3 === 0 ) {
                print += 'Fizz';
             }
             if( i%5 === 0 ) {
                print += 'Buzz';
             } else if ( (i%3 && i%5) ) {
                 print = i;
             }
             console.log(print);
         }

     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removefruits(fruits, fruitstoremove) {
         $(fruits).each(function(index, val) {
             if($.inarray(val, fruitstoremove, 0) !== -1) {
                 fruits.splice(index, 1);
             }
         });
         return fruits;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         if( toPush.isArray() ) {
             toPush.forEach(function(entry) {
                 pushOntoArray(array, entry);
             });
         } else {
             array.push(toPush);
         }
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         if( sourceStr === "") {
             return [];
         } else {
             return sourceStr.split(",")
         }
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         var sum = 0;
         if(arguments.length > 0) {
             for( var i=0; i<arguments.length; i++ ) {
                 sum += +arguments[i];
             }
         }
         return sum;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         var regex = /^\s+$/;
         return regex.test(sourceStr);
     }

     // write an example of a javascript closure
     function outerMethod(foo) {
         var transform_foo = foo + 42;
         function innerMethod(bar) {
             bar = bar % transform_foo;
             return bar;
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
     
     var json_people = { "person": [
                {
                    "firstname":"abraham",
                    "lastname":"lincoln",
                    "city":"springfield",
                    "state":"il",
                    "zip":"62794",
                    "phonenumbers": [{
                        "home":"1112223333",
                        "work":"18005554545"
                    }]
                },
                {
                    "firstname":"john",
                    "lastname":"kennedy",
                    "city":"new york",
                    "state":"ny",
                    "zip":"23414",
                    "phonenumbers": [{
                        "home":"4312213133",
                        "work":"18009258545"
                    }]
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
     // Example:                                      // DataTable
     // .addColumns('column1', 'column2', 'column3'); // columnA columnB columnC
     // .addRow('value1A', 'value1B', 'value1C');     // value1A value1B value1C
     // .addRow('value2A', 'value2B', 'value2C');     // value2A value2B value2C

     function DataTable(columns, rows) {
         this.columns = columns;
         this.rows = [];

         var num_rows = rows.length / columns.length;

         // Grab individual row and add (for # of rows)
         for( var i=0; i<num_rows; i++ ) {
             var start = i*columns.length;
             var end = start + columns.length;
             this.rows = this.addRow(rows.slice(start,end));
         }
     }
     
     DataTable.prototype.addColumns = function() {
         if( arguments.length > 0 ) {
             this.columns.push(arguments);
         }
     };

     DataTable.prototype.addRow = function() {
         for( var col=0; col<this.columns.length; col++ ) {
             this.rows[String(this.columns[col])] = arguments[0][col];
         }
     };

     DataTable.prototype.getData = function() {
         console.log(JSON.stringify(this.rows));
         return JSON.stringify(this.rows);
     };

     var test_table = new DataTable(['columnA', 'columnB', 'columnC'],['value1A', 'value1B', 'value1C', 'value2A', 'value2B', 'value2C']);
     test_table.getData();



     $(document).ready(function() {
         // within div1, programatically create a
         // SELECT element (with multiple items) and a button.
         // when the button is clicked write out the name and value of the selected item to the console.
            $('#div1').append("<select>\
                                  <option value='blue'>Blue</option>\
                                  <option value='red'>Red</option>\
                               </select>\
                               <button>Write Select</button>");
            $('#div1 button').click(function() {
                console.log( $('#div1 select option:selected').text() + ' ' + $('#div1 select').val() );
            });


         // Write 5 different jQuery selectors to retrieve the
         // sample anchor in the markup below.
             $('.link')
             $('.buzz .link')
             $('.buzz a')
             $('#fizz a')
             $('.bar .buzz .link')

         // Programatically create an array with 5 items.  Create a list item for each item in the array
         // and add the list items to the unordered list with an id of "list1".
             list_array = ['One','Two','Three','Four','Five'];
             $.each(list_array, function(index, val) {
                 $('#list1').append('<li>' + val + '</li>');
             });

         // Use javascript to add a list of checkboxes and 2 links
         // to the div with an id of "foobar"
         // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
         // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)

            var checkbox_list = document.createElement('ul');

            // Create checkboxes in list
            for( var i=0; i<4; i++) {
                var checkbox_list_item = document.createElement('li');
                var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox_list_item.appendChild(checkbox); 
                checkbox_list.appendChild(checkbox_list_item);
            }

            var foobar = document.getElementById('foobar')
            foobar.appendChild( checkbox_list );

            // Create links to check and uncheck list of checkboxes
            for( var i=0; i<2; i++) {
                var anchor = document.createElement('a');
                anchor.setAttribute('id','anchor' + i);

                if( i==0 ) {

                    anchor.innerHTML = 'Check All <br/>';
                    anchor.addEventListener("click", function(event) {
                        event.preventDefault();
                        to_check = foobar.getElementsByTagName('input');
                        for( var box=0; box<to_check.length; box++ ) {
                            to_check[box].checked = true;
                        }

                    });
                } else {

                    anchor.innerHTML = 'Uncheck All';
                    anchor.addEventListener("click", function(event) {
                        event.preventDefault();
                        to_check = foobar.getElementsByTagName('input');
                        for( var box=0; box<to_check.length; box++ ) {
                            to_check[box].checked = false;
                        }

                    });
                }
                foobar.appendChild(anchor);
            }

     });
