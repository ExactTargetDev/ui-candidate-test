    // Example unit test function
    function divide( a, b ) {
        return a / b;
    }

    // Write a function that takes a single argument (a string) and returns the string reversed.
    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    // Write a function that takes an array of numbers and returns the minimum value
    function findMinValue(values) {        
        //assuming all inputs are numbers otherwise we need a check TODO: add if time
        //if its just one time through we can iterate, but for the future maybe consider a sort, does not modify origin arr
        var min;
        for(var i = 0, length = values.length; i < length; i++) {
            if (min === undefined || values[i] < min){
                min = values[i];
            }
        }
        return min;
    }

    // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
    function findDistinctValues(values) {
        //assuming all inputs are numbers otherwise we need a check TODO: add if time
        //does not modify original input
        var distinct = []; 

        for(var i =0, length = values.length; i < length; i++) {
            if (distinct.indexOf(values[i]) > -1){
                continue;
            }
            distinct.push(values[i]);
        }
        return distinct;
    }

    // Write a function that logs the numbers from 1 to 100 to the console.
    // For multiples of three print "Fizz" instead of the number.
    // For multiples of five print "Buzz".
    // For numbers which are multiples of both three and five print "FizzBuzz".
    function doFizzBuzz(max) {
        var out = '';
        max = max === undefined ? 100 : max; //make testable

        for(var i = 1; i < max + 1; i++){
            if (i % 3 == 0){
                out += 'Fizz';
            } 
            if (i % 5 == 0){
                out += 'Buzz';
            }
            if (i % 3 != 0 && i % 5 != 0){
                out += i;
            }
        }
        if (console){
            console.log(out);
        }
        return out;
    }

    // You have a master array of strings, where each element is a fruit name.
    // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
    // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
    // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
    function removeFruits(fruits, fruitsToRemove) {
        var index;
        for(var i = 0, length = fruitsToRemove.length; i < length; i++){
            index = fruits.indexOf(fruitsToRemove[i]);
            if (index > -1){
                fruits.splice(index, 1);
            }
        }
        return fruits;
    }

    // Write a function to push either a simple value or an array of values onto a specified array.
    // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
    // If toPush is a simple value, it should be pushed onto array as an element.
    // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
    function pushOntoArray(array, toPush) {
        if (toPush instanceof Array){
            while (toPush.length > 0){
                array.push(toPush.shift());
            }
        } else {
            array.push(toPush);
        }
        return array;
    }

    // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
    function splitListStrUsingComma(sourceStr) {
        var output = [];
        if (sourceStr === ''){
            return output;
        }
        var splitString = sourceStr.split(',');
        while (splitString.length > 0){
            output.push(splitString.shift().trim());
        }
        return output;
    }

    // Write a function that will take any number of arguments and return their sum
    function sum() {
        var args = Array.prototype.slice.call(arguments);
        var sum = 0;
        while (args.length > 0){
            sum += args.shift();
        }
        return sum;
    }

    // Write a function that will return true if a specified string consists of only whitespace.
    function isOnlyWhitespace(sourceStr) {
        var result = sourceStr.replace(/\s/g, '');
        return result.length == 0;
    }

     // write an example of a javascript closure

     var EC = (function (){
        var likes = 'computers'; //priv
        var dislikes = 'humans'; //priv
        var getDatingProfile = function (){
            var badJoke = 'I like: ' + likes + ', and dislike: ' + dislikes + ', just kidding.';
            if (console){
                console.log(badJoke);
            }
            return badJoke;
        }
        return {
            getDatingProfile: getDatingProfile, //pub
        }
     })()

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     var json = {
        people: [
            {
                firstName: 'Ted',
                lastName: 'Bed',
                city: 'Houston',
                state: 'Texas',
                zip: 07928,
                phone: {
                    home: 9739021923,
                    work: 1231234234,
                    mobile: 34234234234
                }
            },
            {
                firstName: 'Red',
                lastName: 'Fed',
                city: 'Chatham',
                state: 'New Jersey',
                zip: 234234,
                phone: {
                    home: 2342342342,
                    work: 6575675567,
                    mobile: 453453453
                }
            },
            {
                firstName: 'Ned',
                lastName: 'Wed',
                city: 'Anchorage',
                state: 'Alaska',
                zip: 23123,
                phone: {
                    home: 2323434656,
                    work: 5345345345,
                    mobile: 657567567
                }
            },
            {
                firstName: 'Bahama',
                lastName: 'Mama',
                city: 'Potato',
                state: 'Idaho',
                zip: 11111,
                phone: {
                    home: 9594948383,
                    work: 5435345345,
                    mobile: 3454756767
                }
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

    // table should look like:
    // {
    //      column
    // }

    var DataTable = (function () {
        var columns = [];
        var rows = [];

        // add any number of columns to the table
        var addColumns = function (){
            var args = Array.prototype.slice.call(arguments);
            while (args.length > 0){
                columns.push(args.shift());
            }
        }

        // add all arguments as a single row in the table
        var addRows = function (){
            var args = Array.prototype.slice.call(arguments);

            if (args.length > columns.length){
                throw new Error('Number of items attempted to be added to row exceeds current number of columns.');
            }

            rows.push(args);
        }
        
        var getData = function (){
            var table = {};

            for (var i = 0, rowsLength = rows.length; i < rowsLength; i++){ //for each row
                table['Row' + (i + 1)] = {}; // 1 based index
                for (var j = 0, columnsLength = columns.length; j < columnsLength; j++){
                    table['Row' + (i + 1)][columns[j]] = rows[i][j];
                }
            }
            return table;
        }

        return {
            addColumns: addColumns,
            addRows: addRows,
            getData: getData
        }
    })();

    $(document).ready(function (){
        // fix ie8 lack of indexOf
        if (!Array.prototype.indexOf){
            Array.prototype.indexOf = function(obj, start) {
                for (var i = (start || 0), j = this.length; i < j; i++) {
                    if (this[i] === obj) { 
                        return i; 
                    }
                }
                return -1;
            }
        }
        // within div1, programatically create a
        // SELECT element (with multiple items) and a button.
        // when the button is clicked write out the name and value of the selected item to the console.

        var selectEl = '<select id="item-list"' + 
                        '<option name="steak">Steak</option>' + 
                        '<option name="salad">Salad</option>' + 
                        '<option name="fruit">Fruit</option>' + 
                        '<option name="sweet">Sweet</option>' + 
                        '<option name="coffee">Coffee</option>' + 
                        '</select>';
        var buttonEl = '<button id="select-button">Select</button>';

        $('#div1').append(selectEl);
        $('#div1').append(buttonEl);
        $('#select-button').click(function (){
            var name = $('#item-list').find(':selected').attr('name');
            var value = $('#item-list').get(0).value;
            console.log('Name: ' + name + ', Value: ' + value);
        });

        // Write 5 different jQuery selectors to retrieve the
        // sample anchor in the markup below.

        $('a');
        $('.link');
        $('#fizz').find('a');
        $('#fizz').children();
        $('#foo').find('a');

        // Programatically create an array with 5 items.  Create a list item for each item in the array
        // and add the list items to the unordered list with an id of "list1".

        var itemList = ['DogFishHead', 'BrooklynBrew', 'Pyramid', 'FlyingFish', 'Imperial'];

        while (itemList.length > 0){
            $('#list1').append(
                '<li>' + itemList.shift() + '</li>'
            );
        }

        // Use javascript to add a list of checkboxes and 2 links
        // to the div with an id of "foobar"
        // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
        // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
        itemList = ['DogFishHead', 'BrooklynBrew', 'Pyramid', 'FlyingFish', 'Imperial'];

        var checkList = '<ul id="list">' + 
                        '<a id="all" href="#">Select All</a>' + 
                        '<a id="none" href="#" style="margin-left: 5px;">Select None</a>' + 
                        '</ul>';

        $('#foobar').append(checkList);
        while (itemList.length > 0){
            $('#list').append(
                '<li><input type="checkbox">' + itemList.shift() + '</input></li>'
            );
        }

        $('#all').click(function (){
            $('#list input').prop('checked', true);
        });

        $('#none').click(function (){
            $('#list input').prop('checked', false);
        });
    });

