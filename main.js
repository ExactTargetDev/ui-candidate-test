$(document).ready(function(){

$(".hub-default").hover(function(){
	$(this).addClass("hub-hover");
	},function(){
	$(this).removeClass("hub-hover");
});
$(".hub-default").click(function(){
	$(".hub-selected").removeClass("hub-selected");
	$(this).addClass("hub-selected");
	
});

});

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
	
}*/
