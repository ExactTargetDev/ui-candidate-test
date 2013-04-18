$(document).ready(function() {
	$("#sidebar a")
		.hover(sidebarHover)
		.click(sidebarClick)
	;
	
	$("#header .options .help-link").click(helpMenuClick);

	$("#pulse .widgets .widget").click(bringWidgetToForefront);
});

// ugly non-class to follow

function sidebarHover(e) {
	switch (e.type) {
		case "mouseenter":
			console.log("MOUSEOVER: "+ $(this).data("action"));
			break;
			
		case "mouseleave":
			console.log("MOUSEOUT: "+ $(this).data("action"));
			break;
	}
}

function sidebarClick(e) {
	e.preventDefault();
	console.log("CLICK: ", $(this).data("action"));
	return false;
}

function bringWidgetToForefront(e) {
	$("#pulse .widgets .widget").removeClass("current");
	$(this).addClass("current");
}

function helpMenuClick(e) {
	e.preventDefault();
	
	var $this = $(this);
	
	// don't duplicate overlay
	if ($("#overlay").length) return;
	
	$("<div>")
		.attr("id", "overlay")
		.append($("<div>").addClass("pointer"))
		.append($("<div>")
			.addClass("body dropshadow")
			.append($("<h3>").text("Help"))
			.append($("<div>").addClass("inner").text("Loading..."))
		)
		.appendTo("body")
		.hide()
		.fadeIn(500)
	;
	
	var $ajax = $.ajax({
		url: "data/help.json",
		dataType: "json",
		type: "get"
	});
	
	$ajax.done(function(payload) {
		var $links = payload["help"];
		var $bodyInner = $("#overlay .body .inner").empty();
	
		var $key, $link;
		for ($key in $links) {
			$link = $links[$key];
			
			$("<p>")
				.append($("<a>")
					.attr("href", $link["URL"])
					.text($link["title"])
				).appendTo($bodyInner)
			;
		}
		
		// close link
		$bodyInner
			.append(
				$("<p>")
					.append(
						$("<a>")
							.attr("href", "#")
							.text("[close]")
							.click(closeOverlay)
				)
			)
		;
	});
	
	$ajax.fail(function(jqXHR, status, error) {
		$("#overlay .body .inner")
			.append(" failed! ")
			.append(
				$("<a>")
					.attr("href", "#")
					.text("[close]")
					.click(closeOverlay)
			)
		;
	});
	
	return false;
}

function closeOverlay(e) {
	e.preventDefault();
	$("#overlay").fadeOut(500, function() {
		$(this).remove();
	})
	return false;
}