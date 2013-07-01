/*
	js/dashboard.js
	2013, Justin Evans
	ExactTarget UI-Candidate-Test

	Requires: js/lib/bootstrap/bootstrap.min.js
	Requires: jQuery v. 1.8.0+
	Requires: require.js
	Requires: handlebars.js

	Define namespace for methods specific to Dashboard page.
*/

// Define Dash, assign it to pre-existing definition to avoid conflict,
// otherwise define base "DASH" methods

// Dash (core methods)
var Dash = Dash || {

	// init Dash.init(), we kick off methods and set any default definitions to get this app up and running
	init : function (){
		// Register Handlebars Helpers

		// Create HTML List Helper for (as an example), nested context arrays
		Handlebars.registerHelper('list', function(items, options) {
		  var out = '<ul>';

		  for(var i=0, l=items.length; i<l; i++) {
		    out = out + '<li>' + options.fn(items[i]) + '</li>';
		  }

		  return out + '</ul>';
		});


		// Create HTML List Helper for rendering Calendar Days within 
		// nested-unordered lists
		Handlebars.registerHelper('list_days', function(items, options) {
		  var out = '<ul class="inline">';

		  for(var i=0, l=items.length; i<l; i++) {
		    out = out + '<li>' + options.fn(items[i]) + '</li>';
		  }

		  return out + '</ul>';
		});
	}, 

	// Create "config" object for holding key/value settings for App-configuration
	config : {

	},

	// A no-conflict "logging" method for Development (console.log, console.error)
	log : {
		trace : function(str, console_div_id) {
			if ( console && typeof console.log === 'function' ) { console.log( str ) }
			else { if( console_div_id !== null ) { $('#' + console_div_id).html('<p class="warning">' + str + '</p>'); } }
		},
		error : function (str, console_div_id) {
			if ( console && typeof console.error === 'function' ) { console.error( str ) }
			else { if( console_div_id !== null ) { $('#' + console_div_id).html('<p class="error">' + str + '</p>'); } }
		}
	}

};

// Dashboard Modules

// Dash.UI namespace contains User-Interface methods

Dash.UI = Dash.UI || {};

Dash.UI.template = function ( target, context, template_id ) {

	// Configure Handlebars template markup and compile

	var template = Handlebars.compile( $('#' + template_id).html() );

	// Iterate through "data" (JSON) and render to target (e.g., $('ul.someList') )

	$( context ).each( function (index, item) {
		$('#' + target).append( template( item ) );
	});

};


$(document).ready(function(){

	// Call Dash.init() to initialize any preliminary methods and properties for the
	// application to run

	Dash.init();

	// Example Calendar Data (Context for rendering Calender via "Handlebars" Templates)
	var calendar_data = [
		{
			month : 'June',
			year : '2013',
			days : [
				{
					day_of_week : 'Wed',
					day_of_month : '26',
					calendar_items : []
				},
				{
					day_of_week : 'Thur',
					day_of_month : '27',
					calendar_items : [ { item : 'Event', time : '3:45pm' }, { item : 'Another Event', time : '5:30pm' } ]
				},
				{
					day_of_week : 'Fri',
					day_of_month : '28',
					calendar_items : [ { item : 'End of iteration', time : '6:00pm' } ]
				},
				{
					day_of_week : 'Sat',
					day_of_month : '29',
					calendar_items : [ { item : 'Event at the place', time : '3:30pm' } ]
				},
				{
					day_of_week : 'Sun',
					day_of_month : '30',
					calendar_items : []
				}
			]
		},
		{
			month : 'July',
			year : '2013',
			days : [
				
				{
					day_of_week : 'Mon',
					day_of_month : '1',
					calendar_items : [ { item : 'Stand-up', time : '9:00am' }, { item : 'Planning Meeting', time : '10:30am' } ]
				},
				{
					day_of_week : 'Tue',
					day_of_month : '2',
					calendar_items : []
				}
			]
		}
	];

	// Render Calendar Data using Handlebars Template
	Dash.UI.template( 'calendar_items', calendar_data, 'calendar_item_template' );

});
