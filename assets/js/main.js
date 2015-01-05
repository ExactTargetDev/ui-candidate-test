$(function() {
    /***************************
    Toggle Pulse Modules
    ***************************/
    $(".pulse-module").on('click', function(){
        if ( !$(this).hasClass("modal-active") ) {
            $(".modal-active").removeClass('modal-active');
            $(this).addClass("modal-active");
        }
    });

    /***************************
    Load Help Modal
    ***************************/
    $("#help").on('click', function(){
         $.ajax({
            url: "data/help.json",
            dataType: "json",
            success: function(data) {
                var helpModalTemplate = $("#help-modal-template").html(),
                    helpModalTemplateCompiled = Handlebars.compile(helpModalTemplate),
                    helpModalHtml = helpModalTemplateCompiled(data);

                $('#help-modal-holder').html(helpModalHtml);
                $('#help-modal').modal();
            }
        });
    })
});
