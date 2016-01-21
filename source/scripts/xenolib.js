/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////
// XENOSTAR JS HELPER LIBRARY
////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */
/* Creates console object to avoid IE issues
----------------------------------------------- */
(function()
{
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--)
    {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method])
        {
            console[method] = noop;
        }
    }
}());


/* Starts loading images in the background
----------------------------------------------- */
function preCache()
{
    try
    {
        $.each(imagePreload, function(){
            var img = new Image();
            img.src = this;
        });
    }
    catch(err)
    {
        //console.log("Error Logged: " + err);
    }
}


/* Validates emails passed to it
----------------------------------------------- */
function validateEmail($email)
{
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    if(!emailReg.test($email))
    {
        return false;
    }
    else
    {
        return true;
    }
}


/* Browser Info
----------------------------------------------- */
function browserInfo()
{
    this.winHeight = function()
    {
        return $(window).height();
    };
    this.winWidth = function()
    {
        return $(window).width();
    };
    this.docHeight = function()
    {
        return $(document).height();
    };
    this.bodHeight = function()
    {
        return $('body').height();
    };
    this.aspectRatio = function()
    {
        return ($(window).width() / $(window).height());
    };
}


/* Returns a random integer
----------------------------------------------- */
function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
