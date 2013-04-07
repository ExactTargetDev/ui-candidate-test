/********************************
Unit Test Example
********************************/

module("Example Division Test");

// basic sanity test
test("Basic", 2, function() {
	// Verify the method exists
	doesGlobalFunctionExist("divide");
	
	// Make sure the result from the divide function is valid
	equal( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});

// check random numbers
test("Random", 10, function() {
	var $numerator, $denominator, $desiredResult, 
		$result, $description;
	
	var $i, $ic = 10;
	for ($i=0; $i<$ic; $i++) {
		// create random fraction values
	  $numerator = Math.floor(Math.random() * 99 + 1);
	  $denominator = Math.floor(Math.random() * 99 + 1);
	  
	  // calculate desired result and actual result
	  $desiredResult = $numerator / $denominator;
	  $result = divide($numerator, $denominator);
	  
	  // assert
	  $description = stringify($numerator, " divided by ", $denominator, " should equal ", $desiredResult);
	  equal($result, $desiredResult, $description);
	}
});



/* STRING REVERSAL TESTS *****************************************************/

module("String Reversal Test")
test("Basic", 2, function() {
	// Verify the method exists
	doesGlobalFunctionExist("reverseString");
	
	var $string = "this is a test";
	var $desiredResult = "tset a si siht";
	var $result = reverseString($string);
	var $description = stringify(
		"The reverse of \"", $string, 
		"\" should be \"", $desiredResult, "\""
	);
	
	// assert
	equal($result, $desiredResult, $description);
});

test("Random", 10, function() {
	var $length, $strings,
		$string, $desiredResult,
		$result, $description
	;

	var $i, $ic = 10;
	for ($i=0; $i<$ic; $i++) {
		$length = rand(10, 20);
		$strings = generateRandomStrings($length);
		
		$string = $strings[0];
		$desiredResult = $strings[1];
		$result = reverseString($string);
		$description = stringify(
			"The reverse of \"", $string, 
			"\" should be \"", $desiredResult, "\""
		);
		
		
		// assert
		equal($result, $desiredResult, $description);
	}

	var $length
	var $strings = generateRandomStrings(rand(10, 20));
});



/* MINIMUM NUMBER ************************************************************/

module("Minimum number");

test("Basic", 2, function() {
	// Verify the method exists
	doesGlobalFunctionExist("findMinValue");
	
	var $numbers = [-15, Math.Infinity, 34, 16, -15.4, 1, 0, "bob", "3", Math.NaN, {judo: true}, [1, 5, 3]];
	var $desiredResult = -15.4;
	var $result = findMinValue($numbers);
	var $description = stringify("Result ", $result, " should equal ", $desiredResult);
	
	// assert
	equal($result, $desiredResult, $description);
});

// only process numbers
test("Random (No Strings With Numbers)", 10, function() {
	var $generated, $numbers, $desiredResults, 
		$result, $description
	;

	var $i, $ic = 10;
	for ($i=0; $i<$ic; $i++) {		
		$generated = generateArrayOfRandomNumbers(rand(5, 10), false);
		$numbers = $generated[0];
		$desiredResult = $generated[1];
		$result = findMinValue($numbers, false);
		$description = stringify("The minimum value should be: ", $result, " == ", $desiredResult);
		
		// assert
		equal($result, $desiredResult, $description);
	}
});

// Allow strings such as 20px, 2%, etc
test("Random (Strings Can Have Numbers)", 10, function() {
	var $generated, $numbers, $desiredResults, 
		$result, $description
	;

	var $i, $ic = 10;
	for ($i=0; $i<$ic; $i++) {		
		$generated = generateArrayOfRandomNumbers(rand(5, 10), true);
		$numbers = $generated[0];
		$desiredResult = $generated[1];
		$result = findMinValue($numbers, true);
		$description = stringify("The minimum value should be: ", $result, " == ", $desiredResult);
		
		// assert
		equal($result, $desiredResult, $description);
	}
});


/* DISTINCT VALUES ***********************************************************/

module("Distinct Values");

test("Basic", 2, function() {
	// Verify the method exists
	doesGlobalFunctionExist("findDistinctValues");
	
	var $obj = {test: 1};
	var $values = [false, false, 1, 1, "bob", "bob", $obj, $obj];
	var $desiredResult = [false, 1, "bob", $obj];
	var $result = findDistinctValues($values);
	var $matched = areArraysEqual($desiredResult, $result);
	var $description = stringify(JSON.stringify($result), " should equal \n ", JSON.stringify($desiredResult));
	
	// assert
	equal($matched, true, $description);
});

test("Random", 10, function() {
	var $values, $array, $desiredResult,
		$result, $matched, $description;
	
	var $i, $ic = 10;
	for ($i=0; $i<$ic; $i++) {
		$values = generateRandomArrayOfNumbersAndStrings(5);
		$array = $values[0];
			$desiredResult = $values[1];
		$result = findDistinctValues($array);
		$matched = areArraysEqual($desiredResult, $result);
		$description = stringify(JSON.stringify($result), " should equal \n ", JSON.stringify($desiredResult));
		
		// assert
		equal($matched, true, $description);
	}
});



/* IS WHITESPACE ONLY ********************************************************/

module("Whitespace test");

test("Basic", 4, function() {
	// Verify the method exists
	doesGlobalFunctionExist("isOnlyWhitespace");
	
	var $empytishString = "         ";
	var $notEmptyString = "test";
	var $paddedString = "   \t  asdfasdf   ";
	
	// assert
	equal(isOnlyWhitespace($empytishString), true, "A string of spaces is indeed whitespace only...");
	equal(isOnlyWhitespace($notEmptyString), false, stringify("`", $notEmptyString, "` has no whitespace at all!"));
	equal(isOnlyWhitespace($paddedString), false, stringify("`"));
	
	// no random test needed
});



/* SUM ARRAY *****************************************************************/

module("reduce array to sum");

test("Basic", 2, function() {
	// Verify the method exists
	doesGlobalFunctionExist("sum");
	
	var $numbers = [0, 1, {bob: 4}, 2, 3, false, 4, 5, Math.Infinity, 6, 7, Math.NaN, 8, 9, undefined, true];
	var $desiredResult = 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + true;
	var $result = sum($numbers);
	$description = stringify("The sum of ", JSON.stringify($numbers), " should be ", $desiredResult);
	
	// assert
	equal($result, $desiredResult, $description);
});

test("Random", 10, function() {
	var $numbers, $number, $desiredResult, $result, $description;
	
	var $j, $i, $ic = 10;
	for ($i=0; $i<$ic; $i++) {
		$numbers = [];
		$desiredResult = 0;
	
		for ($j=0; $j<5; $j++) {
			$number = rand(0, 20);
			$numbers.push($number);
			$desiredResult += $number;
		}
	
		var $result = sum($numbers);
		$description = stringify("The sum of ", JSON.stringify($numbers), " should be ", $desiredResult);
		
		// assert
		equal($result, $desiredResult, $description);
	}
});



/* SPLIT STRING **************************************************************/

module("Split string");

test("Basic", 7, function() {
	// Verify the method exists
	doesGlobalFunctionExist("splitListStrUsingComma");
	
	var $test1 = "test, test , test";
	var $test2 = "1, 2,, 4";
	var $test3 = "";
	var $test4 = ",";
	var $test5 = {object: true};
	var $test6 = true;
	
	var $desired1 = ["test", "test", "test"];
	var $desired2 = ["1", "2", "", "4"];
	var $desired3 = [];
	var $desired4 = ["", ""];
	var $desired5 = [];
	var $desired6 = [];
	
	var $result1 = splitListStrUsingComma($test1);
	var $result2 = splitListStrUsingComma($test2);
	var $result3 = splitListStrUsingComma($test3);
	var $result4 = splitListStrUsingComma($test4);
	var $result5 = splitListStrUsingComma($test5);
	var $result6 = splitListStrUsingComma($test6);
	
	var $matched1 = areArraysEqual($desired1, $result1);
	var $matched2 = areArraysEqual($desired2, $result2);
	var $matched3 = areArraysEqual($desired3, $result3);
	var $matched4 = areArraysEqual($desired4, $result4);
	var $matched5 = areArraysEqual($desired5, $result5);
	var $matched6 = areArraysEqual($desired6, $result6);
	
	// assert
	equal($matched1, true, stringify(JSON.stringify($result1), " should match ", JSON.stringify($desired1)));
	equal($matched2, true, stringify(JSON.stringify($result2), " should match ", JSON.stringify($desired2)));
	equal($matched3, true, stringify(JSON.stringify($result3), " should match ", JSON.stringify($desired3)));
	equal($matched4, true, stringify(JSON.stringify($result4), " should match ", JSON.stringify($desired4)));
	equal($matched5, true, stringify(JSON.stringify($result5), " should match ", JSON.stringify($desired5)));
	equal($matched6, true, stringify(JSON.stringify($result6), " should match ", JSON.stringify($desired6)));

	// no random on this one either
});



/* CONCAT ARRAY **************************************************************/

// I just checked the clock... No more over the top randomized unit tests.

module("Concat array");

test("Basic", 4, function() {
	// Verify the method exists
	doesGlobalFunctionExist("pushOntoArray");
	
	var $array1 = ["chicken wings"];
	var $array2 = ["wine"];
	var $array3 = [];
	
	var $push1 = ["beer"];
	var $push2 = "cheese";
	var $push3 = [1, 2, 3];
	
	var $desired1 = ["chicken wings", "beer"];
	var $desired2 = ["wine", "cheese"];
	var $desired3 = [1, 2, 3];
	
	pushOntoArray($array1, $push1);
	pushOntoArray($array2, $push2);
	pushOntoArray($array3, $push3);
	
	var $label1 = JSON.stringify($array1);
	var $label2 = JSON.stringify($array2);
	var $label3 = JSON.stringify($array3);
	
	var $match1 = areArraysEqual($desired1, $array1);
	var $match2 = areArraysEqual($desired2, $array2);
	var $match3 = areArraysEqual($desired3, $array3);
	
	// assert
	equal($match1, true, stringify($label1, " should match ", JSON.stringify($desired1)));
	equal($match2, true, stringify($label2, " should match ", JSON.stringify($desired2)));
	equal($match3, true, stringify($label3, " should match ", JSON.stringify($desired3)));
});



/* MODULUS TEST **************************************************************/

// no unit testability, just making sure the method exists, then
// calling the method for the console output

module("Modulus test");

test("Basic", 1, function() {
	// Verify the method exists
	doesGlobalFunctionExist("doFizzBuzz");
	
	doFizzBuzz();
});



/* MISC. FUNCTIONS ***********************************************************/

function doesGlobalFunctionExist(functionName) {
	equal(typeof window[functionName], "function", "Must contain a "+ functionName+ " function"); 
}

function stringify() {
	var $pieces = Array.prototype.slice.call(arguments);
	return $pieces.join("");
}

// use an alternative method to construct strings
function generateRandomStrings(length) {
	var $string = "";
	var $reversed = "";
	var $letter, $number;
	
	var $i, $ic = length;
	for ($i=0; $i<$ic; $i++) {
		// ASCII 32 - 126
		$number = rand(32, 126);
		$letter = String.fromCharCode($number);
		$string += $letter;
		$reversed = $letter + $reversed;
	}
	
	return [$string, $reversed];
}

function generateArrayOfRandomNumbers(length, allowStrings) {
	$array = [];
	
	var $value, $minimum = null;
	var $i, $ic = length;
	for ($i=0; $i<$ic; $i++) {
		$value = generateRandomEntry();
		$array.push($value);
		
		// cart leading the horse...
		if (typeof $value == "string" && allowStrings) {
			$value = parseFloat($value);
		}
		if (!isFinite($value)) continue;
		if (toString.call($value) !== "[object Number]") continue;
		if ($minimum != null && $value > $minimum) continue;
		$minimum = $value;
	}
	
	if ($minimum == null) $minimum = false;
	return [$array, $minimum];
}

function generateRandomArrayOfNumbersAndStrings(length) {
	var $valuesAsColumns = {};
	var $distinct = [];
	var $output = [];
	
	var $duplicate, $value, $str,
		$i, $ic = length;
	for ($i=0; $i<$ic; $i++) {
		if (rand(0, 10) > 2 || !$output.length) { // original value
			$value = randomNumberOrString();
		
		} else { // duplicate
			$value = $output[rand(0, $output.length - 1)];
		}
		
		$str = JSON.stringify($value);
		if ($valuesAsColumns[$str] == null) {
			$distinct.push($value);
			$valuesAsColumns[$str] = true;
		}
		
		$output.push($value);
	}
	
	return [$output, $distinct];
}

// Objects present a problem in unit testings. My 
// findDistinctValues correctly filters identical
// objects but because the random generation will 
// creates fresh identical objects they will never 
// match in a simple manner.
function randomNumberOrString() {
	// number
	if (rand(0, 10) > 5) return rand(0, 50);
	// string
	return generateRandomStrings(3)[0];
}

function generateRandomEntry() {
	var $type = rand(0, 8);
	switch ($type) {
		case 0: // string
			return generateRandomStrings(10)[0];
			break;
			
		case 1: // object
			return {
				"not the greatest": "random object"
			};
			break;
			
		case 2: // array
			return [
				generateRandomStrings(10)[0],
				generateRandomStrings(10)[0],
				generateRandomStrings(10)[0],
				generateRandomStrings(10)[0],
				generateRandomStrings(10)[0]
			];
			break;
			
		case 3: // Special bits
			$type = rand(0, 5);
			switch ($type) {
				case 0: return null; break;
				case 1: return undefined; break;
				case 2: return Math.PI; break;
				case 3: return Math.Infinity; break;
				case 4: return Math.NaN; break;
			}
			break;
			
		case 4: // float
		case 5:
			return rand(-100, 1000) + Math.random();
			break; 
	
		default: // integer
			return rand(-100, 1000);
			break;
	}
}

function rand(min, max) {
	if (min < 0) max += Math.abs(max);
	if (min > 0) max -= Math.abs(min);
	return min + Math.floor(Math.random() * max);
}

function areArraysEqual(arr1, arr2) {
	// "cheating" with jQuery
	var $overlapA = $(arr1).not(arr2);
	var $overlapB = $(arr2).not(arr1);
	return (!$overlapA.length && !$overlapB.length);
}
