/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' );

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/
module( "Matt Vrtis Unit Test" );
test( "Reverse String", 1, function() {
    // Verify the method exists
    //equal( typeof reverseString, 'function', 'Must reverse a string' );

    // Make sure the result from the divide function is valid
    equal(reverseString('Never odd or even.'), '.neve ro ddo reveN', 'passes: Never odd or even reversed is .neve ro ddo reveN');
});

test( "return min value", 3, function() {
	var one = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
	var two = [1, 2, 3, 4, 5];
	var three  = [7, 8, 9];
    
    equal(findMinValue(one), -1.1, 'passes: -1.1 is the lowest value in '+one.toString());
    equal(findMinValue(two), 1, 'passes: 1 is the lowest value in '+two.toString());
    equal(findMinValue(three), 7, 'passes: 7 is the lowest value in '+three.toString());
});

test( "Find Distinct Values, remove duplicates", 2, function() {
	var one = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
	var two = ['apple', 'pear', 'plum','pear', 'plum'];
    deepEqual(findDistinctValues(one),[3, 5, 7, 20, 0.18, 01, -1.1, 12, Infinity]  , 'passes: '+findDistinctValues(one).toString()+' are the distinct values in '+one.toString());
    deepEqual(findDistinctValues(two),['apple', 'pear', 'plum']  , 'passes: '+findDistinctValues(two).toString()+' are the distinct values in '+two.toString());
});

test( "removeFruits", 1, function() {
	var one = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
	var two = ['pear', 'banana'];
    deepEqual(removeFruits(one,two),['apple', 'orange', 'kiwi', 'plum', 'strawberry']  , 'passes: '+removeFruits(one,two)+', has had '+two.toString()+' removed from '+one.toString());
    
});

test( "pushOntoArray", 2, function() {
	var one ,three;
	one = three = [1, 2, 3, 4, 5];
	var two = 6;
	var four = [7, 8, 9];
	deepEqual(pushOntoArray(one,two), [1, 2, 3, 4, 5, 6] , 'passes: integer was successfuly pushed');
	deepEqual(pushOntoArray(three,four),[1, 2, 3, 4, 5, 7,8,9]  , 'passes: array was successfuly pushed');
});

test('splitListStrUsingComma',3, function(){
	var one = 'The, quick, brown, fox jumped over';
	var two = '';
	var three = null;
	equal(splitListStrUsingComma(one).length,4,'passes: '+one+' produces and array with length of 4');
	equal(splitListStrUsingComma(two).length,0,'passes: "" produces and array with length of 0');
	equal(splitListStrUsingComma(three).length,0,'passes: null produces and array with length of 0');
});

test('sum', 3, function() {
	var two = 6;
	equal(sum(1, 2, 3, 4, 5),15,'passes: 1+2+3+4+5 = 15');
	equal(sum(two),6,'passes: 6 = 6');
	equal(sum(7, 8, 9),24,'passes: 7+8+9 = 24');
});

test('isOnlyWhitespace', 3, function(){
	var one = 'aaaaa';
	var two = '      ';
	var three = '\n\r\t   ';
	ok(!isOnlyWhitespace(one),'passes: returns false, '+one+' contains non whitespace charaters');
	ok(isOnlyWhitespace(two),'passes: returns true, string of only spaces');
	ok(isOnlyWhitespace(three),'passes: returns true, string of tabs, line breaks, and spaces');
});

test('closure',3, function(){
	var c = new closure();
	ok(c instanceof closure,'passes: c is an instance of closure()');
	equal(c.public,'hello','passes: c.public == '+ c.public);
	equal(typeof _private,'undefined','_private not accessible outside of the closure');
});

test('JSON people group',3,function(){
	ok(group.people instanceof Array, 'passes group.people is an instance of an Array');
	deepEqual(_.keys(group.people[0]),["firstname", "lastname", "city", "state", "zip", "phonenumbers"],'passes person object has the following keys "firstname", "lastname", "city", "state", "zip", "phonenumbers"');
	ok(group.people[0].phonenumbers instanceof Array,'passes phonenumbers is an instance of an Array');
});

test('DataTable with private variables',3,function(){
	var _dataTable = new DataTable();
	ok(!_dataTable.addRow(),'Pass: addRow returns false if no columns have been set');
	_dataTable.addColumns('column1', 'column2', 'column3');
	equal(_dataTable.getData(),'{"column1":[],"column2":[],"column3":[]}', 'passes: adds column headers to the hash');
	_dataTable.addRow('value1A', 'value1B', 'value1C');
    _dataTable.addRow('value2A', 'value2B', 'value2C');
    equal(_dataTable.getData(),'{"column1":["value1A","value2A"],"column2":["value1B","value2B"],"column3":["value1C","value2C"]}','pass: stringified hash contains 3 keys with 2 values each');
});

test('Dynamically create select list with options and button',4,function(){
	var _d1 = $('#qunit-fixture').divOne();
	equal(_d1.children().length,2,'Pass there were two items created');
	equal(_d1.find('select').length,1,'pass: One select list was created');
	equal(_d1.find('input').length,1,'pass: One button was created');
	$('input',_d1).trigger('click');
	equal(_d1.log,'The select list with the name of "myselect" has the value of 0','pass: the input cick create a log message');

});
test('Dynamically create unordered list',4,function(){
	var _l1 = $('#qunit-fixture').listOne();
	equal(_l1.find('ul').length,1,'Pass: There was one unordered list created');
	ok(_l1.list instanceof Array,'Pass: an Array was created');
	equal(_l1.list.length,5,'Pass: The array contains five items');
	equal(_l1.find('li').length,5,'Pass: There are five LI elements');
});

