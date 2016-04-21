$(document).ready(function(){

	$('.theSlider').slick({
		  dots: true,
		  infinite: true,
		  speed: 1000,
		  slidesToShow: 3,
		  centerMode: true,
		  variableWidth: true,
		  arrows: false
	});

	$(".sliderContent").click(function() {
			
			$(this).animate({"width": '250px', "height":"150px", "margin-top":"2rem"}, 500);
			$(".sliderContent").not($(this)).animate({"width": '200px', "height":"100px", "margin-top":"4rem"});
	});


});
