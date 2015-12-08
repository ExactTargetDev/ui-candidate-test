var etApp = angular.module('etApp', []);

etApp.controller('HubController', function($scope){
    $scope.hubLinks = [{text: 'ExactTarget Email', icon: 'fa-envelope'}, {text: 'ExactTarget Mobile', icon: 'fa-mobile fa-lg'}, {text: 'CoTweet Social', icon: 'fa-twitter'}, {text: 'ExactTarget Sites', icon: 'fa-pencil'},
        {text: 'Automation Studio', icon: 'fa-bank'}, {text: 'Audience Builder', icon: 'fa-balance-scale'}, {text: 'Report Builder', icon: 'fa-bug'}];

    $scope.hubItemClick = function(item){
        console.log('you clicked ' + JSON.stringify(item));
    }
});

etApp.controller('HelpController', function($scope, $rootScope, $http){
    $scope.resources = [];
    $http({
        method: 'GET',
        url: 'data/help.json',
    }).success(function(response){
        $scope.resources = response.help;
    }).error(function(error){
        console.log(error);
    });
});

etApp.controller('PanelController', function($scope, $http){
    $scope.panels = [
        {title: 'Followers', number: 310, message: 'added today', total: 8888, mediumView: true},
        {title: 'Fan', number: 25, message: 'added today', total: 10000, mediumView: false},
        {title: 'Subscribers', number: 52, message: 'added today', total: 1083, mediumView: false},
        {title: 'foursquare', number: 88, message: 'added today', total: 10882, mediumView: false},
        {title: 'Landing Pages', number: 99, total: 11234, mediumView: false}
    ];

    $http({
        method: 'GET',
        url: 'data/testdata.txt'
    }).success(function(response){
        var lines = response.split('\n');
        var array = lines[2];
        for(var i = 0; i < $scope.panels.length; i++){
            //$scope.panels[i].addedNum = string[i];
        }
        console.log(array);
    }).error(function(error){
        console.log(error);
    });

    $scope.showMediumPanelView = function(panel){
        for(var i = 0; i< $scope.panels.length; i++){
            $scope.panels[i].mediumView = false;
            if($scope.panels[i].title == panel.title){
                panel.mediumView = true;
            }
        }
    };
});