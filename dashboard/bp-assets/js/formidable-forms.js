/* - - - - - - - - - - - - - - -
	Formidable Forms
- - - - - - - - - - - - - - - */
// Scroll to form message/hash if it exists, since a form was submitted if it exists

$(document).ready(function() {
	if ( $('.frm_message').length ) {
		window.location.hash = '#message';
	}
	
});