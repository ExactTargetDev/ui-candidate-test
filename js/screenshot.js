/* global $ */

'use strict';

$(function() {

	// app navigation
	$('.app').on('click', function() {
		$('.app').removeClass('current');
		$(this).addClass('current');
	});

	// help link
	$('.help').on('click', function() {

		$('#help-modal').modal();

		$.ajax({
			dataType: 'json',
			url: 'data/help.json',
			success: function(data) {
				var helpLinks = data.help;
				var linkHtml = [];
				for (var i = 0; i < helpLinks.length; i++) {
					linkHtml.push('<a href="' + helpLinks[i].URL + '">' + helpLinks[i].title + '</a>');
				}
				$('.modal-body').html( '<ul><li>' + linkHtml.join('</li><li>') + '</li></ul>' );
			}
		});

		return false;
	});

	// panels
	$('.panel').on('click', function() {
		$('.panel').removeClass('active');
		$(this).addClass('active');
	});
});