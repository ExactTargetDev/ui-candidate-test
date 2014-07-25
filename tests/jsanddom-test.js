/********************************
 Unit Test Example
 ********************************/
module("Travis Hubbard's Testathon");
var testVal, expectedVal, result;

test("divide()", 2, function(assert) {
    // Verify the method exists
    assert.equal(typeof divide, 'function', 'Must contain a divide function');

    // Make sure the result from the divide function is valid
    assert.ok(divide(4, 2), 2, 'Expected 2 as the result, the result was: ' + divide(4, 2));
});
/********************************
 Please create your tests below...
 ********************************/
test("reverseString()", 2, function(assert) {
    // Verify the method exists
    assert.equal(typeof reverseString, 'function', 'Must contain a reverseString function');

    testVal = 'AbcDeFg';
    expectedVal = 'gFeDcbA';
    result = reverseString(testVal);
    // Make sure the result from the reverseString function is valid
    assert.equal(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);
});

test("findMinValue()", 2, function(assert) {
    // Verify the method exists
    assert.equal(typeof findMinValue, 'function', 'Must contain a findMinValue function');

    testVal = [8, 4, 165.3, 9, 2];
    expectedVal = 2;
    result = findMinValue(testVal);
    // Make sure the result from the findMinValue function is valid
    assert.equal(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);
});

