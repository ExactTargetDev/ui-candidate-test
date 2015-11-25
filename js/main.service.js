angular
  .module("dashboard-ui-test")
	.factory("mainService", mainService)

	function mainService($http) {
		var service = {
			getFile: getFile
		};

		return service;
		////////////

		function getFile(){
			$http({
           		url: "data/help.json",
           		method:"GET",
		});

		};
	};
