// Example unit test function
function divide( a, b ) {
    // To see the test pass, uncomment the following line
    return a / b;

}

// Write a function that takes a single argument (a string) and returns the string reversed.
function reverseString(str) {
    // FILL THIS IN

    return str.split('').reverse().join('');

}

// Write a function that takes an array of numbers and returns the minimum value
function findMinValue(values) {
    // FILL THIS IN
    return values.sort()[0]
}

// Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
function findDistinctValues(values) {
    // FILL THIS IN
    var unique=values.filter(function(itm,i,values){
        return i==values.indexOf(itm);

    });

   return unique;

}

// Write a function that logs the numbers from 1 to 100 to the console.
// For multiples of three print "Fizz" instead of the number.
// For multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
function doFizzBuzz() {
    // FILL THIS IN

    for (var i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }


}

// You have a master array of strings, where each element is a fruit name.
// You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
// For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
// Write the function that will remove the values contained in fruitsToRemove from the array fruits.
function removeFruits(fruits, fruitsToRemove) {
    // FILL THIS IN

    for(var i = fruits.length-1; i >= 0; i--)
    {
        for(var j=0; j<fruitsToRemove.length; j++)
        {
            if (fruitsToRemove[j] == fruits[i])
            {
                fruits.splice(i,1);

            }
        }
    }
    return fruits;


}

// Write a function to push either a simple value or an array of values onto a specified array.
// For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
// If toPush is a simple value, it should be pushed onto array as an element.
// If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).


/* function splitListStrUsingComma(sourceStr) {
    console.log(sourceStr);
    return sourceStr ? sourceStr.split (',') : [];
}
var x=splitListStrUsingComma('');
console.log(x);*/


// Write a function that will take any number of arguments and return their sum
function sum() {
    // FILL THIS IN

    var sum, argLen = arguments.length;
    if (argLen > 0) {
        sum = 0;
        for (var i = 0; i < argLen; i++) {
            sum += arguments[i];
        }
        console.log(argLen + " were passed and their sum is:");
    } else {
        sum = "No arguments passed";
    }
    console.log(sum);
    return sum;


}

// Write a function that will return true if a specified string consists of only whitespace.
function isOnlyWhitespace(sourceStr) {
    // FILL THIS IN

    if (sourceStr.indexOf(" ") !== -1)
    {
        return true;
    }else{
        return false;
    }
}

// write an example of a javascript closure

closureExample();

function closureExample() {
    var count;
    for (count = 1; count < 5; count++) {
        setTimeout(
            some(count), count * 1000);
    }
}

function some(count) {
    return function () {
        console.log("count = " + count);
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


var people = [{
    "first_name": "James",
    "last_name": "Smith",
    "city": "New York",
    "state": "NY",
    "zip": "70454",
    "phone_nums": [
        "909-100-1000",
        "312-332-2133",
        "234-123-3456"]
}, {
    "first_name": "Peter",
    "last_name": "Woz",
    "city": "New Jersey",
    "state": "NJ",
    "zip": "90323",
    "phone_nums": [
        "908-100-1000",
        "314-332-2133",
        "235-123-3456"]
}, {
    "first_name": "Sam",
    "last_name": "Paul",
    "city": "Los Angeles",
    "state": "CA",
    "zip": "97874",
    "phone_nums": [
        "608-100-1000",
        "614-332-2133",
        "835-123-3456"]
}];







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



function dataTable() {
    var columns=['column1', 'column2', 'column3'];
    var rows=['row1', 'row2', 'row3'];
}

var dataTable1 = new dataTable();

dataTable.prototype.addRows = function()
{
    alert ('addRows');
};
dataTable.prototype.addColumns = function()
{
    alert ('addColumns');
};
dataTable.prototype.getData = function()
{
    alert ('getData');
};


dataTable1.addRows();
dataTable1.addColumns();
dataTable1.getData();



// within div1, programatically create a
// SELECT element (with multiple items) and a button.
// when the button is clicked write out the name and value of the selected item to the console.

var listbox='<select id="clothing_options">';
listbox+='<option value="reddress">Red Dress</option>';
listbox+='<option value="bluedress">Blue Dress</option>';
listbox+='<option value="hairpin">Black Hair Pin</option></select>';

listbox+='<input type="button" value="click" class="butn"/>'

$('#div1').append(listbox);
var data;
$('#clothing_options').change(function(ev){

    data="value="+$('#clothing_options option:selected').val()+" "+"text="+$('#clothing_options option:selected').text();




});

$('.butn').click(function(){

    console.log(data);

});





// Write 5 different jQuery selectors to retrieve the
// sample anchor in the markup below.

$( document ).ready(function() {
    $("#fizz>a")
    $("#fizz>a")  //Second selector
    $(".link")		//Third Selector
    $("#foo>#fizz")  //Fourth selector
    $("#foo>#fizz>a")  //Fifth Selector
    console.log( 'ready!' );



    // Programatically create an array with 5 items.  Create a list item for each item in the array
    // and add the list items to the unordered list with an id of "list1".
    var obj = { one:1, two:2, three:3, four:4, five:5 };
    $.each( obj, function( i, v ) {
        $("#list1 li").eq(v-1).html(v);
    });

});
// Use javascript to add a list of checkboxes and 2 links
// to the div with an id of "foobar"
// When the first link is clicked, all the checkboxes should be checked (i.e. check all)
// When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)

function SelectAll() {
    var checkboxes = document.getElementsByTagName("input");
    for(i=0;i<checkboxes.length;i++) {
        if(checkboxes.item(i).attributes["type"].value == "checkbox") {
            checkboxes.item(i).checked = true;
        }
    }
}
function deSelectAll() {
    var checkboxes = document.getElementsByTagName("input");
    for(i=0;i<checkboxes.length;i++) {
        if(checkboxes.item(i).attributes["type"].value == "checkbox") {
            checkboxes.item(i).checked = false;
        }
    }
}


/*divide(20,45);
 // var x=[5,6,3,4,5,6,7,2,4];
 //findDistinctValues(x);

 splitListStrUsingComma("dfd");*/


function pushOntoArray(array,toPush) {
    if (toPush instanceof Array) {
        for (var elementNo = -1; ++elementNo < toPush.length;) {
            array.push (toPush [elementNo]);

        }
    } else {
        array.push (toPush);

    }
    console.log(array);
    return array;
}

var x=['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];

var y=["x","y"];
pushOntoArray(x,y);

