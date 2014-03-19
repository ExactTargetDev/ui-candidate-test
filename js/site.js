//li helper
$(document).ready(function ($) {
    $('ul').find('li:first-child').addClass('first');
    $('ul').find('li:last-child').addClass('last');

    $('#pulse-slider').on('click', 'li', function (e) {
            e.preventDefault();
            var listItem = $(this);
            if(listItem.hasClass('active')){

                $('#pulse-slider li').each(function(){
                    $(this).removeClass();
                });
                return
            }
            listItem.removeClass()
                .addClass('active')
                .siblings()
                .removeClass('active')
                .addClass('inactive');

        }
    );
});