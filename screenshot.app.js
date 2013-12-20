var screenshot = angular.module('screenshot', ['ui.bootstrap']);

screenshot.controller('MarketingHubController', ['$scope', '$http', '$modal', function($scope, $http, $modal) {
	$scope.dashboard = {};
	$scope.dashboardLoading = true;

	var init = function() {
		var now = moment();
		var todaysDay = now.day();
		$scope.today = new Date(now);
		$scope.week = _.map(_.range(0,7), function(index) { return { date: new Date(now.day(index)), today: todaysDay == index }; });
	};

	$http.get('data/dashboard.json').success(function(data) {
		$scope.dashboard = _.map(data.pulse, function(item) { return _.extend(item, {selected: false}); });
		$scope.dashboardLoading = false;
	}).error(function(e) {
		$scope.dashboardLoading = false;
		console.log(e);
	});

	$scope.selectItem = function (item) {
		_.each(_.without($scope.dashboard, item), function(existingItem) { existingItem.selected = false; });
		item.selected = true;
	};

	$scope.openHelp = function () {
		var modalInstance = $modal.open({
			templateUrl: "modal_content.html", 
			controller: 'ModalController',
			resolve: {}
		});
	};

	init();
}]);

screenshot.controller('ModalController', ['$scope', '$http', function($scope, $http) {
	$scope.help = {};
	$scope.helpLoading = true;

	$http.get('data/help.json').success(function(data) {
		$scope.help = data.help;
		$scope.helpLoading = false;
	}).error(function(e) {
		$scope.$dismiss("ok");
	});

	$scope.ok = function() {
		$scope.$dismiss("ok");
	};
}]);