



     // write an example of a javascript closure
     //
     //
     function myAdd(x) {
        return function(z) {
            return x + y;
        }
     }



     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)

     var People = {
        firstName: "value",
        lastName: "value",
        city: "value",
        state: "value",
        zip: 46220,
        phone: {
            home: 5555555555,
            work: 5555555555,
            mobile: 5555555555
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
     //
     var DataTable = {


        function addRows() {
            rows.apply.

        }

        function addColumns() {
            colums.apply.push();
        }

        function getData() {

        }

        var rows =  [];
        var columns = [];
     }

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
$(document).ready(function(){


var myDiv = document.getElementById("div1");
        //Create array of options to be added
var cars = ["Camaro","Beetle","Prius","Charger", "Shelby Mustang"];
    //Create and append select list
var selectList = document.createElement("select");
selectList.setAttribute("id", "mySelect");
selectList.setAttribute("name", "mySelect");

myDiv.appendChild(selectList);
    //Create and append the first option
    var option = document.createElement("option");
    option.setAttribute("value", "");
    option.text = '- Select -';
    selectList.appendChild(option);
    // add cars to select list
for (var i = 0; i < cars.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", cars[i]);
    option.text = cars[i];
    selectList.appendChild(option);
}
    // create button
var btn = document.createElement("input");
btn.setAttribute('id','callfunc');
btn.setAttribute('type','button');
btn.setAttribute('value','Submit');
myDiv.appendChild(btn);
$('#callfunc').on('click', function(e){
    e.preventDefault();
    console.log(document.getElementById('mySelect').value);
});

/**********************************************/

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
    $(".link");
    $("#fizz.buzz");
    $("#foo.bar #fizz.buzz");
    $(".link a");
    $("#fizz.buzz .link");

/**********************************************/

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".

    var listArray = ['Bread', 'Milk', 'Cheese', 'Sardines', 'Beer']; //create array of list items
    var listEl = document.getElementById("list1");
    //Create and append ul list
    for (i = 0; i < listArray.length; i++) {
        var litem = document.createElement("li");
        litem.innerHTML = listArray[i];
        listEl.appendChild(litem);
    }

/**********************************************/


     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)

//Create and add checkboxes
    var chk= document.getElementById("foobar");
//Create array of chk box names to be added
    var array = ["red", "green", "yellow", "blue"];
    var newform = document.createElement('form');
    newform.name = 'chkgroup';
    chk.appendChild(newform);


    for (i = 0; i < array.length; i++) {
       var addInput = document.createElement('input');
       addInput.setAttribute('type', 'checkbox');
       addInput.setAttribute('id', 'chk');
       addInput.name='switch';
       newform.appendChild(addInput);
       var label=document.createElement('label');
       label.htmlFor = "chk";
       label.appendChild(document.createTextNode(array[i]));
       newform.appendChild(label);
    }

    var addbutton = document.createElement('button');
    addbutton.setAttribute('id', 'enable');
    addbutton.name = 'enable';
    newform.appendChild(addbutton);
    addbutton.innerHTML="Enable";

    addbutton = document.createElement('button');
    addbutton.setAttribute('id', 'disable');
    addbutton.name = 'disable';
    newform.appendChild(addbutton);
    addbutton.innerHTML="Disable";

    $("#enable").click(function(e) {
        e.preventDefault();
        var selectCheck = document.getElementsByTagName('input');
        for (var i = 0; i < selectCheck.length; i++ ) {
            selectCheck[i].checked = true;
        }
    });

    $("#disable").click(function(e){
        var selectCheck = document.getElementsByTagName('input');
        for (var i = 0; i < selectCheck.length; i++ ) {
            selectCheck[i].checked = false;
        }
    });

});
// END $(document).ready()