Array.prototype.max = function() {
     return Math.max.apply(null, this);
};

Array.prototype.min = function() {
     return Math.min.apply(null, this);
};

Array.prototype.contains = function(v) {
     for(var i = 0; i < this.length; i++) {
          if(this[i] === v) return true;
     }
     return false;
};

Array.prototype.unique = function() {
     var a = [];
     for(var o = 0; o< this.length; o++) {
          if(!a.contains(this[o])) {
               a.push(this[o]);
          }
     }
     return a;
};

var unitTestJson ={
     a : 'Subscribers rock',
     b : [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12],
     c : ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'],
     d : ['pear', 'banana'],
     e : [1, 2, 3, 4, 5],
     f : 6,
     g : [7, 8, 9],
     h : 'The, quick, brown, fox jumped over',
     i : '',
     j : [1, 1, 2, 3, 5, 7],
     k : ' '
};

(function() {
  // Union of Chrome, Firefox, IE, Opera, and Safari console methods
  var methods = ["assert", "assert", "cd", "clear", "count", "countReset",
    "debug", "dir", "dirxml", "dirxml", "dirxml", "error", "error", "exception",
    "group", "group", "groupCollapsed", "groupCollapsed", "groupEnd", "info",
    "info", "log", "log", "markTimeline", "profile", "profileEnd", "profileEnd",
    "select", "table", "table", "time", "time", "timeEnd", "timeEnd", "timeEnd",
    "timeEnd", "timeEnd", "timeStamp", "timeline", "timelineEnd", "trace",
    "trace", "trace", "trace", "trace", "warn"];
  var length = methods.length;
  var console = (window.console = window.console || {});
  var method;
  var noop = function() {};
  while (length--) {
    method = methods[length];
    // define undefined methods as noops to prevent errors
    if (!console[method])
      console[method] = noop;
  }
})();