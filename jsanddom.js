     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return (a / b);
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         return str.split('').reverse().join('');
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
          return Math.min.apply(Math, values);
          //return Math.min(...values)
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
        var seen = {};
        var out = [];
        var len = values.length;
        var j = 0;
        for(var i = 0; i < len; i++) {
            var item = values[i];
            if(seen[item] !== 1) {
                seen[item] = 1;
                out[j++] = item;
            }
        }
        return out;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
        var output = [], current = '';
        
        for(var i=1; i<=100; i++)
        {
            current = getFizzBuzzFor(i);
            output.push(current);
            console.log(current);
        }
        return output;
     }

     function getFizzBuzzFor(i) {
         return (i%3 ? '' : 'Fizz') + (i%5 ? '' : 'Buzz') || i;
     }
     
     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         var ftr = fruitsToRemove.length;
         var f = fruits.length;
         if (f) {
             if (ftr) {
                 for (var i=0; i < ftr; i++) {
                     var fruit = fruitsToRemove[i];
                     var idx = $.inArray(fruit, fruits);
                     if (idx !== -1) {
                         fruits.splice(idx, 1);
                     }
                 }
             }
         }
         return fruits;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
        if ($.isArray(toPush)) {
            array.push.apply(array, toPush);        
        }
        else {
            array.push(toPush);
        }
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         var emptyArray = [];
         if (sourceStr.length) {
             return sourceStr.split(',');
         }
         return emptyArray;
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
        var total = 0;
        for (var i=0; i<arguments.length; i++) {
            total += arguments[i];
        }
        return total;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         //See if sourceStr contains any non-whitespace chars
         if (sourceStr == null) return true;
         return !(/\S/.test(sourceStr));
     }

     // write an example of a javascript closure
    function closureExample() {
        var num = 10;
        var showNum = function() { alert(num); }
        num++;
        return showNum;
    }

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     
     var peopleCollection = 
     {"people": [
         {
            "first-name": "Gary",
            "last-name": "Hillard",
            "city": "Indianapolis",
            "state": "Indiana",
            "zip": "46217",
            "phones": [
                {"phone-type": "mobile", "phone-num": "111-222-3333"},
                {"phone-type": "work", "phone-num": "222-333-4444"}
            ]
         },
         {
            "first-name": "Joe",
            "last-name": "Smith",
            "city": "Greenwood",
            "state": "Indiana",
            "zip": "46142",
            "phones": [
                {"phone-type": "mobile", "phone-num": "333-444-5555"},
                {"phone-type": "work", "phone-num": "444-555-6666"}
            ]
         },
         {
            "first-name": "Chuck",
            "last-name": "Testa",
            "city": "Taxidermy",
            "state": "Colorado",
            "zip": "89724",
            "phones": [
                {"phone-type": "home", "phone-num": "555-777-8888"}
            ]
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

    function myDataTable() {
        var cols = [];
        var rows = [];
        this.addRow = function() {
            var curRow = [];
            for (var i = 0; i < arguments.length; i++) {
                curRow.push(arguments[i]);
            }
            rows.push(curRow);
        };
        this.addColumns = function() {
            for (var i = 0; i < arguments.length; i++) {
                cols.push(arguments[i]);
            }
        };
        this.getData = function () {
            var out = '{"rows":[';
            for (var r=0; r < rows.length; r++) {
                if (r>0) out += ',';
                out += '{';
                var curRow = rows[r]; //array
                for (var c=0; c < cols.length; c++) {
                    if (c>0 && c<cols.length) out += ',';
                    out += '"' + cols[c] + '":"' + curRow[c] + '"';
                } 
                out += '}';
            }
            out += ']}';
            return out;
            //console.log(out);
        };
    }
    
     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
     function createSelect() {
        var div1 = $('#div1');
        var select = document.createElement('select');
        var selectId = 'mySelect';
        select.id = selectId;
        
        var btn = document.createElement('button');
        btn.textContent = "Click Me";
        btn.addEventListener("click", function() {
            var elt = document.getElementById(selectId);
            console.log(elt.options[elt.selectedIndex].text + ' : ' + elt.options[elt.selectedIndex].value);
        });
        
        var option;

        option = document.createElement('option');
        option.value = 'value1';
        option.textContent = 'text1';
        select.appendChild(option);

        option = document.createElement('option');
        option.value = 'value2';
        option.textContent = 'text2';
        select.appendChild(option);

        option = document.createElement('option');
        option.value = 'value3';
        option.textContent = 'text3';
        select.appendChild(option);
        
        div1.append(select);
        div1.append(btn);
     }


     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
     function selectors() {
         var mylink = $("a:first")
         mylink = $(".link:first");
         mylink = $("a.link:first");
         mylink = $("[href]:first");
         mylink = $('a[href="#"]:first');
     }
     

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
     function createList() {
        var ul = document.getElementById("list1");
        var listData = ['Black', 'White', 'Yellow', 'Red', 'Green'];
        var li;
        
        for (var i=0; i < listData.length; i++) {
            li = document.createElement('li');
            li.appendChild(document.createTextNode(listData[i]));
            ul.appendChild(li);
        }
     }

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
     function checkUncheck() {
        var div = document.getElementById("foobar");
        for (var i=0; i < 5; i++ ) {
            var chk = document.createElement("input");
            chk.type = "checkbox";
            chk.id = "checkbox" + i;
            chk.className = "chk";
            chk.name = "checkbox" + i;
            chk.textContent = "checkbox" + i;
            div.appendChild(chk);
        }
        var href1 = document.createElement("a");
        var txt1 = document.createTextNode(" Check All ");
        href1.addEventListener("click", function() {
            $('.chk').attr('checked','checked');
        });
        href1.appendChild(txt1);
        div.appendChild(href1);
           
        var href2 = document.createElement("a");
        var txt2 = document.createTextNode(" UnCheck All ");
        href2.addEventListener("click", function() {            
             $('.chk').removeAttr('checked');
        });
        href2.appendChild(txt2);
        div.appendChild(href2);
     }
     
