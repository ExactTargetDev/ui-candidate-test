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
module("custom tests");
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