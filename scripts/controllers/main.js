'use strict';

/**
 * @ngdoc function
 * @name exactTargetApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the exactTargetApp
 */

//var app;

//app = angular.module('exactTargetApp', []);

angular.module('exactTargetApp')
.controller('PulseCtrl', function () {

})
.controller('MainCtrl', function ($scope, $http) {

    $scope.template = {
    	'accordian_tpl': 'partials/accordian.tpl.html',
	    'footer_tpl': 'partials/footer.tpl.html',
	    'header_tpl': 'partials/header.tpl.html',
	    'home_tpl': 'partials/home.tpl.html',
	    'login': 'views/login.tpl.html',
	    'maincontent_left_tpl': 'partials/maincontent_left.tpl.html',
	    'maincontent_right_tpl': 'partials/maincontent_right.tpl.html',
	    'sidelinks_tpl': 'partials/sidelinks.tpl.html',
	    'pulse_tpl': 'partials/pulse.tpl.html'


    };
	
    $scope.modalShown = false;
  	$scope.toggleModal = function() {
//  		console.log('test');
    $scope.modalShown = !$scope.modalShown;
  	};

  	// stuff for the help button
    $http.get('data/help.json').success (function(data){
        $scope.helpText = data.help;
    })
    .error(function() {
        console.log('help file not read');
        $scope.helpText = 'There was an error retrieving the help text';

    })

    .finally(function() {
    	//console.log($scope.helpText);

    });



  })

.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width) {
      	scope.dialogStyle.width = attrs.width;
      }
        
      if (attrs.height) {
      	scope.dialogStyle.height = attrs.height;
      }
        
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    templateUrl: 'partials/modal.tpl.html' // See below
  };
});

