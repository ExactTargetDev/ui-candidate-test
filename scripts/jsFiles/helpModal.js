function getProcessFile(fileName) {
	var fileItem = function() {
		
		var holder = null;
		try{
		console.log("url to get : " + fileName);
		$.getJson(fileName, function(data) {
			var intermid = new data();
			$.each(data, function(key, val) {
				console.log("key : " + key + " val : " + val);
				holder.push(key + "|" + value);
			});
			console.log("Success inside helpModal : " + holder);
			var holderFinal = holder;
			return holder;
		});}catch(e){
			console.log(e.message);
		};
	};
}
