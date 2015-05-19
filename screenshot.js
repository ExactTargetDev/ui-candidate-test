
// Create a namespace
var Screenshot = {
    /**
     * Our initialization code
     */
    init: function() {
        this.setupCalendar();
    },

    /**
     * Returns a new date with the days added to it
     * @param {Date} dt   The date to add the days to
     * @param {Int} days The number of days to add (can be negative)
     */
    addDay: function(dt, days) {
        return new Date(dt.getTime() + (days * 86400000));
    },

    /**
     * Dynamically generate a 7 day calendar centered on today
     */
    setupCalendar: function() {
        var today = new Date(),
            daysCont = $('#calendar .days'),
            d, dt, txt;

        // Set our left header value
        $('#calendar .header .month').text($.format.date(today, 'MMMM yyyy'));

        // Create the content for the calendar bar
        daysCont.empty();
        for(d=-3; d<=3; d++) {
            dt = this.addDay(today, d);

            if(d===0) {
                txt = 'TODAY';
            } else {
                txt = '';
            }

            daysCont.append('<div class="day'+ (d===0?' today':'') +'"><div class="top"><span class="weekname">'+$.format.date(dt, 'E')+'</span><span class="monthday">'+$.format.date(dt, 'd')+'</span></div><div class="bottom">'+txt+'</div></div>');
        }
    }
};
