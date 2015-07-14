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
});