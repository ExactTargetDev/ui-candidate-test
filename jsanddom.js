// Example unit test function
function divide(  a, b  ) {
    // To see the test pass, uncomment the following line
    return a / b;
}

// Write a function that takes a single argument (a string) and returns the string reversed.
function reverseString( str ) {
    return _.str.reverse( str );
}

// Write a function that takes an array of numbers and returns the minimum value
function findMinValue( values ) {
    if( !_.isArray( values ) || values.length == 0 ) {
        return;
    }

    if( values.length === 1 ) {
        return values[0];
    }

    return _.min( values );
}

// Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
function findDistinctValues( values ) {
    // Values as keys for quick lookup
    var HashMap = {};

    var distinctValues = [];
    var n = values.length - 1;

    // Sanity...
    if( !_.isArray( values ) || values.length == 0 ) {
        return;
    }

    do {
        // Safety-first...
        if( !values[n] ) break;
        if( HashMap[values[n]] ) continue;

        HashMap[values[n]] = true;

        distinctValues.push( values[n] );
    } while( n-- );

    return distinctValues;
}

// Write a function that logs the numbers from 1 to 100 to the console.
// For multiples of three print "Fizz" instead of the number.
// For multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
function doFizzBuzz() {
    var fizzBuzz = '';

    var max = 101;
    var min;


    for( min = 1; min < max; min++ ) {
        fizzBuzz = '';

        // For multiples of three print "Fizz" instead of the number.
        if( min %3 == 0 ) {
            fizzBuzz = 'Fizz';
            console.log( fizzBuzz );
        } else {
            console.log( min );
        }

        // For multiples of five print "Buzz".
        if( min %5 == 0 ) {
            fizzBuzz += 'Buzz';
            console.log( 'Buzz' );
        }

        // For numbers which are multiples of both three and five print "FizzBuzz".
        if( fizzBuzz.length > 0 ) {
            console.log( fizzBuzz );
        }
    }
}

// You have a master array of strings, where each element is a fruit name.
// You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
// For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
// Write the function that will remove the values contained in fruitsToRemove from the array fruits.
function removeFruits( fruits, fruitsToRemove ) {
    var distinctFruits = [];
    var indexToRemove  = 0;
    var n = 0;

    // Returning when fruitsToRemove is empty as there isn't a need to do anything to the master fruits collection
    if( !_.isArray( fruits ) || fruits.length == 0 || !_.isArray( fruitsToRemove ) || fruitsToRemove.length == 0 ) {
        return;
    }

    distinctFruits = findDistinctValues( fruitsToRemove );

    n = distinctFruits.length - 1;
    do {
        indexToRemove = _.indexOf( fruits, distinctFruits[n] );
        if( indexToRemove == -1 ) {
            continue;
        }

        fruits.splice( indexToRemove, 1 );
    } while( n-- );
}

// Write a function to push either a simple value or an array of values onto a specified array.
// For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
// If toPush is a simple value, it should be pushed onto array as an element.
// If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
function pushOntoArray( array, toPush ) {
    var originalVal, i, n;

    if( !_.isArray( toPush ) ) {
        console.log( JSON.stringify( toPush ) + ' is NOT an array!' );
        originalVal = toPush;
        array.push( toPush );

        return;
    }

    n = toPush.length;
    for( i = 0; i < n; i++ ) {
        array.push( toPush[i] );
    }
}

// Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
function splitListStrUsingComma( sourceStr ) {
    return !_.str.isBlank( sourceStr ) ? sourceStr.split( ',' ) : [];
}

// Write a function that will take any number of arguments and return their sum
function sum() {
    var sum = 0;
    var n = arguments.length - 1;

    if( n === -1 ) {
        return sum;
    }

    do {
        sum += arguments[n];
    } while( n --);

    return sum;
}

// Write a function that will return true if a specified string consists of only whitespace.
function isOnlyWhitespace( sourceStr ) {
    return sourceStr.replace( new RegExp( /^\s+|\s+$/g ), '' ).length == 0;
}

// write an example of a javascript closure

