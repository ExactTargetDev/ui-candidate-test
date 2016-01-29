function setActiveBubble(id) {
	
	// Remove Active Classes
	$( "#con-1" ).removeClass( "active-container" );
	$( "#con-2" ).removeClass( "active-container" );
	$( "#con-3" ).removeClass( "active-container" );
	$( "#con-4" ).removeClass( "active-container" );
	$( "#con-5" ).removeClass( "active-container" );

	// Add Inactive Class
	$( "#con-1" ).addClass( "inactive-container" );
	$( "#con-2" ).addClass( "inactive-container" );
	$( "#con-3" ).addClass( "inactive-container" );
	$( "#con-4" ).addClass( "inactive-container" );
	$( "#con-5" ).addClass( "inactive-container" );

	// Remove Specific Inactive Class
	$("#" + id).removeClass( "inactive-container" );

	// Add Active Class
	$("#" + id).addClass( "active-container" );
}