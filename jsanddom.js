     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        //return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
          function reverseString(string:String) :String
{
var reversed:String = new String();
	for(var i:int = string.length -1; i >= 0; i--)
		reversed += string.charAt(i);
	return reversed;
}
function reverseStringCQAlternative(string:String):String
{
         return string.split(' ').reverse()join(' ');
}

         
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
          Array.max = function(array) {
return Math.max.apply( Math , array);
}
Array.min = function(array){
return Math.min.apply( Math, array);
}

     

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         // FILL THIS IN
          Array.prototype.getUnique = function(){
   va u = { }, a = [ ] ;
          for(var i = 0, l = this.length; i<1; ++i){
            if(u.hasOwnProperty(this[i])) {
           continue;
    }
              a.push(this[i]);
                        u[this[i]] =1;
}
              return a;
}

     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         // FILL THIS IN
         var str="",x,y,a;
for (a=1;a<=100;a++)
{
    x = a%3 ==0;
    y = a%5 ==0;
    if(x)
    {
        str+="fizz"
    }
    if (y)
    {
        str+="buzz"
    }
    if (!(x||y))
    {
        str+=a;
    }
    str+="\n"
}
console.log(str)

     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         // FILL THIS IN
           var
    newFruits = [],
    fruitsToRemoveHash = {}
  ;
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
         // FILL THIS IN
           if (toPush instanceof Array) {
    for (var elementNo = -1; ++elementNo < toPush.length;) {
      array.push (toPush [elementNo]);
    }
  } else {
    array.push (toPush);
  }

     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         // FILL THIS IN
           return sourceStr ? sourceStr.split (',') : [];
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         // FILL THIS IN
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         // FILL THIS IN
           return _sourceStr + ' 0' == 0;
     }

     // write an example of a javascript closure
     var a = 20;
function myFunction() {
return a*a;
}


     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     
     var people = [{
    "first_name": "ABCD",
   "last_name": "EFGH"
   "city": "Chicago",
   "state": "IL",
    "zip": "65063",
    "phone_nums": [
       "33661-5914"]
}, {
    "first_name": "qwerty",
    "last_name": "zxcvb",
    "city": "phoenix,",
    "state": "arizona",
    "zip": "85027",
    "phone_nums": [
        "314-281-3953"]
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
         function dataTable() {
    var columns=['column1', 'column2', 'column3'];
   var rows=['row1', 'row2', 'row3'];
}
var dataTable1 = new dataTable();
dataTable.prototype.addRows = function()
{
    alert ('addRows');
};
dataTable.prototype.addColumns = function()
{
    alert ('addColumns');
};
dataTable.prototype.getData = function()
{
    alert ('getData');
};
dataTable1.addRows();
dataTable1.addColumns();
dataTable1.getData();



     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
     var listbox='<select id="country_options">';
listbox+='<option value="United States">United States</option>';
listbox+='<option value="India">India</option>';

listbox+='<input type="button" value="click" class="butn"/>'

$('#div1').append(listbox);
var data;
$('#country_options').change(function(ev){

    data="value="+$('#country_options option:selected').val()+" "+"text="+$('#country_options option:selected').text();
});

$('.butn').click(function(){

    console.log(data);

});

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
     function SelectAll() {
    var checkboxes = document.getElementsByTagName("input");
    for(i=0;i<checkboxes.length;i++) {
        if(checkboxes.item(i).attributes["type"].value == "checkbox") {
            checkboxes.item(i).checked = true;
       }
    }
}
function deSelectAll() {
    var checkboxes = document.getElementsByTagName("input");
    for(i=0;i<checkboxes.length;i++) {
        if(checkboxes.item(i).attributes["type"].value == "checkbox") {
            checkboxes.item(i).checked = false;
        }
    }
}







