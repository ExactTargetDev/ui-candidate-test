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
         return Math.min(values);
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         var sorted_arr = values.sort(function(a,b){
              return a-b;
         });
         var results = [];
         var dupResults = [];
         for (var i =0; i < values.length;i++ ){
             if (sorted_arr[i] != sorted_arr[i+1]){
                  results.push(sorted_arr[i]);
             }else{
                  dupResults.push(sorted_arr[i+1]);
             }
         }
         //alert(reults+" - "+dupResults);
         return results;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         var arr = [];
                for (var i=1;i <= 100;i++){
                     if (i % 15 == 0){
                          arr.push("FizzBuzz");
                     }else if (i % 3 == 0){
                          arr.push("Fizz");
                     }else if (i % 5 == 0){
                          arr.push("Buzz");
                     }else{
                          arr.push(i);
                     }
                }
                console.log(arr);
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         var arr = [];
         var fruits = ["Orange","Banana","Mango","Apple"];
         var remove = ["Apple","Orange"];
         for (var i=0; i <remove.length;i++){
              for (var j=0; j<fruits.length;j++){
                   if(fruits[j] == remove[i]){
                        fruits.splice(j,1);
                        //arr.push(fruits.splice(j,1));
                   }
              }
         }
         alert(fruits);
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         // FILL THIS IN
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         var tempArray = sourceStr.split(",");
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         var arr = [1,2,3,4];
          alert(eval(arr.join('+')));
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         if(!sourceStr.match(/\S/)){
              return true;
         }
              return false;
     }

     // write an example of a javascript closure
           function fullName(firstName){
                var fullName = "Full name is";
                function lastName (lastName){
                     return fullName+firstName+""+lastName;
                }
                return lastName; 
           }

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
               var persons = [{
                    "firstName": "test",
                    "lastName": "test",
                    "city": "Chicago",
                    "state": "IL",
                    "zip": 60194,
                    "phone":{
                    "home":"111-111-1111",
                    "work":"222-222-2222",
                    "mobile":"333-333-3333"
                    }
                    },{
                    "firstName": "sample",
                    "lastName": "sample",
                    "city": "Chicago",
                    "state": "IL",
                    "zip": 60193,
                    "phone": {
                    "home": "444-444-4444",
                    "work": "555-555-5555",
                    "mobile": "666-666-6666"
                    }
                    }]


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
          function createListArray(){
               var listArray =[];
               
               for (var i=0;i<5;i++)
               {
                    var data = [];
                    for (var j=0;j<5;j++)
                    {
                         data.push("List" +j);
                    }
                    listArray.push(data);
               }
               return listArray;
          }

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
