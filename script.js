/**
 * Created by Prashanth on 5/18/2015.
 */

(function(){


    angular.module('myApp', []);
    angular.module('myApp').controller("crtl",TestController);

    function TestController($http) {
        var hc = this;

        $http({
            method: 'GET',
            url: 'data/help.json'
        }).success(function (data, status, header, config) {
            console.log(data);
            hc.help = data;
        }).error(function (data, status, header, config) {
            console.log(data);
        });
    }

})();

