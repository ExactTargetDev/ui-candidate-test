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
         return Math.min.apply(null, values);
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         // FILL THIS IN
          var filteredArray = values.filter(function(elem, pos){
               values.indexOf(elem) == pos;
          });

          return filteredArray;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         // FILL THIS IN
          for(var i = 0; i <= 100; i++){
               if ((i % 3 === 0) && (i % 5 === 0)) {
                    console.log('FizzBuzz');
                    return 'FizzBuzz';
               }
               else if (i % 3 === 0) {
                    console.log('Fizz');
                    return 'Fizz';
               }
               else if (i % 5 === 0) {
                    console.log('Buzz');
                    return 'Buzz';
               }
               else {
                    console.log(i);
                    return i;
               }
          }
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         // FILL THIS IN
          for(var i = 0; i <= fruits.length; i++){
               if(fruits[i] == fruitsToRemove){
                    fruits.splice(fruitsToRemove, fruitsToRemove.length);
               }
          }
          return fruits;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         // FILL THIS IN
          if(toPush.length > 1){
               for(var i=0; i <= toPush.length; i++){
                    array.push(toPush[i]);
               }
          } else{
               array.push(toPush);
          }

          return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         // FILL THIS IN
          if(sourceStr){
               return sourceStr.split('').join(',');
          } else{
               return [];
          }
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         // FILL THIS IN
          var sum = 0;
          for(var i = 0; i < arguments.length; i++){
               sum += arguments[i];
          }
          return sum;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         // FILL THIS IN
          if (!sourceStr.replace(/\s/g, '').length) {
               return true;
          }
     }

     // write an example of a javascript closure
     function makeColor(color){
          return function(){
               document.body.style.color = color;
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
     var collection = [{firstName: 'Kreigh', lastName: 'Hirschy', city: 'Indianapolis', state: 'Indiana', zip: 46563, phoneNumbers: [{home: '574-952-3414'}, {work: '317-957-1782'}, {mobile: '574-952-3414'}]},{firstName: 'Timmy', lastName: 'Tommy', city: 'Indianapolis', state: 'Indiana', zip: 46563, phoneNumbers: [{home: '317-222-2222'}, {work: '317-222-2222'}, {mobile: '317-222-2222'}]}];


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
     var options = [
          {val: 'kreigh', name: 'Kreigh'},
          {val: 'ryan', name: 'Ryan'},
          {val: 'larry', name: 'Larry'}
     ];

     var sel = $('<select id="select">').appendTo('#div1');
     var btn = $('<button>Submit</button>').appendTo('#div1');

     $(options).each(function(){
          sel.append($('<option>').attr('value', this.val).text(this.name));
     });

     $(btn).click(function(){
          var value = $('#select').val();
          var name = $('#select option:selected').text();
          console.log('name: ' + name + ' val: ' + value);
     });


     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.


     //1. $('#fizz a')
     //2. $('#foo a')
     //3. $('body a')
     //4. $('#div1').next().find('a')
     //5. $('#baz').prev().find('a')

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
     var array = ['apple', 'berry', 'grape', 'orange', 'kiwi'];

     for(var i =0; i < array.length; i++){
          $('#list1').append('<li>'+array[i]+'</li>');
     }

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
     var container = $('#foobar');

     container.append('<input type="checkbox" /><br />');
     container.append('<input type="checkbox" /><br />');
     container.append('<a href="#">Check all</a><br />');
     container.append('<a href="#">Uncheck all</a>');

     $('#foobar a:first-of-type').click(function(){
          $("input[type='checkbox']").prop('checked', true);
     });

     $('#foobar a:last-of-type').click(function(){
          $("input[type='checkbox']").prop('checked', false);
     });