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
         Array.min = function( array ){
             return Math.min.apply( Math, array );
         };

         return Array.min(values);
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {

         Array.prototype.inArray = function(values) {
             for(var i = 0; i < this.length; i++) {
                 if(this[i] === values) return true;
             }
             return false;
         };

         Array.prototype.distinct = function() {
             var arr = [];
             for(var i = 0; i < this.length; i++) {
                 if(!arr.inArray(this[i])) {
                     arr.push(this[i]);
                 }
             }
             return arr;
         };

         return values.distinct();
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {

         var str = "",
             mult3,
             mult5,
             a;

         for (a = 1; a <= 100; a++){

             mult3 = a%3 ==0;
             mult5 = a%5 ==0;

             if(mult3){
                 str += "Fizz"
             }
             if (mult5){
                 str += "Buzz"
             }
             if (!(mult3||mult5)){
                 str += a;
             }
             str+="\n"
         }

         return str
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {

         fruits = fruits.filter( function( el ) {
             return fruitsToRemove.indexOf( el ) < 0;
         });

         return fruits
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {

         array = array.concat(toPush);

         return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {

         if(sourceStr == ''){
             return []
         } else {
             var result = sourceStr.split(',');
             return result[1];
         }
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         var sumTotal = {};

         for (var i=0; i < arguments.length; i++) {
             sumTotal = sumTotal + arguments[i];
         }

         return sumTotal;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         if(sourceStr === ''){
             return true
         } else {
             return false
         }
     }

     // write an example of a javascript closure

     function outerFunc(){
         var outVar1 = 1,
             outVar2 = 2;

         return function innerFunc(){
             return outVar1 + outVar2;
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

     var peopleJSON = {"people":[
         {
             "firstName":"John",
             "lastName":"Doe",
             "city":"Indianapolis",
             "state":"Indiana",
             "zip": "46260",
             "numbers": [
                 {
                     "firstNumber" : "1234456",
                     "secondNumber" : "1234456",
                     "thirdNumber" : "1234456"
                 }
             ]
         }
     ]};



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

     var div1 = document.getElementById("div1");


     //Create array of options to be added
     var array = ["Red","Blue","Green","White"];

     var selectList = document.createElement("select");
     selectList.id = "selectList";
     div1.appendChild(selectList);

     for (var i = 0; i < array.length; i++) {
         var option = document.createElement("option");
         option.value = array[i];
         option.text = array[i];
         option.className = 'option';
         selectList.appendChild(option);
     }


     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.

     $(function(){
         $('.link');
         $('#fizz').find('.link');
         $('#fizz').children();
         $('#fizz a');
         $('a').first();
     });

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
     var myArrayList = [],
         createdListItem = [],
         list1 = document.getElementById("list1");

     (function createArray(){
         myArrayList.push('Item One');
         myArrayList.push('Item Two');
         myArrayList.push('Item Three');
         myArrayList.push('Item Four');
         myArrayList.push('Item Five');
     })();

     for (var i = 0; i < myArrayList.length; i++) {
         createdListItem.push(document.createElement('li'));
         list1.appendChild(createdListItem[i]);
         createdListItem[i].innerHTML = myArrayList[i];
     }

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
