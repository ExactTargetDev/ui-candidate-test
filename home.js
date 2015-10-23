
var app = angular.module('pulse', []);

     app.controller('pulseCtrl',["$scope","$http", function($scope,$http){
     
     $scope.data = "";
     $scope.flag = false;
     $scope.loadJson=function(){
     	$http({
            url: "data/help.json",
            method:"GET",
            headers:{'Content-Type':'application/json'},
        }).success(function(data,status,headers,config){
        	//success handler
        	console.log(data);
        	$scope.data = data.help;
           // open the overlay
           
            $scope.flag = true;

        }).error(function(){
        	console.log("error");
        	$scope.flag = false;
        });

     	}

     	$scope.hideOverlay = function(){
            $scope.flag = false;

     	}
       
       // method for hover of Interactive Marketing hub
        $("li a").hover(function() {
			    $(this).css("color","blue");
			}, function() {
			    $(this).css("color","#95a0aa");
		 });

        //method for capturing click event of Interactive Marketing hub
        
        $("li a").click(function(event) {

			    console.log($(event.target).data('val'));
			    console.log($(event.target).text());
		 });
        
        $('.mainSection').on("click",".smallPanel",function(event) { 

        	$('.smallPanel').css("-moz-transform","scale(1)");
  			$('.smallPanel').css("-webkit-transform","scale(1)");
  			$('.smallPanel').css("-o-transform","scale(1)");
  			$('.smallPanel').css("z-index","0");

  			var element = $(this);
  			 element.css("-moz-transform","scale(2)");
  			element.css("-webkit-transform","scale(2)");
  			element.css("-o-transform","scale(2)");
  			element.css("z-index","9999999");



        });



     }

     
     ]);

