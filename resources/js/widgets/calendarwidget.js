/**
 * I was having fun with this, so I decided to include it. Just a simple widget
 * to scroll the calendar.
 */

function CalendarWidget() {
	this._container = $('#calendar');
	this._dateDisplay = this._container.find('.calendar-display-range');
	this._monthDisp = this._container.find('.month-text');
	this._selection = this._container.find('.selection-bar');
	this._todayMarker = this._selection.find('.mark-today');
	this._prev = this._selection.find('.prev');
	this._next = this._selection.find('.next');
	this._first = null;
	this._last = null;
	this._today = null;
	this._initialize();
};
CalendarWidget.prototype = {
	next : function() {
		if(this._last.next().length === 0) {
			return;
		}
		
		this._first.addClass('is-hidden').removeClass('selected');
		this._first = this._first.next(),
		this._last = this._last.next();
		this._last.removeClass('is-hidden').addClass('selected');
		this._highlightCurDate();
	},
	previous : function() {
		if(this._first.prev().length === 0) {
			return;
		}
		
		this._last.addClass('is-hidden').removeClass('selected');
		this._last = this._last.prev(),
		this._first = this._first.prev();
		this._first.removeClass('is-hidden').addClass('selected');
		this._highlightCurDate();
	},
	_renderStartWeek : function() {
		var that = this,
			now = new Date(),
			a = now.getDate(),
			b = now.getUTCMonth() + 1,
			c = now.getUTCFullYear(),
			nowDiv = this._dateDisplay.find(
				'div[date="' + a + '/' + b + '/' + c + '"]'
			),
			//go back 3 days, forward 3 days
			nowSiblings = (function() {
				var nOne = nowDiv.prev(),
					nTwo = nOne.prev(),
					one = nowDiv.next(),
					two = one.next();
				return [nTwo.prev(), nTwo, nOne, one, two, two.next()];
			})();
		$(nowSiblings).each(function(index, ele) {
			if(index === 0) {
				that._first = ele;
			} else if(index === nowSiblings.length - 1) {
				that._last = ele;
			}
			$(this).removeClass('is-hidden');
			$(this).addClass('selected');
		});
		nowDiv.removeClass('is-hidden').addClass('selected');
		this._today = nowDiv;
	},
	_highlightCurDate : function() {
		if(!this._today.is('.selected')) {
			this._todayMarker.addClass('is-hidden');
			return;
		} else {
			this._todayMarker.removeClass('is-hidden');
		}
		
		this._today.addClass('highlight-today');
		var offset = this._today.get(0).offsetLeft;
		this._todayMarker.css({
			'left' : offset + 'px'
		});
	},
	_initialize : function() {
		this._dates = CalendarWidget.dates;
		
		var i,
			len;
		for(i = 0, len = this._dates.length; i < len; i++) {
			var newDay = $(templateManager['a-date']());
			newDay.addClass('is-hidden');
			newDay.find('.dayName').text(this._dates[i].dayName);
			newDay.find('.day').text(this._dates[i].day);
			newDay.attr({
				'date' : this._dates[i].day + '/' +
						 this._dates[i].month.num + '/' +
						 this._dates[i].year
			});
			this._dateDisplay.append(newDay);
		}
		
		this._renderStartWeek();
		this._highlightCurDate();
		this._next.on('click', _.bind(this.next, this));
		this._prev.on('click', _.bind(this.previous, this));
	}
};
CalendarWidget.dates = (function(numDaysBack, numDaysForward) {
	var now = new Date(),
		dayInMillis = 24 * 60 * 60 * 1000,
		back = new Date(+now -(dayInMillis * (numDaysBack || 7))),
		forward = new Date(+now + (dayInMillis * (numDaysForward || 7))),
		dates = [],
		curDate = back,
		days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'],
		months = ['January', 'February', 'March', 'April', 'May', 'June',
		          'July', 'August', 'September', 'October', 'November',
		          'December'];
	
	while(curDate <= forward) {
		dates.push({
			'dayName' : days[curDate.getDay()],
			'day' : curDate.getDate(),
			'month' : {
				'name' : months[curDate.getMonth()],
				'num'  : curDate.getUTCMonth() + 1
			},
			'year' : curDate.getUTCFullYear()
		});
		curDate = new Date(+curDate + dayInMillis);
	}
	return dates;
})(7, 7);
//arbitrary number of dates - span 1 week back, 1 week forward