var app = angular.module('Dashboard', []);

app.controller('controller',["$scope","$http",
    function($scope,$http){

    $scope.data = "";
    $scope.isShown = false;
    $scope.loadHelp = function(){
        $http({
            url: "data/help.json",
            method:"GET",
            headers:{'Content-Type':'application/json'}
        }).success(function(data){
                $scope.isShown = true;
                $scope.data = data.help;
            }).error(function(){
                $scope.isShown = false;
            });
    };

    $scope.hidePopover = function(){
        $scope.isShown = false;
    };
}
]);
