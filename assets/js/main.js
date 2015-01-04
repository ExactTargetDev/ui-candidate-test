$(function() {
    /***************************
    Toggle Pulse Modules
    ***************************/
    $(".pulse-module").on('click', function(){
        if ( !$(this).hasClass("active") ) {
            $(".active").removeClass('active');
            $(this).addClass("active");
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

                $('#helpModalHolder').html(helpModalHtml);
                $('#helpModal').modal();
            }
        });
    })
});
