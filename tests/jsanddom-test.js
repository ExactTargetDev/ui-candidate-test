/********************************
Unit Test Example
********************************/

module("Example Unit Test");

// basic sanity test
test("Example Test", 2, function() {
	// Verify the method exists
	doesGlobalFunctionExist("divide");
	
	// Make sure the result from the divide function is valid
	equal( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});

// check random numbers
test("Random Division Test", 10, function() {
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
test("Basic Test", 2, function() {
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

test("Random Strings", 10, function() {
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

test("Basic Test", 2, function() {
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
test("Random Tests (No Strings With Numbers)", 10, function() {
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
test("Random Tests (Strings Can Have Numbers)", 10, function() {
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
	console.log($value);
		
	return [$array, $minimum];
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
