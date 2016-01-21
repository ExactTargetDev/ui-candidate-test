/*
|--------------------------------------------------------------------------
| Global Site Logic i.e. website.com/*
|--------------------------------------------------------------------------
|
| The javascript logic that should apply to every page on the website.
| However, there may be some exceptions, so we pass the page/route name
| from your CMS to allow us to check for specific pages.
|
| @param  route name passed from your CMS from ../app.js
|
*/
function js_global(routeName)
{
    var bInfo   = new browserInfo();

    /**
     * Load functions in order
     *
     */
    this.start = function()
    {
        this.sizeWrapper();
    };

    /**
     * @desc Basic function demo
     *
     */
    this.sizeWrapper = function()
    {
        var body    = $('body');
        var header  = $('header');
        var wrapper = $('section.wrapper');

        if(wrapper.length === 0){
            return;
        }

        $(window).on('scroll resize load', function() {
            body.css('height', bInfo.winHeight());
        });
    };
}
