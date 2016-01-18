$(document).ready(function(){
	
	// make sure only one pulse bubble is in medium view at any given time
	$("li.bubble").click(function(){
		$(".large").hide(50);
		$(".small").show(50);
		$(this).find(".large").show(50);
		$(this).find(".small").hide(50);
	});

	// json pulled from data/help.json
	var json = {
  "help": 
  	[
	    {
	      "title": "What is JSON?",
	      "URL": "http://en.wikipedia.org/wiki/JSON"
	    },
	    {
	      "title": "What is ExactTarget?",
	      "URL": "http://en.wikipedia.org/wiki/ExactTarget"
	    },
	    {
	      "title": "More info about ExactTarget REST APIs",
	      "URL": "http://code.exacttarget.com/question/rest-api-authentication"
	    }
	  ]
	};

	// logic for showing the help overlay modal
	$("#help-button").click(function(){
		$("#help-modal").show(10, function(){
			for(var i = 0; i < json.help.length; i++){
				console.log(i);
				var link = document.createElement("a");
				link.href = json.help[i].URL;
				link.innerHTML = json.help[i].title;
				link.className = "jsonLink";
				console.log(link);
				$("#modal-bubble").append(link);
			}
		});
	});

	// exit sequence for help modal
	$("#modal-exit").click(function(){
		$("#help-modal").hide(10, function(){
			$(this).find('a.jsonLink').remove();
		});
	});
});

