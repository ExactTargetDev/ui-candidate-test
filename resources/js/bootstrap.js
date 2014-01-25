/**
 * 
 */
"use strict";

$(document).ready(function() {
	templateManager.grabDomTemplates();
	var pulse = new PulseWidget();
	var calendar = new CalendarWidget();
	
	var addHelpInfo = function() {
		var container = $('.modal .modal-body p');
		$.getJSON('./data/help.json', function(data) {
			data.help.map(function(item) {
				container.append(
					$('<a>').attr({
						'href' : item.URL
					}).text(item.title).css({
						'padding-bottom': '10px'
					}),
					$('<br>')
				);
			});
		});
	};
	
	//Bootstrap modal window
	$('.js-help').on('click', function() {
		$('.modal').modal('show');
		addHelpInfo();
		addHelpInfo = function() {}; //stop appending
	});
});