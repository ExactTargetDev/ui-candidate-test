
    // Example unit test function
    function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
    }


    // Write a function that takes a single argument (a string) and returns the string reversed.
    function reverseString(str) {
        if(str) {
            return str.split("").reverse().join("");            
        }
    }


    // Write a function that takes an array of numbers and returns the minimum value
    function findMinValue(values) {
        // Sort the values from least to greatest
        values.sort(function(a,b) {
            return a-b;
        });

        // Values is sorted; the first entry is the minimum value.
        return values[0];
    }


    // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
    function findDistinctValues(values) {

        // Array to contain the distinct values.
        var returnArray = [];

        // Burn through the values, verifying that the values entry does not
        // already exist in returnArray.  If it does not, add it to returnArray
        // and move to the next entry.
        for(var valueIndex in values) {
            if(returnArray.indexOf(values[valueIndex]) === -1) {
                returnArray.push(values[valueIndex])
            }
        }

        // Return the array containing the distinct values.
        return returnArray;
     }

    // Write a function that logs the numbers from 1 to 100 to the console.
    // For multiples of three print "Fizz" instead of the number.
    // For multiples of five print "Buzz".
    // For numbers which are multiples of both three and five print "FizzBuzz".
    function doFizzBuzz() {
        for(var i = 1; i <= 100; i++) {
            // Multiples of both three and five are really multiples of fifteen,
            // which has highest presidence:
            if(i % (3*5) === 0) {
                console.log("FizzBuzz");
            }
            else if((i % 5) === 0) {
                console.log("Buzz");
            }
            else if((i % 3) === 0) {
                console.log("Fizz");
            }
            // No match. Print out the number.
            else {
                console.log(i);
            }
        }
    }

    // You have a master array of strings, where each element is a fruit name.
    // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
    // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
    // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
    function removeFruits(fruits, fruitsToRemove) {

        // This holds an index of the fruit array of where to fruit to be
        // removed is located.
        var index = -1;

        // Iterate through the entries we wish to remove from the fruits array.
        for (var i = fruitsToRemove.length - 1; i >= 0; i--) {

            // Find the index in fruits of the fruit we wish to remove.
            index = fruits.indexOf(fruitsToRemove[i]) ;

            // If there's a match (index won't be -1 if so), then splice fruits
            // in order to remove the undesired fruit.
            if(index > -1) {
                fruits.splice(index, 1);
            }
        };

        return fruits;
    }


    // Write a function to push either a simple value or an array of values onto a specified array.
    // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
    // If toPush is a simple value, it should be pushed onto array as an element.
    // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
    function pushOntoArray(array, toPush) {

        // Thoroughly verify that toPush is indeed an array.
        if(Object.prototype.toString.call( toPush ) === '[object Array]') {
            for(var i in toPush) {
                array.push(toPush[i]);
            }
        }

        // toPush isn't an array, so push it's value onto array.
        else {
            array.push(toPush);
        }

        return array;
    }


    // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
    function splitListStrUsingComma(sourceStr) {

        // m is our array which will contain the string once it has been split
        var m = [];

        // If not an empty string then split away, placing the contents of the
        // split string into m.
        if(sourceStr.length) {
            m = sourceStr.split(",");
        }

        return m;
    }


    // Write a function that will take any number of arguments and return their sum
    function sum() {
        // m contains the sum of arguments
        var m = 0;

        // Iterate through all the arguments, verifying that each entry is a
        // number.  If not a number, then that argument is ignored.  Otherwise,
        // the number is added to m for return.
        for (var i = 0; i < arguments.length; i++) {
            if(!isNaN(arguments[i])) {
                m += parseInt(arguments[i], 10);
            }
        }
        return m;
    }


    // Write a function that will return true if a specified string consists of only whitespace.
    function isOnlyWhitespace(sourceStr) {
        if(sourceStr.length > 0) {
            if(sourceStr.replace(/\s/g, "").length === 0) {
                return true;
            }
        }
        return false;
    }


    // write an example of a javascript closure
    var person = function () {
        var firstName = "";
        return {

            setFirstName: function (name) {
                firstName = name;
            },

            getLastName: function () {
                return firstName;
            }
        };
    };

    // var a = person();
    // a.setFirstName("Bob");
    // console.log("a.getLastName --> " + a.getLastName()); // Bob




    // define a json object that represents a collection of people.
    // each person should have the following properties
    // - first name
    // - last name
    // - city
    // - state
    // - zip
    // - a collection of phone numbers (home, work, mobile)
    var people = [
        {
            "firstName": "Andy",
            "lastName": "Engle",
            "city": "Terre Haute",
            "state": "Indiana",
            "zip": "47803",
            "phone": {
                "home": "847-650-7963",
                "work": "812-123-4567",
                "mobile": "847-650-7963"
            }
        },
        {
            "firstName": "Bobby",
            "lastName": "Jones",
            "city": "Augusta",
            "state": "Georgia",
            "zip": "30901",
            "phone": {
                "home": "246-810-1214",
                "work": "246-810-1215",
                "mobile": "246-810-1218"
            }
        },
        {
            "firstName": "Phil",
            "lastName": "Mickelson",
            "city": "San Diego",
            "state": "California",
            "zip": "92003",
            "phone": {
                "home": "415-123-4567",
                "work": "415-123-0039",
                "mobile": "415-123-9938"
            }
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

    var DataTable = function() {

        var columnsArr = [];
        var rowsArr = [];

        return {

            addRow: function(rowToAdd) {

                // Don't write rows if columns aren't yet defined.
                if (columnsArr.length > 0) {

                    // This array will hold the data contents of this row.
                    var rowArrToAdd = [];

                    // Write only as much row data as we have, and for as many
                    // columns as we have.  That is, match up data with a column.
                    for(var i = 0; (i < arguments.length) && (i < columnsArr.length); i++) {
                        rowArrToAdd.push(arguments[i]);
                    }

                    // Push this row into rowsArr.
                    rowsArr.push(rowArrToAdd);
                }
                else {
                    console.log("Please define columns before adding rows.");
                }
            },

            addColumns: function(colsToAdd) {
                if (columnsArr.length > 0) {
                    console.log("Error: Columns have already been defined.");
                }
                else {
                    // Iterate through the arguments, adding an entry in
                    // columnsArr for each.
                    for(var argIndex in arguments) {
                        columnsArr.push(arguments[argIndex]);
                    }
                }
            },

            getData: function(rowsToAdd) {
                var returnDataArr = [];

                for(var rowIndex in rowsArr) {
                    // This will be a row entry in the returned data set.
                    var returnDataNode = {};

                    // For each row in rowsArr, iterate through the columns
                    // in order to set the column name as the key, and the correct
                    // row value as the corresponding value.
                    for(var colIndex in columnsArr) {
                        returnDataNode[columnsArr[colIndex]] = rowsArr[rowIndex][colIndex];
                    }

                    // Push this array entry into returnDataNode for return later.
                    returnDataArr.push(returnDataNode);
                }

                return returnDataArr;
            }
        }
    }

    // To test it, uncomment the next couple lines:
    // var dataTable = DataTable();

    // dataTable.addColumns('column1', 'column2', 'column3');
    // dataTable.addRow('value1A', 'value1B', 'value1C', 'value1D', 'value1E', 'value1F');
    // dataTable.addRow('value2A', 'value2B');
    // dataTable.addRow('value3A', 'value3B', 'value3C');

    // console.log("dataTable.getData():\n\n" + JSON.stringify(dataTable.getData(), null, 2));


    // ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== 


    // within div1, programatically create a
    // SELECT element (with multiple items) and a button.
    // when the button is clicked write out the name and value of the selected item to the console.

    // --> Done, in JsAndDom.html


    // Write 5 different jQuery selectors to retrieve the
    // sample anchor in the markup below.

    // --> Done, in JsAndDom.html


    // Programatically create an array with 5 items.  Create a list item for each item in the array
    // and add the list items to the unordered list with an id of "list1".

    // --> Done, in JsAndDom.html


    // Use javascript to add a list of checkboxes and 2 links
    // to the div with an id of "foobar"
    // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
    // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)

    // --> Done, in JsAndDom.html

