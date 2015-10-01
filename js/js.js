$(document).ready(function () {
    // Modal
    $('.modal').on('click', function () {

        var $modals = $('.pulse > div').not($(this));

        $modals.each(function (i) {
            if ($(this).hasClass('pop')) {
                $(this).removeClass('pop');
                $(this).css({
                    top: '+=25',
                    left: '+=25'
                });
            }
        })

        $(this).toggleClass('pop', 'modal');

        if ($(this).hasClass('pop')) {
            $(this).css({
                top: '-=25',
                left: '-=25'
            });
        } else {
            $(this).css({
                top: '+=25',
                left: '+=25'
            });
        }
    });

    // Help
    $('.helping').on('click', function (e) {
        e.preventDefault();
        $('.help').removeClass('hide');
        $('header, .navi, .cal, .pulse').not('.help').addClass('nice_dissolve');

        var $data = helper.help;

        var $list = $('<ul></ul>');

        for (var i = 0; i < $data.length; i++) {
            $helpQues = $('<li></li>');
            $link = $('<a>' + $data[i].title + '</a>')
            $link.attr('href', $data[i].URL);
            $link.appendTo($helpQues);
            $helpQues.appendTo($list);
        }

        $list.appendTo($('.questions'));
    });

    $('.close').on('click', function (e) {
        e.preventDefault();
        $('.questions ul').remove();
        $('.help').addClass('hide');
        $('header, .cal, .navi, .pulse').not('.help').removeClass('nice_dissolve');
    })
});