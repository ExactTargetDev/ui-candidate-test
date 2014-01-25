if(!String.prototype.reverse) {
	String.prototype.reverse = function() {
		return this.split('').reverse().join('');
	};
}

if(!String.prototype.isWhiteSpace) {
	String.prototype.isWhiteSpace = function() {
		return /^\s+$/.test(this);
	};
}