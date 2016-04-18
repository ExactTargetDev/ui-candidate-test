     // Example unit test function
     function divide(a, b) {
       // To see the test pass, uncomment the following line
       return a / b;
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
       return _.uniq(values);
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
       for (var counter = 1; counter <= 100; counter++) {
         var msg = '';
         if (counter % 15 === 0) output = 'FizzBuzz';
         else if (counter % 3 === 0) output = 'Fizz';
         else if (counter % 5 === 0) output = 'Buzz';
         else output = counter;
         console.log(output);

       }
     }
     doFizzBuzz();


     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
       _.pullAll(fruits, fruitsToRemove);
       console.log(fruits);
       return fruits;
     }
     removeFruits(['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'], ['pear', 'banana']);

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
       array = _.concat(array, toPush);
       return array;
     }


     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
       console.log(sourceStr);
       console.log("direct" + sourceStr.split(","));
       console.log(_.split(sourceStr[3], ',', [30]));
       //       console.log(splited);
     }
     splitListStrUsingComma("ksjdkdjdk");

     // Write a function that will take any number of arguments and return their sum
     function sum(anArraytoSum) {
       return (_.sum(anArraytoSum));
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {

       if (_.isEmpty(sourceStr)) {
         console.log("empty");
         return (false);
       };
       if (!sourceStr.replace(/^\s+|\s+$/g, "")) {
         console.log('string is only whitespace');
         return (true);
       } else {
         console.log('string has non white spaces');
         return (false);
       }
     };
     isOnlyWhitespace("sdf d");

     // write an example of a javascript closure

     function makeAdder(x) {
       return function (y) {
         return x + y;
       };
     }

     var add5 = makeAdder(5);
     var add10 = makeAdder(10);

     console.log(add5(2)); // 7
     console.log(add10(2)); // 12



     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)

     var contacts = [
		{
         "first_name": "Brian",
         "last_name": "Hill",
         "city": "Albany",
         "state": "New York",
         "zip": "12210",
         "phones": {"phone-home": "1-(518)662-8333",
         "phone-work": "1-(713)227-7208",
         "phone-mobile": "1-(801)215-3943"}
}, {
         "first_name": "Howard",
         "last_name": "Boyd",
         "city": "Miami",
         "state": "Florida",
         "zip": "33245",
         "phones": {"phone-home": "1-(786)829-5822",
         "phone-work": "1-(402)188-2617",
         "phone-mobile": "1-(412)752-6649"}
}, {
         "first_name": "Robin",
         "last_name": "Owens",
         "city": "Minneapolis",
         "state": "Minnesota",
         "zip": "55402",
         "phones": {"phone-home": "1-(763)203-7580",
         "phone-work": "1-(732)374-9569",
         "phone-mobile": "1-(713)518-6243"}
}, {
         "first_name": "Mark",
         "last_name": "Hanson",
         "city": "Modesto",
         "state": "California",
         "zip": "95397",
         "phones": {"phone-home": "1-(209)172-7582",
         "phone-work": "1-(361)820-6957",
         "phone-mobile": "1-(757)989-3031"}
}, {
         "first_name": "Marie",
         "last_name": "Lewis",
         "city": "Providence",
         "state": "Rhode Island",
         "zip": "02905",
         "phones": {"phone - home": "1-(401)344-6359",
         "phone-work": "1-(772)594-3999",
         "phone-mobile": "1-(305)996-2162"}
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

        return {
            addColumns: function() {
                var newCol = [],
                    i;
                for(i=0; i<arguments.length; i++) {
                    if(typeof arguments[i] === 'string') {
                        columns.push(arguments[i]);
                    }
                }
                return columns;
            },

            addRow: function() {
                var i;

                for(i=0; i<columns.length; i++) {
                    if(i<arguments.length && (typeof arguments[i] === 'string')) {
                        rows.push(arguments[i]);
                    } else {
                        rows.push('');
                    }
                }
            },

            getData: function() {
                var table = [],
                    index = 0,
                    row, c;

                while(index < rows.length) {
                    row = {};
                    for(c=0; c<columns.length; c++) {
                        row[columns[c]] = rows[index++];
                    }
                    table.push(row);
                }
                return table;
            }
        };
    }

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.

    $(document).ready(function() {
        $('#div1').append('What flavor of shake do you want?<select id="MyOptions"><option>Strawberry</option><option>chocolate</option><option>Vanilla</option></select>');
        $('#div1').append('<button id="LogButton">Log Option</button>');
        $('#LogButton').on('click', function() {
            console.log($('#MyOptions :selected').val());
        });
    });

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
