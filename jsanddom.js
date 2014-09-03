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
         // Math.min() returns the smallest of zero or more numbers
         return Math.min.apply(Math, values);
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         // using UnderscoreJS uniq function (http://underscorejs.org/#uniq)
         return _.uniq(values);
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         var result = "";
         var stringForTesting = "";
         for ( var i = 1; i < 101; i++ ){
            
            result = ""; // clear it

            if( i % 3 === 0 % 3 && i % 5 === 0 ){
                result = result + "FizzBuzz";
            }
            else if (0 === i % 3){
                result = result + "Fizz";
            }
            else if (0 === i % 5){
                result = result + "Buzz";
            }
            else{
                result = i;
            }
            console.log(result);
            stringForTesting = stringForTesting + result;
         }
         return stringForTesting;
     }


     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         // Using the UnderscoreJS library, because it does a lot of the array heavy-lifting
         return _.difference(fruits, fruitsToRemove);
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         if (typeof toPush === 'number') {
            array.push(toPush);
            return array;
        } else {
            // NOTE:  can't use '.concat() because it returns a new array'
            // I decided to import UnderscoreJS into the project here because it makes the code much more concise and easier to read :)
            return _.union(array, toPush);
        }
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         if( sourceStr.length === 0 ){
            return [];
         }
         return sourceStr.split(',');
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         var x = 0;
         for( var i = 0; i < arguments.length; i++ ){  // *arguments* is a local variable available within all functions
            x += arguments[i];
         }
         return x;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         return (sourceStr.trim().length )< 1;
     }

     // write an example of a javascript closure

     /*  EXPLANTATION OF MY CLOSURE
         1) whatIsExactTargetsFavoriteColor creates a local variable, color, and a function, runClosure().
         2) runClosure() is only available within the whatIsExactTargetsFavoriteColor function.
         3) However, runClosure() has access to the variables in the outer function
     */
     function whatIsExactTargetsFavoriteColor(){
        var color = "orange!";
        function runClosure(){
            alert(color);
        }
        return runClosure;
     }

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     var people = 
    [
        {
            "first name": "Fox",
            "last name": "Mulder",
            "city": "Seattle",
            "state": "WA",
            "zip": 60035,
            "phone numbers": [
                {
                    "type": "home",
                    "number": "345-555-1124"
                },
                {
                    "type": "mobile",
                    "number": "345-555-1124"
                }
            ]
        },
        {
            "first name": "Dana",
            "last name": "Scully",
            "city": "Portland",
            "state": "OR",
            "zip": 87565,
            "phone numbers": [
                {
                    "type": "work",
                    "number": "345-555-1234"
                },
                {
                    "type": "home",
                    "number": "345-555-0098"
                }
            ]
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

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
     $(document).ready(function(){
        var arrColors = [
            { val: "#FF0000", text: "red"},
            { val: "#FFFFFF", text: "white"},
            { val: "#0000FF", text: "blue"},
            { val: "#00FF00", text: "green"}
        ];
        var $div1 = $("#div1");
        var sel = $("<select id='select1'>").appendTo( $($div1) );

        // loop thru the array and build the <option>
        $(arrColors).each(function(){
            sel.append($('<option>').attr('value',this.val).text(this.text));
        });

        // create the button
        $( $div1 ).append("<button id='btn1'>Pick a color</button>");

        // create the click event. Using .on because the click event is attached to the button after the page is loaded.
        $('body').on('click', '#btn1', function(e){
            e.preventDefault();
            console.log("you selected: " + $('#select1 option:selected').text() + " | " + $('#select1 option:selected').val());
        });

     });

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
     $('a.link');
     $('#fizz > a.link');
     $("a:contains('sample')");
     $("a.link[href|='#']").text();
     $("#fizz a:first-child");

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
     function createSportsArray(){
        
        // create empty array
        var sports = [];

        // fill the array with items
        sports[0] = "Football";
        sports[1] = "Soccer";
        sports[2] = "Lacrosse";
        sports[3] = "Basketball";
        sports[4] = "Baseball";

        // create a <ul>
        var $ulList = $('<ul id="list1">').appendTo( $('body') );

        // loop thru the array and append <li> with the array value
        $.each( sports, function(i, value) {
            $('<li>').appendTo( $($ulList) ).text(value);
        });
     }

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
