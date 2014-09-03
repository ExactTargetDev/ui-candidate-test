/********************************
Unit Test Example
********************************/
/*module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
}); */
/********************************
Please create your tests below...
********************************/
//module( "Example Unit Test" );


test('divide()', function() {
	
    ok(!isNaN(divide(3,4)), 'inputs should be number');
    
  
});

test('reverseString()', function(){

	ok(typeof reverseString('reverse') === "string", "Return value is not a String");
});

test('findMinValue()', function(){
	var valArr = [3,5,7,2,1];

	ok(Array.isArray(valArr), "Input should be an Array");
	ok(!Array.isArray(findMinValue(valArr)), "Input should be an Array");
});

test('findDistinctValues()', function(){
	var arr = [3,6,9,3,4,4];

	notEqual(arr.length, findDistinctValues(arr),"converting to distinct array faild");

});

test('doFizzBuzz', function(){

	equal( typeof doFizzBuzz, 'function', 'doFizzBuzz function not defined/exists' ); 


});

test('removeFruits',function(){
	var x = ["a","v","f","r","w"];
	var y = ["a","f"];

	ok(Array.isArray(x), "Input should be an Array");
	ok(Array.isArray(y), "Input should be an Array");
	equal(removeFruits(x,y).indexOf(y[1]), -1 , "failed to remove fruits from array");


});

test('sum', function(){

		equal(60, sum(20,30,10),"failed adding number")
	
});

test('isOnlyWhitespace', function(){
	ok(isOnlyWhitespace("white space"), "failed to identify white space");
});


test("closureExample", function(){
	
	equal( typeof closureExample, 'function', 'closureExample function not defined/exists' ); 
	equal( typeof some, 'function', 'closureExample function not defined/exists' ); 

})

test("people", function(){
	
	equal( typeof people, 'object', 'people should be an object' ); 
})


test("pushOntoArray", function(){

	var x = ["a","b","c","d"];
	var y = ["e","f"];
	equal(6 , pushOntoArray(x,y).length, "unable to merge two arrays");

	
});
