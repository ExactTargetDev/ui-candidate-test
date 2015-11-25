angular
  .module("dashboard-ui-test")
  .factory("mainService", mainService)

	function mainService($q) {
		var service = {
			file: file
		};

		return service;
		////////////
		
		function file(){
			var help = {
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
			return $q.when(help);
		};
	};
