(function () {

	var toggleBlurbs = function (e) {
		var blurb = $(e.target).is('.blurb') ? $(e.target) : $(e.target).parent('.blurb');
		
		if (!blurb.is('.blurbLarge')) {
			$('.blurb').removeClass('blurbLarge');
			blurb.addClass('blurbLarge');
		}
		else {
			blurb.removeClass('blurbLarge');
		}
	};

	var displayHelpInfo = function (e) {
		var JSON;
		var items = [];
		e.preventDefault();
		
		var readHelp = function (helpItems){
			$.each(helpItems, function( key, val ) {
				if (key === "title") {
					items.push( "<h2>" + val + "</h2>" );
				}
				else if (key === "answer") {
					items.push( "<span>- " + val + "</span>" );				
				}
			});
		} 
		
		$.getJSON("help.json", function( data ) {
			$.each(data.help, function( key, val ) {
				readHelp(val)
			});
			
			$('.helpDialog').html(items.join( "" ));
		}).done(function () {
			$('#Container').addClass('overlay');
			$('.helpDialogContainer').removeClass('hide');
		});
	};
	
	var closeHelpDialog = function () {
		$('.helpDialogContainer').addClass('hide');
		$('#Container').removeClass('overlay');
	};

	var effectsForLinks = function (e) {
		var link = $(e.target);
		var linkId = link.attr('id');
		
		switch (linkId) {
			case 'Email': 
				link.css({
					'color': 'blue',
					'font-style': 'italic'
				});								
				break;
			case 'Mobile': 
				link.css('color', 'orange');
				break;	
			case 'CoTweet': 
				link.css({
					'color': 'violet',
					'text-decoration': 'underline'
				});				
				break;
			case 'Sites': 
				link.css('color', 'red');
				break;
			case 'Studio': 
				link.css('color', 'green');
				break;
			case 'Audience': 
				link.css({
					'color': 'black',
					'text-decoration': 'line-through'
				});
				break;
			case 'Report': 
				link.css('color', 'pink');
				break;
			case 'Partner': 
				link.css({
					'color': 'purple',
					'font-style': 'oblique'
				});								
				
				break;
			default:
				link.css('color', 'yellow');
				break;
		}
	};

	$(document).ready(function () {
		$('.blurb').on('click', toggleBlurbs);	
		$('#Help').on('click', displayHelpInfo);
		$('#CloseHelp').on('click', closeHelpDialog);
		$('.sideBar .unit a').on('click', effectsForLinks);
	});

}());