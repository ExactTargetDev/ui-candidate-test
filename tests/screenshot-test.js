module( "Screenshot" );

test("Check namespace", 1, function(){
    equal(typeof Screenshot, 'object', 'Check existence of the Screenshot namespace');
});

test("Test init", 1, function() {
    equal(typeof Screenshot.init, 'function', 'Check existence of the Screenshot.init function');
});

test("Test addDay", 4, function() {
    equal(typeof Screenshot.addDay, 'function', 'Check existence of the Screenshot.addDay function');

    var dt = new Date('2015-05-19');
    deepEqual(Screenshot.addDay(dt, 0), new Date('2015-05-19'), 'Check adding 0 days');
    deepEqual(Screenshot.addDay(dt, 3), new Date('2015-05-22'), 'Check adding days');
    deepEqual(Screenshot.addDay(dt, -3), new Date('2015-05-16'), 'Check subtracting days');
});

test("Test setupCalendar", 7, function() {
    equal(typeof Screenshot.setupCalendar, 'function', 'Check existence of the Screenshot.setupCalendar function');

    $("#sandbox").empty();
    $('#sandbox').append('<div id="calendar"><div class="header"><span class="month">xxx</span></div><div class="days"><p id="shouldbegone"></p></div></div>');


    equal($('#sandbox #calendar .header .month').text(), 'xxx', 'Check our initial value');
    equal($('#sandbox #calendar #shouldbegone').length, 1, 'Check our initial days content');

    Screenshot.setupCalendar();

    equal($('#sandbox #calendar .header .month').text(), $.format.date(new Date(), 'MMMM yyyy'), 'Check we set the correct month');
    equal($('#sandbox #calendar #shouldbegone').length, 0, 'Check that we empty our days container first');
    equal($('#sandbox #calendar .days .day').length, 7, 'Check that we created 7 day items');
    equal($('#sandbox #calendar .days .day.today').length, 1, 'Check that only one item is marked as today');

    // Cleanup
    $("#sandbox").empty();
});

test("Test setupTiles", 3, function() {
    equal(typeof Screenshot.setupTiles, 'function', 'Check existence of the Screenshot.setupTiles function');

    $("#sandbox").empty();
    $('#sandbox').append('<div id="pulse"><div class="tiles"></div></div>');


    var el = $('#pulse .tiles');
    equal(typeof $._data(el[0], 'events'), 'undefined', 'Check that the click event handler is not there');
    Screenshot.setupTiles();
    equal(typeof $._data(el[0], 'events').click, 'object', 'Check that the click event handler is created');

    $("#sandbox").empty();
});

test("Test setupHelp", 3, function() {
    equal(typeof Screenshot.setupHelp, 'function', 'Check existence of the Screenshot.setupHelp function');

    $("#sandbox").empty();
    $('#sandbox').append('<div id="header"><div class="actions"><div class="action help"></div></div></div>');


    var el = $('#header .actions .action.help');
    equal(typeof $._data(el[0], 'events'), 'undefined', 'Check that the click event handler is not there');
    Screenshot.setupHelp();
    equal(typeof $._data(el[0], 'events').click, 'object', 'Check that the click event handler is created');

    $("#sandbox").empty();
});

test("Test onTileClick", 11, function() {
    equal(typeof Screenshot.onTileClick, 'function', 'Check existence of the Screenshot.onTileClick function');

    // Create our sandbaox with three tiles
    $("#sandbox").empty();
    $('#sandbox').append('<div id="pulse"><div class="tiles"><div class="item selected"><div class="tile t1"><p>x</p></div></div><div class="item"><div class="tile t2"><p>x</p></div></div><div class="item"><div class="tile t3"><p>x</p></div></div></div></div>');

    equal($('#sandbox .item.selected').length, 1, 'Check we are starting with one tile selected');
    equal($('#sandbox .item.selected .t1').length, 1, 'Check we have tile 1 selected');

    // Select tile 2
    Screenshot.onTileClick({target: $('#sandbox #pulse .t2')[0]});

    equal($('#sandbox .item.selected').length, 1, 'Check we have only one tile selected');
    equal($('#sandbox .item.selected .t2').length, 1, 'Check we have tile 2 selected');


    // Select tile 3 from inner p element
    Screenshot.onTileClick({target: $('#sandbox #pulse .t3 p')[0]});

    equal($('#sandbox .item.selected').length, 1, 'Check we have only one tile selected');
    equal($('#sandbox .item.selected .t3').length, 1, 'Check we have tile 3 selected');

    // Select tile 1 item element, t3 should remain selected
    Screenshot.onTileClick({target: $('#sandbox #pulse .item')[0]});

    equal($('#sandbox .item.selected').length, 1, 'Check we have only one tile selected');
    equal($('#sandbox .item.selected .t3').length, 1, 'Check we have tile 3 selected');

    // Select tile 3 again, t3 should remain selected
    Screenshot.onTileClick({target: $('#sandbox #pulse .t3')[0]});

    equal($('#sandbox .item.selected').length, 1, 'Check we have only one tile selected');
    equal($('#sandbox .item.selected .t3').length, 1, 'Check we have tile 3 selected');

    // Cleanup
    $("#sandbox").empty();
});

test("Test onHelpClick", 1, function() {
    equal(typeof Screenshot.onHelpClick, 'function', 'Check existence of the Screenshot.onHelpClick function');
});