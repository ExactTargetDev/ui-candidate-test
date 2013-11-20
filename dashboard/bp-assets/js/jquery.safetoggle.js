/* - - - - - - - - - - - - - - - - - - - - - - - -
	Safe Toggle Slide
	Show/Hide an element (similar to bootstrap's NavBar JavaScript)
- - - - - - - - - - - - - - - - - - - - - - - - */

(function($) {
	"use strict";

	$.fn.safeToggle = function(forced) {
	
		var element = $(this);
		
		if (forced === 'show' && element.hasClass('collapsed')) {	
			show(element);
		}
		else if(forced === 'hide' && !element.hasClass('collapsed')) {	
			hide(element);	
		}
		else if(typeof forced == 'undefined' && !element.hasClass('collapsed') ) {
			hide(element);
		}
		else if(typeof forced == 'undefined' && element.hasClass('collapsed') ) {
			show(element);

		}
		
		function show(element) {
			element.slideUp(0, function() {
				element.removeClass('collapsed').slideDown('fast');
			});
		}

		function hide(element) {
			element.slideUp('slow', function() {
				element.addClass('collapsed').slideDown(0);
			});
		}

	};
})(jQuery);