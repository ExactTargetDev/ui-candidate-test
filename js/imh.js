/* File: imh.js
 * Author: John T. Ryan
 *
 * 
 */

$(document).ready(function() {

	$( "a" ).click(function(e) {
		e.preventDefault();
		var ident = $(this).attr('id');
		switch (ident) {
			case "email":
				alert("Clicked on ExactTarget Email");
				break;
			case "calc":
				alert("Clicked on ExactTarget Mobile");
				break;
			case "co":
				alert("Clicked on CoTweet Mobile");
				break;
			case "sites":
				alert("Clicked on ExactTarget Sites");
				break;
			case "gears":
				alert("Clicked on Automation Studio");
				break;
			case "people":
				alert("Clicked on Audience Builder");
				break;
			case "report":
				alert("Clicked on Report Builder");
				break;
			case "partner":
				alert("Clicked on Partner Application");
				break;
			}
	});

	$( "#help" ).click(function (e) {
		e.preventDefault();

			$.getJSON("../data/help.json", function (json) {
					var help = "";

					for (var i = 0 ; i < 3; i++){
						help += (json.help[i].title);
						help += "\n";
						help += (json.help[i].URL);
						help += "\n";
					}
					alert(help);
		});
 });






});











