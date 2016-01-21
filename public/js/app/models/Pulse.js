// Pulse.js
// --------
define(["jquery", "backbone"],

    function($, Backbone) {

        // Creates a new Backbone Model class object
        var PulseModel = Backbone.Model.extend({

            // Model Constructor
            initialize: function() {

            },

            // Default values for all of the Model attributes
            defaults: {
                items: [
                    {
                        name: "followers"
                    },
                    {
                        name: "fan"
                    },
                    {
                        name: "subscribers"
                    },
                    {
                        name: "foursquare"
                    },
                    {
                        name: "landingpage"
                    }
                ]
            },

            // Gets called automatically by Backbone when the set and/or save methods are called (Add your own logic)
            validate: function(attrs) {

            }

        });

        // Returns the PulseModel class
        return PulseModel;

    }

);
