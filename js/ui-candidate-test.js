$(document).ready(function() {
	
	$('#showHelpModal').click(function(){
		
		$.ajax({
			dataType: "json",
			url: "data/help.json",
			success: function( msg ) {
				
				var helpHtmlCode = '';

				$(msg.help).each(function( index, element ){
					helpHtmlCode += '<h4><a href="' + element.URL + '" target="#" </a>' + element.title + '</h4>';
				}) 

				$("#helpModal .modal-body").html( helpHtmlCode );
			},
			error: function( msg ) {
				console.log( "Loading error: " + JSON.stringify( msg ) ) ;
			}
		});
	});
})