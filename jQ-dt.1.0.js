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
		addColumn : function (arr){
			Array.prototype.push.apply(p._columns,arr);
		},
		addRow : function (arr){
			 if(arr.length > 0){
			     var r = [];debugger;
			      for(var idx = 0; idx < arr.length; idx++)
			      	r[p._columns[idx]] = arr[idx]
			      _default.extend(p._rows,r);
			}
		},
		getData : function(){
			 return JSON.stringify({"rows":p._rows, "columns":p._columns});
		}		
	};

	var _default = {
		extend : function(){
		    for(var idx=1; idx<arguments.length; idx++)
		        for(var key in arguments[idx])
		            if(arguments[idx].hasOwnProperty(key))
		                arguments[0][key] = arguments[idx][key];
		    return arguments[0];
		},
		Name :  "jQ-data-table.1.0"
	};

	_default.extend(window.$$,dtbl);

})(window);