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
         return Math.min.apply( null, values );
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
        var uniqueValues = [];
         $.each(values, function(i, el){
            if($.inArray(el, uniqueValues) === -1) uniqueValues.push(el);
        });
         return uniqueValues;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
            for(n = 1; n <= 100; n++){
               if (n % 15 == 0)
                    console.log("FizzBuzz");
                else if (n % 3 == 0)
                    console.log("Fizz");
                else if (n % 5 == 0)
                    console.log("Buzz");
                else
                    console.log(n);
                 }
    }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {

         $.each(fruitsToRemove, function(i, fruit){
            fruits.splice( $.inArray(fruit, fruits), 1 );
        });
         console.log( fruits);
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(_array, toPush) {
       if (toPush instanceof Array) {
            _array.push.apply(_array, toPush);
            console.log("array");
        } else {
            _array.push(toPush);
            console.log("simple value");
        }
        return _array;
    }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
        if (typeof sourceStr !== 'undefined' && sourceStr.length > 0) {
           return sourceStr.split(",");
        }
        else return [];
         
     }

     // Write a function that will take any number of arguments and return their sum
     function sum(args) {
        var sum = 0;
         for (var i = 0; i < arguments.length; i++) {
            sum += +arguments[i];
          }
          console.log(sum);
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         if (sourceStr.match(/^\s*$/)) { return true; }
         else return false;
     }

     // write an example of a javascript closure

     function createFunction() {
        var name = "Hello";
        return function(){
            alert(name);
        };
    }

    var func = createFunction();
    func();

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)

     {
        "people" : [{
            "firstName": "John",
            "lastName": "Smith",
            "city": "San Francisco",
            "state": "California",
            "zip" : "94119",
            "phoneNumbers": [
                {
                    "type": "home",
                    "number": "212 555-1234"
                },
                {
                    "type": "work",
                    "number": "646 555-4567"
                },
                {
                    "type": "mobile",
                    "number": "646 555-4522"
                }
            ]
        },
        {
            "firstName": "Randy",
            "lastName": "Smith",
            "city": "San Francisco",
            "state": "California",
            "zip" : "94119",
            "phoneNumbers": [
            {
                "type": "home",
                "number": "212 555-1234"
            },
            {
                "type": "work",
                "number": "646 555-4567"
            },
            {
                "type": "mobile",
                "number": "646 555-4522"
            }
            ]
        }


        ]


    }


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

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
