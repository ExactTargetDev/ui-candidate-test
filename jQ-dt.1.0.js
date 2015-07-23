 // Create a javascript object (DataTable) with the following:
 // A private columns property (string array)
 // A private rows property (string array)
 // A public method addRows that adds an item to the rows array
 // A public method addColumns that adds an item to the columns array
 // A public method getData that returns the a json object representation of the DataTable
 // Note: the row object should be a hash of the column name and row item value
 // Example:
 // .addColumns('column1', 'column2', 'column3');
 // .addRow('value1A', 'value1B', 'value1C');
 // .addRow('value2A', 'value2B', 'value2C');
(function(w){
	window.$$ = window.$$ || {};
	var p = {
		_rows 		: [],
		_columns 	: []
	};

	var dtbl = {
		addColumns : function (arr){
			Array.prototype.push.apply(p._columns,arr);
		},
		addRow : function (arr){
			 if(arr.length > 0){
			     var r = [];
			      for(var idx = 0; idx < arr.length; idx++)
			      	r[p._columns[idx]] = arr[idx]
			      p._rows = _default.extend(p._rows,r);
			}
		},
		getData : function(){
			 return JSON.stringify({"rows":p._rows, "columns":p._columns});
		}		
	};

	var _default = {
		/**
		 * Merge defaults with user options
		 * @private
		 * @param {Object} defaults Default settings
		 * @param {Object} options User options
		 * @returns {Object} Merged values of defaults and options
		 */
		 extend : function ( defaults, options ) {
		    var extended = {};
		    var prop;
		    for (prop in defaults) {
		        if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
		            extended[prop] = defaults[prop];
		        }
		    }
		    for (prop in options) {
		        if (Object.prototype.hasOwnProperty.call(options, prop)) {
		            extended[prop] = options[prop];
		        }
		    }
		    return extended;
		},
		Name :  "jQ-data-table.1.0"
	};

	window.$$ = DataTable = _default.extend(window.$$,dtbl);

})(window);