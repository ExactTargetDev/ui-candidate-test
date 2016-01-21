/*
|--------------------------------------------------------------------------
| Define how the App should start up
|--------------------------------------------------------------------------
|
| The function that loads global and local JS logic for the app.
|
*/
function appStart()
{
    /**
     * Your CMS page/route name should be echo'd into the
     * HTML tag as the first class on each page so the app
     * can load the correct page-specific logic.
     *
     */
    var routeName = $('html').attr('class').split(' ')[0];

    /**
     * Load Global Site Logic
     *
     * We pass the routeName parameter so we can do things
     * on a per-route basis.
     *
     * This function is loaded from /pages/global.js.
     *
     */
    try {
        var site = new js_global(routeName);
        site.start();
    }
    catch(error) {
        console.log("Global application logic failed to load: " + error);
    }

    /**
     * Load Local Page Logic
     *
     * A page-specific JS function is dynamically called based on the
     * routeName we obtained earlier. We prefix the routeName with 'js_'
     * so as to not call any malicious function names.
     *
     * These functions are loaded from /pages/foo.js.
     *
     */
    try {
        var page = new window['js_' + routeName]();
        page.start();
    }
    catch(error) {
        console.log("Local application logic failed to load: " + error);
    }
}





/*
|--------------------------------------------------------------------------
| Start the Application
|--------------------------------------------------------------------------
|
| We call the appStart() function on document ready.
|
*/
$(document).ready(function()
{
    appStart();
});





/*
|--------------------------------------------------------------------------
| Window.Load Functions
|--------------------------------------------------------------------------
|
| Below is functionality that should only be run after the page has
| fully loaded every asset needed: DOM & Images, CSS & JS.
|
*/
$(window).load(function()
{
    /**
     * Start caching images for next page.
     *
     * Loads images in background after page load.
     * Images to preload can be configured in the imagePreload[]
     * array found in the header template in Laravel.
     *
     */
    preCache();
});
