$(document).ready(function(){
	var helpInfo = '{"help":[' +
'{"title":"What is JSON?","URL":"http://en.wikipedia.org/wiki/JSON" },' +
'{"title":"What is ExactTarget?","URL":"http://en.wikipedia.org/wiki/ExactTarget" },' +
'{"title":"More info about ExactTarget REST APIs","URL":"http://code.exacttarget.com/question/rest-api-authentication" }]}';

	obj = JSON.parse(helpInfo);
	//insert the html for the title inside of the object
	document.getElementById("help-title-1").innerHTML = obj.help[0].title;
	document.getElementById("help-title-2").innerHTML = obj.help[1].title;
	document.getElementById("help-title-3").innerHTML = obj.help[2].title;

	//insert the html for the text inside of the object
	document.getElementById("help-text-1").innerHTML = obj.help[0].URL;
	document.getElementById("help-text-2").innerHTML = obj.help[1].URL;
	document.getElementById("help-text-3").innerHTML = obj.help[2].URL;


	$("#show-help").on('click', function(){
		$("#body-overlay").css('display','block');
		$("#help-display").css('display','block');
	});

	$("#close").on('click', function(){
		$("#body-overlay").css('display','none');
		$("#help-display").css('display','none');
	});

	$('.pulse-square').on('click', function(){
		$('.pulse-square').removeClass("active");
		$(this).addClass("active");
	});

	
});