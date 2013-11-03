     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        // return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
    function reverseString(str){
        return (str === null || str === undefined) ? "" : str.split('').reverse().join('');
    }


     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         return (values === null || values === undefined || values.length == 0) ? 0 : values.slice().sort().shift();
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
        return values.filter(function(i, pos){
            return values.indexOf(i) == pos;
        });
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         for(var i = 0; i < 100; i++ ){
            if (i % 3 == 0 && i % 5 != 0) { console.log('Fizz :' + i) };
            if (i % 3 != 0 && i % 5 == 0) { console.log('Buzz :' + i) };
            if (i % 3 == 0 && i % 5 == 0) { console.log('Fizz Buzz :' + i) };
        }
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         return fruits.filter(function(v, i){
            return fruitsToRemove.indexOf(v) == -1;
        });
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         if(array === null || array === undefined){ array = []; }
         if(toPush.typeof === 'Object array'){
             for(var i = 0; i < toPush.length; i++){
                array.push(toPush[i]);
             }
         }
         else{
            array.push(toPush);
         }
         return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         if (sourceStr.length = 0 || sourceStr === null || sourceStr === undefined) { return ""; }
         else{
            var res = sourceStr.split(',');
            res.forEach(function(i){ if(i.indexOf(',') == -1){ return i.split(' ').join(','); }});
            return res.join(',');
         }
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
        var sum = 0;
        for(var i = 0; i < arguments.length; i++){
            sum += arguments[i];
        }
        return sum;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         return (sourceStr.trim().length == 0);
     }

     // write an example of a javascript closure
     // This example allows you to create a function that will multiply be whatever number you pass in to the function initially,
     // which can be reused.
     function multiplyBy(x) {
        return function(y) { return x * y; };
     }

     var multBy10 = multiplyBy(10);

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)

     var myJSONobject = {
                            "firstName" : "Dennis",
                            "lastName"  : "Reynolds",
                            "city"      : "Philadelphia",
                            "state"     : "Pennsylvania",
                            "zip"       : "55555",
                            "phones"    : {
                                            "home" : "555-555-5555",
                                            "work" : "555-555-5555",
                                            "mobile" : "555-555-5555"
                                          }
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

     function DataTable(){
        var columns = [];
        var rows = [];

        this.addRows = function(){
            this.rows.push();
        }

        this.addColumns = function(){

        }

        this.getData = function(){
           return JSON.stringify(this);
        }

     }

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
     $(document).ready(function(){
        $('#div1').append('<select id="mySelect"><option value="Number1">Item 1</option><option value="Number2">Item 2</option></selection>');
        $('#div1').append('<button id="myButton">Click Me</button>');
        $('#myButton').bind('click', function(){
            console.log($('#mySelect option:selected').text() + "  " + $('#mySelect').val() );
        }); 
     });

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
     var myAnchor = $('#fizz > a');
     var myAnchor = $('#fizz').children().first();
     var myAnchor = $('a.link');
     var myAnchor = $('a:first');
     var myAnchor = $('[href$="#"]');

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
     var myArray = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
     $.each(myArray, function(key,val){
        $('ul#list1').append('<li>' + val + '</li>');
     });

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
     $(document).ready(function($) {
          $('div#foobar').append('<input type="checkbox" class="checkMe" /><input type="checkbox" class="checkMe" /><input class="checkMe" type="checkbox" />');
          $('div#foobar').append('<a href="#">Link One</a><a href="#">Link Two</a>');

          $('div#foobar a:first').bind('click', function(){
                $('input.checkMe').prop('checked', true);
          });
         
         $('div#foobar a:first').next().bind('click', function(){
                $('input.checkMe').prop('checked', false);
          });
     });