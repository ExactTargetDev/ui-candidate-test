if (!Array.prototype.min) {
	Array.prototype.min = function() {
		return Math.min.apply(Math, this);
	};
}

if (!Array.prototype.pushUnique) {
	Array.prototype.pushUnique = function(item) {
		if (this.indexOf(item) === -1) {
			this.push(item);
		}
	};
}

if (!Array.prototype.filter) {
	Array.prototype.filter = function(func, context) {
		var len = this.length,
			i;
		if (typeof func != "function")
			return [];

		var res = [];
		for (i = 0; i < len; i++) {
			if (i in this) {
				var val = this[i];
				if (func.call(context, val, i, this))
					res.push(val);
			}
		}
		return res;
	};
}

if(!Array.prototype.sum) {
	Array.prototype.sum = function() {
		var len = this.length,
			sum = 0,
			i;
		for(i = 0; i < len; i++) {
			if(!isNaN(this[i])) {
				sum += this[i];
			}
		}
		return sum;
	};
}