// define a json object that represents a collection of people.
// each person should have the following properties
// - first name
// - last name
// - city
// - state
// - zip
// - a collection of phone numbers (home, work, mobile)
var PeopleCollection = [
    {
        "first_name": "Joe",
        "last_name": "Bob",
        "city": "Manchester",
        "state": "KY",
        "zip": "40962",
        "phone_numbers": [  // making sure its a collection
            {
                "home": "606-598-0000",
                "work": "606-598-0001",
                "mobile": "606-598-0002"
            }
        ]
    },
    {
        "first_name": "Jenny",
        "last_name": "Anonymous",
        "city": "Colorado Springs",
        "state": "CO",
        "zip": "80909",
        "phone_numbers": [
            {
                "home": "719-867-5309",
                "work": "",
                "mobile": ""
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
// .addRow('value1A', 'value1B', 'value1C');
// .addRow('value2A', 'value2B', 'value2C');

var DataTable = function( obj ) {
    // A private columns property (string array)
    var columns = [];

    // A private rows property (string array)
    var rows = [];

    this.rowCount = 0;
};

DataTable.prototype.addRows = function() {
    var args = _.toArray( arguments );

    var stringArr;

    if( args.length === 0 ) {
        throw 'You must provide at least 1 row to use DataTable.addRows!';
    }

    stringArr = _.chain( args ).map( function( arg ) {
        if( _.isString( arg ) ) {
            return arg;
        }
    }).filter( Boolean ).value();

    if( stringArr.length === 0 ) {
        return;
    }

    rows = rows.concat( stringArr );
};

DataTable.prototype.addColumns = function() {
    var args = _.toArray( arguments );

    var stringArr;

    if( args.length === 0 ) {
        throw 'You must provide at least 1 row to use DataTable.addRows!';
    }

    stringArr = _.chain( args ).map( function( arg ) {
        if( _.isString( arg ) ) {
            return arg;
        }
    }).filter( Boolean ).value();

    if( stringArr.length === 0 ) {
        return;
    }

    columns = columns.concat( stringArr );
};

DataTable.prototype.getData = function() {
    return {
        columns: columns,
        rows: rows
    };
};

// within div1, programatically create a
// SELECT element (with multiple items) and a button.
// when the button is clicked write out the name and value of the selected item to the console.
( function( $ ) {
    'use strict';

    var $select = $( '<select />' );
    var $btn    = $( '<button>Go</button>' );

    var options = ['option1', 'option2', 'option3', 'option4'];
    var n = options.length;

    var i;

    $( function() {

        $( '#div1' ).append( $select, $btn );

        for( i = 0; i < n; i++ ) {
            $( '<option />', {
                value: options[i],
                text: 'Option ' + i
            }).appendTo( $select );
        }

        $btn.on( 'click', function( e ) {
            if( e && e.preventDefault ) {
                e.preventDefault();
            }

            console.log( $select.find( ':selected' ).val() );
        });
    });
}( jQuery ));

// Write 5 different jQuery selectors to retrieve the
// sample anchor in the markup below.
var selectors = [ $( '#foo a.link' ), $( '#foo .buzz a.link' ), $( '#foo' ).find( 'a.link' ), $( '#foo .buzz' ).find( 'a.link' ), $( '#fizz a.link' ) ];

// Programatically create an array with 5 items.  Create a list item for each item in the array
// and add the list items to the unordered list with an id of "list1".
( function( $ ) {
    'use strict';

    var listItems = [ 'listItem 1', 'listItem 2', 'listItem 3', 'listItem 4', 'listItem 5' ];
    var n = listItems.length;

    var i;

    $( function() {
        var $list     = $( '#list1' );

        for( i = 0; i < n; i++ ) {
            $list.append( '<li>' + listItems[i] + '</li>' );
        }
    });
}( jQuery ));


// Use javascript to add a list of checkboxes and 2 links
// to the div with an id of "foobar"
// When the first link is clicked, all the checkboxes should be checked (i.e. check all)
// When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
( function( $ ) {
    'use strict';

    $( document ).ready( function() {
        var $checkAll = $( '<a name="checkAll" id="checkAll" href="#">check All</a>' ).on( 'click', function() {
            $( '.checkboxListItems' ).each(function( idx, el ) {
                $( this ).prop( 'checked', true );
            });
        });

        var $uncheckAll = $( '<a name="uncheckAll" id="uncheckAll" href="#">uncheck All</a>' ).on( 'click', function() {
            $( '.checkboxListItems' ).each( function( idx, el ) {
                $( this ).prop( 'checked', false );
            });
        });

        var i;

        $( '#foobar' ).css({
            'margin-left': '50px'
        }).append( $checkAll, '&nbsp;&nbsp;&nbsp;', $uncheckAll );

        for( i = 0; i < 20; i++) {
            $( '#foobar' ).append( '<div><input type="checkbox" name="checkboxList[]" class="checkboxListItems" value="checkBoxListItem ' + i + '" /> Meh</div>' );
        }
    });
})(jQuery);