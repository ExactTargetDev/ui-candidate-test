     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         // FILL THIS IN
         // Pure JS:
         return str.split("").reverse().join("");
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         // FILL THIS IN
         // In pure JS:
         return values.sort()[0];
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         // FILL THIS IN

         // Using Underscore.js - uncomment next line to make it work:
         //return _.uniq(values);

         // In pure JS:
         var distinct = [];
         for (var i = 0; i < values.length; i++) {
            if ( distinct.indexOf(values[i]) == -1 ) {
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
         // FILL THIS IN
         for (var i = 1; i <= 100; i++ ) {
            if (i % 15 == 0) { // True because numbers which are multiples of both three and five, and only those, are multiples of fifteen
                console.log( "FizzBuzz" )
            } else if (i % 3 == 0) {
                console.log( "Fizz" )
            } else if (i % 5 == 0) {
                console.log( "Buzz" )
            } else {
                console.log( i );
            }
        }
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         // FILL THIS IN
         // Using Underscore.js:
         // Modify the fruits array
         fruits = _.difference(fruits, fruitsToRemove); 
         return fruits;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         // FILL THIS IN
         array = _.union(array, toPush);
         return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         // FILL THIS IN

         // Shorter form:
         return sourceStr == '' ? [] : sourceStr.split(",");

         // More readable:
         //var result = [];
         //if ( sourceStr !== '' ) {
         //   result = sourceStr.split(",");
         //}
         //return result;
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         // FILL THIS IN
         var sum = 0;
         for (var i in arguments) {
            sum += arguments[i];
         }
         return sum;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         // FILL THIS IN
     }

     // write an example of a javascript closure
     function closureExample() {

        var privateProperty = 'privateValue';

        function privateFunction() {
            return privateProperty;
        }

        function getterSample () {
            return privateProperty;
        }

        function setterSample (value) {
            privateProperty = value;
        }

        function callPrivateFunction () {
            return privateFunction();
        }

        return { 
            "getPrivateProperty": getterSample,
            "setPrivateProperty": setterSample,
            "callPrivateFunction": callPrivateFunction
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
    var peopleJson = [
        {
            "firstName": "John",
            "lastName": "Doe",
            "city": "Indianapolis", 
            "state": "Indiana",
            "zip": 46209,
            "phones": {   
                "home": "00 1 317 1234561",
                "work": "00 1 317 1234567",
                "mobile": "00 1 317 1234568"
            }
        }, {
            "firstName": "Alice",
            "lastName": "Sinclair",
            "city": "Kiev", 
            "state": "Other",
            "zip": 38000,
            "phones": {   
                "home": "00 020 8345 6355",
                "work": "00 020 8345 6356",
                "mobile": "00 020 8345 6359"
            }
        }
    ]

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

        var columns = [];
        var rows = [];

        var addRows = function( rowsToAdd ) {
            for ( i in arguments ) {
                rows.push( arguments[ i ] );
            }
        }

        var addColumns = function( columnsToAdd ) {
            for ( i in arguments ) {
                columns.push( arguments[ i ] );
            }
        }

        var getData = function() {
            return {
                "rows": rows,
                "columns": columns
            }
        }

        return {
            "addRows": addRows,
            "addColumns": addColumns,
            "getData": getData
        }
     }

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
     function createSelectAndButton () {

         // Using pure JS
         var div1 = document.getElementById( 'div1' );
         var select = document.createElement( 'select' );
         select.setAttribute( 'id', 'selectElement' );
         
         var option,
             text,
             n = 7;

         for ( var i = 0; i < n; i++ ) {
             option = document.createElement( 'option' );
             option.setAttribute( 'name', 'option' + i );
             text = document.createTextNode( 'Option ' + i );
             option.appendChild( text );
 
             select.appendChild( option );
          }
 
          var button = document.createElement( 'input' );
          button.setAttribute( 'type', 'button');
          button.setAttribute( 'value', 'go');
          button.onclick = function( event ){
              var select = document.getElementById( 'selectElement' );
              console.log( 'Selected option name is \'' + select.options[ select.selectedIndex ].attributes.name.value +
                  '\' with value of \'' + select.value + '\'');
          };
 
          div1.appendChild( select );
          div1.appendChild( button );
     }

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
     function selectAnchorInFiveWays() {
        console.log( 'Selected anchor: ' + $( '#fizz a' )[0].text );
        console.log( 'Selected anchor: ' + $( '.buzz a' )[0].text );
        console.log( 'Selected anchor: ' + $( '#fizz .link' )[0].text );
        console.log( 'Selected anchor: ' + $( '#fizz [href="#"]' )[0].text );
        console.log( 'Selected anchor: ' + $( '#foo div a' )[0].text );
        console.log( 'Selected anchor: ' + $( 'a:contains("sample anchor")' )[0].text );
     }

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
     function createListItems(){

        var listItems = new Array( 'Brown', 'Fox', 'Jumps', 'Over', 'The lazy dog' );

        $(listItems).each( function ( index, element ) {
            $('#list1').append('<li>' + element + '</li>');
        })
     }


     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
     function createCheckboxesAndLinks(){

        // Using Javascript only

        var checkBoxLabels = new Array( 'Richard', 'Of', 'York', 'Gave', 'Battle', 'In', 'Vain' );

        var foobar = document.getElementById( 'foobar' );

        var checkBox,
            label,
            text;

        for (var i = 0; i < checkBoxLabels.length; i++ ) {
            text = document.createTextNode( checkBoxLabels[ i ] );

            checkBox = document.createElement( 'input' );
            checkBox.setAttribute( 'name', 'checkBox' + i);
            checkBox.setAttribute( 'value', checkBoxLabels[i]);
            checkBox.setAttribute( 'type', 'checkbox' );

            label = document.createElement( 'label' );
            label.setAttribute( 'style', 'display: block' );
            label.appendChild( checkBox );
            label.appendChild( text );

            foobar.appendChild( label );
        }

        var checkAllLink = document.createElement( 'a' );
        var uncheckAllLink = document.createElement( 'a' );

        checkAllLink.setAttribute( 'href', '#' );
        checkAllLink.setAttribute( 'style', 'display: block' );
        checkAllLink.innerHTML = 'Check All';

        uncheckAllLink.setAttribute( 'href', '#' );
        uncheckAllLink.setAttribute( 'style', 'display: block' );
        uncheckAllLink.innerHTML = 'Uncheck All';

        checkAllLink.onclick = function( event ) {
            for ( i = 0; i < checkBoxLabels.length; i++ ) {
                document.getElementsByName( 'checkBox' + i )[0].checked = true;
            }
            return false;
        }

        uncheckAllLink.onclick = function( event ) {
            for ( i = 0; i < checkBoxLabels.length; i++ ) {
                document.getElementsByName( 'checkBox' + i )[0].checked = false;
            }
            return false;
        }

        foobar.appendChild( checkAllLink );
        foobar.appendChild( uncheckAllLink );
     }
