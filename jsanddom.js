     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
		
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         // FILL THIS IN
		 return str.split('').reverse().join('');
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         // FILL THIS IN
         var min = values[0]?values[0]:null;
         for(var i= 0; i < values.length; i++){
            values[i] < min? min = values[i]:undefined; 
         }
         return min;
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         // FILL THIS IN
         var distinct = [];
         for(var i = 0; i < values.length; i++){
            var j;
            for( j = 0; j < distinct.length; j++){
                values[i] == distinct[j] ?distinct.splice(j--,1):undefined;             
            }
            j == distinct.length?distinct.push(values[i]):undefined;
         }
         return distinct;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     // Pass variable num for testing purpose 
     function doFizzBuzz(num) {
         var result = [];
         for(var i=1; i <= num; i++){
            var t = i%3 == 0? i%5 == 0?"FizzBuzz":"Fizz":i%5 == 0?"Buzz":i;
            console.log(t);
            result.push(t);
         }
         return result;
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
        
         for (var i = 0; i < fruitsToRemove.length ; i++){
            fruits.splice(fruits.indexOf(fruitsToRemove[i]),1);
         }
         return fruits;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
       
         if(typeof toPush === "string"){
            array.push(toPush)
         }else{
            for(var i=0; i<toPush.length; i++){
                array.push(toPush[i]);
            }
        }
        return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
       
         var arr = [];
         var str = "";
         for(var i=0; i<sourceStr.length; i++){
            
            if(sourceStr[i] != ','){
                str += sourceStr[i];
                i == sourceStr.length -1?arr.push(str):undefined;
            }else{
                str != ""?arr.push(str):undefined;
                str = "";
                
            }
         }
         return arr;
     }

     // Write a function that will take any number of arguments and return their sum
     function sum(args) {
         // FILL THIS IN
         var result = args.length == 0?"Empty array":0;
         for(var i=0; i<args.length; i++){
            result += Number(args[i]);
         }
         return result;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         // FILL THIS IN
         if(sourceStr.length == 0){
            return false;
         }
         for(var i = 0; i < sourceStr.length; i++){  
            if(sourceStr[i] != " ") 
                return false;
            if(i==sourceStr.length-1) 
                return true;
         }
     }

     // write an example of a javascript closure
     
    function Test(arg) {
        var text = 'Hello ' + arg; 
        var sayAlert = function() { alert(text); }
        return sayAlert;
    }

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     var jsonObj = {
        "people1":{
            "firstName": "fn",
            "lastName": "ln",
            "city": "C",
            "state": "OH",
            "zip": "12345",
            "phoneNumbers": {
                "home": "1234",
                "work": "1234",
                "mobile": "1234"
            }
        },
       "people2":{
            "firstName": "fn",
            "lastName": "ln",
            "city": "C",
            "state": "OH",
            "zip": "12345",
            "phoneNumbers": {
                "home": "1234",
                "work": "1234",
                "mobile": "1234"
            }
        }
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
     function DataTable(){
        var columns = [];
        var rows = [];
        var data = {};
        
        return {
            addColumn: function(){
                var temp = [];
                for(var i = 0; i < arguments.length; i++) {
                    temp.push(arguments[i]);
                }
                columns.push(temp);
                return columns;
            },

            addRow: function(){
                var temp = [];
                for(var i = 0; i < arguments.length; i++) {
                    temp.push(arguments[i]);
                }
                rows.push(temp);
                return rows;
            },

            getData: function(){
                for(var i=0; i < columns[0].length; i++){
                    data[columns[0][i]] = [];
                    for(var j=0; j < rows.length; j++){
                        data[columns[0][i]].push(rows[j][i]);
                    }
                }
                return data;
            }
        }
        
     }


     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
    function logSelectedVal(){
        var select = document.getElementById('fruit');
        var value = select.value;
        var name = select.options[select.selectedIndex].getAttribute('name');
        console.log('value='+ value + ', name='+name);
    }
      

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.

     // $(".link");
     // $("a");
     // $("[href]");
     // $("#fizz .a");
     // $("a.link");


     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
     window.onload = function(){
        var ul = document.getElementById('list1');
        var arr = ['item1','item2','item3','item4'];
        for(var i=0; i<arr.length; i++){
            var Str = "<li>" + arr[i] + "</li>";
            ul.innerHTML += Str;
        }
     }
      

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
    window.onload = function(){
        var div = document.getElementById('foobar');
        var cbId = ['cb1','cb2'];
        var linkId = ['lk1','lk2'];
        for(var i=0; i<2; i++){
            var Str = "<input type='checkbox' name='checkbox' id ='" + cbId[i] + "'></input><br />";
            div?div.innerHTML += Str:undefined;
        }
        for(var i=0; i<2; i++){
            var checked = i == 0?true:false;
            var link = document.createElement('a');
            link.href = "";
            link.id = linkId[i];
            link.innerHTML = "Link" + i;
            div?div.appendChild(link):undefined;
            (function(i, checked){
                link.addEventListener('click', function(event){ 
                event.preventDefault();
                var checkboxes = document.getElementsByName("checkbox");
                for(var j = 0; j<checkboxes.length; j++){
                    checkboxes[j].checked = checked;
                }
            }, false);
            })(i, checked);
        }
     }

    
