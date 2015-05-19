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

test("Test setupTiles", 1, function() {
    equal(typeof Screenshot.setupTiles, 'function', 'Check existence of the Screenshot.setupTiles function');
});

test("Test setupHelp", 1, function() {
    equal(typeof Screenshot.setupHelp, 'function', 'Check existence of the Screenshot.setupHelp function');
});

test("Test onTileClick", 1, function() {
    equal(typeof Screenshot.onTileClick, 'function', 'Check existence of the Screenshot.onTileClick function');
});

test("Test onHelpClick", 1, function() {
    equal(typeof Screenshot.onHelpClick, 'function', 'Check existence of the Screenshot.onHelpClick function');
});