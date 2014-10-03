//My module registries
angular.module('dashboard', [
  'dashboard.help',
  'dashboard.calendar'
]);
var help = angular.module('dashboard.help', []);
var calendar = angular.module('dashboard.calendar', []);

//My Controllers