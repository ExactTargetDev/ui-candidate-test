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

	$(".marketHubText a").click(function() {
			$(this).css({"background-color":"#fcaa40","color":"white", "font-size":"1.1rem"});
			$(".marketHubText a").not($(this)).removeAttr("style");
	});

	$("#helpData").click(function(){
		$.getJSON( "data/help.json", function( data ) {
		  var items = [];
		  $.each( data, function( key, val ) {
		    items.push( "<li id='" + key + "'>" + val + "</li>" );
		  });
		 
		  $( "<ul/>", {
		    "class": "my-new-list",
		    html: items.join( "" )
		  }).appendTo( $(".modal-body") );
		});
		$('#myModal').modal();
	});

});
