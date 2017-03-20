// Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
          var stringArray = str.split('');
        var revStringArray = stringArray.reverse();
        return revStringArray.join('');
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
		var len = arr.length, min = Infinity;
		while (len--) {
		if (arr[len] < min) {
		min = arr[len];
    }
  }
  return min;
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
		 function getUnique(a) {
	var b = [a[0]], i, j, tmp;
	for (i = 1; i < a.length; i++) {
    tmp = 1;
    for (j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        tmp = 0;
        break;
      }
    }
    if (tmp) {
      b.push(a[i]);
    }
  }
  return b;
}
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         for (var j=1; j <= 20; j++)
	{
		if (j % 15 == 0)
        console.log("FizzBuzz");
		else if (j % 3 == 0)
        console.log("Fizz");
		else if (j % 5 == 0)
        console.log("Buzz");
		else
        console.log(j);
	}

     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
		   var newFruits = [],
    fruitsToRemoveHash = {};
	for (var fruitNo = fruitsToRemove.length - 1; fruitNo >= 0; fruitNo--) {
    fruitsToRemoveHash [fruitsToRemove [fruitNo]] = 1;
	}
	for (var fruitNo = -1; ++fruitNo < fruits.length;) {
    var fruit = fruits [fruitNo];
    if (!fruitsToRemoveHash [fruit]) newFruits.push (fruit);
	}
	return newFruits;
}
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
       	var length = array.length;
	for (var n = 0; n < length; n++) {
    callback.call(array[n]);
	}
	}

	var myArray = ['hello','world'];
	forEach( myArray, function(){
    alert(this); 
  }
	)	;
    

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         function splitListStringUsingComma(sourceStr) {
             var split = [];
         if(sourceStr.length > 0) {
             split =  sourceStr.split(',');
         }
         return split;
      }        }
     

     // Write a function that will take any number of arguments and return their sum
     function sum() {
          var sum = 0;
         var num = 0;
         
         if(arguments.length > 0) {
             for(var i=0; i<arguments.length; i++) {
                 num = parseFloat(arguments[i]);
                 if(!isNaN(num))  {
                    sum += num;
                 }
             }
         }
         return sum;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
          var whiteLength = str.match(/\s/g).length;   
         if(whiteLength == str.length)              
             return true;
         else
             return false;
     }

     // write an example of a javascript closure
	 var closureExample = function() {
         var var1 = 'one';     
         this.var1 = 'one';   
         $.get('undefined.php', function() {
             console.log('closureExample function - should be undefined: '+this.var1);   
             console.log('closureExample  function - should be "one": '+var1);        
         }).fail(function() {
             console.log('closureExample  function - should be undefined: '+this.var1);   
             console.log('closureExample  function - should be "one": '+var1);      
             
         });
     }
     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)

	var peesonObject = function() {
           [{"firstName":"Ranga",
                        "lastName":"Chanakya",
                        "city":"LA",
                        "state":"CA",
                        "zip":"09844",
                        "phones":[{"number":"993 999-8888","type":"home"},
                                   {"number":"888 999-3333","type":"work"},
                                   {"number":"333 898-2344","type":"mobile"}
                                  ]
                       },
                       {"firstName":"Simon",
                        "lastName":"Peter",
                        "city":"LA",
                        "state":"CA",
                        "zip":"09833",
                        "phones":[{"number":"993 999-9999","type":"home"},
                                  {"number":"888 999-3333","type":"work"},
                                  {"number":"333 898-2344","type":"mobile"}
                                 ]
                       }
           ]
    
     }
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
	var DataTable = (function() {
         var columns = [];
         var rows = [];
         var dtArray = [];
         var obj = {};
         
         return {
             addColumns: function(items) {
                 if($.isArray(items)) {
                    for(var i=0; i<items.length; i++) { // build a single row array
                        columns.push(items[i]);      
                    }
                 }
                 else {
                     columns.push(items);
                 }
             },
             addRow: function(items) {
                 var tempRow = [];
                 if($.isArray(items)) {
                    for(var i=0; i<items.length; i++) { // build a single row array
                        tempRow.push(items[i]);      
                    }
                 }
                 else {
                     tempRow.push(items);
                 }
                 rows.push(tempRow);     //  push the single row to rows array
             },
             getData: function() {
                 for(var r=0; r<rows.length; r++) {
                    var tempObj = {};                    
                    for(var c=0; c<columns.length; c++) {
                        tempObj[columns[c]] = rows[r][c];
                    }
                    dtArray.push(tempObj);       // build array of dt row objects
                    obj.dataTable = dtArray;     // build dt object
                 }
                 return obj;      // return populated DataTable object
             }
         }
     })();
     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
		 var selectFunction = function() {
         var options = ['red', 'yellow', 'blue', 'green'];
         $('#div1').append('<select id="my-select"></select>');
         var mySelect = $('#my-select');
         mySelect.append('<option value=>- select -</option>');  // add initial select prompt
         
         for(var i=0; i<options.length; i++) {
             mySelect.append('<option value='+options[i]+'>'+options[i]+'</option>');
         }
         
         $('#div1').append('<button id="div1-button" type="button">Show Selected</button>');
        
         $('#div1').append('<span id="selected-message"></span>');
        
         $('#div1-button').click(function(ev) {
            var opt = $('#my-select').val();
            var text = $('#my-select option:selected').text();
            if(opt != '') {
                $('#selected-message').text(text);
                console.log('selected value: '+opt+', text: '+text);
            }
              
         });
     }
     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
	 $("button").click(function () {
     var str = $(this).text(); 
     $('a').css("border", "0px solid #000000");
     $(str).css("border", "1px solid #ff0000");
     $('#msg').html("<h2>Attribute Selector : " + str + "</h2>");
     });
 
 $("#reset").click(function () {
      location.reload();
    });
     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
	<ul id="list1">
    <li>List Item 1</li>
    <li>List Item 2</li>
    <li>List Item 3</li>
    <li>List Item 4</li>
	<li>List Item 5</li>
	</ul>

	<script type="text/javascript">
	var list = document.getElementById('list1').childNodes.TextNode;
	for(var i=0;i < list1.length; i++) {
    var arrValue = list1[i];
    alert(arrValue);
	}
	</script>

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
	<div>
    <label for="foo">
        <input type="checkbox" name="meh" id="foo" checked> foo
    </label>
	</div>
	<div>
    <label for="bar">
        <input type="checkbox" name="meh" id="bar" checked> bar
    </label>
	</div>
	<div>
    <label for="foobar">
        <input type="checkbox" name="meh" id="foobar"> foobar
    </label>
</div>
<div>
    <label for="barfoo">
        <input type="checkbox" name="meh" id="barfoo" checked> barfoo
    </label>
</div>
<div>
    <label for="omgwtfbbq">
        <input type="checkbox" name="meh" id="omgwtfbbq"> omgwtfbbq
    </label>
</div>
