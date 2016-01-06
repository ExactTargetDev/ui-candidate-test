     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         // FILL THIS IN
         return str.split("").reverse().join("");
     }


     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         // FILL THIS IN
         return Math.min.apply(Math,values);
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         // FILL THIS IN
         var arrayRemoval = values.filter(function(dup,pos){
            return values.indexOf(dup) == pos;
        });
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         // FILL THIS IN
         for(i = 1; i <= 100; i++){
            if (i % 3 === 0) {
                if (i % 5 === 0) {
                    console.log("FizzBuzz");
                }else{
                    console.log("Fizz");
                }
                    }else if (i % 5 === 0) {
                        console.log("Buzz");
                    }else{
                        console.log(i);
                }
            }
         }
         doFizzBuzz();


     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         // FILL THIS IN
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         // FILL THIS IN
         if (typeof toPush === 'string' || typeof toPush === 'number' || typeof toPush === 'boolean') {
            array.push(toPush);
         }
         else if (Array.isArray(toPush)) {
            array.concat(toPush);
         }

         return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         // FILL THIS IN
         if (typeof arguments === 'undefined') {
            sourceStr = [];
         }
         if (typeof arguments !== null) {
            return sourceStr.split(" ");
         }
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         // FILL THIS IN
         var n = 0;
         for(i = 0; i < arguments.length; i++){
            n += arguments[i];
         }

         return n;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         // FILL THIS IN
         return /\s/g.test(sourceStr);
     }

     // write an example of a javascript closure

    function displayMessage(priceBefore,priceAfter){
        var message = "The total price of your item before taxes will be";

        function itemPrice(){
            return message + " " + priceBefore + " and " + priceAfter + " after taxes.";
        }

        return itemPrice();
     }

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)

          var peopleText = {
                        "people":
                                [
                                    {
                                        "firstName": "Marcus",
                                        "lastName": "Warnsley",
                                        "city": "Indianapolis",
                                        "state": "Indiana",
                                        "zip": 46220,
                                        "phone": 
                                        [
                                            {
                                                "home": 2604030877,
                                                "work": 3174023567,
                                                "mobile": 2604030877
                                            }
                                        ]
                                    },
                                    {
                                        "firstName": "Sales",
                                        "lastName": "Force",
                                        "city": "Indianapolis",
                                        "state": "Indiana",
                                        "zip": 46204,
                                        "phone": 
                                        [
                                            {
                                                "home": 9999999999,
                                                "work": 5555555555,
                                                "mobile": 1111111111
                                            }
                                        ]
                                    }
                                ]
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
            rows.push(ritem);
        }
        this.addColumns = function(){
            columns.push(ritem);
            }
        this.getData = function(){
            var dataTable = DataTable;
            return JSON.stringify(dataTable);
        }
     }

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.

     (function createSelectElement(){
        var items = ['Colts','Patriots','Broncos','Bengals','Dolphins'],
            createSelect = document.createElement("select"),
            createButton = document.createElement("button"),
            div = document.getElementById("div1");
        div.appendChild(createSelect);
        div.appendChild(createButton);

        createButton.style.marginLeft = "10px";
        createButton.style.height = "25px";
        createButton.innerHTML = "CLICK ME!";

        for(var i = 0; i < items.length; i++){
            var opt = document.createElement("option");
            opt.value = items[i];
            opt.innerHTML = items[i];
            createSelect.appendChild(opt);
        }

        createButton.addEventListener("click", function(){
            var optText = createSelect.options[createSelect.selectedIndex].text;
            console.log(optText);
        });

     })();

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".

     function addArrayToList(){
        var listArray = ["Apple","Banana","Orange","Strawberry","Kiwi"],
            ul = document.getElementById("list1");

        for(var i = 0; i < listArray.length; i++){
            var createList = document.createElement("li");
            createList.innerHTML = listArray[i];
            ul.appendChild(createList);

        }
     }

     addArrayToList();

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)

     (function addLinkBoxes(){
        var boxMax = 5,
            linkMax = 2,
            count = 0,
            div = document.getElementById("foobar");

       for(var i = 0; i < boxMax; i++){
        var box = document.createElement("input");
        box.setAttribute("type","checkbox");
        box.setAttribute("class","mycheckbox");
        div.appendChild(box);
       }

       for(var i = 0; i < linkMax; i++){
        var link = document.createElement("a");
        link.setAttribute("href","#");
        link.setAttribute("class","links");
        link.innerHTML = "link" + " " + (count += 1);
        div.appendChild(link);
       }

       var link1 = document.getElementsByClassName("links")[0];

       var link2 = document.getElementsByClassName("links")[1];

       var checkClass = document.getElementsByClassName("mycheckbox");

       link1.addEventListener("click", function(){
        for(var i = 0; i < checkClass.length; i++){
            checkClass[i].checked = true;
        }
       });

       link2.addEventListener("click", function(){
        for(var i = 0; i < checkClass.length; i++){
            checkClass[i].checked = false;
        }
       });

     })();


     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.

     $(".link")
     $("#fizz .link")
     $("#fizz a")
     $(".buzz a")
     $("#fizz + a")
     $("#foo #fizz .link")
     $(".bar .buzz .link")
     $("#foo .buzz .link")
