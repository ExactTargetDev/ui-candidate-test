     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         // FILL THIS IN
    	 var reverseString = '';
    	  for (var i = str.length - 1; i >= 0; i--)
    		  reverseString += str[i];
    	  return reverseString;
    	 
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         // FILL THIS IN
    	 return Math.min.apply( Math, values );
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         // FILL THIS IN
    	 
    	    var newArray = [],  match,  i, j;  
              
        for ( i = 0; i < values.length; i++ ) {  
            match = undefined;  
            for ( j = 0; j < newArray.length; j++ ) {  
                if ( values[i] === newArray[j] ) {   
                  match = true;  
                  break;  
                }  
            }  
            if ( !match) 
            {
            	newArray.push( values[i] ); 
            }
            	     
        }  
       return newArray;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         // FILL THIS IN
    	 
    	 var str="",x,y;
    	 for (var i=1;i<=100;i++)
    	 {
    	     x = i%3 ==0;
    	     y = i%5 ==0;
    	     if(x)
    	     {
    	         str+="Fizz";
    	     }
    	     if (y)
    	     {
    	         str+="Buzz";
    	     }
    	     if (!(x||y))
    	     {
    	         str+=i;
    	     }
    	     str+="\n";
    	 }
    	 console.log(str);
        return str;
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         // FILL THIS IN
    	 for(i=0;i<fruits.length;i++)
         {
    		 for(j=0;j<fruitsToRemove.length;j++)
    			 if(fruits[i] == fruitsToRemove[j])
    			 {
    				 fruits.splice(i,1);
    			 }
    		 
    	 }
    	 return fruits;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         // FILL THIS IN
    	  array.push.apply (array,toPush instanceof Array ? toPush : [toPush]);
    	  return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         // FILL THIS IN
    	 return sourceStr ? sourceStr.split (',') : [];
    	 
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         // FILL THIS IN
    	 var sum = 0;
    	    for (var i = 0; i < arguments.length; i++) {
    	        sum += arguments[i];
    	    }
    	    return sum;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         // FILL THIS IN
    	 if(sourceStr.match(/^\s+$/) != null) {
    		    
    		 return true;
    	 }
    	 else
    	 {
    		 return false;
    	 }
     }

     // write an example of a javascript closure
     
     //closure is created by adding function inside a function where inner function has access to outer function variables.
     
     function sayHello(name) {
    	    var msg = 'Hello ' + name;
    	    var showName = function() { console.log(msg); };
    	    return showName;
    	}
     grettingMsg  = sayHello('Andrew');
     grettingMsg();
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     var myJSONObject ={
    		   "people":[
    		             {
    		                "fname":"jay",
    		                "lname":"snider",
    		                "city":"vernon hills",
    		                "state":"IL",
    		                "Zip":"60090",
    		                "Phone":{
    		                   "home":"222-222-2222",
    		                   "work":"111-111-1111",
    		                   "mobile":"333-333-3333"
    		                }
    		             },
    		             {
    		                "fname":"jack",
    		                "lname":"smith",
    		                "city":"libertyville",
    		                "state":"IL",
    		                "Zip":"60048",
    		                "Phone":{
    		                   "home":"222-222-2221",
    		                   "work":"111-111-1112",
    		                   "mobile":"333-333-3331"
    		                }
    		             }
    		          ]
    		       };




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
     $(function(){
     var selectoptions = [
                {val : 1, text: 'One'},
                {val : 2, text: 'Two'},
                {val : 3, text: 'Three'},
                {val : 4, text: 'Four'},
                {val : 5, text: 'Five'},
              ];

              var sel = $('<select id="selItems">').appendTo('#div1');
              $(selectoptions).each(function() {
               sel.append($("<option>").attr('value',this.val).text(this.text));
              });
              var buttonclick= $('<input/>').attr({ type: 'button', name:'btn1',id:'btn1', value:'Click Me'});
              $(buttonclick).appendTo('#div1');
              
              $('#btn1').on('click', function() {
                  var select_value = $('#selItems option:selected').val();
                  var select_text = $("#selItems option:selected").text(); 
                  console.log("name "+select_value + " Value " +select_text);
              });

     });

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
     //link
     $(function(){
    	 console.log($('.link').text());
    	 console.log($('div .link').text());
    	 console.log($('#fizz .link').text());
    	 console.log($('#fizz a').text());
    	 console.log($('a:first').text()); 
    	 
    	});
     

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
     $(function(){
     var listArray = ['item1','item2','item3','itme4','item5'];
     var listItems;
     var unorderedList = $('#list1');
     for(i=0;i<listArray.length;i++)
     {
    	 unorderedList.append("<li>" + listArray[i] + "</li>");
     }
     });
     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     $(function(){
    	 $('#foobar').append('<input type="checkbox" id="cb1" class="cblist" /> checkbox1<br />');
    	 $('#foobar').append('<input type="checkbox" id="cb2" class="cblist"  /> checkbox2<br />');
    	 $('#foobar').append('<input type="checkbox" id="cb3"  class="cblist" /> checkbox3<br />');
    	 $('#foobar').append('<input type="checkbox" id="cb4"  class="cblist"/> checkbox4<br />');
    	 $('#foobar').append('<a id="flink" href="# ">Check All</a><br />');
    	 $('#foobar').append('<a id="llink" href="#">UnCheck All</a><br />');
         });
     

     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
     $(function()
     {
    	  $("#flink").click(function(){
    		  $(':checkbox').prop('checked', true);
    	  });
    	  $("#llink").click(function(){
    		  $(':checkbox').prop('checked', false);
    	  });
     });

     
     
     