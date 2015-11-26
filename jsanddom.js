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
       return Math.min.apply(Math, values);
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         var result = [];
            //JQuery
            $.each(values, function(i, e) {
                if ($.inArray(e, result) == -1){
                  result.push(e);
                } 
            });
         return result;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         for (var x=1; x <= 100; x++){
            console.log(x);
            if( x % 3 == 0 ){
               console.log("Fizz");
            }
            if( x % 5 == 0 ){
                console.log("Buzz");
            }
            if( ( x % 3 == 0 ) && ( x % 5 == 0 ) ){
               console.log("FizzBuzz");
            }
        }
        return true;
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         for (var i = 0; i < fruits.length; i++) {
                for (var j = 0; j < fruitsToRemove.length; j++) {
                   if (fruits[i] == fruitsToRemove[j]) {
                     fruits.splice(i,1);
                     return fruits;
                   }
                }
         }
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         for(var i=0; i<toPush.length; i++){
            array.push(toPush[i]);
         }
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         var splitString = [];
         if(sourceStr !== null && sourceStr !== undefined && sourceStr !== ''){
             splitString = sourceStr.split(" ");
             return splitString;
         }
         else{
             return splitString;
         }
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
        var sum = 0;
        for (var i=0; i < arguments.length; i++) {
         sum += arguments[i];
        }
        return sum;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
        return sourceStr.indexOf(' ') >= 0;
     }

     // write an example of a javascript closure

    function makeCounter() {
            var count = 0;//Here, we’re putting the count variable in
                          //the function makeCounter. So now count
                          //is a local variable, not a global variable.
        function counter() {  //Now, we create the counter
                              //function, which increments
                              //the count variable.
            count = count + 1;
            return count;
        }
       return counter; //This is the closure. It holds count in its environment
    }

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
/*{
    "people": {
           {
                "firstname": "x1",
                "LastName":"y1",
                "City":"city1",
                "State":"state1",
                "Zip":"zip1",
                "PhoneNumbers": {
                    "home":"123",
                    "work":"345",
                    "mobile":"544"			
                }   
           },
               {
                "firstname": "x2",
                "LastName":"y2",
                "City":"city2",
                "State":"state2",
                "Zip":"zip2",
                "PhoneNumbers": {
                    "home":"1223",
                    "work":"3425",
                    "mobile":"5424"			
                }   
           },
               {
                "firstname": "x3",
                "LastName":"y3",
                "City":"city3",
                "State":"state3",
                "Zip":"zip3",
                "PhoneNumbers": {
                    "home":"12233",
                    "work":"34325",
                    "mobile":"53424"			
                }   
           }
        
    }
}*/

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

function DataTable() {
    var columns = [];
    var rows = [];
    this.addRow = function(){
        for (var i=0; i < arguments.length; i++) {
            rows.push(arguments[i]+columns[i]);
        }
    };
    this.addColumn = function(){
        for (var i=0; i < arguments.length; i++) {
          columns.push(arguments[i]);
        }
    };
    this.getData = function(){
        return new DataTable();
    };
    
    this.getColumns = function(){
      return columns;
    }
    
    this.getRows = function(){
      return rows;
    }
}

var obj = new DataTable();
obj.addColumn("c1","c2","c3");
obj.addRow("r1","r2","r3");
console.log(obj.getColumns());
console.log(obj.getRows());

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
$(document).ready(function () {
    var myDiv = document.getElementById("div1");
    //Create array of options to be added
    var array = ["value1","value2","value3","value4"];

    //Create and append select list
    var selectList = document.createElement("select");
    selectList.setAttribute("id", "mySelect");
    myDiv.appendChild(selectList);
    var b = document.createElement("button");
    b.setAttribute("id", "selectButton");
    b.style.width = '50px';
    b.style.height = '10px';
    myDiv.appendChild(b);

    //Create and append the options
    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", array[i]);
        option.text = array[i];
        selectList.appendChild(option);
    }
    
    $('#selectButton').click(function() {
      console.log($('#mySelect').val());
    });

});



     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
      console.log($("div.buzz.link"));
      console.log($("a"));
      console.log($("div#fizz em"));
      console.log($(".buzz,.fizz.link"));

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
$(document).ready(function () {
    var items = document.getElementById("list1");
    var itemArr = ['item1', 'item2', 'item3', 'item4', 'item5'];
    for (var i = 0; i < itemArr.length; i++ ) {
        var item = document.createElement("li");
        item.innerHTML = itemArr[i];
        items.appendChild(item);
    }
});

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
$(document).ready(function () {
      $('#foobar').append('<input type="checkbox" id="myCheckbox1" />');
      $('#foobar').append('<input type="checkbox" id="myCheckbox2" />');
      $('#foobar').append('<a id="mylink1">link1</a>');
      $('#foobar').append('<a id="mylink2">link2</a>');
    
    $("#mylink1").on('click', function () {
        document.getElementById("myCheckbox1").checked = true;
        document.getElementById("myCheckbox2").checked = true;
    });

    $("#mylink2").on('click', function () {
            document.getElementById("myCheckbox1").checked = false;
            document.getElementById("myCheckbox2").checked = false;
    });
});

