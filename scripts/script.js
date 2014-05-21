$(document).ready(function(){
  // help dialogue
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

  $('.close').on('click', function(e){
    e.preventDefault();
    $('.questions ul').remove();
    $('.help').addClass('hidden');
    $('header, .calendar, aside, .pulse').not('.help').removeClass('fade');
  })
});

// widget expansion
$('.widget').on('click', function(){

  var $widgets = $('.pulse > div').not($(this));

  $widgets.each(function(i) {
    if($(this).hasClass('expand')){
      $(this).removeClass('expand');
      $(this).css({top: '+=25', left: '+=35'});
    }
  })

  $(this).toggleClass('expand', 'widget');
  
  if($(this).hasClass('expand')){ 
    $(this).css({ top: '-=25', left: '-=35'});
  }else{
    $(this).css({top: '+=25', left: '+=35'});
  }
});





