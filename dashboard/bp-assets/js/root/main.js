/* Project: 
   Author: Stephen M James

	Import libraries/dependent scripts into one file and minify with CodeKit
	Visit http://www.incident57.com/codekit for more information

	Vendor
	@codekit-prepend "../wpbp-assets/js/vendor/smartresize.js";
	@codekit-prepend "../wpbp-assets/js/vendor/console-wrapper.js";
  @codekit-prepend '../wpbp-assets/js/vendor/bootstrap/js/bootstrap.js';
  @codekit-prepend '../wpbp-assets/js/vendor/chosen/chosen.jquery.js';
  @codekit-prepend '../wpbp-assets/js/vendor/formidable/formidable.js';	
  @codekit-prepend '../wpbp-assets/js/vendor/bxslider-4-master/jquery.bxslider.js';

  Custom
  @codekit-prepend "../wpbp-assets/js/formidable-forms.js";
	@codekit-prepend "../wpbp-assets/js/jquery.safetoggle.js";

*/

/* jshint devel:true */
/* global Modernizr */

/*------------------------------------------
=DOCUMENT OUTLINE
--------------------------------------------

	Object literal with init function called on DOM ready

*/

var MAIN = {
	el: {	
		body: $("body"),
	} ,
	// start here
	init: function() {	
		"use strict";
		
		//event debouncer http://paulirish.com/2009/throttled-smartresize-jquery-event-handler/
		$(window).smartresize();

		$(window).load( function() {
		
		});
		
		$(document).ready( function() {
		
		});

		$(window).on("scroll", function() {
		
		});
		
		$(window).on("resize", function() {
			
		});	

		this.initCarousel();
		this.initElementBinding();
		this.initFOUC();		
		this.initTouch();
		this.initPolyfills();
		this.initHeader();
		this.initFooter();
		this.initSocial();

	},	// end init, and should be alphbetically from here on out.
	initCarousel: function() {	
		"use strict";
	},
	initElementBinding: function() {	
		"use strict";
	},
	initFooter: function() {
		"use strict";
	},
	initFOUC: function() {	
		"use strict";
		// prevent Flash of unstyled content by fading it in, see http://www.bluerobot.com/web/css/fouc.asp/
		$('.fouc').animate({opacity: 1}, 1000);	
	},
	initHeader: function() {
		"use strict";
	},	
	initPolyfills: function() {
		"use strict";
		
		// add size to file upload button for FireFox
		$('.frm_fileupload .file').attr('size', 10);
		
	}, // end polyfills
	initSocial: function() {	
		"use strict";
	},
	initTouch: function() {	
		"use strict";
		
		if (Modernizr.touch) {
		
		}
	}	//end touch

};

$(function(){
	MAIN.init();
});