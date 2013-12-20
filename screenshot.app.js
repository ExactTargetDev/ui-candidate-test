var screenshot = angular.module('screenshot', ['ui.bootstrap']);

screenshot.controller('MarketingHubController', ['$scope', '$http', function($scope, $http) {
	$scope.dashboard = {};
	$scope.help = {};

	var init = function() {
		var now = moment();
		var todaysDay = now.day();
		$scope.today = new Date(now);
		$scope.week = _.map(_.range(0,7), function(index) { return { date: new Date(now.day(index)), today: todaysDay == index }; });
	};

	$http.get('data/dashboard.json').success(function(data) {
		$scope.dashboard = data;
	}).error(function(e) {
		console.log(e);
	});

	init();
}]);