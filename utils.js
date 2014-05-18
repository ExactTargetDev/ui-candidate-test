$(document).ready(function(){
	$("#help").click(function(){
		if($("#help-dialog").is(":visible")){
			$(this).text("Help");
			$(".help-link").each(function(){
				$(this).remove()
			});
			$(".help-break").each(function(){
				$(this).remove()
			});
			$("#help-dialog").hide();
			
		} else{
			$.getJSON("data/help.json", function(data){
				$.each(data, function(i, item){
					$.each(data[i], function(i, obj){
						$("<a>").text(obj.title).attr("class", "help-link").attr("href", obj.URL).appendTo("#help-dialog"); 
						$("<br>").attr("class", "help-break").appendTo("#help-dialog");
					});
				});
			});
			$(this).text("Close");
			$("#help-dialog").show();
		}
	});
	$(".imh-links").click(function(){
			alert("The element you clicked has an ID of: " + $(this).attr("id"));
	});
	$(".imh-links").mouseover(function(){
		$(this).css({
			'opacity': 0.5,
			'-khtml-opacity': 0.5,
			'-ms-filter': 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)',
			'background-color': '#faa12e'
		});
	});
	$(".imh-links").mouseout(function(){
		$(this).css({
			'opacity': 1.0,
			'-khtml-opacity': 1.0,
			'-ms-filter': 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)',
			'background-color': ''
		});
	});
	$(".pulse-option-box").click(function(){
		$(".pulse-options").each(function(){
			$(".pulse-options").removeAttr("id");
		});
		$(".pulse-option-box").each(function(){
			$(".pulse-option-box").removeAttr("id");
		});
		$(this).attr("id", "medium-view-box");
		$(this).parent().parent().attr("id", "medium-view");
	});
});