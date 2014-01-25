/**
 * 
 */
function PulseWidget() {
	this._container = $('#pulse');
	this._initialize();
};

PulseWidget.prototype = {
	_onClick : function(e) {
		this._reset();
		var target = e.currentTarget;
		$(target).removeClass('small');
		$(target).addClass('medium');
	},
	_reset : function() {
		this._pulses.each(function() {
			$(this).removeClass('medium');
			$(this).addClass('small');
		});
	},
	_initialize : function() {
		this._pulses = this._container.find('.info');
		this._pulses.on('click', _.bind(this._onClick, this));
	}
};