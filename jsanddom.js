// Example unit test function
function divide( a, b ) {
   // To see the test pass, uncomment the following line
   return a / b;
}

// Write a function that takes a single argument (a string) and returns the string reversed.
function reverseString(str) {
    var rev = '';
    for(var i = str.length-1; i >= 0; i--){
        rev += str[i];
    }
    return rev;
}

// Write a function that takes an array of numbers and returns the minimum value
function findMinValue(values) {
    return Math.min.apply(this, values);
}

// Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
function findDistinctValues(values) {
    var read = {};
    for(var i=values.length-1; 0 <= i; i--){
        var val = values[i];
        if(read[val] === true){
            values.splice(i,1);
        }
        read[val] = true;
    }
    return values;
}

// Write a function that logs the numbers from 1 to 100 to the console.
// For multiples of three print "Fizz" instead of the number.
// For multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
function doFizzBuzz() {
    for(var i=1; i <= 100; i++){
        if(i%15 === 0){
            console.log("FizzBuzz");
        }
        else if(i%5 === 0){
            console.log("Buzz");
        }
        else if(i%3 === 0){
            console.log("Fizz");
        }
    }
}

// You have a master array of strings, where each element is a fruit name.
// You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
// For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
// Write the function that will remove the values contained in fruitsToRemove from the array fruits.
function removeFruits(fruits, fruitsToRemove) {
    var remove = {};

    for(var i=0; i < fruitsToRemove.length; i++){
        remove[fruitsToRemove[i]] = true;
    }

    for(var i=fruits.length-1; 0 <= i; i--){
        var val = fruits[i];
        if(remove[val] === true){
            fruits.splice(i,1);
        }
    }

    return fruits;
}

// Write a function to push either a simple value or an array of values onto a specified array.
// For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
// If toPush is a simple value, it should be pushed onto array as an element.
// If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
function pushOntoArray(array, toPush) {
    // TODO IE 8
    if(Array.isArray(toPush)){
        array.push.apply(array, toPush);
    }
    else{
        array.push(toPush);
    }

    return array;
}

// Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
function splitListStrUsingComma(sourceStr) {
    return sourceStr.length > 0 ? sourceStr.split(',') : [];
}

// Write a function that will take any number of arguments and return their sum
function sum() {
    var sum = 0;
    for(var i=0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

// Write a function that will return true if a specified string consists of only whitespace.
function isOnlyWhitespace(sourceStr) {
    return sourceStr.length > 0 && sourceStr.trim().length === 0;
}

// write an example of a javascript closure
function closureExample(someParam){
    var someClosureVar = "I can't remember!";

    return function(){
        console.log("Do you suffer from long term memory loss?..... " + someClosureVar);
    };
}

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
        "firstName": "Mohammed",
        "lastName": "Siddeeq",
        "city": "Indianapolis",
        "state": "IN",
        "zip": "46236",
        "phoneNumbers": [
            {
                "type": "home",
                "number": 3178281111
            },
            {
                "type": "work",
                "number": 3178282222
            },
            {
                "type": "mobile",
                "number": 3178283333
            }
        ]
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
// .addRows('value1A', 'value1B', 'value1C');
// .addRows('value2A', 'value2B', 'value2C');
var DataTable = function(){
    var columns = [];
    var rows = [];

    // TODO Format Rows Properly
    this.addRows = function(){
        for(var i=0; i < arguments.length; i++){
            rows.push(arguments[i]);
        }
    };

    this.addColumns = function(){
        for(var i=0; i < arguments.length; i++){
            columns.push(arguments[i]);
        }
    };

    this.getData = function(){
        return {
            "rows": rows,
            "columns": columns
        };
    };

    return this;
};

// within div1, programatically create a
// SELECT element (with multiple items) and a button.
// when the button is clicked write out the name and value of the selected item to the console.
var div = document.getElementById("div1");
var select = document.createElement("select");
var options = [1,2,3,4,5];
var button = document.createElement("button");
for(var i=0; i < options.length; i++){
   var option = document.createElement("option");
   option.value = i;
   option.setAttribute("name", "option" + i);
   option.textContent = "Option " + options[i];
   select.appendChild(option);
}
button.addEventListener("click", function() {
   var selectedOption = select[select.selectedIndex];
   console.log("Name:: ", selectedOption.getAttribute("name"), "  Value:: ", selectedOption.value);
});
div.appendChild(select);
div.appendChild(button);


// Write 5 different jQuery selectors to retrieve the
// sample anchor in the markup below.
$("a");
$(".link");
$("[href]");
$("#fizz>:eq(0)");
$(".buzz>:eq(0)");

// Programatically create an array with 5 items.  Create a list item for each item in the array
// and add the list items to the unordered list with an id of "list1".
var ul = document.getElementById("list1");
var arr = [1,2,3,4,5];
for(var i=0; i < arr.length; i++){
   var li = document.createElement("li");
   li.textContent = "List Item: " + arr[i];
   ul.appendChild(li);
}



// Use javascript to add a list of checkboxes and 2 links
// to the div with an id of "foobar"
// When the first link is clicked, all the checkboxes should be checked (i.e. check all)
// When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
var div = document.getElementById("foobar");
var checkboxElements = [];
var checkboxes = [1,2,3,4,5];
for(var i=0; i < checkboxes.length; i++){
   var checkbox = document.createElement("input");
   checkbox.value = i;
   checkbox.setAttribute("type", "checkbox");
   checkboxElements.push(checkbox);
   div.appendChild(checkbox);
}
var link1 = document.createElement("a");
var link2 = document.createElement("a");
link1.textContent = "Check All";
link2.textContent = "Uncheck All";
link1.addEventListener("click", function() {
   for(var i=0; i < checkboxElements.length; i++){
       if(!checkboxElements[i].checked)
           checkboxElements[i].checked = true;
   }
});
link2.addEventListener("click", function() {
   for(var i=0; i < checkboxElements.length; i++){
       if(checkboxElements[i].checked)
           checkboxElements[i].checked = false;
   }
});
div.appendChild(link1);
div.appendChild(link2);
