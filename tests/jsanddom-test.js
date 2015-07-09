/********************************
Unit Test Example
********************************/
// module( "Example Unit Test" );
// test( "Example Test", 2, function() {
//     // Verify the method exists
//     equal( typeof divide, 'function', 'Must contain a divide function' ); 

//     // Make sure the result from the divide function is valid
//     ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
// });
/********************************
Please create your tests below...
********************************/
describe('Example Unit Test', function() {
    it('should run the divide function correctly', function() {
        expect(divide(4,2)).toEqual(2);
    });
    it('should run the reverseString function correctly', function() {
        expect(reverseString('Hello')).toEqual('olleH');
    });
    it('should run the findMinValue function correctly', function() {
         expect(findMinValue([5,10,9,7,5,4])).toEqual(4);
    });
    it('should run the findDistinctValues function correctly', function() {
        expect(findDistinctValues([5,10,7,7,5])).toEqual([5,7,10]);
    });
    it('should run the doFizzBuzz function correctly', function() {
        expect(doFizzBuzz()).toEqual(true);
    });
    it('should run the removeFruits function correctly', function() {
        expect(removeFruits(["orange","apple","pear"],["apple"])).toEqual(["orange","pear"]);
        expect(removeFruits(["orange","apple","pear"],["apple","orange"])).toEqual(["pear"]);
    });
    it('should run the pushOntoArray function correctly', function() {
        expect(pushOntoArray([5,10,7,7,5],9)).toEqual([5,10,7,7,5,9]);
        expect(pushOntoArray([5,10,7,7,5],[9,9])).toEqual([5,10,7,7,5,9,9]);
    });    
    it('should run the splitListStrUsingComma function correctly', function() {
        expect(splitListStrUsingComma('Hello')).toEqual('H,e,l,l,o');
        expect(splitListStrUsingComma('')).toEqual('');
    });    
    it('should run the sum function correctly', function() {
        expect(sum(1,2,3,4,5)).toEqual(15);
        expect(sum(3,4,5)).toEqual(12);
    });
    it('should run the isOnlyWhitespace function correctly', function() {
        expect(isOnlyWhitespace('    ')).toEqual(true);
        expect(isOnlyWhitespace('   0 ')).toEqual(true);
    });    
});
