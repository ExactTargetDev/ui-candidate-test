(function($) {
	$(document).ready(function() {
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