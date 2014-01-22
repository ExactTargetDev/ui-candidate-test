     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         // FILL THIS IN
         var reversed,name = str;
         reversed = name.split("").reverse().join("");
         alert("Reverse Of David is :" + reversed);
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         Array.min = function( array ){
           return Math.min.apply( Math, array );
         };
         alert("Minimum Value Is :" + Array.min(values));
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
        values = values.filter( function( item, index, inputArray ) {
        return inputArray.indexOf(item) == index;
        alert(values);
       }
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         var srt=0;
        for (var a=0;a<=100;a++)
        {
          if(a%3 ==0)
          {
            srt+="fizz"
          }
         if (a%5 ==0)
         {
            srt+="buzz"
         }
         if (a%3 !=0 || a%5 !=0)
         {
            srt+=a;
         }
         srt+="\n";
       }
         console.log(srt);
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
       fruits_filter = fruits.filter(function(val) {
         return fruitsToRemove.indexOf(val) == -1;
       });
       alert(fruits_filter);
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
        var single=array.concat(toPush);
        alert(single);
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         var splits = sourceStr.split(',');
         for (i=0;i<splits.length;i++) {
            console.log(splits[i]);
         }
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
        var mystr=document.getElementById("sumid").value;
        var mysplits=mystr.split(",");
        var mysum=0;
        for(i=0;i<mysplits.length;i++) {
             mysum=mysum+parseInt(mysplits[i]);
        }
        alert("Sum is : "+mysum);
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
            if (sourceStr.indexOf(' ') >= 0) {
                 console.log("contains spaces");
            }
     }

     // write an example of a javascript closure
     /*function init() {
       var name = "Mozilla"; 
       function displayName() { 
         alert (name); //     
       }
       displayName();    
     }
     init();*/
     
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
       "peoples": [
        {
            "firstname": "John",
            "lastname": "Mic ",
            "city": "Dallas",
            "state": "Texas",
            "Zip": "75001",
            "phoneNumbers": "8182555555 8182666666"
        },
        {
            "firstname": "Miller",
            "lastname": "Mic ",
            "city": "Dallas",
            "state": "Texas",
            "Zip": "75001",
            "phoneNumbers": "8182555555 8182666666"
        },
        {
            "firstname": "Jill",
            "lastname": "Mic ",
            "city": "Dallas",
            "state": "Texas",
            "Zip": "75001",
            "phoneNumbers": "8182555555 8182666666"
        }
        
      ]
    } */

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
     var sel=document.createElement('select');
         sel.setAttribute('name','myname');
         sel.setAttribute('id','myid');

    var myobject = {
         ValueA : 'text1',
         ValueB : 'Text B',
         ValueC : 'Text C'
    };
   for(index in myobject) {
         sel.options[sel.options.length] = new Option(myobject[index], index);
   }
 
   var d=document.getElementsByClassName('div1')[0];
       d.appendChild(sel);
 
   var but=document.createElement('input');
       but.setAttribute('type','button');
       but.setAttribute('class','butt');
       but.setAttribute('value','clickme');
       d.appendChild(but);
 
 
       but.addEventListener('click' , change, false);
   function change(){
       var val=document.getElementById('myid').value;
       var nam=document.getElementById('myid').name;
       console.log("Value & Name which are added dynamically : ",val,nam);
   }
     // Write 5 different jQuery selectors to retrieve the sample anchor in the markup below.
     // We need to include jQuery plugin CDN in HTML. Below is just a sample
                /*$("a").click(function() {
                 var link = $('a').attr('href');
                 window.location.href = link;
                 });*/
                /*$("a Class").click(function(event) {
                    event.preventDefault();                    
                    window.location.href = $(this).attr("href");
                });*/
                /*$("a").live('click',function() {
                 var link = $('a').attr('href');
                 window.location.href = link;
                 });*/
                /*$("a").on('click',function() {
                 var link = $('a').attr('href');
                 window.location.href = link;
                 });*/
                /*$("a").bind('click',function() {
                 var link = $('a').attr('href');
                 window.location.href = link;
                 });*/

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
     var list = [
        set0=['Apple','mango','banana'],
        set1=['list2', 'list3'],
        set2=['Andy','roberts'], 
        set3=['option4','option5'],
        set4=['banana','orange','pineapple'],
    ]
 
    function makeUL(){
      var c = '<ul>',
        d = '</ul>',
        m="";
    
       for (i = 0; i < list.length; i++){
         m += '<li>' + list[i] + '</li>';
       }
       document.getElementById('list1').innerHTML = c + m + d;
    }

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
      var check= document.createElement('input');
     check.setAttribute('type','checkbox');
     var check1= document.createElement('input');
     check1.setAttribute('type','checkbox');
     var cls=document.getElementsByClassName('footbar')[0];
     cls.appendChild(check);
     cls.appendChild(check1);
     var a = document.createElement('a');
     a.setAttribute('href','#');
     a.innerHTML='checkall';
     cls.appendChild(a);
     var b= document.createElement('a');
     b.setAttribute('href','#');
     b.innerHTML='uncheckall';
     cls.appendChild(b);
     a.addEventListener('click' , change, false);
     b.addEventListener('click' , change1, false);
     
    function change(){
      check.checked=true;
      check1.checked=true;
    }
    
    function change1(){
      check.checked=false;
      check1.checked=false;
    }
