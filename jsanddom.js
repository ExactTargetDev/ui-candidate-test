     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         var res = '';
          for (var i = str.length - 1; i >= 0; i--){
                res += str[i];
          }
          return res;
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         return Math.min.apply(Math, values); 
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(arr) {
          var distinctArr = [];
          for (var i=0, l=arr.length; i<l; i++){
               if (distinctArr.indexOf(arr[i]) === -1 && arr[i] !== ''){
                    distinctArr.push(arr[i]);
               }
          }
               console.log(distinctArr);
               return distinctArr;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
          for (var i = 1; i <= 100; i++) {
               var res = i % 3 == 0, b = i % 5 == 0;
               console.log(res ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
          }
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         for (var i = 0; i < fruits.length; i++) {  
     		for (var j = 0; j < fruitsToRemove.length; j++) {  
     			if (fruits[i] == fruitsToRemove[j]) {  
     				fruits.splice(i,1); 
     				
     			}
     		}  
     	}
	     console.log(fruits);
	     return fruits;  
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
        for(var i=0; i<toPush.length; i++){  
        	array.push(toPush[i]);  
     	}  
	console.log(array);
	return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
        var splitArr = [];  
	if(sourceStr !== null && sourceStr !== undefined && sourceStr !== ''){  
		splitArr = sourceStr.split(","); 
		console.log(splitArr);
		return splitArr;  
	}  
	else{  
		console.log(splitArr);
		return splitArr;  
	}  
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         // FILL THIS IN
         var total = 0;
               for (var i=0; i < arguments.length; i++) {
                    total += arguments[i];
        }
        return total;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
    
	    if (sourceStr && !sourceStr.trim()) {
	    	console.log("true");
	        return true;
	     }
	    console.log("false");
	    return false;

     }

     // write an example of a javascript closure
     function closureFunc() {
          var count = 0;
          function counter() {  
               count = count + 1;
               return count;
          }
          return counter; 
    }
     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
/*

{
    "people": {
           {
                "firstName": "Kumar",
                "lastName":"Nag",
                "City":"New York",
                "State":"NY",
                "Zip":"123456",
                "PhoneNumbers": {
                    "home":"1231235678",
                    "work":"2312356780",
                    "mobile":"3123567890"			
                }   
           },
           {
                "firstName": "Manoj",
                "lastName":"Kumar",
                "City":"Atlanta",
                "State":"tx",
                "Zip":"343434",
                "PhoneNumbers": {
                    "home":"5555555555",
                    "work":"4444444444",
                    "mobile":"7777777777"			
                }   
           }
        
    }
}


*/


     // Create a javascript object (DataTable) with the following:
     // A private columns property (string array)
     // A private rows property (string array)
     // A public method addRows that adds an item to the rows array
     // A public method addColumns that adds an item to the columns array
     // A public method getData that returns the a json object representation of the DataTable
     // Note: the row object should be a hash of the column name and row item value
     // Example:
     // .addColumns('column1', 'column2', 'column3');
     // .addRow('value1A', 'value1B', 'value1C');
     // .addRow('value2A', 'value2B', 'value2C');

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.

/*
<!DOCTYPE html>
<html>
<body>

<p>Click the button to make a BUTTON element with text.</p>

<button onclick="myFunction()">Try it</button>

<script>

function showSelected(){
	alert(document.getElementById('myList').value);
}

function myFunction() {
	
	var choices = ["one", "two"];
	
	var newDiv = document.createElement('div');
    var selectHTML = "";
    selectHTML="<select id='myList'>";
    for(i = 0; i < choices.length; i = i + 1) {
        selectHTML += "<option value='" + choices[i] + "'>" + choices[i] + "</option>";
    }
    selectHTML += "</select>";
    newDiv.innerHTML = selectHTML;
    document.getElementById('dynamicInput').appendChild(newDiv);

    var newDiv2 = document.createElement('div');
    newDiv2.innerHTML='<input type="button" value="Show Selected" onclick="showSelected()" />';
    document.getElementById('dynamicInput').appendChild(newDiv2);
}
</script>
	<form class="new" method="post" action="/jobs">
	    <div id="dynamicInput"></div>
	    
	</form>
</body>
</html>
*/
     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
