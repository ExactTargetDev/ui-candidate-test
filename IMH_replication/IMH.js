$(document).ready(function(){
	//unobtrusive js handlers
	$("#helpMenuItem").click(showHelp);
});

function showHelp(){
	if(location.protocol !== "file:"){
		$.getJSON('../data/help.json', function(data) {
			var helpObject = JSON.parse(data);
			showHelpDialog(helpObject.help);
		});
	}
	else {
		showHelpDialog(window.helpObject.help)
	}
}

function showHelpDialog(helpObject){
	var helpContent = "";
	for(var i = 0; i < helpObject.length; ++i){
		var help = helpObject[i];
		helpContent += createHelpRef(help);
	}
	$("#helpDialog").html(helpContent);
    $("#helpDialog").dialog(
		{
			title:"Help",
			modal: true
		});
}

function createHelpRef(help){
	return "<a href='" + help.URL + "' target='_blank' >" + help.title + "</a><br/>";
}