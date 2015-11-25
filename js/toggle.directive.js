angular.module("dashboard-ui-test")
	.directive("toggleItem", toggleItem) 

function toggleItem() {
     var directive = {
        link: link,
        restrict: 'ACE',
    };
    return directive;

    function link(scope, element, attrs) {
      var currentState = true;

     element.on('click', function() {
        if(currentState === true) {
          var pulse = document.querySelectorAll('.pulse-square');
          for (var i = 0; i < pulse.length; i++) {
            pulse[i].classList.remove('active');
            //remove active state from all items that have .pulse-square
          }
          angular.element(element).addClass('active');
          //add active state to element selected
        } else {
          angular.element(element).removeClass('active');
          //if clicked again remove active state
        }
        currentState = !currentState;
        //toggle state
      });
    };


};
