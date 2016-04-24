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
         return Math.min(...values);
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(arr) {
        var a = [];
        var l = arr.length;
        for (var i=0; i<l; i++)
            if (a.indexOf(arr[i]) === -1 )
                a.push(arr[i]);
        return a;
        
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz(buzzNumber) {
        var whatTheBuzz;
        var a = [];
         for (var i = 1; i <= buzzNumber; i++) {
            var f = i % 3 == 0;
            var b = i % 5 == 0;
            if(f && b){whatTheBuzz = "FizzBuzz"}
            else if(f){whatTheBuzz = "Fizz"}
            else if(b){whatTheBuzz = "Buzz"}
            else{whatTheBuzz = i}
            a.push(whatTheBuzz);
            console.log(whatTheBuzz);
        }
        return a;
     }

     doFizzBuzz(100);

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {

         fruits.forEach(function(fruitElement){
            fruitsToRemove.forEach(function(fruitRemoveElement){
                if(fruitElement == fruitRemoveElement){
                    fruits.splice(fruits.indexOf(fruitElement), 1);
                }
            });
            
         });
         return fruits;

     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {

         Array.isArray(toPush) ? toPush.forEach(function(element){ array.push(element) }) :  array.push(toPush);
         
         return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
        sourceStr === " " ? sourceStr = [] : sourceStr = sourceStr.split(",");
        
         return sourceStr;
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
        var argsAdd = 0;
        var i;
        if(arguments.length > 0){
            var argsLength = arguments.length;
            for (i=0; i < argsLength; i++) {
                argsAdd += arguments[i];
            }
        }
        return argsAdd;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
        var t = true;
        // hey! regular expressions. neat!
         /\S/.test(sourceStr) && sourceStr !=null ? t = false : t
         return t;
     }

     // write an example of a javascript closure

     
     //let's come back to this one
     function pushOntoArrayWithClosure(array, toPush) {

        return function lockThemArrays(){

         Array.isArray(toPush) ? toPush.forEach(function(element){ array.push(element) }) :  array.push(toPush);

        };

     }
     

   
     $(document).ready(function(){

        // within div1, programatically create a
        // SELECT element (with multiple items) and a button.
        // when the button is clicked write out the name and value of the selected item to the console.

        var a = 1;
        var text = "<select>";
        text += "<option value='harley'>Harley</option>";
        text += "<option value='suzuki'>Suzuki</option>";
        text += "<option value='bmw'>BMW</option>";
        text += "<option value='ducati'>Ducati</option>";
        text += "</select><button id='logButton'>Log Selection!</button>";
        $("#div1").append(text);
        $("#logButton").click(function(){
            console.log($("#div1 select").val() + " " + $("#div1 select option:selected").html());
        })

        // Write 5 different jQuery selectors to retrieve the
        // sample anchor in the markup below.

        $(".link")
        $("[href='#]")
        $("a.link")
        $("a:first")
        $("#fizz > a")

         // define a json object that represents a collection of people.
         // each person should have the following properties
         // - first name
         // - last name
         // - city
         // - state
         // - zip
         // - a collection of phone numbers (home, work, mobile)

          var peopleColl = {"people" : 
                [ 
                    { 
                        "first_name" : "Sam",
                        "last_name" : "Smith",
                        "city": "Austin",
                        "state" : "Texas",
                        "zip" : "12345",
                        "phone_numbers" : {
                            "home" : "123-456-789",
                            "work" : "123-456-789",
                            "mobile" : "123-456-789"
                        }
                    },
                 
                    { 
                        "first_name" : "Alison",
                        "last_name" : "Kippee",
                        "city": "Indianapolis",
                        "state" : "Indiana",
                        "zip" : "45678",
                        "phone_numbers" : {
                            "home" : "456-789-1011",
                            "work" : "456-789-1011",
                            "mobile" : "456-789-1011"
                        }
                    }
                ]
            }
            
                console.log(peopleColl.people[1].phone_numbers.home);
        

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

         // Programatically create an array with 5 items.  Create a list item for each item in the array
        // and add the list items to the unordered list with an id of "list1".

        //Let's do this one in straight javascript
        function addItemstoList(){

            var listOne = document.querySelector("#list1")
            var node;
            var textnode;
            var i;
            for ( i = 0; i < arguments.length; i++) {
                node = document.createElement("li");
                textnode = document.createTextNode(arguments[i]);
                if(textnode && listOne){
                node.appendChild(textnode);
                listOne.appendChild(node);
                }
            }
        }

        addItemstoList("dog", "cat", "mouse", 1, 3);

        // Use javascript to add a list of checkboxes and 2 links
         // to the div with an id of "foobar"
         // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
         // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)

// writing this one as a self-evoking function in pure javascript. I'll pas one arguments that is the number of checkboxes to be created. 
// then created a closure function that access the checkboxes array for the check/uncheck feature. Then call the closure function after the checkboxes are created.
         (function clickAndLink(listNumber){
            var fooDiv = document.querySelector("#foobar");
            var fooList = document.createElement("ul");
            var node;
            var checkers = [];
            var check1;
            var check2;

            function checkAndUncheck(){
                check1 = document.createElement("a");
                check2 = document.createElement("a");
                check1.href = "#"
                check2.href = "#"
                check1.innerHTML = "Check all boxes ";
                check2.innerHTML = "Uncheck all boxes";
                fooDiv.appendChild(check1);
                fooDiv.appendChild(check2);
                check1.addEventListener("click", function(){
                    checkers.forEach(function(value, index){
                        checkers[index].checked = true;
                    })
                })
                check2.addEventListener("click", function(){
                    checkers.forEach(function(value, index){
                        checkers[index].checked = false;
                    })

                })
            }

            for (var i = 0; i < listNumber; i++) {
                    node = document.createElement("li");
                    checkers[i] = document.createElement("input");
                    checkers[i].type = "checkbox";
                    node.appendChild(checkers[i])
                    fooList.appendChild(node);
            };
            if(fooDiv){
                fooDiv.appendChild(fooList);
                checkAndUncheck();
            }

            

         })(7);

});
     


     

     

     