
$('.widget').on('click', function(){

  if($(this).hasClass('widget')){
    $(this).addClass('expand').removeClass('widget');
    $(this).css('top', '-=25');
    $(this).css('left', '-=25');
  }else{
    $(this).removeClass('expand').addClass('widget');
    $(this).css('top', '+=25');
    $(this).css('left', '+=25');
  }
});



