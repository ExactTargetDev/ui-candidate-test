$(document).ready(function(){

  $('.help-link').on('click', function(e){
    e.preventDefault();
    $('.help').removeClass('hidden');
    $('header, .calendar, aside, .pulse').not('.help').addClass('fade');
  
    var $data = helpObj.help;
    console.log($data);

    var $list = $('<ul></ul>');

    for(var i = 0; i < $data.length; i++){
      $item = $('<li></li>');
      $link = $('<a>' + $data[i].title +'</a>')
      $link.attr('href', $data[i].URL);
      $link.appendTo($item);
      $item.appendTo($list);
    }

    $list.appendTo($('.questions'));

  });

  $('.help button').on('click', function(){
    $('.help').addClass('hidden');
    $('header, .calendar, aside, .pulse').not('.help').removeClass('fade');
  })

});


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





