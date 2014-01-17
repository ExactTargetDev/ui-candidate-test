$(document).ready(function() {

    // Import Help JSON
    var url = '../../data/help.json';
    $.getJSON( url, function(data) {
        $('.modal-content').html($.parseJSON(data));
    });

    $('.pulse-box').click(function() {
        if( !$(this).hasClass('active') ) {

            $(this).addClass('active');
            $(this).siblings('.pulse-box').removeClass('active');

        }
    });

    $('.open-modal').click(function() {
        $('.help-modal-outer').show();
    });
    $('.close-modal').click(function() {
        $('.help-modal-outer').hide();
    });
});
