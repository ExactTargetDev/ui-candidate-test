// Pulse.js
// -------
define(["jquery", "backbone", "slick", "bowser", "models/Pulse", "text!templates/Pulse.html"],

    function($, Backbone, Slick, Bowser, PulseModel, template){

        var PulseView = Backbone.View.extend({

            // The DOM Element associated with this view
            el: "#pulse",

            // View constructor
            initialize: function() {
                this.model = new PulseModel();

                // Calls the view's render method
                this.render();

                this.initSlick();

            },

            // View Event Handlers
            events: {
                "click, drag": "animate"
            },

            animate: function(e) {
                $('.slick-slide:not(.slick-current) .slide-content').animate(
                    {
                        height: "60%"
                    },
                    {
                        duration: 200
                    }
                );
                $('.slick-current .slide-content').animate(
                    {
                        height: "100%"
                    },
                    {
                        duration: 200
                    }
                );
            },

            initSlick: function() {
                $('#pulse>.content').slick({
                  centerMode: true,
                  infinite: false,
                  centerPadding: '0',
                  slidesToShow: 4,
                  focusOnSelect: true,
                  dots: true,
                  arrows: false
                });
            },

            // Renders the view's template to the UI
            render: function() {

                // Setting the view's template property using the Underscore template method
                this.template = _.template(template, this.model.defaults);

                // Dynamically updates the UI with the view's template
                this.$el.html(this.template);

                // Maintains chainability
                return this;

            }

        });

        // Returns the PulseView class
        return PulseView;

    }

);
