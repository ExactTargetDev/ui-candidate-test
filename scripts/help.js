function showHelp(){

	var help ={
		    "help": [
		        {
		            "title": "What is JSON?",
		            "URL": "http://en.wikipedia.org/wiki/JSON"
		        },
		        {
		            "title": "What is ExactTarget?",
		            "URL": "http://en.wikipedia.org/wiki/ExactTarget"
		        },
		        {
		            "title": "More info about ExactTarget REST APIs",
		            "URL": "http://code.exacttarget.com/question/rest-api-authentication"
		        }
		    ]
		};


	for(var i = 0; i < help.help.length; i++){
		$( "#help-body" ).append( "<div class='row'>" );
		$( "#help-body" ).append( "<h2>" + help.help[i].title +"</h2>" );
		$( "#help-body" ).append( "<a href='" + help.help[i].URL + "'>" + help.help[i].title + "</a>" );
		$( "#help-body" ).append( "</div>" );
	}


	$('#helpModal').modal('show')
}