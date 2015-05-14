'use strict';

/**
 * @ngdoc function
 * @name exactTargetApp.controller:SideLinkCtrl
 * @description
 * # MainCtrl
 * Controller of the exactTargetApp
 */

//var app;

//app = angular.module('exactTargetApp', []);

angular.module('exactTargetApp')
//.controller('MainCtrl', function ($scope, $http, $rootScope, localStorageService) {
.controller('SideLinkCtrl', function ($scope) {

  //var sideLinks = {};

  $scope.sideLinks = [{
                        'text': 'ExactTarget Email',
                        'icon': 'btn_email',
                        'link': '#/email' 
                      }, {
                        'text': 'ExactTarget Mobile',
                        'icon': 'btn_mobile', 
                        'link': '#/mobile' 
                    },
                    {
                        'text': 'CoTweet Social',
                        'icon': 'btn_social',
                        'link': '#/social'  
                    },
                    {
                        'text': 'ExactTarget Sites',
                        'icon': 'btn_sites', 
                        'link': '#/sites' 
                    },
                    {
                        'text': 'Automation Studio',
                        'icon': 'btn_studio',
                        'link': '#/studio'  
                    }, 
                    {
                        'text': 'Audience Builder',
                        'icon': 'btn_audience',
                        'link': '#/audience'  
                    },
                    {
                        'text': 'Report Builder',
                        'icon': 'btn_report',
                        'link': '#/report'  
            }];
  




});
