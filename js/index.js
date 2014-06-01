$(document).ready(function (){
	function overlayToggle() {
		var dialog = $('#help-overlay');
		dialog.css('visibility', (dialog.css('visibility') == "visible") ? "hidden" : "visible");
	}

	$('#help').click(function (e){
		var help1 = '<a target="blank" href="' + jsonData.help[0].URL + '">' + jsonData.help[0].title + '</a><br><br>';
		var help2 = '<a target="blank" href="' + jsonData.help[1].URL + '">' + jsonData.help[1].title + '</a><br><br>';
		var help3 = '<a target="blank" href="' + jsonData.help[2].URL + '">' + jsonData.help[2].title + '</a><br><br>';
		$('#help-overlay p').html(help1 + help2 + help3);
		overlayToggle();
	});

	$('#help-close').click(function (){
		overlayToggle();
	});


	$('.panel').click(function (){
		var panels = $('.panel').not($(this));

		panels.each(function(){
			if ($(this).hasClass('medium-panel')){
				$(this).removeClass('medium-panel');
				$(this).find('.stats').removeClass('medium');
			}
		});

		$(this).addClass('medium-panel');
		$(this).find('.stats').addClass('medium');
	});

	$('#hub nav a').click(function (){
		var anchors = $('#hub nav a span');
		anchors.each(function (){
			if ($(this).hasClass('colored')){
				$(this).removeClass('colored');
			}
		});

		$(this).find('span').addClass('colored');
	});
});