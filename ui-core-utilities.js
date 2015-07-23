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

