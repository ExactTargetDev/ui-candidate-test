$(document).ready(function() {
	dataTableTest();
	div1Answer();
	listAnswer();
	checkboxAnswer();
});

function dataTableTest() {
	var $table = new DataTable;
	$table.addColumns("one", "two", "three", "four");
	$table.addRow(1, 2, 3);
	$table.addRow(1, 2, 3, 4);
	$table.addRow(1, 2);
	var $data = $table.getData(true);
}



// within div1, programatically create a
// SELECT element (with multiple items) and a button.
// when the button is clicked write out the name and value of the selected item to the console.
function div1Answer() {
	var $div = $("#div1");
	
	if (!$div.length) {
		$div = $("<div>")
			.attr("div1")
			.prependTo("body")
		; 
	}
	
	var $select = $("<select>")
		.appendTo($div)
	;
	
	var $i, $ic = 5;
	for ($i=0; $i<$ic; $i++) {
		$("<option>")
			.val("option-"+ $i)
			.text("Option "+ $i)
			.appendTo($select)
		;
	}
	
	// button
	$("<button>")
		.text("Click me!")
		.appendTo($div)
		.click(function (e) {
			// just in case
			e.preventDefault();
			
			// get select option
			var $selectedOption = $("#div1 select option:selected");
			console.log($selectedOption.text(), " -- ", $selectedOption.val());

			// just in case			
			return false;
		})
	;
}



// Programatically create an array with 5 items.  Create a list item for each item in the array
// and add the list items to the unordered list with an id of "list1".
function listAnswer() {
	var $template = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

	var $items = [];
	var $string, $i, $ic = 5;
	for ($i=0; $i<$ic; $i++) {
		$string = $template.substr(Math.random() * 50, 25);
		$items.push($string);
	}
	
	// the question's wording assumes a separate loop, so:
	var $ul = $("#list1");
	
	var $key;
	for ($key in $items) {
		$("<li>")
			.text($items[$key])
			.appendTo($ul)
		;
	}
}



// Use javascript to add a list of checkboxes and 2 links
// to the div with an id of "foobar"
// When the first link is clicked, all the checkboxes should be checked (i.e. check all)
// When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)

function checkboxAnswer() {
	var $container = $("#foobar");

	// create checkboxes
	var $box, $i, $ic = 8;
	for ($i=0; $i<$ic; $i++) {
		$box = $("<input>")
			.attr("type", "checkbox")
			.attr("name", "box-"+ $i)
			.val(1)
		;
		
		$("<label>")
			.append($box)
			.append("Option "+ $i)
			.appendTo($container)
		;
	}
	
	// create links
	var $div = $("<div>")
		.appendTo($container)
	;
	
	/// select all
	$("<a>")
		.attr("href", "#select-all")
		.text("select all")
		.appendTo($div)
		.click(function(e) {
			e.preventDefault();
			$("#foobar input[type=checkbox]")
				.attr("checked", "checked")
			;
			return false;
		})
	;
	
	/// space between
	$div.append(" ");
	
	/// unselect all
	$("<a>")
		.attr("href", "#select-none")
		.text("select none")
		.appendTo($div)
		.click(function(e) {
			e.preventDefault();
			$("#foobar input[type=checkbox]")
				.removeAttr("checked")
			;
			return false;
		})
	;
}
