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
    return Math.min.apply(Math, values);
}

// Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
function findDistinctValues(values) {
    var distinctArray = [];
    for (var i = 0; i < values.length; i++) {
       if (distinctArray.indexOf(values[i]) === -1) {
           distinctArray.push(values[i]);
       }
    }
    return distinctArray;
}

// Write a function that logs the numbers from 1 to 100 to the console.
// For multiples of three print "Fizz" instead of the number.
// For multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
function doFizzBuzz() {
    var msg = "";
    for(var i = 1; i <= 100; i++) {
        if (i % 5 === 0 && i % 3 === 0){
            msg ="FizzBuzz";
        }
        else if (i % 5 === 0) {
            msg = "Buzz";
        }
        else if (i % 3 === 0) {
            msg = "Fizz";
        }
        else {
            msg = i;
        }
        console.log(msg);
    }
    return true;
}

// You have a master array of strings, where each element is a fruit name.
// You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
// For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
// Write the function that will remove the values contained in fruitsToRemove from the array fruits.
function removeFruits(fruits, fruitsToRemove) {
    for (var i = 0; i < fruitsToRemove.length; i++) {
        if (fruits.indexOf(fruitsToRemove[i]) !== -1) {
            fruits.splice(fruits.indexOf(fruitsToRemove[i]), 1);
        }
    }
    return fruits;
}

// Write a function to push either a simple value or an array of values onto a specified array.
// For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
// If toPush is a simple value, it should be pushed onto array as an element.
// If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
function pushOntoArray(array, toPush) {
    if (toPush.constructor === Array) {
        for (var i = 0; i < toPush.length; i++) {
            array.push(toPush[i]);
        }
    } else {
        array.push(toPush);
    }
    return array;
}

// Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
function splitListStrUsingComma(sourceStr) {
    if (sourceStr === '') {
        return [];
    }
    else {
        return sourceStr.split(',');
    }
}

// Write a function that will take any number of arguments and return their sum
function sum() {
    var sum_args = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum_args += arguments[i];
    }
    return sum_args;
}

// Write a function that will return true if a specified string consists of only whitespace.
function isOnlyWhitespace(sourceStr) {
    if (sourceStr.indexOf(' ') >= 0) {
        return true;
    }
}

// write an example of a javascript closure
function jsClosureHello(name){
    var msg = "Welcome to the wonderful world of Javascript, ";

    function sayHello(){
        return msg + name + "!";
    }

    return sayHello();
}

// define a json object that represents a collection of people.
// each person should have the following properties
// - first name
// - last name
// - city
// - state
// - zip
// - a collection of phone numbers (home, work, mobile)
var data =
{
    "people":
    [
        {
            "first_name": "Bryan",
            "last_name": "Leewood",
            "city": "Lafayette",
            "state": "IN",
            "zip": "47901",
            "phone_numbers": {
                "home": "555-555-5555",
                "work": "555-555-5555",
                "mobile": "555-555-5555"
            }
        },
        {
            "first_name": "Steve",
            "last_name": "Leewood",
            "city": "Madison",
            "state": "WI",
            "zip": "99999",
            "phone_numbers": {
                "home": "555-555-5555",
                "work": "555-555-5555",
                "mobile": "555-555-5555"
            }
        }
    ]
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
function DataTable(){
    this.columns = [];
    this.rows    = [];

    this.addRow = function() {
        // Refuse to add a new row if no columns exist
        if (this.columns.length <= 0) {
            return;
        }
        // Refuse to add a new row if entering too many columns
        if (arguments.length > this.columns.length) {
            return;
        }
        // Add each row in to the array
        for (var i = 0; i < arguments.length; i++) {
            this.rows.push(arguments[i]);
        }
    };

    this.addColumns = function() {
        for (var i = 0; i < arguments.length; i++) {
            this.columns.push(arguments[i]);
        }
    };

    this.getData = function() {
        console.log(JSON.stringify(this));
    };
}

$(document).ready(function(){
    var datatb = new DataTable();
    datatb.addColumns('column1', 'column2', 'column3');
    datatb.addRow('value1A', 'value1B', 'value1C');
    datatb.addRow('value2A', 'value2B', 'value2C');
    datatb.addRow('value3A', 'value3B', 'value3C', 'Value3D'); // Shouldn't run
    datatb.getData();
});



// within div1, programatically create a
// SELECT element (with multiple items) and a button.
// when the button is clicked write out the name and value of the selected item to the console.
$(document).ready(function(){
    var $div1 = $('#div1');
    var $new  = $('<div />');

    // Programatically create selection and button elements
    $new.append('<select id="ui-candidate-selection" name="ui-candidate-selection" />');
    $new.find('select').append('<option>Cats</option>');
    $new.find('select').append('<option>Dogs</option>');
    $new.find('select').append('<option>Alone</option>');
    $new.append('<input type="button" value="Submit" id="ui-candidate-button">');

    // Append all of this to #div1
    $div1.append($new);

    // Event info
    $('#ui-candidate-button').on('click', function(e){
        var selection = $('option:selected').text();
        console.log("Choice: " + selection);
    });
});



// Write 5 different jQuery selectors to retrieve the
// sample anchor in the markup below.
$(document).ready(function(){
    console.log( $('#foo a') );
    console.log( $('#foo a.link') );
    console.log( $('#foo.bar a') );
    console.log( $('#foo.bar a.link') );
    console.log( $('#foo.bar .link') );

    console.log( $('#fizz a') );
    console.log( $('#fizz a.link') );
    console.log( $('#fizz.buzz a') );
    console.log( $('#fizz.buzz a.link') );
    console.log( $('#fizz.buzz .link') );

    console.log( $('.buzz a') );
    console.log( $('.buzz a.link') );
    console.log( $('.buzz .link') );

    console.log( $('a.link') );
    console.log( $('.link') );

    console.log( $('#foo').find('a') );
    console.log( $('#fizz').find('a') );

    console.log( $('#fizz [href]') );
});



// Programatically create an array with 5 items.  Create a list item for each item in the array
// and add the list items to the unordered list with an id of "list1".
$(document).ready(function(){
    var array = ["Cats", "Dogs", "Birds", "Ferrets", "Hamsters"];
    var $list = $('#list1');

    for (var i = 0; i < array.length; i++) {
        $list.append('<li>' + array[i] + '</li>');
    }
});



// Use javascript to add a list of checkboxes and 2 links
// to the div with an id of "foobar"
// When the first link is clicked, all the checkboxes should be checked (i.e. check all)
// When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
$(document).ready(function(){
    var $foobar = $('#foobar');
    var $list   = $('<ul />');

    $list.append('<li><input type="checkbox" class="checkbox">Apples</li>');
    $list.append('<li><input type="checkbox" class="checkbox">Oranges</li>');
    $list.append('<li><a id="check_all">Check All</a></li>');
    $list.append('<li><a id="uncheck_all">Uncheck All</a></li>');
    $foobar.append($list);

    $('#check_all').on('click', function(e){
        $('.checkbox').prop('checked', true);
    });

    $('#uncheck_all').on('click', function(e){
        $('.checkbox').prop('checked', false);
    });

});
