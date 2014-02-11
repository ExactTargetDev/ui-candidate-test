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
        return Math.min.apply(null, values);
    }

    // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
    function findDistinctValues(values) {
        var unique = {}, distinct = [];
        for (var i in values) {
            if (typeof unique[values[i]] === 'undefined') {
                distinct.push(values[i]);
            }
            unique[values[i]] = 0;
        }
        return distinct;
    }

    // Write a function that logs the numbers from 1 to 100 to the console.
    // For multiples of three print "Fizz" instead of the number.
    // For multiples of five print "Buzz".
    // For numbers which are multiples of both three and five print "FizzBuzz".
    function doFizzBuzz() {
        for (var i = 1, l = 100; i <= l; ++i) {
            if (i % 3 === 0 && i % 5 === 0)
                console.log('FizzBuzz');
            else if (i % 3 === 0)
                console.log('Fizz');
            else if (i % 5 === 0)
                console.log('Buzz');
            else
                console.log(i);
        }
    }

    // You have a master array of strings, where each element is a fruit name.
    // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
    // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
    // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
    function removeFruits(fruits, fruitsToRemove) {
        for (var i = 0; i < fruits.length; i++) {
            if (window.jQuery) {
                if (jQuery.inArray(fruits[i], fruitsToRemove) !== -1) {
                    // Is in array
                    fruits.splice(i, 1);
                }
            } else {
                // No jQuery
            }
        }
    }

    // Write a function to push either a simple value or an array of values onto a specified array.
    // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
    // If toPush is a simple value, it should be pushed onto array as an element.
    // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
    function pushOntoArray(array, toPush) {
        if (window.jQuery) {
            jQuery.extend(1, array, toPush);
        } else {
            for (var key in toPush) {
                if (toPush.hasOwnProperty(key))
                    array[key] = toPush[key];
            }
        }
        return array;
    }

    // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
    function splitListStrUsingComma(sourceStr) {
        if (sourceStr === '')
            return [];
        else
            return sourceStr.split(',');
    }

    // Write a function that will take any number of arguments and return their sum
    function sum() {
        var sum = 0;
        for (var i = 0; i < arguments.length; ++i) {
            sum += arguments[i];
        }
        return sum;
    }

    // Write a function that will return true if a specified string consists of only whitespace.
    function isOnlyWhitespace(sourceStr) {
        if (/\S/.test(sourceStr)) {
            return false;
        } else {
            return true;
        }
    }

    // write an example of a javascript closure
    (function($) {

        // define a json object that represents a collection of people.
        // each person should have the following properties
        // - first name
        // - last name
        // - city
        // - state
        // - zip
        // - a collection of phone numbers (home, work, mobile)
        
        var
        person = function (data) {
            var self = this;
            self.firstName = data.firstName || '';
            self.lastName = data.lastName || '';
            self.city = data.city || '';
            self.state = data.state || '';
            self.zip = data.zip || 0;
            self.phone = data.phone || {
                home: 0,
                work: 0,
                mobile: 0
            };
        },

        people = {
            persons: [
                new person({ firstName: 'Test', lastName: 'User 1', city: 'Indy', state: 'IN', zip: 46268, phone: { home: 5555551111, work: 5555551112, mobile: 5555551113 } }),
                new person({ firstName: 'Test', lastName: 'User 2', city: 'Fishers', state: 'IN', zip: 46037, phone: { home: 5555551121, work: 5555551122, mobile: 5555551123 } }),
                new person({ firstName: 'Test', lastName: 'User 3', city: 'Noblesville', phone: { work: 5555551132, mobile: 5555551133 } })
            ]
        },

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
        
        DataTable = function (params) {
            var
            self = this,
            columns = [],
            rows = [];

            this.addRows = function () {
                var row = {};
                for (var i = 0; i < arguments.length; ++i) {
                    if (typeof arguments[i] === 'string') {
                        row[columns[i]] = arguments[i];
                    }
                }
                rows.push(row);
            }

            this.getRows = function () {
                return rows;
            }

            this.addColumns = function () {
                var self = this;
                for (var i = 0; i < arguments.length; ++i) {
                    if (typeof arguments[i] === 'string' && arguments[i] !== '') {
                        columns.push(arguments[i]);
                        console.log('columns', columns);
                    }
                }
            }

            this.getData = function () {
                var data = {}, rowData = {};
                console.log('rows', rows);
                for (var r = 0; r < rows.length; ++r) {
                    var row = rows[r];
                    console.log('row', row);
                    for (var i = 0; i < columns.length; ++i) {
                        rowData[columns[i]] = row[columns[i]];
                    };
                    data[r] = rowData;
                }
                console.log('tableData', data);
                return data;
            }
        };


        // within div1, programatically create a
        // SELECT element (with multiple items) and a button.
        function createSelect (target, options) {
            var
            $select = $('<select/>'),
            $target = $(target);
            $(options).each(function (key, opt) {
                var $option = $('<option/>');
                $option.val(opt.value);
                $option.html(opt.label);
                $select.append($option);
            });
            $target.append($select);
        }

        function createButton (target, btnId) {
            var
            $btn = $('<btn type=button/>'),
            $target = $(target);
            if (typeof btnId === 'string')
                $btn.attr('id', btnId).addClass('btn').addClass('btn-primary');

            $btn.html('Select');
            $target.append('<br/>');
            $target.append($btn);

            // when the button is clicked write out the name and value of the selected item to the console.
            $btn.on('click', function (e) {
                var selected = {
                    value: $('select', $target).val(),
                    name: $('select option:selected', $target).html()
                }
                console.log('Selected', selected);
            });
        }
        
        createSelect('#div1', [
            { label: 'Option 1', value: 1 },
            { label: 'Option 2', value: 2 },
            { label: 'Option 3', value: 3 },
            { label: 'Option 4', value: 4 },
            { label: 'Option 5', value: 5 },
            { label: 'Option 6', value: 6 }
        ]);
        createButton('#div1', 'btn1');

        // Write 5 different jQuery selectors to retrieve the
        // sample anchor in the markup below.
        $('a.link'); // Selector 1
        $('#fizz a'); // Selector 2
        $('a.link', '#fizz'); // Selector 3
        $('.buzz .link'); // Selector 4
        $('a[href=#]'); // Selector 5

        // Programatically create an array with 5 items.  Create a list item for each item in the array
        // and add the list items to the unordered list with an id of "list1".
        var arr = ['item1', 'item2', 'item3', 'item4', 'item5'];

        $(arr).each(function (key) {
            var $li = $('<li/>');
            $li.html(this).attr('id', 'li-' + key);
            $('#list1').append($li);
        });

        // Use javascript to add a list of checkboxes and 2 links
        // to the div with an id of "foobar"
        function addListItem (target, data) {
            var
            $li = $('<li/>'),
            $input = $('<input/>');

            $input.attr('id', data.id).attr('type', data.type).attr('name', data.name).val(data.value);
            $li.append($input);
            $li.append(data.name);
            $(target).append($li);
        }

        function addLink (target, data) {
            var $link = $('<a/>');
            $link.attr('href', data.href).addClass(data.class).html(data.label);
            $(target).append($link);
            $(target).append('<br/>');
        }

        function checkAll (target) {
            $('input[type=checkbox]', target).each(function (key) {

                $(this).prop('checked', true);
            });
        }

        function uncheckAll (target) {
            $('input[type=checkbox]', target).each(function (key) {
                $(this).prop('checked', false);
            });
        }

        var $ul = $('<ul/>');
        $ul.appendTo('#foobar');

        addLink('#foobar', { href: '#', class: 'checkAll', label: 'Check All' });
        addLink('#foobar', { href: '#', class: 'uncheckAll', label: 'Uncheck All' });
        addListItem('#foobar ul', { name: 'checkbox1', id: 'checkbox1', type: 'checkbox', value: 'checkbox1' });
        addListItem('#foobar ul', { name: 'checkbox2', id: 'checkbox2', type: 'checkbox', value: 'checkbox2' });
        addListItem('#foobar ul', { name: 'checkbox3', id: 'checkbox3', type: 'checkbox', value: 'checkbox3' });

        // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
        $('.checkAll').on('click', function (e) {
            checkAll('#foobar ul li');
        });

        // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
        $('.uncheckAll').on('click', function (e) {
            uncheckAll('#foobar ul li');
        });

    })(jQuery);