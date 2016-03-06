$(document).ready(function(){
    var pulseItems = $('.pulse-item-container');

    $(pulseItems).click(function(){
        $(pulseItems).removeClass('active');
        $(this).addClass('active');
    })

    $('.help').click(function(){
        $.ajax({
            url: "data/help.json",
            success: function(data){
            openHelp(data)
        }});
    });

    $('#modal,#help-text').click(function(){
        $('#modal').toggleClass('active');
        $('#help-text').toggleClass('active');

    });

    function openHelp(data){
        $('#modal').css('z-index', 10);
        $('#modal').toggleClass('active');

        $('#help-text').css('z-index', 10);
        $('#help-text').toggleClass('active');
        console.log(data)
        $('#help-text').append(
            '<p>' + data.help[0].title + '</br >' + data.help[0].URL + '</p>',
            '<p>' + data.help[1].title + '</br >' + data.help[1].URL + '</p>',
            '<p>' + data.help[2].title + '</br >' + data.help[2].URL + '</p>'
        );
    }
});