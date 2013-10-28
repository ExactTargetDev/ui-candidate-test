var helpJson = {
    "help": [
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
},
	overlay = $('#overlay'),
	fade = $('#fade');
$(function(){
	$('.day').on('click', function(){
		$('.highlighter').removeClass('highlight');
		$(this).next('.highlighter').addClass('highlight');
	});

	$('.calendar-details-list .col2').on('click', function(){
		$('.calendar-details-list .col2').removeClass('medium');
		$(this).addClass('medium');
	});

	$('#help-link').on('click', function(e){
		e.preventDefault();
		var res = '',
			overlayContainer = overlay.find('ul');
		for(var i = 0; i < helpJson.help.length; i++){
			res += '<li><a href="' + helpJson.help[i].URL + '">' + helpJson.help[i].title + '</a></li>'; 
		}
		overlayContainer.html(res);
		fade.show();
		overlay.show();
	});

	$('#overlay button').on('click', function(e){
		e.preventDefault();
		fade.hide();
		overlay.hide();
	})
});