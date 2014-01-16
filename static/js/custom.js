$(document).ready(function() {
    $('.pulse-box').click(function() {
        if( !$(this).hasClass('active') ) {

            $(this).addClass('active');
            $(this).siblings('.pulse-box').removeClass('active');

        }
    });
});
