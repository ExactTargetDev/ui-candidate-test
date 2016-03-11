var MarketingHubItemModel = Backbone.Model.extend({
  defaults: {
    text: 'Hub Item',
    imgClass: 'audience-png'
  }
});

var MarketingHubItemView = Backbone.View.extend({
  template: _.template($('#hub-item-template').html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});

var MarketingHubCollection = Backbone.Collection.extend({
  model: MarketingHubItemModel
});

var MarketingHubCollectionView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  render: function() {
    var self = this;
    self.$el.html('');
    self.collection.each(function(model) {
      var hubItem = new MarketingHubItemView({model: model});
      self.$el.append(hubItem.render().el);
    });
    return self;
  }
})

var emailItem = new MarketingHubItemModel({text: 'ExactTarget Email', imgClass: 'email-png'});
var mobileItem = new MarketingHubItemModel({text: 'ExactTarget Mobile', imgClass: 'mobile-png'});
var coTweetItem = new MarketingHubItemModel({text: 'CoTweet Social', imgClass: 'co-tweet-png'});
var sitesItem = new MarketingHubItemModel({text: 'ExactTarget Sites', imgClass: 'sites-png'});

var automationItem = new MarketingHubItemModel({text: 'Automation Studio', imgClass: 'automation-png'});
var audienceItem = new MarketingHubItemModel({text: 'Audience Builder', imgClass: 'audience-png'});
var reportItem = new MarketingHubItemModel({text: 'Report Builder', imgClass: 'report-png'});

var upperCollection = new MarketingHubCollection();
upperCollection.add(emailItem);
upperCollection.add(mobileItem);
upperCollection.add(coTweetItem);
upperCollection.add(sitesItem);
var lowerCollection = new MarketingHubCollection();
lowerCollection.add(automationItem);
lowerCollection.add(audienceItem);
lowerCollection.add(reportItem);

var upperCollectionView = new MarketingHubCollectionView({el: '.marketing-hub-upper', collection: upperCollection});
var lowerCollectionView = new MarketingHubCollectionView({el: '.marketing-hub-lower', collection: lowerCollection});