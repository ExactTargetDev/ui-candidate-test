



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
        var tmp = 0;
         for (var i = 0; i < values.length; i++) {
            if (tmp <= i ) {
                tmp = i;
            }
         }
         return tmp;
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
        var outputArray =[];

        for( var i = 0; i < values.length; i++) {
            if (($.inArray(values[i], outputArray)) == -1) {
                outputArray.push(values[i]);
            }
        }
        return outputArray;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         var count = 1;
         while (count < 101) {
             if ((count % 3 === 0 ) && (count % 5 == 0)){
                console.log('FizzBuzz');
             } else if (count % 3 == 0) {
                console.log('Fizz');
             } else if (count % 5 == 0) {
                console.log('Buzz');
             } else
             console.log(count);
             count++;
         }
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         for (var i=0; i < fruitsToRemove.length; i++) {
            for (var j=0; j < fruits.length; j++) {
                if (fruitsToRemove[i] == fruits[j]) {
                    fruits.splice(j,1);
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
         if (toPush instanceof Array) {
            return array.push.apply(toPush);
         } else {
            return array.push(toPush);
         }
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
        if (sourceStr === '') {
            return '';
        }
         return sourceStr.split(' ').join(', ');
    }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         var sum = 0;
         for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
         }

         return sum;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         var re = new RegExp('\\S');
         if (sourceStr.match(re)) {
            return false;
        } else {
            return true;
        }
     }


     // write an example of a javascript closure
     //
     //
     function myAdd(x) {
        return function(z) {
            return x + y;
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

     var People = {
        firstName: "value",
        lastName: "value",
        city: "value",
        state: "value",
        zip: 46220,
        phone: {
            home: 5555555555,
            work: 5555555555,
            mobile: 5555555555
        }
     };

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
     //
     var DataTable = {


        function addRows() {

        },

        function addColumns() {

        }

        function getData() {

        }

        var rows =  [''];
        var columns = [''];
     }

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
$(document).ready(function(){


var myDiv = document.getElementById("div1");
        //Create array of options to be added
var cars = ["Camaro","Beetle","Prius","Charger", "Shelby Mustang"];
    //Create and append select list
var selectList = document.createElement("select");
selectList.setAttribute("id", "mySelect");
selectList.setAttribute("name", "mySelect");

myDiv.appendChild(selectList);
    //Create and append the first option
    var option = document.createElement("option");
    option.setAttribute("value", "");
    option.text = '- Select -';
    selectList.appendChild(option);
    // add cars to select list
for (var i = 0; i < cars.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", cars[i]);
    option.text = cars[i];
    selectList.appendChild(option);
}
    // create button
var btn = document.createElement("input");
btn.setAttribute('id','callfunc');
btn.setAttribute('type','button');
btn.setAttribute('value','Submit');
myDiv.appendChild(btn);
$('#callfunc').on('click', function(e){
    e.preventDefault();
    console.log(document.getElementById('mySelect').value);
});

/**********************************************/

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
    $(".link");
    $("#fizz.buzz");
    $("#foo.bar #fizz.buzz");
    $(".link a");
    $("#fizz.buzz .link");

/**********************************************/

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".

    var listArray = ['Bread', 'Milk', 'Cheese', 'Sardines', 'Beer']; //create array of list items
    var listEl = document.getElementById("list1");
    //Create and append ul list
    for (i = 0; i < listArray.length; i++) {
        var litem = document.createElement("li");
        litem.innerHTML = listArray[i];
        listEl.appendChild(litem);
    }

/**********************************************/


     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)

//Create and add checkboxes
    var chk= document.getElementById("foobar");
//Create array of chk box names to be added
    var array = ["red", "green", "yellow", "blue"];
    var newform = document.createElement('form');
    newform.name = 'chkgroup';
    chk.appendChild(newform);


    for (i = 0; i < array.length; i++) {
       var addInput = document.createElement('input');
       addInput.setAttribute('type', 'checkbox');
       addInput.setAttribute('id', 'chk');
       addInput.name='switch';
       newform.appendChild(addInput);
       var label=document.createElement('label');
       label.htmlFor = "chk";
       label.appendChild(document.createTextNode(array[i]));
       newform.appendChild(label);
    }

    var addbutton = document.createElement('button');
    addbutton.setAttribute('id', 'enable');
    addbutton.name = 'enable';
    newform.appendChild(addbutton);
    addbutton.innerHTML="Enable";

    addbutton = document.createElement('button');
    addbutton.setAttribute('id', 'disable');
    addbutton.name = 'disable';
    newform.appendChild(addbutton);
    addbutton.innerHTML="Disable";

    $("#enable").click(function(e) {
        e.preventDefault();
        var selectCheck = document.getElementsByTagName('input');
        for (var i = 0; i < selectCheck.length; i++ ) {
            selectCheck[i].checked = true;
        }
    });

    $("#disable").click(function(e){
        var selectCheck = document.getElementsByTagName('input');
        for (var i = 0; i < selectCheck.length; i++ ) {
            selectCheck[i].checked = false;
        }
    });

});
// END $(document).ready()