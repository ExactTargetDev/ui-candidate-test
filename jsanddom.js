     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         return str.split('').reverse().join('');
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         return values.reduce(function(previous, current) {
            return (previous < current ? previous : current);
         });
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         var distinct = [];

         for (var i = 0; i < values.length; i++) {
            if (distinct.indexOf(values[i]) === -1) {
                distinct.push(values[i]);
            }
         }

         return distinct;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         for (var i = 1; i < 101; i ++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log('FizzBuzz');
            } else if (i % 3 === 0) {
                console.log('Fizz');
            } else if (i % 5 === 0) {
                console.log('Buzz');
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
        //Not totally clear if you want it to be mutating the 'master' array or not
        //If you don't want it to, you can copy the 'master' array
        //ie: var copy = fruits.slice(0);
        //and run this loop on the copy, then return the copy

         for (var i = 0; i < fruitsToRemove.length; i++) {
            while (fruits.indexOf(fruitsToRemove[i]) != -1) {
                fruits.splice(fruits.indexOf(fruitsToRemove[i]), 1);
            }
         }
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
        //Duck-typing to check if toPush is an array
        if (toPush.length) {
            Array.prototype.push.apply(array, toPush);
        } else {
            array.push(toPush);
        }
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         return sourceStr === '' ? [] : sourceStr.split(',');
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
        var summed = 0;

        for (var i = 0; i < arguments.length; i++) {
            summed += arguments[i];
        }

        return summed;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
        //I had a problem
        //I solved it with regEx
        //Now I have two problems!
        //Haha just kidding, this time it worked :-P

        //this will match ANY non-whitepace character
        var regEx = /\S/;

        //returns true if no match is found
        //ie it's only whitespace
        //returns false if a match is found
        //ie there is something else in that string
        return !regEx.test(sourceStr);
     }

     // write an example of a javascript closure

     function outerFunction() {
        var outerVariable = 'Closures are cool!';
        return function() {
            console.log(outerVariable);
        };
     }

     var closure = outerFunction();
     /*
     Closure function looks like this:
     function() {
        console.log(outerVariable)
     }

     As you can see, outerVariable is not defined in the function,
     but it is remembered from it's parent scope of outerFunction!

     So if you call closure()
     it will successfully log
     < 'Closures are cool!'

     */

     //you can also use closures to create psuedo private methods
     var Constructor = function(thing) {
        this.a = 1;
        var b = thing;
        function getThing() {
            return b;
        }

        this.reallyGetThing = function() {
            return getThing();
        };
     };

     var closureObject = new Constructor('turtle!');

     /*
        > closureObject.a
        < 1
        > closureObject.b
        < undefined
        > closureObject.getThing
        < undefined
        > closureObject.getThing()
        < TypeError: not a function
        > closureObject.reallyGetThing()
        < 'turtle!'
     */


     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)

     var people = {
        "People": [
            {
                "first-name": "Barack",
                "last-name": "Obama",
                "city": "Washington",
                "state": "DC",
                "zip": "12345",
                "phone-numbers": {
                    "home": "1-312-867-5309",
                    "work": "1-800-THE-PREZ",
                    "mobile": "1-202-555-5555"
                }
            },
                {
                "first-name": "Donald",
                "last-name": "Trump",
                "city": "New York",
                "state": "NY",
                "zip": "44444",
                "phone-numbers": {
                    "home": "1-800-THE-HAIR",
                    "work": "1-800-IAM-RICH",
                    "mobile": "1-800-ILU-TACO"
                }
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
     // Example:
     // .addColumns('column1', 'column2', 'column3');
     // .addRow('value1A', 'value1B', 'value1C');
     // .addRow('value2A', 'value2B', 'value2C');


     // I really don't understand what you want
     // Here's my best guess:
     var DataTable = new function() {
        var columns = [];
        var rows = [];

        this.addRow = function() {
            var newRow = [];
            for (var i = 0; i < arguments.length; i++) {
                newRow.push(arguments[i]);
            }
            rows.push(newRow);
        };

        this.addColumns = function() {
            for (var i = 0; i < arguments.length; i++) {
                columns.push(arguments[i]);
            }
        };

        this.getData = function() {
            var table = {};
            table.columns = columns;
            table.rows = rows;
            return JSON.stringify(table);
        };
     };


     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.

     var div1 = document.getElementById('div1');

     var select = document.createElement('select');
     for (var i = 1; i < 4; i++) {
        var option = document.createElement('option');
        option.setAttribute('value', 'value ' + i);
        option.appendChild(document.createTextNode('option ' + i));
        select.appendChild(option);
     }

     var button = document.createElement('input');
     button.setAttribute('type', 'button');
     button.setAttribute('value', 'Click the button!');
     button.addEventListener('click', function() {
        var selected = select.options[select.selectedIndex];
        console.log('The selected option is: ' + selected.text + ' ;  The selected value is: ' + selected.value);
     });

     div1.appendChild(select);
     div1.appendChild(button);

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.

     var $first = $('a');
     var $second = $('.link');
     var $third = $('.buzz > a');
     var $fourth = $('#fizz').children();
     var $fifth = $('#foo a');

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".

     var fiveItemArray = [];
     for (var i = 1; i < 6; i++) {
        fiveItemArray.push('List Item Number ' + i);
     }

     var list = document.getElementById('list1');
     for (var i = 0; i < fiveItemArray.length; i++) {
        var listItem = document.createElement('li');
        listItem.appendChild(document.createTextNode(fiveItemArray[i]));
        list.appendChild(listItem);
     }

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)

     //using jQuery for a change of pace!
     var $foobar = $('#foobar');

     var $checkboxList = $('<ul>', {id: 'checkboxList'});

     var $checkAllLink = $('<a>', {href: '#', id: 'checkAll', text: 'Check All!'});
     $checkAllLink.click(function() {
        $checkboxList.find('input').prop('checked', true);
     });

     var $uncheckAllLink = $('<a>', {href: '#', id: 'uncheckAll', text: 'Uncheck All!'});
     $uncheckAllLink.click(function() {
        $checkboxList.find('input').prop('checked', false);
     });

     for (var i = 1; i < 11; i++) {
        var $checkboxListItem = $('<li>');
        var $checkbox = $('<input>', {type: 'checkbox'});
        var $label = $('<label>', {text: 'Checkbox ' + i});
        $checkboxListItem.append($checkbox);
        $checkboxListItem.append($label);
        $checkboxList.append($checkboxListItem);
     }

     $foobar.append($checkboxList);
     $foobar.append($checkAllLink);
     $foobar.append('<br />');
     $foobar.append($uncheckAllLink);











