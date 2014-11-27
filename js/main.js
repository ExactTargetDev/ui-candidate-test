$(function(){


    //Click function for menue
    $('#menu-list li').click(function(){

        $('#menu-list li').each(function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active')
            }
        });
        $(this).addClass('active');
    });

    //Spaces data boxes
    $('.data-box').each(function( index, value ){
        $(this).css({
            left: [index] * 170
        })
    });

    //Makes databoxes change size
    $('.data-box').click(function(){

        $('.data-box').each(function(){
            $(this).animate({
                width: 160,
                height: 90
            });
        });
        $(this).addClass('active');
        $(this).animate({
            width: 278,
            height: 164
        });
    });

    //Centers each data-info element
    $('.data-info').each(function( index, value ){
       var infoWidth =  $(this).width();
        $(this).css('margin-left', '-=' + infoWidth / 2)
    });

    $(".help").click(function(){
        $('#modal-overlay').css({
            zIndex: 100,
            visibility: 'visible'
        });

        $('#help-modal').css({
            zIndex: 150,
            visibility: 'visible'
        });

        $.ajax({url:"data/help.json",success:function(result){
            $("#help-info").append('<h4>' + result.help[0].title + '<h4>');
            $("#help-info").append('<a href="' + result.help[0].URL + '">' + result.help[0].URL + '<a>');

            $("#help-info").append('<h4>' + result.help[1].title + '<h4>');
            $("#help-info").append('<a href="' + result.help[1].URL + '">' + result.help[1].URL + '<a>');

            $("#help-info").append('<h4>' + result.help[2].title + '<h4>');
            $("#help-info").append('<a href="' + result.help[2].URL + '">' + result.help[2].URL + '<a>');
        }});
    });

    $("#help-modal span").click(function(){
        $('#modal-overlay').css({
            zIndex: -100,
            visibility: 'hidden'
        });

        $('#help-modal').css({
            zIndex: -150,
            visibility: 'hidden'
        });

        $("#help-info").html('')
    });
});