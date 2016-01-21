/*
|--------------------------------------------------------------------------
| Foo Page Logic i.e. website.com/foo
|--------------------------------------------------------------------------
|
| The javascript logic that should apply to the Foo Page.
|
*/
function js_dashboard()
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
        //console.log("02 - Hello world, LOCAL application logic loaded!");
    };
}
