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
        //sanitize for numbers
         if (values.length === 0) return null;
         return Math.min.apply(null, values)
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         if (values.length === 0) return [];
         var result = []
         for(var i=0; i<values.length; i++){
            if(result.indexOf(values[i]) < 0)
                result.push(values[i]);
         }

         return result
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
        var output;
         for (var i = 1; i <= 100; i++){
            output = '';
            if(i%3 === 0)
                output += 'Fizz';
            if(i%5 === 0)
                output += 'Buzz';
            console.log(output || i);
         }

     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
        if(fruitsToRemove === undefined || fruitsToRemove.length === 0) return fruits;

         for(var i=0; i<fruits.length; i++){
            if(typeof fruits[i] !== "string")
                return;

            if(fruitsToRemove.indexOf(fruits[i]) !== -1){
                fruits.splice(i, 1);
            }

         }
         return fruits
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
        if (toPush.constructor === Array){
            for(var i=0; i<toPush.length; i++)
                array.push(toPush[i]);
        } else {
            array.push(toPush)
        }
        return array
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         if(sourceStr === "") return []
         return sourceStr.split(',')
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         var sum=arguments[0];
         for(var i=1; i < arguments.length; i++){
            sum += arguments[i];
         }
         return sum;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         for(var i=0; i<sourceStr.length; i++){
            if(sourceStr.charAt(i) !== " ")
                return false;
         }
         return true;
     }

     function makeNames (firstName) {
        var nameIntro = "Hello ";
        // this inner function has access to the outer function's variables, including the parameter​
       function lastName (giveLastName) {
            return nameIntro + firstName + " " + giveLastName;
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
     var collection = {
        "data" : [
        {
            "fname": "Neil",
            "lname" : "Lobo",
            "city" : "San Francisco",
            "state" : "CA",
            "zip" : 94110,
            "numbers" : {
                "home" : "123-456-789",
                "mobile" : "423-859-9933",
                "work" : "+19-922-049984445"
            }
        },
        {
            "fname": "Alex",
            "lname" : "Dsouza",
            "city" : "San Mateo",
            "state" : "CA",
            "zip" : 92420,
            "numbers" : {
                "home" : "123-111-789",
                "mobile" : "423-859-333",
                "work" : "+122-0344445"
            }
        },
        {
            "fname": "Rohit",
            "lname" : "Date",
            "city" : "Mountain View",
            "state" : "CA",
            "zip" : 94040,
            "numbers" : {
                "home" : "123-425329",
                "mobile" : "42-859933",
                "work" : "+166044284445"
            }
        }
     ]}


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

     //did not understand  the getData method, leaving aside for now
     function DataTable(){
        var columns = [];
        var rows = [];
      }

        DataTable.prototype.addRows = function(items){
            for(var i=0; i<items.length; i++){
                rows.push(item[i]);
            }
        }


        DataTable.prototype.addColumns = function(items){
            for(var i=0; i<items.length; i++){
                columns.push(item[i]);
            }
        }

        DataTable.prototype.getData = function(){
            var obj = {};
            for(var i=0; i < columns.length; i++){
                for(var j=0; j<rows.length; j++){
                    obj[columns[i]][j] = rows[j];
                }
            }
            return obj;
        }


$(document).ready(function(){

    var favorites = [{"id" : 1, "name" : "Chocolate" }, {"id" : 2, "name" : "Strings" }, {"id" : 3, "name" : "Kittens" }]

            // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
        $.each(favorites, function(){
            $("#div1").append(
                $('<label />', {
                    'text': this.name
                }).append(
                    $('<input />', {
                        type : 'radio',
                        name : 'radioOptions',
                        id : this.name

                    })
               )
          );
       });

        $("#div1").append('<button id="select"> Select </button>');
        $("#select").click(function(){
            var option = $("input[name=radioOptions]:checked")
            if(option[0])
               console.log("The option selected was ",option[0].id);
            else
                console.log("No option selected");
        });

        // Write 5 different jQuery selectors to retrieve the
        // sample anchor in the markup below.

        console.log("Method 1: ",$("#fizz").children().first()[0].innerHTML);

        console.log("Method 2: ",$("div div a")[0].innerHTML);

        console.log("Method 3: ",$(".link")[0].innerHTML);

        console.log("Method 4: ",$(".bar .buzz .link")[0].innerHTML);

        console.log("Method 5: ",$("a")[0].innerHTML);




     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
        var arrayItems = []
        for(var i=1; i<=5; i++){
            arrayItems.push("Item "+ i);
        }
        $.each(arrayItems, function(index, item){
            $("#list1").append(
                    $('<li>'+item+'</li>')
                )
       });

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)

//creating four checkboxes and appending them
        for(var i=1; i<=4; i++){
            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.setAttribute('class', 'checkboxes')


            var label = document.createElement('label')
            label.htmlFor = "Checkbox" + i;;
            label.appendChild(document.createTextNode('Checkbox ' + i));

            document.getElementById('foobar').appendChild(checkbox);
            document.getElementById('foobar').appendChild(label);

           }

           var newlink = document.createElement('a');
           newlink.onclick = function(){
             var boxes = document.getElementsByClassName('checkboxes');
             for (var i=0; i<boxes.length; i++){
                boxes[i]["checked"] = true;
             }
           };

         newlink.innerHTML = " Check All "
         newlink.setAttribute('class', 'checks');
         document.getElementById('foobar').appendChild(newlink);

        var newlink2 = document.createElement('a');
        newlink2.innerHTML = " Uncheck All "
        newlink2.setAttribute('class', 'checks');
        newlink2.onclick = function(){
            var boxes = document.getElementsByClassName('checkboxes');
            for (var i=0; i<boxes.length; i++){
                boxes[i]["checked"] = false;
            }
        };
        document.getElementById('foobar').appendChild(newlink2);


});
