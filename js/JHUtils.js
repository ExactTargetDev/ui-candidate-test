(function() {

  var $scope = this, 
  $_prevScope = $scope.JHUtils,

  JHUtils = function(obj) {
    if(obj instanceof JHUtils) return obj;
    if (!(this instanceof JHUtils)) return new JHUtils(obj);

    this.JHObj = obj;
  };

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

}).call(this);
