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
}
