var PulseItemModel= Backbone.Model.extend({
  defaults: {
    title: 'Followers',
    upperLeft: null,
    upperRight: null,
    innerTitle: null,
    blueNumber: 360,
    lowerNumber: 355,
    numberTitle: 'added today',
    bottomText: 'Don\'t look at me!',
    imgClass: null
  }
});

var PulseItemView = Backbone.View.extend({
  template: _.template($('#pulse-panel-template').html()),
  tagName: 'span',
  className: 'pulse-panel small',
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});

var PulseItemCollectionModel = Backbone.Collection.extend({
    model: PulseItemModel
});

var PulseItemCollectionView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  render: function() {
    var self = this;
    self.$el.html('');
    self.collection.each(function(model) {
      var pulseItem = new PulseItemView({model: model});
      self.$el.append(pulseItem.render().el);
    });
    return self;
  }
});

var pulseCollection = new PulseItemCollectionModel();
pulseCollection.add(new PulseItemModel({
  title: 'Followers',
  upperLeft: null,
  upperRight: null,
  innerTitle: null,
  blueNumber: 310,
  lowerNumber: null,
  numberTitle: 'added today',
  bottomText: '2,393,905 total',
  img: null
}));
pulseCollection.add(new PulseItemModel({
  title: 'Fan',
  upperLeft: null,
  upperRight: null,
  innerTitle: null,
  blueNumber: 73,
  lowerNumber: null,
  numberTitle: 'added today',
  bottomText: '91,675 total',
  img: null
}));
pulseCollection.add(new PulseItemModel({
  title: 'Subscribers',
  upperLeft: null,
  upperRight: null,
  innerTitle: null,
  blueNumber: 56,
  lowerNumber: null,
  numberTitle: 'added today',
  bottomText: '189,405 total',
  img: null
}));
pulseCollection.add(new PulseItemModel({
  title: 'foursquare',
  upperLeft: 'Worldwide Checkins',
  upperRight: '3,905',
  innerTitle: null,
  blueNumber: 310,
  lowerNumber: null,
  numberTitle: null,
  bottomText: null,
  imgClass: 'map-png'
}));
pulseCollection.add(new PulseItemModel({
  title: 'Landing Pages',
  upperLeft: null,
  upperRight: null,
  innerTitle: 'Visitors Today',
  blueNumber: 397,
  lowerNumber: 355,
  numberTitle: null,
  bottomText: 'Soulja Boy V.I.P.',
  img: null
}));

var pulseCollection = new PulseItemCollectionView({el: '.pulse-panel-container', collection: pulseCollection});