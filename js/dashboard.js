//When you click the minimize button on the window control of Pulse widget, collapse the widget
$(".pulseminimize").click( function() {
    //Fade out the content first
    $(".widgetContent").fadeOut("fast", function(){
        //After content is gone collapse the pulseContainer and pulse divs
        $("#pulse").switchClass("pulseExpand", "pulseCollapse", 1000, "easeOutBounce");
        $("#pulseContainer").switchClass("pulseExpand", "pulseCollapse", 1000, "easeOutBounce");
    });
})

//When you click the maximize button on the window control of Pulse widget, expand the widget
$(".pulsemaximize").click( function() {
    $("#pulseContainer").switchClass("pulseCollapse", "pulseExpand", 1000, "easeInOutCubic");
    $("#pulse").switchClass("pulseCollapse", "pulseExpand", 1000, "easeInOutCubic", function(){
        //after divs have expanded, fade in content
        $(".widgetContent").fadeIn("fast");
    });
})

//When you click the close button on the window control of Pulse widget, hide the widget and add a link in the header
$(".pulseclose").click( function() {
    $("#pulseContainer").fadeOut("slow");
    $(".pulseLink").switchClass("pulseLinkSmall", "pulseLinkLarge", 1000, "easeInOutCubic");
})

//When you click the link in the header, show the pulse widget and hide the link
$(".pulseLink").click( function() {
    $("#pulseContainer").fadeIn("slow", function(){
        $(".pulseLink").switchClass("pulseLinkLarge", "pulseLinkSmall", 1000, "easeInOutCubic");
    });
})

//When you click Help in the header display a modal
$(".help").click( function() {
    $.ajax({
        dataType: "json",
        url: "data/help.json",
        success: function(helpData) {
            $.each( helpData.help, function (i, site) {
                $('#help-modal div').append('<p><a href="' + site.URL + '">' + site.title + '</a></p>');
            })
        }
    });
    $("#help-modal").fadeIn("slow");
    $("#help-modal").dialog({
        modal: true,
        width: 540,
        buttons: {
            Ok: function() {
                $( this ).dialog( "close" );
            }
        }
    });
})