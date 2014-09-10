/* File: imh.js
 * Author: John T. Ryan
 *
 *
 */

$(document).ready(function() {




	$( "a" ).click(function(e) {
		e.preventDefault();
		var id = $("a").closest("div").attr('id');
		console.log(id);
		//$.addClass("active");

	});

	$( "#help" ).click(function (e) {
		e.preventDefault();

			$.getJSON("../data/help.json", function (json) {
					var help = "";

					for (var i = 0 ; i < help.length; i++){  // I know this is not correct. I could not get a length directly. console.log gives array objects, I was unable to programatically pull length
						help += (json.help[i].title);
						help += "\n";
						help += (json.help[i].URL);
						help += "\n";
					}
					alert(help);
		});
 });

		$("#med").click(function() {
			$(this).find('img').toggle();
		});




}); // Doc Ready end