test("findDistinctValues()", 2, function(assert) {
    // Verify the method exists
    assert.equal(typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function');

    testVal = [1, 2, 4, 3, 2, 1];
    expectedVal = [1, 2, 4, 3];
    result = findDistinctValues(testVal);
    // Make sure the result from the findDistinctValues function is valid
    assert.deepEqual(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);
});

test("doFizzBuzz()", 1, function(assert) {
    // Verify the method exists
    assert.equal(typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function');

    doFizzBuzz();
});

test("removeFruits()", 2, function(assert) {
    // Verify the method exists
    assert.equal(typeof removeFruits, 'function', 'Must contain a removeFruits function');

    testVal = ['Boysenberry', 'Dragonfruit', 'Huckleberry', 'Lychee', 'Purple Mangosteen'];
    var removeVals = ['Lychee', 'Purple Mangosteen'];
    expectedVal = ['Boysenberry', 'Dragonfruit', 'Huckleberry'];
    result = removeFruits(testVal, removeVals);
    // Make sure the result from the removeFruits function is valid
    assert.deepEqual(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);
});

test("pushOntoArray()", 3, function(assert) {
    // Verify the method exists
    assert.equal(typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function');

    var initialArr = ['Ingress', 'Captain', 'Potato', 4],
        toPush = 'FAJITAS';
    expectedVal = ['Ingress', 'Captain', 'Potato', 4, 'FAJITAS'];
    result = pushOntoArray(initialArr, toPush);
    // Make sure the result from the pushOntoArray function is valid
    assert.deepEqual(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);

    initialArr = ['Ingress', 'Captain', 'Potato', 4];
    toPush = ['FAJITAS', 'salsa', 'SunKing Osiris'];
    expectedVal = ['Ingress', 'Captain', 'Potato', 4, 'FAJITAS', 'salsa', 'SunKing Osiris'];
    result = pushOntoArray(initialArr, toPush);
    // Make sure the result from the pushOntoArray function is valid
    assert.deepEqual(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);
});

test("splitListStrUsingComma()", 3, function(assert) {
    // Verify the method exists
    assert.equal(typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function');

    testVal = 'The, quick, brown, fox jumped over';
    expectedVal = ['The', ' quick', ' brown', ' fox jumped over'];
    result = splitListStrUsingComma(testVal);
    // Make sure the result from the splitListStrUsingComma function is valid
    assert.deepEqual(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);

    testVal = '';
    expectedVal = [];
    result = splitListStrUsingComma(testVal);
    // Make sure the result from the splitListStrUsingComma function is valid
    assert.deepEqual(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);
});

test("sum()", 4, function(assert) {
    // Verify the method exists
    assert.equal(typeof sum, 'function', 'Must contain a sum function');

    expectedVal = 6;
    result = sum(1, 2, 3);
    // Make sure the result from the sum function is valid
    assert.equal(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);

    expectedVal = -40;
    result = sum(10, -50);
    // Make sure the result from the sum function is valid
    assert.equal(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);

    expectedVal = 10;
    result = sum(10);
    // Make sure the result from the sum function is valid
    assert.equal(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);
});

test("isOnlyWhitespace()", 3, function(assert) {
    // Verify the method exists
    assert.equal(typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function');

    testVal = 'Hello There!';
    expectedVal = false;
    result = isOnlyWhitespace(testVal);
    // Make sure the result from the isOnlyWhitespace function is valid
    assert.equal(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);

    testVal = '       ';
    expectedVal = true;
    result = isOnlyWhitespace(testVal);
    // Make sure the result from the isOnlyWhitespace function is valid
    assert.equal(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);
});

test("doubleNumberClosure()", 2, function(assert) {
    // Verify the method exists
    assert.equal(typeof doubleNumberClosure, 'function', 'Must contain a doubleNumberClosure function');

    expectedVal = 25;
    result = doubleNumberClosure(5);
    // Make sure the result from the subtractClosure function is valid
    assert.equal(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);
});

test("test JSON PersonObj", 8, function(assert) {
    // Verify the method exists
    assert.equal(typeof PersonObj, 'function', 'Must contain a PersonObj function');

    var person = new PersonObj();

    // Test set using values using strings
    person.set('firstName', 'Brett');
    expectedVal = 'Brett';

    assert.equal(person.firstName, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);

    // Test set using a simple object
    var data = {
        firstName: 'Brett',
        lastName: 'Bretterson'
    };

    // reset person
    person = new PersonObj();
    person.set(data);

    expectedVal = 'Brett';
    result = person.firstName;
    assert.equal(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);

    expectedVal = 'Bretterson';
    result = person.lastName;
    assert.equal(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);

    // Test set using a nested Object
    data = {
        firstName: 'Brett',
        phoneNumbers: {
            home: '123-456-7890'
        }
    };

    // reset person
    person = new PersonObj();
    person.set(data);

    expectedVal = 'Brett';
    result = person.firstName;
    assert.equal(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);

    expectedVal = '123-456-7890';
    result = person.phoneNumbers.home;
    assert.equal(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);

    // Make sure mobile (which should exist and be undefined) did not get removed
    expectedVal = true;
    result = _.has(person.phoneNumbers, 'mobile');
    assert.equal(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);

    expectedVal = undefined;
    result = person.phoneNumbers.mobile;
    assert.equal(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);
});

test("test JSON PeopleCollection", 3, function(assert) {
    // Verify the method exists
    assert.equal(typeof PeopleCollection, 'function', 'Must contain a PeopleCollection function');

    // set up a PersonObj first
    var person = new PersonObj();
    person.set('firstName', 'Brett');

    var peopleCollection = new PeopleCollection();
    peopleCollection.add(person);

    expectedVal = 1;
    result = peopleCollection.length();
    assert.equal(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);

    peopleCollection.remove(person);
    expectedVal = 0;
    result = peopleCollection.length();
    assert.equal(result, expectedVal, 'Expected ' + expectedVal + ' as the result, the result was: ' + result);
});

test("test JSON DataTable", 14, function(assert) {
    // Verify the method exists
    assert.equal(typeof DataTable, 'function', 'Must contain a DataTable function');

    var dataTable = new DataTable(),
        columns = ['Name', 'Date', 'Burritos Eaten'],
        row1 = ['Travis', '7/24/2014', 94];

    // Test should return before adding anything because there are no columns
    dataTable.addRows(row1)
    assert.equal(dataTable._rows.length, 0, 'No rows should be added yet');

    dataTable.addColumns('Name', 'Date', 'Burritos Eaten');
    assert.equal(dataTable._columns.length, 3, '3 columns should have been created')

    dataTable.addRows('Travis', '7/24/2014', 94, 'BADBADBAD!')
    assert.equal(dataTable._rows.length, 0, 'No rows should be added yet because more args were '
        + 'passed in than there are columns');

    dataTable.addRows('Travis', '7/24/2014', 94)
    assert.equal(dataTable._rows.length, 1, '1 set of row data should be entered');
    assert.equal(dataTable._rows[0][0], 'Name_Travis', 'First entry in first row should be Name_Travis');
    assert.equal(dataTable._rows[0][2], 'BurritosEaten_94', 'Burritos Eaten key should be formed correctly');

    expectedVal = {
        columns: ['Name', 'Date', 'Burritos Eaten'],
        rows: [['Travis', '7/24/2014', '94']]
    };
    assert.deepEqual(dataTable.getData(), expectedVal, 'Data should be returned as a JSON Object with correct data');

    expectedVal = [['Travis', '7/24/2014', '94']];
    assert.deepEqual(dataTable.getRowValues(), expectedVal, 'Row data should be returned as an Array with correct data');

    expectedVal = ['Name', 'Date', 'Burritos Eaten'];
    assert.deepEqual(dataTable.getColumns(), expectedVal, 'Columns should be returned as an Array with correct data');

    expectedVal = true;
    assert.equal(dataTable.columnExists('Name'), expectedVal, 'Name should be in column data');

    expectedVal = false;
    assert.equal(dataTable.columnExists('BADBAD'), expectedVal, 'BADBAD should not be in column data');

    expectedVal = 'pasta';
    assert.equal(dataTable.colNameToId('pasta'), expectedVal, 'pasta should column ID: pasta');

    expectedVal = 'LotsOfData';
    assert.equal(dataTable.colNameToId('Lots of Data'), expectedVal, 'Lots of Data should column ID: LotsOfData');

});


test("test select section", 4, function(assert) {
    assert.equal(typeof addSelectElement, 'function', 'Must contain an addSelectElement function');
    assert.equal(typeof onSelectButtonClicked, 'function', 'Must contain an onSelectButtonClicked function');
    assert.equal(typeof onSelectChanged, 'function', 'Must contain an addSelectElement function');
    assert.equal(typeof updateSelectedVal, 'function', 'Must contain an updateSelectedVal function');

    // more tests

    assert.equal(typeof selectLink, 'function', 'Must contain a selectLink function');

    // more tests

    assert.equal(typeof createList1Items, 'function', 'Must contain a createList1Items function');

    // more tests

    assert.equal(typeof addCheckboxes, 'function', 'Must contain an addCheckboxes function');
    assert.equal(typeof onCheckAllClicked, 'function', 'Must contain an onCheckAllClicked function');
    assert.equal(typeof onCheckNoneClicked, 'function', 'Must contain an onCheckNoneClicked function');
    assert.equal(typeof toggleEl, 'function', 'Must contain a toggleEl function');
});
