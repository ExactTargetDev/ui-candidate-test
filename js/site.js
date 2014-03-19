//li helper
$(document).ready(function ($) {
    $('ul').find('li:first-child').addClass('first');
    $('ul').find('li:last-child').addClass('last');

    $('#pulse-slider').on('click', 'li', function (e) {
        e.preventDefault();
        var listItem = $(this);
        if (listItem.hasClass('active')) {

            $('#pulse-slider li').each(function () {
                $(this).removeClass();
            });
            return
        }
        listItem.removeClass()
            .addClass('active')
            .siblings()
            .removeClass('active')
            .addClass('inactive');

    });
    $('#inh-list').on('click', 'li', function (e) {
        e.preventDefault();
        var listItem = $(this);
        if (listItem.hasClass('active')) {
            $('#inh-list li').each(function () {
                $(this).removeClass();
            });
            return
        }
        listItem.removeClass()
            .addClass('active')
            .siblings()
            .removeClass();
    });
    $.getJSON('data/help.json',function (data) {
        $.each(data.help, function (i, help) {
            $('#helpModal ul').append('<li><a href="' + help.URL + '">' + help.title + '</a></li>');
        });
    }).error(function () {
            console.log('error');
        });
});