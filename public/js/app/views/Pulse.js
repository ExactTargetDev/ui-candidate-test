// Pulse.js
// -------
define(["jquery", "backbone", "slick", "models/Pulse", "text!templates/Pulse.html"],

    function($, Backbone, Slick, PulseModel, template){

        var PulseView = Backbone.View.extend({

            // The DOM Element associated with this view
            el: "#pulse",

            // View constructor
            initialize: function() {
                this.model = new PulseModel();

                // Calls the view's render method
                this.render();

                $('#pulse>.content').slick({
                  centerMode: true,
                  centerPadding: '0',
                  slidesToShow: 4,
                  focusOnSelect: true,
                  dots: true
                });

            },

            // View Event Handlers
            events: {

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
