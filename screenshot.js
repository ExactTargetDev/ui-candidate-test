$(function() {
	$('.panel').click(function() {
		$('.panel').removeClass('medium');
		$(this).addClass('medium');
	});

	$('#help').click(getHelp);

	function getHelp() {
		$.getJSON('data/help.json', function(data) {
			var $modalList = $('<ul>');
			data.help.forEach(function(element) {
				$modalList.append('<li><a href="' + element.URL + '">' + element.title + '</a></li>');
			});

			$modalList.dialog({modal: true, title: 'HELP!', position: {my: 'right top', at: 'bottom', of: $('#help')}});
		});
	}
});