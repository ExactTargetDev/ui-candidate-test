//Some aspects of this file edit the DOM, to make life easier,
//wait for the DOM to be ready before doing anything
$(document).ready( function(){

    // Example unit test function
    function divide( a, b ) {
       // To see the test pass, uncomment the following line
       return a / b;
    }

    // Write a function that takes a single argument (a string) and returns the string reversed.
    function reverseString(str) {
        //Split out each character into an array, reverse the order of the array, join them back into a string
        return str.split("").reverse().join("");
        //Use github.com/mathiasbynens/esrever if you need to handle special characters
    }

    // Write a function that takes an array of numbers and returns the minimum value
    function findMinValue(values) {
        //Run the built in JS object Math to find the minimum value in the array and return it
        return Math.min.apply( Math, values );
    }

    // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
    function findDistinctValues(values) {
        //Create the resulting array as empty
        var result = [];
        //Check each item in the array
        $.each(values, function(i, e) {
            //Check if the item is already in the array
            if ($.inArray(e, result) == -1) {
                //If the item is unique, add it to the result array, otherwise skip
                result.push(e);
            }
        });
        //Give back the distinct list without any duplicates
        return result;
    }

    // Write a function that logs the numbers from 1 to 100 to the console.
    // For multiples of three print "Fizz" instead of the number.
    // For multiples of five print "Buzz".
    // For numbers which are multiples of both three and five print "FizzBuzz".
    function doFizzBuzz() {
        for ( var i = 1; i <= 100; i++ ){
            //If divisible by both 3 and 5, log FizBuzz
            if( i % 3 == 0 && i % 5 == 0 ){
                console.log("FizzBuzz")
            //if divisible by 3 but not 5, log Fizz
            } else if ( i % 3 == 0 ) {
                console.log("Fizz")
            //if divisible by 5 but not 3, log Buzz
            } else if ( i % 5 == 0 ) {
                console.log("Buzz")
            //otherwise just log the number
            } else {
                console.log(i)
            }
        }
    }

    // You have a master array of strings, where each element is a fruit name.
    // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
    // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
    // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
    function removeFruits(fruits, fruitsToRemove) {
        //loop through all fruits
        for (var i = 0; i < fruits.length; i++) {
            //check each fruit against each fruit to remove
            for (var j = 0; j < fruitsToRemove.length; j++) {
                //remove that fruit from array if it's on fruitsToRemove list
                if ( fruits[i] == fruitsToRemove[j] ) {
                    fruits.splice(i,1);
                }
            }
        }
    }

    // Write a function to push either a value or an array of values onto a specified array.
    // For the purpose of the exercise, we will call the target array "array" and the stuff to push onto it (either a value or array) "toPush".
    // If "toPush" is a value, it should be pushed onto "array" as an element.
    // If "toPush" is an array, all of its elements should be pushed onto "array". Your solution should modify "array" (ie. not return a new array).
    function pushOntoArray(array, toPush) {
        //Check if "toPush" is an array or not
        if(typeof toPush === "object") {
            //if it is an array, then add each item of the array to "array"
            for ( var i = 0; i < toPush.length; i++ ) {
                array.push(toPush[i]);
            }
        } else {
            //Otherwise just add it on its own
            array.push(toPush);
        }
    }


    // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
    function splitListStrUsingComma(sourceStr) {
        //if sourceStr is empty, create an empty array
        if( sourceStr == "" ) {
            return sourceStr = [];
        } else {
            //otherwise split by comma
            return sourceStr.split(',');
        }
    }

    // Write a function that will take any number of arguments and return their sum
    function sum() {
        //define variables
        var total = 0;
        var nonNumbers = [];
        //check each argument to see if it's a number or not
        for(var i = 0; i < arguments.length; i++) {
            if ( typeof arguments[i] === 'number' ) {
                //If it's a number add it to the running total
                total = total + arguments[i];
            } else {
                //If it isn't a number, throw it into the nonNumbers array
                nonNumbers.push(arguments[i]);
            }
        }

        if (nonNumbers != "") {
            //If you had non-number arguments return the total plus a list of them.
            return "Your sum is: <strong>" + total + "</strong> and " + nonNumbers + ".";
        } else {
            //Otherwise just return the total
            return "Your sum is: <strong>" + total + "</strong>.";
        }
    }

    // Write a function that will return true if a specified string consists of only whitespace.
    function isOnlyWhitespace(sourceStr) {
        //Remove all whitespace from sourceStr using regex
        var whitespaceCheck = sourceStr.replace(/^\s+/, '').replace(/\s+$/, '');
        //check if there is any content left and return true or false
        if ( whitespaceCheck == '' ) {
            return true;
        } else {
            return false;
        }
    }

    // write an example of a javascript closure
    //Closure passing in jQuery
    (function($){
        //dummy code
        $("#slideNextBttn").click( function(){
            $("#slideA").fadeToggle("slow", "linear");
            $("#slideB").fadeToggle("slow", "linear");
        });
    })(jQuery);

    // define a json object that represents a collection of people.
    // each person should have the following properties
    // - first name
    // - last name
    // - city
    // - state
    // - zip
    // - a collection of phone numbers (home, work, mobile)

    var users =
    {
        "person1": {
            "firstname": "John",
            "lastname": "Doe",
            "city": "Indianapolis",
            "state": "IN",
            "zip": "46204",
            "phone": {
                "home": "317-123-4567",
                "work": "317-987-6543",
                "mobile": "317-555-1234"
            }
        },
        "person2": {
            "firstname": "Jane",
            "lastname": "Doe",
            "city": "Indianapolis",
            "state": "IN",
            "zip": "46204",
            "phone": {
                "home": "317-456-9873",
                "work": "317-765-3210",
                "mobile": "317-555-0123"
            }
        },
        "person3": {
            "firstname": "Richard",
            "lastname": "Roe",
            "city": "Indianapolis",
            "state": "IN",
            "zip": "46222",
            "phone": {
                "home": "317-987-2222",
                "work": "317-987-1111",
                "mobile": "317-987-0000"
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

    // within div1, programatically create a
    // SELECT element (with multiple items) and a button.
    // when the button is clicked write out the name and value of the selected item to the console.

    // Write 5 different jQuery selectors to retrieve the sample anchor from below.
    // <div id="foo" class="bar">
    //   <div id="fizz" class="buzz">
    //     <a class="link" href="#">sample anchor</a>
    //   </div>
    // </div>
    $(".link");
    $("#fizz a");
    $(".buzz .link");
    $("#foo #fizz a");
    $(".bar .buzz .link");
    $("#foo.bar #fizz.buzz a.link");

    // Programatically create an array with 5 items.  Create a list item for each item in the array
    // and add the list items to the unordered list with an id of "list1".
    for ( var i = 1; i <= 5; i++ ) {
        $("#list1").append( "<li>List item " + i + "</li>" );
    }

    // Use javascript to add a list of checkboxes and 2 links
    // to the div with an id of "foobar"
    // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
    // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)

}); //end document ready