$(document).ready(function() {

    var url = '/data/help.json';
    // Import Help JSON
    $.getJSON( url, function(data) {
        $('.modal-content').html($.toJSON(data));
    });

    $('.pulse-box').click(function() {
        if( !$(this).hasClass('active') ) {

            $(this).addClass('active');
            $(this).siblings('.pulse-box').removeClass('active');

        }
    });

    $('.help-modal-outer').hide();
    $('.open-modal').click(function() {
        $('.help-modal-outer').show();
    });
    $('.close-modal').click(function() {
        $('.help-modal-outer').hide();
    });
});
