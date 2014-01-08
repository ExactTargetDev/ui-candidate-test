(function() {

  var $scope = this,
  JHUtils = function(obj) {
    if(obj instanceof JHUtils) return obj;
    if (!(this instanceof JHUtils)) return new JHUtils(obj);

    this.JHObj = obj;
  },

  // Get Bevis and Butthead identified...
  BEVIS_DETECTED = IE_9_DETECTED = (Function.prototype.bind && (typeof console === 'object' || typeof console === 'function') && typeof console.log === 'object'),
  BUTTHEAD_DETECTED = IE_8_DETECTED = (!Function.prototype.bind && typeof console !== 'undefined' && typeof console.log === 'object');

  $scope.JHUtils = JHUtils;

  JHUtils.ascSort = function(targetArr) {

    if(!_.isArray(targetArr) || targetArr.length == 0) return targetArr;
    var i, j, subject, n = targetArr.length;

    if(n < 25) return _.sortBy(targetArr, function(key) { return key; })

    for(i = 0; i < n; i++) {
      subject = targetArr[i];
      j = i;

      for(j = i; j > 0 && subject < targetArr[j-1]; j--) targetArr[j] = targetArr[j - 1];

      targetArr[j] = subject;
    }
    return targetArr;
  };

  JHUtils.dataStore = function() {
    var items = [],
    addItem = function(itemValue) {
      if(!itemValue) return;

      var newItem = items[itemValue];
      if(!newItem) {
        newItem = itemValue;
        items.push(newItem);
      }
      return newItem;
    };

    return addItem;
  }();

  JHUtils.isInteger = function(value) {
    return (value && !isNaN(value) && Object.prototype.toString.call(value) == '[object Number]' && value != +value);
  };


  // This helps prepare IE 9 to display logs via JHUtils.log....
  if(BEVIS_DETECTED) {
    // Source: http://patik.com/code/console-log-polyfill/consolelog.js
    ['log','info','warn','error','assert','dir','clear','profile','profileEnd'].forEach(function (method) {
      console[method] = this.call(console[method], console);
    }, Function.prototype.bind);
  }

  JHUtils.log = function(msg, obj) {

    if(BUTTHEAD_DETECTED) return false;

    if(!msg || msg.length == 0) msg = "JHUtils.log triggered...";
    if(!_.isObject(obj)) obj = {};

    if(console && console.log) {
      if(_.isEmpty(obj)) {
        console.log("%s", msg);
      } else {
        console.log("%s: %o", msg, obj);
      }
    }
  };
}).call(this);
