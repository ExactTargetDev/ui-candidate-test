/*
|--------------------------------------------------------------------------
| Dashboard Page Logic i.e. website.com/dashboad
|--------------------------------------------------------------------------
|
| The javascript logic that should apply to the Dashboard
|
*/
function Js_dashboard()
{
    "use strict";

    /**
     * Load needed functions in order
     *
     */
    this.start = function()
    {
        this.doCalendar();
        this.doPulse();
        this.helpModal();
        this.sizeBody();
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

        // We only run this once, once the DOM is ready.
        $(document).ready(function(){
            setupData();
        });

        // This needs to run any time the user changes the view size at all
        $(window).on('load scroll resize', function() {
            tagToday();
        });

        // Update the current month and year
        function setupData() {
            var months    = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var month     = months[date.getMonth()];
            var year      = date.getFullYear();
            var $month    = calendar.find('div.month');

            $month.html(month + " " + year);
        }

        // Mark and position the correct day
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
    this.doPulse = function()
    {
        var bInfo      = new BrowserInfo();
        var pulse      = $('div.pulse');
        var mod_window = pulse.find('.module-window');
        var modules    = mod_window.find('.module');

        if(pulse.length === 0){
            return;
        }

        modules.on('click', function() {
            modules.removeClass('active');

            if(!$(this).hasClass('active')) {
                $(this).addClass('active');
            }
        });
    };

    /**
     * @desc Toggle and populate the Help Modal window
     *
     */
    this.helpModal = function()
    {
        var $body   = $('body');
        var $modal  = $('section.modal');
        var $window = $modal.find('aside');
        var $help   = $('nav a.help');

        $help.on('click', function(){
            if(!$modal.hasClass('active')) {
                $modal.addClass('active');
            }
        });

        $modal.on('click', function(event){
            if($(event.target).hasClass('active')){
                $modal.removeClass('active');
            }
        });
    };


    /**
     * @desc Size the body tag to be the window height
     *
     */
    this.sizeBody = function()
    {
        var bInfo = new BrowserInfo();
        var body  = $('body');

        if(body.length === 0){
            return;
        }

        $(window).on('scroll resize load', function() {
            body.css('height', bInfo.winHeight());
        });
    };
}
