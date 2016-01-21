// AppLauncher.js
// --------
define(["jquery", "backbone"],

    function($, Backbone) {

        // Creates a new Backbone Model class object
        var AppLauncherModel = Backbone.Model.extend({

            // Model Constructor
            initialize: function() {

            },

            // Default values for all of the Model attributes
            defaults: {
                items: [
                    {
                        text: "ExactTarget Email",
                        icon: "mail"
                    },
                    {
                        text: "ExactTarget Mobile",
                        icon: "phone"
                    },
                    {
                        text: "CoTweet Social",
                        icon: "co"
                    },
                    {
                        text: "ExactTarget Sites",
                        icon: "calendar"
                    },
                    {
                        text: "Automation Studio",
                        icon: "gears"
                    },
                    {
                        text: "Audience Studio",
                        icon: "people"
                    },
                    {
                        text: "Report Builder",
                        icon: "graph"
                    }
                ]
            },

            // Gets called automatically by Backbone when the set and/or save methods are called (Add your own logic)
            validate: function(attrs) {

            }

        });

        // Returns the AppLauncherModel class
        return AppLauncherModel;

    }

);
