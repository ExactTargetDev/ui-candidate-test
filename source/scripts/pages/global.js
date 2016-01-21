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
        this.sizeBody();
        this.doCalendar();
    };

    /**
     * @desc Calendar module logic
     *
     */
    this.doCalendar = function()
    {
        var date     = new Date();
        var calendar = $('div.calendar');

        if(calendar.length === 0){
            return;
        }

        $(document).ready(function(){
            setupData();
        });

        $(window).on('load scroll resize', function() {
            tagToday();
        });

        function setupData() {
            var months    = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var month     = months[date.getMonth()];
            var year      = date.getFullYear();
            var $month    = calendar.find('div.month');

            // Update the current month and year
            $month.html(month + " " + year);
        }

        function tagToday() {
            var day         = "day_" + date.getDate();
            var $cal        = calendar.find('ul');
            var $day        = calendar.find("[data-day='" + day + "']");
            var cal_mid     = Math.round(calendar.outerWidth() / 2);
            var day_mid     = Math.round($day.position().left + ($day.outerWidth() / 2));
            var move_left   = Math.round(day_mid - cal_mid);

            // Tag the active day
            if(!$day.hasClass('active')){
                $day.addClass('active')
                .append('<div class="today">Today</div>');
            }

            // Move calendar to active day
            if(move_left <= 0){
                $cal.css('left', Math.abs(move_left));
            }
            else if(move_left > 0){
                $cal.css('left', -Math.abs(move_left));
            }
        }
    };

    /**
     * @desc Size the body tag to be the window height
     *
     */
    this.sizeBody = function()
    {
        var body = $('body');

        if(body.length === 0){
            return;
        }

        $(window).on('scroll resize load', function() {
            body.css('height', bInfo.winHeight());
        });
    };
}
