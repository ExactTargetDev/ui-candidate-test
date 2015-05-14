'use strict';

/**
 * @ngdoc function
 * @name exactTargetApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the exactTargetApp
 */
angular.module('exactTargetApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
