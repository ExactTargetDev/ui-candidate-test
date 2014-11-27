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
});