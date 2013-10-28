$(document).ready(function(){

	$('#left-sidebar .panel-body li').hover(function(evt) {
		//alert('test');

		$(this).css({"background-color": "#888"})
			.find('.imh-sprites').css({"background-position-x": "-35px"}).end()
			.find('a').css({"color" : "#f8f8f8", "font-weight": "bold"});
	}, function(evt) {
		$(this).css({"background-color": "transparent"})
			.find('.imh-sprites').css({"background-position-x": "0px"}).end()
			.find('a').css({"color" : "#888", "font-weight": "normal"});
	});
}); // end document ready