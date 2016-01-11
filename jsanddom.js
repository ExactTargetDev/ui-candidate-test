// usage: log('inside coolFunc',this,arguments);
// http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(data) {
    // log.history = log.history || []; // store logs to an array for reference
    // log.history.push(arguments);
    if (this.console) {
        // console.log(Array.prototype.slice.call(arguments));
        for (var i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
    }
};

'use strict';

// Example unit test function
function divide(a, b) {
    // To see the test pass, uncomment the following line
    return a / b;
}

// Write a function that takes a single argument (a string) and returns the string reversed.
function reverseString(str) {
    // FILL THIS IN
    var i, reversedString = '';

    if (typeof str !== 'string') {
        return false;
    }

    for (i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }

    return reversedString;
}
// Test case(s)
log('reverseString');
log(reverseString(' test  '));
log(reverseString(12345));

// Write a function that takes an array of numbers and returns the minimum value
function findMinValue(values) {
    // FILL THIS IN
    var sortedValues = values.sort(function(a, b) {
        return a - b;
    });
    return sortedValues[0];
}
// Test case(s)
log(findMinValue([1, 4, -1, -11.92, 11.92]));

// Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
function findDistinctValues(values) {
    // FILL THIS IN
    var i, uniqueValues = [];

    for (i = 0; i < values.length; i++) {
        if (uniqueValues.indexOf(values[i]) < 0) {
            uniqueValues.push(values[i]);
        }
    }

    return uniqueValues;
}
// Test case(s)
log('findDistinctValues');
log(findDistinctValues([1, 4, 5, 90, -1, -11.92, -11.92, 90, 11.92, 1, 4, 472]));

// Write a function that logs the numbers from 1 to 100 to the
// For multiples of three print "Fizz" instead of the number.
// For multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
function doFizzBuzz(from, to) {
    // FILL THIS IN
    var i, str, returnString = ' | ';

    for (i = from; i < to; i++) {
        str = '';

        if (i % 3 === 0) {
            str += 'Fizz';
        }

        if (i % 5 === 0) {
            str += 'Buzz';
        }

        // Adding the following if to enable testing otherwise, I would use
        // log(str !== '' ? str : i);
        // returnString += '  ';
        if (str === '') {
            returnString += i;
        } else {
            returnString += str;
        }
        returnString += ' | ';

    }

    return returnString;
}
// Test case(s)
log('doFizzBuzz');
log(doFizzBuzz(0, 100));
log(doFizzBuzz(4, 16));

// You have a master array of strings, where each element is a fruit name.
// You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
// For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
// Write the function that will remove the values contained in fruitsToRemove from the array fruits.
function removeFruits(fruits, fruitsToRemove) {
    // FILL THIS IN
    var i;

    if (Object.prototype.toString.call(fruitsToRemove) !== '[object Array]') {
        return false;
    }

    for (i = 0; i < fruitsToRemove.length; i++) {
        if (fruits.indexOf(fruitsToRemove[i]) > -1) {
            fruits.splice(fruits.indexOf(fruitsToRemove[i]), 1);
        }
    }

    return fruits;
}
// Test case(s)
log('removeFruits');
log(removeFruits(['apple', 'banana', 'orange'], 'banana'));
log(removeFruits(['apple', 'banana', 'orange'], ['banana']));
log(removeFruits(['apple', 'banana', 'orange'], ['apple', 'orange']));
log(removeFruits(['apple', 'banana', 'orange'], ['kiwi']));

// Write a function to push either a simple value or an array of values onto a specified array.
// For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
// If toPush is a simple value, it should be pushed onto array as an element.
// If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
function pushOntoArray(array, toPush) {
    // FILL THIS IN

    Object.prototype.toString.call(toPush) !== '[object Array]' ? array.push(toPush) : array.push.apply(array, toPush);
    return array;

}
// Test case(s)
log('pushOntoArray');
log(pushOntoArray(['apple', 'banana', 'orange'], 'kiwi'));
log(pushOntoArray(['apple', 'banana', 'orange'], ['kiwi', 'strawberry']));

// Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
function splitListStrUsingComma(sourceStr) {
    // FILL THIS IN

    return sourceStr.split(',');

}
// Test case(s)
log('splitListStrUsingComma');
log(splitListStrUsingComma('this is a test string!'));
log(splitListStrUsingComma('this is a test string!, with fruits, apple, banana, orange'));

// Write a function that will take any number of arguments and return their sum
function sum() {
    // FILL THIS IN
    var i, aggregate = 0;

    for (i = 0; i < arguments.length; i++) {
        aggregate += arguments[i];
    }

    return aggregate;
}
// Test case(s)
log('sum');
log(sum(1, 2, 3, 4, 5, 6));
log(sum(12, -1, 20, -3));
log(sum(12, -1.1, 0.20, -3));
log(sum(-10, -20.29, -30.22));
log(sum(10, 20, 30.76));


// Write a function that will return true if a specified string consists of only whitespace.
function isOnlyWhitespace(sourceStr) {
    // FILL THIS IN
    if (sourceStr.trim().length === 0 && sourceStr.length !==0 ) {
        return true;
    } else {
        return false;
    }
}
// Test case(s)
log('isOnlyWhitespace');
log(isOnlyWhitespace('    '));
log(isOnlyWhitespace(''));
log(isOnlyWhitespace('  x  '));

// write an example of a javascript closure
// Closure example - constructor style
var Counter = function() {
    var count = 0,
        // closure1
        _increase = function() {
            count += 1;
        },
        // closure2
        _decrease = function() {
            count -= 1;
        },
        _getCount = function() {
            return count;
        };

    return {
        increase: _increase,
        decrease: _decrease,
        status: _getCount
    };
};
// Test case(s)
// var count = Counter(); // Create a universal instance (singleton);
log('Sample Closure');
var count = new Counter(); // Creates a new instance everytime Counter is called with new keyword
count.increase();
count.increase();
count.decrease();
log(count.status()); // 1
count.increase();
count.increase();
count.increase();
count.increase();
log(count.status()); // 5
count.decrease();
count.decrease();
log(count.status()); // 3


// define a json object that represents a collection of people.
// each person should have the following properties
// - first name
// - last name
// - city
// - state
// - zip
// - a collection of phone numbers (home, work, mobile)
var peopleJSON = function() {

    var people = {
        'person1': {
            'firstName': 'saurav',
            'lastName': 'bhalotia',
            'city': 'New York',
            'state': 'New York',
            'zip': 11201,
            'phoneNumbers': {
                'home': 4088688701,
                'work': 4088688701,
                'mobile': 4088688701
            }
        },
        'person2': {
            'firstName': 'saurav',
            'lastName': 'bhalotia',
            'city': 'New York',
            'state': 'New York',
            'zip': 11201,
            'phoneNumbers': {
                'home': 4088688701,
                'work': 4088688701,
                'mobile': 4088688701
            }
        }
    };

    return people;
};
// Test case(s)
log('peopleJSON', JSON.stringify(peopleJSON(), null, '\t'));

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

// column = ['a', 'b', 'c'];
// row = [
//     {'a':11, 'b': 12, 'c':13},
//     {'a':21, 'b': 22, 'c':23},
//     {'a':31, 'b': 32, 'c':33},
// ];

function DataTable(nRows, nColumns) {

    var defaultSize = 3,
        rows = [],
        columns = [],
        _nRows = nRows || defaultSize,
        _nColumns = nColumns || defaultSize,

        printHeaderColumns,
        printDataRows,
        printDataTable;


    this.getColumnsLength = function() {
        return _nColumns;
    };
    this.setColumnsLength = function(nColumns) {
        _nColumns = nColumns;
    };

    this.getRows = function() {
        return rows;
    };
    this.setRow = function(item) {
        rows.push(rowHash(item));
    };

    this.getColumn = function() {
        return columns;
    };
    this.setColumn = function(item) {
        columns = columns.concat(item);
    };

    // private method
    rowHash = function(item) {
        var row = {},
            args = [].concat(item);

        for (var i = 0; i < columns.length; i++) {
            row[columns[i]] = args[i];
        }
        return row;
    };
}

