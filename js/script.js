  /*!
   * $script.js Async loader & dependency manager
   * https://github.com/ded/script.js
   * (c) Dustin Diaz, Jacob Thornton 2011
   * License: MIT
   */
  (function(a,c,b){if(typeof module!="undefined"&&module.exports){module.exports=b()}else{if(typeof define=="function"&&define.amd){define(b)}else{c[a]=b()}}})("$script",this,function(){var u=document,g=u.getElementsByTagName("head")[0],p=/^https?:\/\//,r={},o={},t={},e,c={},l="string",q=false,h="push",j="DOMContentLoaded",a="readyState",n="addEventListener",m="onreadystatechange";function v(f,x){for(var w=0,s=f.length;w<s;++w){if(!x(f[w])){return q}}return 1}function d(f,s){v(f,function(w){return !s(w)})}if(!u[a]&&u[n]){u[n](j,function i(){u.removeEventListener(j,i,q);u[a]="complete"},q);u[a]="loading"}function b(C,y,w){C=C[h]?C:[C];var s=y&&y.call,x=s?y:w,f=s?C.join(""):y,z=C.length;function A(D){return D.call?D():r[D]}function B(){if(!--z){r[f]=1;x&&x();for(var D in t){v(D.split("|"),A)&&!d(t[D],A)&&(t[D]=[])}}}setTimeout(function(){d(C,function(D){if(D===null){return B()}if(c[D]){f&&(o[f]=1);return c[D]==2&&B()}c[D]=1;f&&(o[f]=1);k(!p.test(D)&&e?e+D+".js":D,B)})},0);return b}function k(x,w){var s=u.createElement("script"),f=q;s.onload=s.onerror=s[m]=function(){if((s[a]&&!(/^c|loade/.test(s[a])))||f){return}s.onload=s[m]=null;f=1;c[x]=2;w()};s.async=1;s.src=x;g.insertBefore(s,g.firstChild)}b.get=k;b.order=function(f,x,s){(function w(y){y=f.shift();if(!f.length){b(y,x,s)}else{b(y,w)}}())};b.path=function(f){e=f};b.ready=function(x,s,w){x=x[h]?x:[x];var f=[];!d(x,function(y){r[y]||f[h](y)})&&v(x,function(y){return r[y]})?s():!function(y){t[y]=t[y]||[];t[y][h](s);w&&w(f)}(x.join("|"));return b};b.done=function(f){b([null],f)};return b});