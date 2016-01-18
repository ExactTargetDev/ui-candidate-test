$(document).ready(function(){
	$("li.bubble").click(function(){
		console.log("bubble clicked");
		console.log(this);
		$(".large").hide();
		$(".small").show();
		$(this).find(".large").show();
		$(this).find(".small").hide();
	});
});