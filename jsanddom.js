 // Example unit test function
 function divide( a, b ) {
        // To see the test pass, uncomment the following line
    if(Object.prototype.toString.call(a) !== '[object Number]' 
        || Object.prototype.toString.call(b) !== '[object Number]'){
        throw Error('both inputs have to be numbers');
    }
    if(b === 0){
        throw Error('cannot divide by zero');
    }
    
    return a / b;
}

// Write a function that takes a single argument (a string) and returns the string reversed.
function reverseString(str) {
    if(Object.prototype.toString.call(str) !== '[object String]'){
        throw 'not a string';
    }
    
    return str.split('').reverse().join('');
}

// Write a function that takes an array of numbers and returns the minimum value
function findMinValue(values) {
    if(Object.prototype.toString.call(values) !== '[object Array]'){
        throw 'not an array';
    }

    return Math.min.apply(Math, values);
}

// Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
function findDistinctValues(values) {
    if(Object.prototype.toString.call(values) !== '[object Array]'){
        throw 'not an array';
    }

    var obj = {}, i, returnArray = [];
    for(i = 0; i < values.length; i++){
        obj[values[i]] = values[i];
    }
    for(value in obj){
        returnArray.push(obj[value]);
    }

    return returnArray;
}

// Write a function that logs the numbers from 1 to 100 to the console.
// For multiples of three print "Fizz" instead of the number.
// For multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
function doFizzBuzz() {
    // FILL THIS IN
    var arr = [];
    for (var i = 1; i <= 100; i++) {
      var f = i % 3 == 0, b = i % 5 == 0;
      arr.push( f ? ( b ? "FizzBuzz" : "Fizz" ) : ( b ? "Buzz" : i ) );
    }
    return arr;
}

// You have a master array of strings, where each element is a fruit name.
// You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
// For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
// Write the function that will remove the values contained in fruitsToRemove from the array fruits.
function removeFruits(fruits, fruitsToRemove) {
    while(fruitsToRemove.length){
        fruits.splice(fruits.indexOf(fruitsToRemove.pop()), 1)
    }
    return fruits;
}

// Write a function to push either a simple value or an array of values onto a specified array.
// For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
// If toPush is a simple value, it should be pushed onto array as an element.
// If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
function pushOntoArray(array, toPush) {
    if(Object.prototype.toString.call(toPush) === '[object Array]'){
        toPush.reverse();
        while(toPush.length){
            pushOntoArray(array, toPush.pop())
        }
    }

    if(Object.prototype.toString.call(toPush) === '[object Array]' && !toPush.length){
        return;
    }

    array.push(toPush);
}

// Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
function splitListStrUsingComma(sourceStr) {
    if(Object.prototype.toString.call(sourceStr) !== '[object String]'){
        throw 'not a string';
    }

    var ret = [];
    return sourceStr.split(',').map(
        function(item){ 
            return item.trim();
    });
}

// Write a function that will take any number of arguments and return their sum
function sum() {
    if(!arguments || !arguments.length){
        throw 'no input found';
    }

    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }

    return sum;
}

// Write a function that will return true if a specified string consists of only whitespace.
function isOnlyWhitespace(sourceStr) {
    if(Object.prototype.toString.call(sourceStr) !== '[object String]'){
        throw 'not a string';
    }

    return sourceStr === null || sourceStr.match(/^ *$/) !== null;
}

// write an example of a javascript closure
(someClosure = function(){
    var _privateProperty = 'private value',
        _privateMethod = function(){
            return _privateProperty;
        },
        _anotherMethod = function(){
            _privateMethod();
        };

        return {
            publicProperty: 'public value',
            publicMethod: _anotherMethod
        };
}());

/*
1. define a json object that represents a collection of people.
2. each person should have the following properties
- first name
- last name
- city
- state
- zip
- a collection of phone numbers (home, work, mobile)
*/
var jsonObj = {
    'firstname': 'Amanul',
    'lastname': 'Chowdhury',
    'city': 'North Brunswick',
    'state': 'NJ',
    'zip': '08902'
}

/*
Create a javascript object (DataTable) with the following:
A private columns property (string array)
A private rows property (string array)
A public method addRows that adds an item to the rows array
A public method addColumns that adds an item to the columns array
A public method getData that returns the a json object representation of the DataTable
Note: the row object should be a hash of the column name and row item value

Example:
.addColumns('column1', 'column2', 'column3');
.addRow('value1A', 'value1B', 'value1C');
.addRow('value2A', 'value2B', 'value2C');
*/

DataTable = function (){
    this.columns = [];
    this.rows = [];

    return this;
}

DataTable.prototype.addColumns = function(){
    if(!arguments.length){
        return 'No columns to add';
    }

    for(var i = 0; i < arguments.length; i++){
        if(this.columns.indexOf(arguments[i]) > -1){
            return arguments[i] + ' already exists in this DataTable';
        }
        this.columns.push(arguments[i]);
    }

    return this.getData();
}

DataTable.prototype.addRow = function (){
    if(!this.columns.length || !arguments.length || arguments.length > this.columns.length){
        return 'Column length Mismatch';
    }
    var row = {};
    
    for(var i = 0; i < this.columns.length; i++){
        row[this.columns[i]] = arguments[i] || null;
    }
    
    this.rows.push(row);

    return this.getData();
}

DataTable.prototype.getData = function (){
    return {
        'columns': this.columns,
        'rows': this.rows
    }
}

// 1. within div1, USE JAVASCRIPT to programatically create a
// SELECT element (with multiple items) and a button.
// when the button is clicked write out the name and value of the selected item to the console.
$(function(){
    var items = ['item1', 'item2', 'item3'],
        div1 = $('#div1'),
        select1 = jQuery('<select id="select-item">');
    for(var itr = 0; itr < items.length; itr++){
        select1.append($('<option value="' + items[itr] + '">').html(items[itr]));
    }

    div1.append(select1);
    div1.append($('<button>').html('Click Me'));
    div1.find('button').on('click', function(e){
        e.preventDefault();
        message = $('#select-item').val();
        console.log(message);
    });
});

// 2. Write 5 different jQuery selectors to retrieve the
// sample anchor in the markup below.
$('#foo #fizz a')
$('#fizz a');
$('a.link');
$('.bar .buzz .link')
$('.bar .buzz a')
$('.buzz a')

// 3. Programatically create an array with 5 items.  Create a list item for each item in the array
// and add the list items to the unordered list with an id of "list1".
$(function(){
    var arr = ['hello', 'hi', 'hola', 'namaste', 'hey'],
        list = $('#list1');
    for(var i = 0; i < arr.length; i++){
        list.append($('<li>').html(arr[i]));
    }
});

// 4. Use javascript to add a list of checkboxes and 2 links
// to the div with an id of "foobar"
// When the first link is clicked, all the checkboxes should be checked (i.e. check all)
// When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
$(function(){
    var div = $('#foobar');
    div.append($('<ul>'));
    
    div.find('ul').append($('<li>').html($('<input type="checkbox" name="link-checkbox">')));
    div.find('ul').append($('<li>').html($('<input type="checkbox" name="link-checkbox">')));
    div.find('li:first').append($('<a class="check-all" href="#">').html('check all'));
    div.find('li:eq(1)').append($('<a class="uncheck-all" href="#">').html('uncheck all'));
    
    div.find('a').on('click', function(e){
        e.preventDefault();
        if(e.currentTarget.className === 'check-all'){
            $('input[name=link-checkbox]').prop('checked', true);
            return;
        } 
        $('input[name=link-checkbox]').prop('checked', false);
        
    });
});




