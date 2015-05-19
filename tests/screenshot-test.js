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

test("Test setupCalendar", 1, function() {
    equal(typeof Screenshot.setupCalendar, 'function', 'Check existence of the Screenshot.setupCalendar function');
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

test("Test onTileClick", 1, function() {
    equal(typeof Screenshot.onTileClick, 'function', 'Check existence of the Screenshot.onTileClick function');
});

test("Test onHelpClick", 1, function() {
    equal(typeof Screenshot.onHelpClick, 'function', 'Check existence of the Screenshot.onHelpClick function');
});