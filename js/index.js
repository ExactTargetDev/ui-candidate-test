$(document).ready(function (){
	$('#help').click(function (e){
		e.preventDefault();

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