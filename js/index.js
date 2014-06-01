$(document).ready(function (){
	$('#help').click(function (e){
		e.preventDefault();

	});


	$('.panel').click(function (){
		var panels = $('.panel').not($(this));

		panels.each(function(i){
			if ($(this).hasClass('medium-panel')){
				$(this).removeClass('medium-panel');
				$(this).find('.stats').removeClass('medium');
			}
		});

		$(this).addClass('medium-panel');
		$(this).find('.stats').addClass('medium');
	});
});