/* File: imh.js
 * Author: John T. Ryan
 *
 *
 */

$(document).ready(function() {



$( ".imh" ).click(function(e) {
	e.preventDefault();
	$(".imh").removeClass('active');
	$(this).addClass('active');
});

$( ".dash" ).click(function(e) {
	e.preventDefault();
	$(".dash").removeClass('lg');
	$(this).addClass('lg');
});






}); // Doc Ready end











