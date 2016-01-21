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
        this.foo();
    };

    /**
     * @desc Basic function demo
     *
     */
    this.foo = function()
    {
        console.log("01 - Hello world, GLOCAL application logic loaded!");
    };
}
