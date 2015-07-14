     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
        //We can split the string using string split function and
        //then reverse it using array functions.
        return str.split('').reverse().join('');
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         var length = values.length;
         var i, min = Infinity;

         for(i=0;i<length;i++){
            if(values[i] < min) min = values[i];
         }

         return min;
         //Note: Probably not the most efficient way, but the quickest way I can think with primitives.
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         var length = values.length;
         var i, answer = [];

         //Loop through the existing array, if the value is not in our new array, then add it.
         for(i=0;i<length;i++){
            if(answer.indexOf(values[i]) == -1){
                answer.push(values[i]);
            }
         }

         return answer;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         //In order to pass the test we are also keeping track of an array of the first
         //15 elements to return.
         var answer = [];
         var i = 1, result;

         for(i;i<=100;i++){
            result = '';

            if(i % 3 === 0) { result += "Fizz" };
            if(i % 5 === 0) { result += "Buzz" };
            if(result === '') { result = i; };

            console.log(result);

            if(i<=15){
                answer.push(result);
            }
         }

         return answer;
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         var answer = fruits;

         var i, fruit, index, length = fruits.length;

         for(i=0;i<length;i++){
            fruit = fruitsToRemove[i];
            index = answer.indexOf(fruit);

            //If the value is there, splice it from the array.
            if(index !== -1){
                answer.splice(index, 1);
            }
         }

         return answer;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         //We are going to take advantage of a jquery method here to determine 
         //if the toPush value is an array or not. Anything not an array, is considered another value.
         if($.isArray(toPush)){
            var i, length = toPush.length;

            //For shiggles we will make it recursive. (Could handle multi-tier arrays)
            for(i=0;i<length;i++){
                var value = toPush[i];
                pushOntoArray(array, value);
            }
         } else {
            array.push(toPush);
         }

         return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         var source = sourceStr;
         var answer = [];

         if(source != ''){
             //From here we take advantage of the string.split
             answer = source.split(",");
         }

         return answer;

     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         //We use the arguments object.
         var i, sum = 0;
         var length = arguments.length;

         for(i=0;i<length;i++){
            var value = arguments[i];

            sum += value;
         }

         return sum;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         var source = sourceStr;

         //jquery trims whitespace, so if we trim it and it's empty (where it wasn't empty before)
         //then it was all whitespace.
         if(source.length > 0){
            if($.trim(source).length === 0){
                return true;
            } else {
                return false;
            }
         } else {
            return false;
         }
     }

     // write an example of a javascript closure
     ;(function(module, undefined){
        var private_string = "private";

        //This is the closure.
        var private_function = function(){
            return private_string;
        }

        //This is a publicly exposed function of my module.
        module.public_function = function(){
            return private_string;
        }
     })(window.module = window.module || {});
     //In my code when trying to hide stuff I almost always use the IFFE method.

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
                  "first_name":"Joshua",
                  "last_name":"Sampia",
                  "city":"Westfield",
                  "state":"Indiana",
                  "zip":"46077",
                  "phone_numbers":{  
                     "work_number":"317-493-0574",
                     "home_number":"337-322-9661",
                     "cell_phone":"337-322-9661"
                  }
               },
               {  
                  "first_name":"Christine",
                  "last_name":"Sampia",
                  "city":"Westfield",
                  "state":"Indiana",
                  "zip":"46077",
                  "phone_numbers":{  
                     "work_number":"317-493-0574",
                     "home_number":"337-303-8309",
                     "cell_phone":"337-303-8309"
                  }
               },
               {  
                  "first_name":"Shana",
                  "last_name":"Sampia",
                  "city":"Carencro",
                  "state":"Louisiana",
                  "zip":"70508",
                  "phone_numbers":{  
                     "work_number":"317-493-0574",
                     "home_number":"337-258-3590",
                     "cell_phone":"337-258-3590"
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
     ;(function(DataTable, undefined){
        var columns = [];
        var rows = [];

        DataTable.addColumns = function(){
            var i, length = arguments.length;

            for(i=0;i<length;i++){
                columns.push(arguments[i]);
            }
        }

        DataTable.columnCount = function(){
            return columns.length;
        }

        DataTable.addRow = function(){
            var i, row = [], length = arguments.length;

            for(i=0;i<length;i++){
                row.push(arguments[i]);
            }

            rows.push(row);
        }

        DataTable.rowCount = function(){
            return rows.length;
        }

        DataTable.getData = function(){
            var json = [];
            var obj = {};
            var i,j, col, data;
            var rowLength = rows.length;
            var colLength = columns.length;
            
            for(i=0;i<rowLength;i++){
                obj = {};   //Explicity reset the object
                for(j=0;j<colLength;j++){
                    col = columns[j];   //Get the column name
                    data = rows[i][j];  //Get the value of the column at this row

                    obj[col] = data;    //Put into the object.
                }
                json.push(obj);         //Push this object onto the stack.
            }

            return json;
        }

     })(window.DataTable = window.DataTable || {});

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
     var items = ["Item 1","Item 2","Item 3","Item 4","Item 5"];
     var div1 = $("#div1");
     var select = $('<select>').attr('id','items');
     $.each(items, function(index, value) {   
          select.append($('<option>', { value : index }).text(value)); 
     });
     var button = $('<button>').attr('class','btn btn-primary').attr('id','pressMeBtn').text('Press Me');
     div1.append(select).append(button);
     //Bind an event to the button.
     div1.on('click','button#pressMeBtn',function(e){
        console.log($('select#items option:selected').val()+":"+$('select#items option:selected').text());
     });

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
     var anchor1 = $('a.link');         
     console.log(anchor1.text());
     var anchor2 = $('div.buzz a');     
     console.log(anchor2.text());
     var anchor3 = $('div#fizz a');     
     console.log(anchor3.text());
     var anchor4 = $('div#foo a');      
     console.log(anchor4.text());
     var anchor5 = $('div.bar a');
     console.log(anchor5.text());


     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
