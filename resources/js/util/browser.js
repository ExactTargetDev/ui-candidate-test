browser = (function(){
    var IE =    !! (window.attachEvent && !window.opera);  //all IE including 8
    var IE7 =   function(){
                var isVersion7 = false;
                var re = new RegExp("MSIE [7]{1,}");
                if(re.exec(navigator.userAgent) != null) isVersion7 = true;
                return (!! (window.attachEvent && !window.opera) && isVersion7);
           }();
    var IE8 =   function(){
                var isVersion7 = false;
                var re = new RegExp("MSIE [8]{1,}");
                if(re.exec(navigator.userAgent) != null) isVersion7 = true;
                return (!! (window.attachEvent && !window.opera) && isVersion7);
           }();
    var IE9 =   function(){
                var isVersion7 = false;
                var re = new RegExp("MSIE [9]{1,}");
                if(re.exec(navigator.userAgent) != null) isVersion7 = true;
                return (!! (window.attachEvent && !window.opera) && isVersion7);
           }();
    var IE8over = IE8 || IE9;
    var IE7under = IE && !(IE8over);
    var Opera =  !!window.opera;
    var Gecko = navigator.userAgent.indexOf('Gecko') > -1 &&
           navigator.userAgent.indexOf('KHTML') == -1;
    var ipad =   function(){
                var re1 = new RegExp("AppleWebKit");
                var re2 = new RegExp("Mobile");
                var res = !!re1.exec(navigator.userAgent) && !!re2.exec(navigator.userAgent);
                return (res);
           }();
    return {IE : IE,
            IE8over : IE8over,
            IE7under : IE7under,
            isIpad : ipad,
            IE8 : IE8
            };
})();