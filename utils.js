$(document).ready(function(){
	$(".imh-links").click(function(){
			alert("The element you clicked has an ID of: " + $(this).attr("id"));
	});
	$(".imh-links").mouseover(function(){
		alert("hovering");
	});
});