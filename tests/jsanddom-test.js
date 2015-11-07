/*

	I updated the test runner to Jasmine because I
	don't really know qUnit, and the README said I
	could use any libraries I wanted to.

	Each describe block will test a different function
	in the jsanddom.js file.

*/
$(function() {

	//Testing the provided divide function
	describe('The divider', function() {

		it('correctly divides numbers', function() {
			var quotient = divide(4, 2);
			expect(quotient).toEqual(2);
		});

	});

	//reverseString
	describe('The string reverser', function() {

		it('reverses the string', function() {
			var theString = reverseString('Subscribers rock');
			expect(theString).toEqual('kcor srebircsbuS');
		});

	});

	//findMinValue
	describe('The minimum value finder', function() {

		it('should find the minimum value in an array', function() {
			var minValue = findMinValue([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]);
			expect(minValue).toEqual(-1.1);
		});

	});

	//findDistinctValues
	describe('The distinct value finder', function() {

		it('return distinct values only', function() {
			var distinctValues = findDistinctValues([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]);
			expect(distinctValues).toEqual([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity]);
		});

	});

	//removeFruits
	describe('The fruit remover', function() {

		it('should remove the specified fruits from the array', function() {
			var master = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
			var fruitsToRemove = ['pear', 'banana'];
			removeFruits(master, fruitsToRemove);
			expect(master).toEqual(['apple', 'orange', 'kiwi', 'plum', 'strawberry']);
		});

	});

	//pushOntoArray
	describe('The array pusher', function() {

		var array = [1, 2, 3, 4, 5];

		it('should add primitive values as elements and modify the original array', function() {
			pushOntoArray(array, 6);
			expect(array).toEqual([1, 2, 3, 4, 5, 6]);
		});

		it('should add all values of an array as elements and modify the original array', function() {
			pushOntoArray(array, [7, 8, 9]);
			expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
		});

	});

	//splitListStrUsingComma
	describe('The split string on comma-er', function() {

		it('should return an array of split values', function() {
			var result = splitListStrUsingComma('The, quick, brown, fox jumped over');
			expect(result).toEqual(['The', 'quick', 'brown', 'fox jumped over']);
		});

		it('should return an empty array if the string is empty', function() {
			var result = splitListStrUsingComma('');
			expect(result).toEqual([]);
		});

	});

	//sum
	describe('The sum function', function() {

		it('should add all arguments together', function() {
			var result = sum(1, 1, 2, 3, 5, 7);
			expect(result).toEqual(19);
		});

	});

	//isOnlyWhitespace
	describe('The whitespace checker', function() {

		it('should return true if string is only whitespace', function() {
			var result = isOnlyWhitespace('    ');
			expect(result).toBe(true);
		});

		it('should return false if string is NOT only whitespace', function() {
			var result = isOnlyWhitespace('   d ,  turtle');
			expect(result).toBe(false);
		});
	});

});