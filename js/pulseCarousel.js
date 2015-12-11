$('li a').hover(function() {
    $(this).css('color','blue');
}, function() {
    $(this).css('color','lightblue');
});

$('.pulse-container .pulse-carousel').on('click', 'pulse-box',function() {
    $('.pulse-box').addClass('inactive');

    var $element = $(this);
    $($element).removeClass('inactive');
    $($element).addClass('active');
});