Array.prototype.max = function() {
     return Math.max.apply(null, this);
};

Array.prototype.min = function() {
     return Math.min.apply(null, this);
};

Array.prototype.contains = function(v) {
     for(var i = 0; i < this.length; i++) {
          if(this[i] === v) return true;
     }
     return false;
};

Array.prototype.unique = function() {
     var arr = [];
     for(var i = 0; i < this.length; i++) {
          if(!arr.contains(this[i])) {
               arr.push(this[i]);
          }
     }
     return arr;
};

     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         // FILL THIS IN
          return str.split('').reverse().join('');
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         // FILL THIS IN
          return values.min();
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         // FILL THIS IN
          return values.unique();
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         // FILL THIS IN
          for (var i = 1; i < 101; i++){
               if(i%3 === 0 && i%5 === 0){
                    if (window.console) console.log("FizzBuzz");
               }else if(i % 5 === 0){
                    if (window.console) console.log("Buzz");
               }else if(i % 3 === 0){
                    if (window.console) console.log("Fizz");
               }else{
                    if (window.console) console.log(i);
               }
          }
          return 1;
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         // FILL THIS IN
          var removedIndexes = [];
          for(var i = 0; i < fruits.length; i++){
               if(fruitsToRemove.contains(fruits[i])){
                    removedIndexes.push(i)
               }
          }
          for(var j = 0; j < removedIndexes.length; j++){
               fruits.splice(removedIndexes[j], 1);
          }
          return fruits;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         // FILL THIS IN
          if(toPush.constructor === "Array"){
               for(var i = 0; i < toPush.length; i++){
                    array.push(toPush[i]);
               }
          }else{
               array.push(toPush);
          }
          return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         // FILL THIS IN
          if(sourceStr === "") return [];
               return sourceStr.split(',');
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         // FILL THIS IN
          var total = 0;
          if(arguments.length > 0){
               for(var i = 0; i < arguments.length; i++){
                    total += parseFloat(arguments[i], 10);
               }
          }
          return total;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         // FILL THIS IN
          return sourceStr.match('/^\s+$/') !== null;
     }

     // write an example of a javascript closure

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)

     var jsonObj = '{"people":[{"FirstName": "A","LastName": "Nguyen","City": "South Bend","State": "IN","Zip": "46615","Phone":[{"Home": "574-389-0404"},{"Work": "574-389-0404"},{"Mobile": "574-389-0404"}]},{"FirstName": "B","LastName": "Nguyen","City": "South Bend","State": "IN","Zip": "46615","Phone":[{"Home": "574-389-0405"},{"Work": "574-389-0405"},{"Mobile": "574-389-0405"}]}]}';


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

     window.DataTable = function(){
          var rows = [], columns = [];

          function _getData(){
               return JSON.stringify({"rows":rows, "columns":columns});
          }

          function _addColumns(){
               columns = pushOntoArray(columns, Array.prototype.slice.call(arguments));
          }

          function _addRows(){
               if(arguments.length > 0){
                    var row = {};
                    for(var i = 0; i < arguments.length; i++)
                         row[columns[i]] = arguments[i]
                    rows.push(row);
               }
          }

          return {
               "getData": _getData,
               "addColumns": _addColumns,
               "addRows": _addRows
          };
     };

     $(function() {
          // within div1, programatically create a
          // SELECT element (with multiple items) and a button.
          // when the button is clicked write out the name and value of the selected item to the console.
          var newSelect = $('<select/>');
          newSelect.append([$('<option/>').attr({'value': 1, 'name': 'name1'}).html('1'), $('<option/>').attr({'value': 2, 'name': 'name2'}).html('2')]);
          $('#div1')
              .append(newSelect).append($('<button/>').html('Click me'))
              .on('click', 'button', null, function(){
                   var select = $(this).siblings('select')[0];
                   var selectedOpt = $($(select).find(':selected'));
                   console.log('Name: ' + selectedOpt.attr('name'));
                   console.log('Value: ' + selectedOpt.attr('value'));
          });
          // Write 5 different jQuery selectors to retrieve the
          // sample anchor in the markup below.
          console.log('Using tag selector ' + $('a')[0]);
          console.log('Using child selector ' + $('#fizz > a')[0]);
          console.log('Using class selector ' + $('.link')[0]);
          console.log('Using child from parent of parent selector ' + $('#foo > div >a')[0]);
          console.log('Using child from body ' + $('body > div#foo > div > a')[0]);
          // Programatically create an array with 5 items.  Create a list item for each item in the array
          // and add the list items to the unordered list with an id of "list1".
          var items = [];
          for(var i = 0; i < 5; i++){
               items.push(i);
          }
          var ul = $('#list1');
          for(var j = 0; j < items.length; j++){
               ul.append($('<li/>').html(items[j]));
          }
          // Use javascript to add a list of checkboxes and 2 links
          // to the div with an id of "foobar"
          // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
          // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
          var checks = $('#foobar');
          for( j = 0; j < items.length; j++){
               checks.append('<input class="checkbox" type="checkbox" name="name' + items[j] + '" value="' + items[j] + '">' + items[j] + '<br>');
          }
          checks.append($('<a/>').attr({'href': '#', 'id': 'chkAll'}).html('Check All'));
          checks.append($('<a/>').attr({'href': '#', 'id': 'uchkAll'}).html('Uncheck All'));
          checks.on('click', 'a', null, function(){
               var checkedAll = (this.id == 'chkAll');
                    $('#foobar > .checkbox').each(function(){
                         this.checked = checkedAll;
                    });
               });
     });