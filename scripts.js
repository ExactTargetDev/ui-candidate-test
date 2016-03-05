$(document).ready(function(){
    var pulseItems = $('.pulse-item-container');

    $(pulseItems).click(function(){
        $(pulseItems).removeClass('active');
        $(this).addClass('active');
    })
});