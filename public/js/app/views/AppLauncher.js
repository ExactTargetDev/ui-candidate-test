// AppLauncher.js
// -------
define(["jquery", "backbone", "models/AppLauncher", "text!templates/AppLauncher.html"],

    function($, Backbone, AppLauncherModel, template){

        var AppLauncherView = Backbone.View.extend({

            // The DOM Element associated with this view
            el: "#app-launcher",

            // View constructor
            initialize: function() {
                this.model = new AppLauncherModel();

                // Calls the view's render method
                this.render();


            },

            // View Event Handlers
            events: {
                "click .list-group-item": "toggleActiveItem"
            },

            toggleActiveItem: function(e) {
                $('.list-group-item').removeClass('active-item');
                $(e.target).addClass('active-item');
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

        // Returns the AppLauncherView class
        return AppLauncherView;

    }

);
