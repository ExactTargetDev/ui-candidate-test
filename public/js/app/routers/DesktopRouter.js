// DesktopRouter.js
// ----------------
define(["jquery", "backbone", "views/AppLauncher", "views/Pulse", "views/Header"],

    function($, Backbone, AppLauncherView, PulseView, HeaderView) {

        var DesktopRouter = Backbone.Router.extend({

            initialize: function() {

                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();

            },

            // All of your Backbone Routes (add more)
            routes: {

                // When there is no hash on the url, the home method is called
                "": "index"

            },

            index: function() {

                // Instantiates new views
                new HeaderView();
                new AppLauncherView();
                new PulseView();

            }

        });

        // Returns the DesktopRouter class
        return DesktopRouter;

    }

);
