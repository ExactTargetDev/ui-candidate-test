$(document).ready(function() {
	dataTableTest();
	div1Answer();
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