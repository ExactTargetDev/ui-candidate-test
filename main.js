$(document).ready(function(){
	// Change the classes on the hub on hover
	$(".hub-default").hover(function(){
		$(this).addClass("hub-hover");
		},function(){
		$(this).removeClass("hub-hover");
	});
	
	// Change the classes on the hub when an item is clicked
	$(".hub-default").click(function(){
		$(".hub-selected").removeClass("hub-selected");
		$(this).addClass("hub-selected");
	});
	
	// Change the size of the panels in the pulse when an item is clicked
	$(".pulse-panel").click(function(){
		$(".pulse-med").addClass("pulse-small");
		$(".pulse-med").removeClass("pulse-med");
		$(this).removeClass("pulse-small");
		$(this).addClass("pulse-med");
	});
	
	
	// Display the help data
	// I was not positive how to get the data out of help.json, kept hitting same origin policy error
	var data = '{'+
    '"help": ['+
    '{"title": "What is JSON?","URL": "http://en.wikipedia.org/wiki/JSON"},'+
    '{"title": "What is ExactTarget?","URL": "http://en.wikipedia.org/wiki/ExactTarget"},'+
    '{"title": "More info about ExactTarget REST APIs","URL": "http://code.exacttarget.com/question/rest-api-authentication"}]}';

	// Display the help overlay when clicking the help link
	$('#help').click(function(event){

		var obj = JSON.parse(data);		
		var helpStr="";
		for(var i=0;i<3;i++){
			helpStr += "<a href="+obj.help[i].URL+">"+obj.help[i].title+"</a></br>";
		}
		// Fill in the help content
		$('#help-content').html(helpStr);
		event.preventDefault(); // disable normal link function so that it doesn't refresh the page
        var docHeight = $(document).height(); //grab the height of the page
 
        $('.overlay-bg').show().css({'height' : docHeight}); //display your popup and set height to the page height
        $('.popup').show(); // show the appropriate popup
		
	});
	
	// hide popup when user clicks on close button
    $('.close-btn').click(function(){
        $('.overlay-bg, .overlay-content').hide(); // hide the overlay
    });
  
    // hides the popup if user clicks anywhere outside the container
    $('.overlay-bg').click(function(){
        $('.overlay-bg, .overlay-content').hide();
    })
  
	
});

// Was not able to read the help.json object correctly
// Read the help.json file
/*
var xmlhttp = new XMLHttpRequest();
var url = "https://raw.githubusercontent.com/ExactTargetDev/ui-candidate-test/develop/data/help.json";

xmlhttp.onreadystatechange=function(){
	if(xmlhttp.readState == 4 && xmlhttp.status == 200) {
		var myArr = JSON.parse(xmlhttp.responseText);
		myFunction(myArr);
	}
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
	var out = "";
	var i;
	
	alert(arr);
	
}
*/