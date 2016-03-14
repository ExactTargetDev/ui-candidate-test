var CalendarDayModel = Backbone.Model.extend({
  defaults: {
    dayText: 'Sat',
    dayNum: '10',
    useBorder: true,
    isToday: false
  }
});

var CalendarDayView = Backbone.View.extend({
  template: _.template($('#calendar-day-template').html()),
  tagName: 'span',
  className: 'calendar-day-container',
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});

var CalendarDaysModel = Backbone.Collection.extend({
    model: CalendarDayModel
});

var CalendarDaysView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  render: function() {
    var self = this;
    self.$el.html('');
    self.collection.each(function(model) {
      var calendarItem = new CalendarDayView({model: model});
      self.$el.append(calendarItem.render().el);
    });
    return self;
  }
});

var weekdays = ['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
var dayCollection = new CalendarDaysModel();
_.each(_.range(10,20), function(dayNum) { 
    dayCollection.add(new CalendarDayModel({dayNum: dayNum, dayText: weekdays[(dayNum - 10) % 7], useBorder: dayNum > 10 && dayNum < 18, isToday: dayNum === 14 ? 'Today' : ''}));
});

var daysView = new CalendarDaysView({el: '.day-container', collection: dayCollection});