DataTable.prototype.getData = function () {
    console.log(JSON.stringify(this.getRows(), null, '\t'));
    return JSON.stringify(this.getRows(), null, '\t');
};

DataTable.prototype.addColumns = function() {

    var argsLen = arguments.length;

    if (argsLen < this.getColumnsLength()) {
        return false;
    } else if (argsLen > this.getColumnsLength()) {
        this.setColumnsLength(argsLen);
    }

    this.setColumn(Array.apply(null, arguments));
};

DataTable.prototype.addRow = function() {

    var argsLen = arguments.length;

    if (argsLen < this.getColumnsLength()) {
        log('cannot add row as items less than column count');
        return false;
    }

    this.setRow(Array.apply(null, arguments));
};

// var sampleTable = new DataTable(3); // 3x3
// var sampleTable = new DataTable(2); // 2x2
var sampleTable = new DataTable(3, 2); // 3x2
sampleTable.addColumns('column1', 'column2', 'column3', 'column4');
sampleTable.addRow('value1A', 'value1B', 'value1C', 'value1D');
sampleTable.addRow('value2A', 'value2B', 'value2C', 'value2D');
sampleTable.getData();

// within div1, programatically create a
// SELECT element (with multiple items) and a button.
// when the button is clicked write out the name and value of the selected item to the
var selectElements = (function() {

    var i, optionElement, _createItems, _render,
        _bindEvents, _changeSelected, _changeMethod, fireEvent,
        div1 = document.getElementById('div1'),
        select = document.createElement('SELECT'),
        items = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'];

    _createItems = function() {
        for (i = 0; i < items.length; i++) {
            optionElement = document.createElement('OPTION');
            optionElement.setAttribute('value', items[i]); // Way 1 to assign an attribute to the element
            optionElement.innerHTML = items[i]; // Way 2 to assign an attribute to the element
            optionElement.id = 'id-' + items[i];
            if (i === 0) {
                optionElement.setAttribute('selected', '');
                // optionElement.selected = true;
            }
            select.appendChild(optionElement);
        }
        select.setAttribute('id', 'selectItem');
    };

    _render = function() {
        div1.appendChild(select);
    };

    _bindEvents = function() {
        document.getElementById('selectItem').addEventListener('click', _changeSelected, true);
    };

    _changeSelected = function(event) {
        log(event.target.value);
    };

    _changeMethod = function(item) {
        document.getElementById('selectItem').value = item;
        // changing the value will trigger click event to log the value changed.
        fireEvent(document.getElementById('selectItem'), 'click');
    };

    fireEvent = function(element, event) {
        var eventType;
        if (document.createEventObject) {
            eventType = document.createEventObject();
            return element.fireEvent('on' + event, eventType);
        } else {
            eventType = document.createEvent("HTMLEvents");
            eventType.initEvent(event, true, true);
            return element.dispatchEvent(eventType);
        }
    };

    _createItems();
    _render();
    _bindEvents();

    return _changeMethod;

}());
// Test case(s)
setTimeout(function() {
    selectElements('Item5');
}, 3000);

// Write 5 different jQuery selectors to retrieve the
// sample anchor in the markup below.
var retrieveAnchorText = (function() {

    var selector1 = $('#foo a.link')[0].text,
        selector2 = $('div#fizz.buzz')[0].children[0].text,
        selector3 = $('#fizz > a.link')[0].text,
        selector4 = $('a.link')[0].text,
        selector5 = $('.link')[0].text;

    return [selector1, selector2, selector3, selector4, selector5];

}());
// Test case(s)
log('retrieveAnchorText');
log(retrieveAnchorText[0]);
log(retrieveAnchorText[1]);
log(retrieveAnchorText[2]);
log(retrieveAnchorText[3]);
log(retrieveAnchorText[4]);

