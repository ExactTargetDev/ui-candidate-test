//http://stackoverflow.com/questions/7837456/comparing-two-arrays-in-javascript
Array.prototype.compare = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].compare(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}

QUnit.consoleData = [];
//http://stackoverflow.com/questions/9216441/intercept-calls-to-console-log-in-chrome
(function () {
  var log = console.log;
  console.log = function () {
	QUnit.consoleData.push(arguments[0]);
    log.apply(this, Array.prototype.slice.call(arguments));
  };
}());

/********************************
Unit Test Example
********************************/
//module( "Example Unit Test" );
test( "divide", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Function exists' ); 

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/
test( "reverseString", function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Function exists' ); 

	var a = ['thequickbrownfox','123','*(&',String.fromCharCode(225)+String.fromCharCode(226)],
		b = ['xofnworbkciuqeht','321','&(*',String.fromCharCode(226)+String.fromCharCode(225)];
	for(var i=0;i<a.length;i++) {
		equal( reverseString(a[i]),b[i],a[i] );
	}
});

test( "findMinValue", function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Function exists' ); 

	var a = [[56345,1341,23,2342,2342,54533,3432]],
		b = [23];
	for(var i=0;i<a.length;i++) {
		equal( findMinValue(a[i]),b[i],a[i] );
	}
});


test( "findDistinctValues", function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Function exists' ); 

	var a = [[56345,1341,'abc',2342,2342,56345,'abc']],
		b = [[56345, 1341, 'abc', 2342]];
	for(var i=0;i<a.length;i++) {
		var c = findDistinctValues(a[i]);
		equal( c.compare(b[i]),true,a[i] );
	}
});


test( "doFizzBuzz", function() {
    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'Function exists' ); 
	
	var a = ['FizzBuzzTest'],
		b = [[1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz',16,17,'Fizz',19,'Buzz','Fizz',22,23,'Fizz','Buzz',26,'Fizz',28,29,'FizzBuzz',31,32,'Fizz',34,'Buzz','Fizz',37,38,'Fizz','Buzz',41,'Fizz',43,44,'FizzBuzz',46,47,'Fizz',49,'Buzz','Fizz',52,53,'Fizz','Buzz',56,'Fizz',58,59,'FizzBuzz',61,62,'Fizz',64,'Buzz','Fizz',67,68,'Fizz','Buzz',71,'Fizz',73,74,'FizzBuzz',76,77,'Fizz',79,'Buzz','Fizz',82,83,'Fizz','Buzz',86,'Fizz',88,89,'FizzBuzz',91,92,'Fizz',94,'Buzz','Fizz',97,98,'Fizz','Buzz']];
	for(var i=0;i<a.length;i++) {
		doFizzBuzz();
		equal( b[i].compare(QUnit.consoleData),true,a[i] );
		QUnit.consoleData = [];
	}
});


test( "removeFruits", function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Function exists' ); 

	var a = [['one','two','three','four','five']],
		rm = [['two','five']],
		b = [['one','three','four']];
	for(var i=0;i<a.length;i++) {
		var clone = a[i].slice(0),
			c = removeFruits(clone,rm[i]);
		equal( c.compare(b[i]),true,a[i] );
	}
});

test( "pushOntoArray", function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Function exists' ); 

	var master = [1,2,3],
		tests = ['simple',4,[56345,1341,'abc',2342,2342,56345,'abc']],
		answers = [[1,2,3,'simple'],[1,2,3,4],[1,2,3,56345,1341,'abc',2342,2342,56345,'abc']];
	for(var i=0;i<tests.length;i++) {
		var clone = master.slice(0),
			result = pushOntoArray(clone,tests[i]);
		equal( result.compare(answers[i]),true,tests[i] );
	}
});

test( "splitListStrUsingComma", function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Function exists' ); 

	var a = ['one,two',''],
		b = [['one','two'],[]];
	for(var i=0;i<a.length;i++) {
		var c = splitListStrUsingComma(a[i]);
		equal( c.compare(b[i]),true,a[i] );
	}
});

test( "sum", function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Function exists' ); 

	var tests = [[1,2],[3,3,3]],
		answers = [3,9];
	for(var i=0;i<tests.length;i++) {
		equal( sum.apply(this,tests[i]),answers[i],tests[i] );
	}
});

test( "isOnlyWhitespace", function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Function exists' ); 

	var tests = ['','  ','     ','  1  '],
		answers = [false,true,true,false];
	for(var i=0;i<tests.length;i++) {
		equal( isOnlyWhitespace(tests[i]),answers[i],tests[i] );
	}
});

test( "closureExample", function() {
    // Verify the method exists
    equal( typeof closureExample, 'function', 'Function exists' ); 


});

test( "addRows", function() {
    // Verify the method exists
    equal( typeof addRows, 'function', 'Function exists' ); 


});

test( "addColumns", function() {
    // Verify the method exists
    equal( typeof addColumns, 'function', 'Function exists' ); 


});

test( "getData", function() {
    // Verify the method exists
    equal( typeof getData, 'function', 'Function exists' ); 


});

/*
test( "functionname", function() {
    // Verify the method exists
    equal( typeof functionname, 'function', 'Function exists' ); 

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
*/
