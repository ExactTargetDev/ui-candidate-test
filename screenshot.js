$(function(){
	var dialog = $('.dialog');

	dialog.dialog({
		autoOpen: false,
		modal: true,
		title: "Information",
		width: 300,
		height: 500
	});

	$('a.sidebar-nav-link').click(function(e){
		e.preventDefault();

		var text = $(this).text();

		dialog.html(text).dialog('open');
	});

	$('a#helpLink').click(function(e){
		e.preventDefault();

		dialog.html('');

		//Get the JSON data for help.
		$.get('./data/help.json',function(data){
			//Build links from the data and attach them to the dialog.
			var length = data.help.length;
			var i, url, title, link;

			for(i=0;i<length;i++){
				url = data.help[i].URL;
				title = data.help[i].title;

				link = $('<a>').attr('href',url).text(title);

				dialog.append(link).append('<br><br>');
			}

			dialog.dialog('option',{title: 'HELP'}).dialog('open');
		},'json');
	});
});