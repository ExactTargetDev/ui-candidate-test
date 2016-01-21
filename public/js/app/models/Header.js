// Header.js
// --------
define(["jquery", "backbone"],

    function($, Backbone) {

        // Creates a new Backbone Model class object
        var HeaderModel = Backbone.Model.extend({

            // Model Constructor
            initialize: function() {

            },

            // Default values for all of the Model attributes
            defaults: {
                menuItems: [
                    {
                        text: "Account",
                        name: "account"
                    },
                    {
                        text: "Help",
                        name: "help",
                        triggerModal: true
                    },
                    {
                        text: "Logout",
                        name: "logout"
                    }
                ]
            },

            // Gets called automatically by Backbone when the set and/or save methods are called (Add your own logic)
            validate: function(attrs) {

            }

        });

        // Returns the HeaderModel class
        return HeaderModel;

    }

);
