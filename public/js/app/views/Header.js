// Header.js
// -------
define(["jquery", "backbone", "models/Header", "text!templates/Header.html", "text!templates/HelpTemplate.html"],

    function($, Backbone, HeaderModel, template, helpTemplate){

        var HeaderView = Backbone.View.extend({

            // The DOM Element associated with this view
            el: "#header",

            // View constructor
            initialize: function() {
                this.model = new HeaderModel();

                // Calls the view's render method
                this.render();
            },

            // View Event Handlers
            events: {
                "click .menu-item-help": "loadHelpMenu"
            },

            loadHelpMenu: function(e) {
                $.getJSON("/resources/help.json", function(json) {
                    var html = _.template(helpTemplate, json);
                    $('#myModal').html(html);
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

        // Returns the HeaderView class
        return HeaderView;

    }

);
