(function($) {
	$(function() {
		
		$("#pulse-flow div.panel-container").click(pulseFlowPanelClicked);
		
		function pulseFlowPanelClicked() {
			removePreviouslySelected();
			$(this).addClass("selected");
		}
		
		function removePreviouslySelected() {
			$("#pulse-flow div.panel-container").removeClass("selected");
		}
			
		
		$("#top-nav > .profile > .help").click(helpClicked);
		
		function helpClicked() {
		
			$.ajax({
				dataType: "json",
				url: "data/help.json",
				success: function(data) {
					var dialogBody = "<div>";
					$.each(data.help, function(index, helpData) {
						dialogBody += helpData.title + "<br />" + helpData.URL + "<br /><br />";
					});
					dialogBody += "</div>";
					$(dialogBody).dialog({modal: true, width: 600}).dialog("open");
				}
			});
		}
		
	});
})(jQuery);