angular.module("dashboard-ui-test")
	.controller("mainController", mainController) 

function mainController(mainService) {
    var vm = this;
    var help = help;

    ////////////
    function help(){
      mainService
        .file()
      	.then(function (data){
      		vm.options = data;
      		//console.log('data', data);
      	});
    };
};