// Programatically create an array with 5 items.  Create a list item for each item in the array
// and add the list items to the unordered list with an id of "list1".
var listItems = function() {

    var items = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'],
        list1 = document.getElementById("list1"),
        i,
        listItems = '',
        liElement;

    for (i = 0; i < items.length; i++) {
        liElement = document.createElement('LI');
        liElement.innerHTML = items[i];
        list1.appendChild(liElement);
    }

};
listItems();

// Test case(s)
// To check number of items as 5;
setTimeout(function() {
    log(document.getElementById("list1").children.length);
}, 5000);

// Use javascript to add a list of checkboxes and 2 links
// to the div with an id of "foobar"
// When the first link is clicked, all the checkboxes should be checked (i.e. check all)
// When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
var checkBoxToggle = (function(checkBoxCount) {

    var i,
        fooBarDiv = document.getElementById("foobar"),
        links, _createLinks, _createCheckBoxes, _bindEvents, _checkAll, _uncheckAll,
        _nCheckBoxes = checkBoxCount || 10;

    _createCheckBoxes = function() {
        for (i = 0; i < _nCheckBoxes; i++) {
            var label, checkBox, checkboxList = document.createElement('DIV');

            checkBox = document.createElement('INPUT');
            checkBox.type = 'checkbox';
            checkBox.name = 'link';
            checkBox.value = 'checkBox-' + i;
            checkBox.id = 'checkBox' + i;

            label = document.createElement('LABEL');
            label.for = 'checkBox' + i;
            label.innerHTML = 'CheckBox-' + i;

            checkboxList.appendChild(checkBox);
            checkboxList.appendChild(label);
            checkboxList.setAttribute('class', 'checkBox-div');

            fooBarDiv.appendChild(checkboxList);

        }
    };

    _createLinks = function() {
        links = document.createElement('DIV');
        links.setAttribute('class', 'check-uncheck');
        for (i = 1; i <= 2; i++) {
            var linkElement = document.createElement('A'),
                spanElement = document.createElement('SPAN');

            linkElement.id = 'link' + i;
            linkElement.href = '#';
            if (i === 1) {
                spanElement.setAttribute('class', 'check');
                spanElement.style.margin = '20px 20px 20px 0';
                linkElement.text = 'Check';
            } else {
                spanElement.setAttribute('class', 'uncheck');
                linkElement.text = 'Un Check';
            }

            spanElement.appendChild(linkElement);
            links.appendChild(spanElement);
        }

        fooBarDiv.appendChild(links);
    };

    _bindEvents = function() {
        document.getElementById("link1").addEventListener('click', _checkAll, false);
        document.getElementById("link2").addEventListener('click', _uncheckAll, false);
    };

    _checkAll = function() {
        var allCheckBoxes = document.getElementsByName('link');
        for (var i = 0; i < allCheckBoxes.length; i++) {
            allCheckBoxes[i].checked = true;
        }
    };

    _uncheckAll = function() {
        // return document.getElementsByName('link')[0].checked = true;
        var allCheckBoxes = document.getElementsByName('link');
        for (var i = 0; i < allCheckBoxes.length; i++) {
            allCheckBoxes[i].checked = false;
        }
    };

    _createCheckBoxes();
    _createLinks();
    _bindEvents();

    return {
        check: _checkAll,
        uncheck: _uncheckAll
    };

}(8)); // hard coding number of checkboxes as 8;

// Test case(s)
// Test to check all in 5 secs
setTimeout(function() {
    log('Checking All in 5 secs of loading');
    checkBoxToggle.check();
}, 5000);

// Test to uncheck all in 10 secs
setTimeout(function() {
    log('UN Checking All in 10 secs loading');
    checkBoxToggle.uncheck();
}, 10000);
