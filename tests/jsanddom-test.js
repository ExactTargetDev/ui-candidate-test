/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' );

    // Make sure the result from the divide function is valid
    ok( (divide( 4, 2 ) == 2), 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) ); //ok( truthy [, message ] )
});
/********************************
Please create your tests below...
********************************/
module("Basic JS tests");
test("reverseString",function(){
   equal( reverseString('qwerty'),'ytrewq',"Expected ytrewq got " + reverseString('qwerty'));

});
test("findMinValue",function(){
   var arr = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
   equal( findMinValue(arr),-1.1,"Expected -1.1 got "+ findMinValue(arr));

});
test("findDistinctValues",function(){
    var arr = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];
    var expected = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity];
    equal( JSON.stringify(findDistinctValues(arr)),JSON.stringify(expected),"Expected ["+expected+"] got ["+findDistinctValues(arr)+"]");
});
test("doFizzBuzz",function(){

    var result = doFizzBuzz();
    equal(result.fizz,33,"Expected 33 got "+result.fizz);
    equal(result.buzz,20,"Expected 20 got "+result.buzz);
});
test("removeFruits",function(){
    var fruits = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
    var toRemove = ['pear', 'banana'];
    var expected = ['apple', 'orange', 'kiwi', 'plum', 'strawberry'];
    equal(JSON.stringify(removeFruits(fruits,toRemove)),JSON.stringify(expected),"Expected "+expected+" got "+removeFruits(fruits,toRemove));

});
test("pushOntoArray",function(){
    var array = [1,2,3,4,5];
    var toPush = [6,7,['a','b','c'],8,['x','y',['zeta','omega']],9,10];
    var expected = [1,2,3,4,5,6,7,'a','b','c',8,'x','y','zeta','omega',9,10];
    equal(JSON.stringify(pushOntoArray(array,toPush)),JSON.stringify(expected),"Expected "+expected+" got "+pushOntoArray(array,toPush));
});
test("splitListStrUsingComma",function(){
    var str = "hey,there,how,are,you";
    var expected = ['hey','there','how','are','you'];
    equal(JSON.stringify(splitListStrUsingComma(str)),JSON.stringify(expected),"Expected "+expected+" got "+splitListStrUsingComma(str));
    equal(JSON.stringify(splitListStrUsingComma('')),JSON.stringify([]),"Expected [] got ["+splitListStrUsingComma('')+"]");
});
test("sum",function(){
    var expected = 19;
    equal(sum(1, 1, 2, 3, 5, 7),expected,"Expected "+expected+" got "+sum(1, 1, 2, 3, 5, 7));
});
test("isOnlyWhitespace",function(){
   var testStr1 = "     fdh     ";
   var testStr2 = "\n\n\n\n\t  ";
   var testStr3 = "                        ";

   equal(isOnlyWhitespace(testStr1),false,"Expected False");
   equal(isOnlyWhitespace(testStr2),true,"Expected True");
   equal(isOnlyWhitespace(testStr3),true,"Expected True");
});
module("Advanced Js tests");
test("dataTable",function(){
    var expected = '{"rows":["row1A","row1A"],"columns":["column1","column1"]}';
   var dt = new DataTable();
    dt.addColumns('column1','column2');
    dt.addRows('row1A','row1B');
    equal(dt.getData(),expected,"Expected "+expected+" got "+dt.getData());
});
test("addSelect",function(){
   addSelect();
   equal(($('#newSelect').length != 0),true,"Expected element to exist");
});
test("doListAdd",function(){
    doListAdd();
    equal(($('#li5').length != 0),true,"Expected element to exist");
});
test("addCheckbox",function(){
    addCheckbox();
    equal(($('#check').length != 0),true,"Expected element to exist");
})