function alertEmail(){
	var emailLink = document.getElementById("email");
	alert("ExactTarget Email Clicked");
}
function alertMobile(){
	var mobilwLink = document.getElementById("mobile");
	alert("ExactTarget Mobile Clicked");
}
function alertSocial(){
	var socialLink = document.getElementById("social");
	alert("CoTweet Social Clicked");
}
function alertSites(){
	var sitesLink = document.getElementById("sites");
	alert("ExactTarget Sites Clicked");
}
function alertStudio(){
	var studioLink = document.getElementById("studio");
	alert("Automation Studio Clicked");
}
function alertaBuilder(){
	var aBuilderLink = document.getElementById("audBuilder");
	alert("Audience Builder Clicked");
}
function alertrBuilder(){
	var rBuilderLink = document.getElementById("repBuilder");
	alert("Report Builder Clicked");
}

function parseHelp(){
	$.getJSON('js/help.json', function(json, s, x) {
		var header = document.getElementById("header");
		var dialog = document.createElement("div");
		
    	for(var i = 0; i < json.help.length; i++){
	    	var help = document.createElement("div");
	    	help.innerHTML = json.help[i].question+"<br />"+json.help[i].answer+"<br />";
	    	dialog.appendChild(help);
    	}
    	$(dialog).dialog();
    });
}

$(".box").click(function(){
	$(".box").removeClass("bigBox");
	$(this).toggleClass("bigBox");
});

