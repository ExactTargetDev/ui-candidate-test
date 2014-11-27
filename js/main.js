$(function(){

    $('#menu-list li').click(function(){

        $('#menu-list li').each(function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active')
            }
        });
        $(this).addClass('active');
    });



});