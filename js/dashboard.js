var app = angular.module('dashboard', []);

app.controller('headerCtrl',["$scope","$http", function($scope,$http){

    $scope.data = "";
    $scope.isShown = false;
    $scope.loadHelp=function(){
        $http({
            url: "data/help.json",
            method:"GET",
            headers:{'Content-Type':'application/json'}
        }).success(function(data){
                //success handler
                $scope.data = data.help;

                $scope.flag = true;
            }).error(function(){
                $scope.flag = false;
            });
    };

    $scope.hidePopover = function(){
        $scope.isShown = false;
    };

    $("li a").hover(function() {
        $(this).css("color","blue");
    }, function() {
        $(this).css("color","#95a0aa");
    });

    $('.pulse-carousel').on("click",".pulse-box",function() {
        $('.pulse-box').addClass('inactive');

        var $element = $(this);
        $($element).removeClass('inactive');
        $($element).addClass('active');
    });
}
]);
