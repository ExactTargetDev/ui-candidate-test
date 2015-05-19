
// Create a namespace
var Screenshot = {
    /**
     * Our initialization code
     */
    init: function() {
        this.setupCalendar();
        this.setupTiles();
        this.setupHelp();
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
    },

    /**
     * Create out event handler for selecting tiles in the Pulse window. We will encapsulate and add
     * only one event handler to the DOM. The handler will need to determine what tile was clicked.
     */
    setupTiles: function() {
        var me = this;
        $('#pulse .tiles').on('click', function() {me.onTileClick.apply(me, arguments);});
    },

    /**
     * Setup up the click handler for the Help action
     * @return {[type]} [description]
     */
    setupHelp: function() {
        var me = this;
        $('#header .actions .action.help').on('click', function() {me.onHelpClick.apply(me, arguments);});
    },

    /**
     * Called when the user clicks in the tiles div. We need to determine if a tile was clicked
     * and if it was then remove the selection state for the other tile and apply it to the
     * tile that was clicked. Note that the "selected" class is kept at the "item" div but we only
     * allow clicking of the "tile" divs
     * @param  {Event} evt The event object
     */
    onTileClick: function(evt) {
        if($(evt.target).parents('.tile').length > 0 || $(evt.target).is('.tile')) {
            $('#pulse .item.selected').removeClass('selected');
            $(evt.target).parents('.item').addClass('selected');
        }
    },

    /**
     * When the user clicks help we will load data from a json file and render
     * it into a modal overlay
     * @param  {Event} evt the click event
     */
    onHelpClick: function(evt) {
        var me = this;

        $.ajax({
            url: 'data/help.json',
            dataType: 'json',
            success: function(data) {
                var helpCont = $('#helpModal .modal-body'),
                    i, helpitem;

                helpCont.empty();
                for(i=0; i<data.help.length; i++) {
                    helpitem = data.help[i];
                    helpCont.append('<a href="'+helpitem.URL+'" target="_blank">'+helpitem.title+'</a><br>');
                }

                $('#helpModal').modal();
            }
        });
    }
};
