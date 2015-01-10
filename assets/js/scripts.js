var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
	months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

(function($) {
	$(document).ready(function() {
		// Get app launcher data
		$.get('../data/applauncher.json', function(data) {
			if (data) {
				var templateScriptPrimary = $('#templateApps').html(),
					templateScriptSecondary = $('#templateApps').html(),
					templatePrimary = Handlebars.compile(templateScriptPrimary),
					templateSecondary = Handlebars.compile(templateScriptSecondary);

				$('#applauncher .apps-primary').html(templatePrimary(data['primary']));
				$('#applauncher .apps-secondary').html(templatePrimary(data['secondary']));
			}
		});

		// Get calendar data
		var today = new Date(),
			month = months[today.getMonth()],
			year = today.getFullYear(),
			week = { "dates": [] };

		for (var i = -3; i <= 3; i++) {
			var reset = new Date();
				date = new Date(reset.setDate(reset.getDate() + i)),
				day = {};			

			day["day"] = days[date.getDay()];
			day["date"] = date.getDate();
			if (today.getDate() === date.getDate()) day["today"] = true;

			week["dates"].push(day);
		}

		$('#calendar .month').html(month + ' ' + year);

		var templateScript = $('#templateCalendar').html(),
			template = Handlebars.compile(templateScript);

		$('#calendar .week').html(template(week));

		// Get pulse data
		$.get('../data/pulse.json', function(data) {
			if (data) {
				var templateScript = $('#templatePulse').html(),
					template = Handlebars.compile(templateScript);

				$('#pulse .content').html(template(data));
			}
		});

		$('#pulse .content').on('click', '.item', function() {
			$('#pulse .item').each(function() {
				$(this).removeClass('item-focus');
			});

			$(this).addClass('item-focus');
		});

		$('.help-link').on('click', function(e) {
			e.preventDefault();

			$('#mcModal').find('.modal-title').html('Help');

			$.get('../data/help.json', function(data) {
				if (data) {
					var templateScript = $('#templateHelp').html(),
						template = Handlebars.compile(templateScript);

					$('#mcModal').find('.modal-body').html(template(data));
				}
			});

			$('#mcModal').modal('show');
		});
	});
})(jQuery);