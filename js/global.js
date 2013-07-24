$(document).ready(function(){
	$('.pulsePanel').click(function(e){
		e.preventDefault();
		if(!$(this).hasClass('bigBox')){
			var bigBox = $('.bigBox');
			var cur = $(this);
			bigBox.removeClass('bigBox');
			cur.addClass('bigBox');
		}
	});
	
	$('.helpLink').click(function(e){
		e.preventDefault();
		$.ajax({
			url : 'data/help.json',
			dataType: 'json',
			success : function(d){
				for(var a =0; a < d.help.length; a++){
					var link = '<a href="'+ d.help[a].URL +'" >'+d.help[a].title+'</a><br/>';
					console.log(link);
					$('.overlayContent').append('<a href="'+ d.help[a].URL +'" >'+d.help[a].title+'</a><br/>');
					
				}
			}
		});
		$('.overlay').fadeToggle(300);
	});
	$('.overlay').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.overlayContent').empty();
		$('.overlay').fadeToggle(300);
	});
});