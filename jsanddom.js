     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         return str.split("").reverse().join("")
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         return Math.min.apply(Math, values)
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
        var distinctValues = [];

        distinctValues = values.filter(function(elem, pos) {
          return values.indexOf(elem) == pos;
        });

        return distinctValues
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
        for(var i = 0; i <= 100; i++){
            if(i%15 === 0){
                console.log("FizzBuzz");
                continue;
            } else if(i%3 === 0){
                console.log("Fizz");
                continue;
            } else if(i%5 === 0){
                console.log("Buzz");
            }
        }
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
        for(var i = 0; i < fruits.length; i++){
            for(var j = 0; j < fruitsToRemove.length; j++){
                if(fruits[i] === fruitsToRemove[j]){
                    fruits.splice(i, 1);
                }
            }
        }
        return fruits
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
        if(Object.prototype.toString.call(toPush) === "[object Array]"){
            array.push.apply(array, toPush);
        } else {
            array.push(toPush);
        }
        return array
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
        if(!sourceStr){
            return []
        } else {
            return sourceStr.split(",")
        }
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
        var args = arguments[0],
            sum = 0;

        for(var i=0; i < args.length; i++){
            sum += args[i];
        }

        return sum
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
        if (/\S/.test(sourceStr)){
            return false;
        } else {
            return true;
        }
     }

     // write an example of a javascript closure
     function sayHello(hello){
        return function sayMyName(name){
            return hello + " " + name
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
    var people = {
        "First": {
            "firstName": "Jeremy",
            "lastName": "Wagner",
            "city": "Indianapolis",
            "state": "IndianaGeorgia",
            "zip": 46204,
            "contact": {
              "home": "812-528-4875",
              "work": "812-528-4875",
              "mobile": "812-528-4875"
            }
          },
          "TSecond": {
            "firstName": "Monette",
            "lastName": "Wagner",
            "city": "Indianapolis",
            "state": "Indiana",
            "zip": 46204,
            "contact": {
              "home": "812-528-4875",
              "work": "812-528-4875",
              "mobile": "812-528-4875"
            }
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
        this.columns = [];
        this.rows = [];

        // add rows
        this.addRows = function(){
            for(var i = 0; i < arguments.length; i++){
              this.rows.push(arguments[i]);
            };
        };

        // add columns
        this.addColumns = function(){
            for(var i = 0; i < arguments.length; i++){
                this.columns.push(arguments[i]);
            };
        }

        // get data
        this.getData = function(){
            return {
                "rows": rows,
                "columns": columns
            };
        };

     }

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
    function createSelect(){
        var div = document.getElementById("div1");
        var select = document.createElement("select");
        select.id = "select1"

        var selectOptions = [1, 2, 3, 4, 5];
        for(var i = 0; i < selectOptions.length; i++){
          var option = document.createElement("option");
          option.value = selectOptions[i];
          option.text = selectOptions[i];
          option.setAttribute("name", "Option " + selectOptions[i]); 
          select.appendChild(option);
        }

        var button = document.createElement("button");
        button.id = "button1";
        button.innerHTML = "Log Name And Value";
        button.addEventListener("click", function() {
           var selectedOption = select[select.selectedIndex];
           console.log("Name: ", selectedOption.getAttribute("name"), "  Value: ", selectedOption.value);
        });

        div.appendChild(select);
        div.appendChild(button);
    }

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
    $("#foo a");
    $("#fizz a");
    $(".bar a");
    $(".buzz a");
    $("a");

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
     function createFiveItems(){
        var ul = document.getElementById("list1");
        for(var i = 0; i < 5; i++){
            var li = document.createElement("li");
            li.innerText = i;
            ul.appendChild(li);
        }
     }

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
    function addCheckboxes(){
        var foobar = document.getElementById("foobar");
        var checkdiv = document.createElement("div");
        var uncheckdiv = document.createElement("div");

        for(var i=0; i < 5; i++){
           var checkbox = document.createElement("input");
           checkbox.setAttribute("type", "checkbox");
           checkbox.id = "checkbox-" + i;
           foobar.appendChild(checkbox);
        }

        var check = document.createElement("a");
        check.innerHTML = "Check All";
        check.href = "#foobar";
        check.addEventListener("click", function(){
            for(var j=0; j<5; j++){
                var cb = document.getElementById("checkbox-" + j);
                cb.checked = true;
            }
        })

        var uncheck = document.createElement("a");
        uncheck.innerHTML = "Uncheck All";
        uncheck.href = "#foobar";
        uncheck.addEventListener("click", function(){
            for(var k=0; k<5; k++){
                var cb = document.getElementById("checkbox-" + k);
                cb.checked = false;
            }
        })

        foobar.appendChild(checkdiv);
        checkdiv.appendChild(check);
        foobar.appendChild(uncheckdiv);
        uncheckdiv.appendChild(uncheck);

    }