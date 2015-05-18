
var jsonOutput = "";

function updateHTML(){
		var update = document.getElementById('help');
		console.log(update)
		update.innerHTML = jsonOutput;
	}

function dataHandler(info) {
		var output = "";
		for (var i = 0; i < info.help.length; i++) {
			output += '<p><a href= ' + info.help[i].URL + '>' + info.help[i].title + '</a></p>';

		};
		jsonOutput = output;
	}

var currentPanel = 1;
var totalPanels = 0;
var timePassed = 0;
var timeToChange = 2;

function selectMe(id) {
	$(".pulse").removeClass("selected");
	$(".selected").removeClass("selected");
	$("#" + id).addClass("selected");
}



$(document).ready(function(){

	
	updateHTML();

	// Generate Navigation links
	$('.pulse').each(function(index){
		$('.pulse-nav').append('<a class="pulse-nav-item" ></a>');
		window.totalPanels = index + 1;
	});
	

	// Navigation selection
	$('.pulse-nav a.pulse-nav-item').click(function(){

		$('.pulse-nav a.pulse-nav-item').removeClass('selected');

		$(this).addClass('selected');

		var navClicked = $(this).index();
		console.log($(this).index())
		console.log(window.totalPanels)
		console.log(window.currentPanel)
		
		window.currentPanel = navClicked + 1;
selectMe(window.currentPanel);

	});


});

